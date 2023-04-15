import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"


const url="https://nice-teal-grasshopper-hose.cyclic.app/categery/"

export const getcategeryAsync=createAsyncThunk('Product/getcategery',async(categry,thunkAPI)=>{
     console.log(categry)
    try {
      
        const resp = await axios(url+`${categry}`);
        console.log(resp.data)
        return resp.data;
      } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('something went wrong');
      }

})








export const CategrySlice=createSlice({
    name:"Product",
    initialState:{
        categries:[],
        loading:false,
        error:false
    },

   

    extraReducers:{
        [getcategeryAsync.pending]: (state, action) => {
            state.error = false;
        state.loading = true;
		},

        [getcategeryAsync.fulfilled]: (state, action) => {
        
            state.loading = false;
            state.categries = action.payload.data            ;
            state.error = false;
		},
        [getcategeryAsync.rejected]: (state, action) => {
			state.error = true;
            
		},

    }
})

export default CategrySlice.reducer