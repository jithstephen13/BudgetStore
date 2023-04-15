import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"


const url="https://jsonplaceholder.typicode.com/todos"

export const getTodoAsync=createAsyncThunk('todo/getTodo',async(thunkAPI)=>{
    try {
      
        const resp = await axios(url);
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }

})





export const todoSlice=createSlice({
    name:"todos",
    initialState:{
        todo:[],
        loading:false,
        error:false
    },

   

    extraReducers:{
        [getTodoAsync.pending]: (state, action) => {
            state.error = false;
        state.loading = true;
		},

        [getTodoAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.todo = action.payload;
            state.error = false;
		},
        [getTodoAsync.rejected]: (state, action) => {
			state.error = true;
            
		},

    }
})

export default todoSlice.reducer