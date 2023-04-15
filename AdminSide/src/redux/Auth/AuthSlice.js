import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"

import { getItem, setItem } from '../../utility/localStorage';


const url="https://nice-teal-grasshopper-hose.cyclic.app/"


export const LoginUserAsync=createAsyncThunk('Auth/Login',async(cred,thunkAPI)=>{

   
    try {
        const resp = await axios.post(`${url}login`,cred);
    
        setItem("Admin",resp.data)
        return resp.data;
      } catch (error) {
       
        
        return thunkAPI.rejectWithValue('something went wrong');
      }
})








export const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        user:getItem("Admin")||{},
        loading:false,
        error:false,
        Signed:null,
    },

    reducers:{
        logOut: (state, action) => {
            
            state.user=getItem("Admin")||{}
          },
    },
    extraReducers:{
  
        [LoginUserAsync.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
		},

        [LoginUserAsync.fulfilled]: (state, action) => {
            state.loading = false;
            
            state.user = action.payload;
            state.error = false;
		},
        [LoginUserAsync.rejected]: (state, action) => {
			state.error = true;
		},

      

        
       


       

    }
})
export const { logOut} =AuthSlice.actions;
export default AuthSlice.reducer