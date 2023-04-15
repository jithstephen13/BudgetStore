import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import { toast } from 'react-toastify';
import { getItem, setItem } from '../../utility/localStorage';


const url="https://nice-teal-grasshopper-hose.cyclic.app/"


export const LoginUserAsync=createAsyncThunk('Auth/Login',async(cred,thunkAPI)=>{

   
    try {
        const resp = await axios.post(`${url}login`,cred);
    
         
        if(resp.status==200){
             toast.success("Login Successfully !", {
            position: toast.POSITION.TOP_CENTER
          });
        }
        else{
            let s=resp.data[0]
            toast.error("${s.massg}!", {
                position: toast.POSITION.TOP_CENTER
              });  
        }
        setItem("User",resp.data)
        return resp.data;
      } catch (error) {
       
        toast.error(" something went wrong please try again!", {
            position: toast.POSITION.TOP_CENTER
          });
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const SignUpUserAsync=createAsyncThunk('Auth/SignUp',async(cred,thunkAPI)=>{

    try {
        let res= await axios.post(`${url}sigin`,cred)
        toast.success("Sign_up Successfully !", {
            position: toast.POSITION.TOP_CENTER
          });
          if(res.status!==200){
           let s=res.data[0]
           toast.error("${s.massg}!", {
               position: toast.POSITION.TOP_CENTER
             });  
       }

            return res.data
        
      } catch (error) {
        toast.error(" something went wrong please try again!", {
            position: toast.POSITION.TOP_CENTER
          });
        return thunkAPI.rejectWithValue('something went wrong');
      }
})







export const AuthSlice=createSlice({
    name:"Auth",
    initialState:{
        user:getItem("User")||{},
        loading:false,
        error:false,
        Signed:null,
    },

    reducers:{
        logOut: (state, action) => {
            
            state.user=getItem("User")||{}
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

        [SignUpUserAsync.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
		},

        [SignUpUserAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.Signed = action.payload      ;
            state.error = false;
		},
        [SignUpUserAsync.rejected]: (state, action) => {
			state.error = true;
		}

        
       


       

    }
})
export const { logOut} =AuthSlice.actions;
export default AuthSlice.reducer