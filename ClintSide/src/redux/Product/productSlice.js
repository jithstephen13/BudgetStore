import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"


const url="https://nice-teal-grasshopper-hose.cyclic.app/Productes/Product"


export const getproductAsync=createAsyncThunk('Product/getproduct',async(props,thunkAPI)=>{
    const {categry,filterSlu}=props
 
   
    try {
        const resp = await axios.get(`${url}?${`filterSlug=${filterSlu}`}`);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const DeletproductAsync=createAsyncThunk('Product/getproduct',async(id,thunkAPI)=>{
    try {
        const resp = await axios.delete(`${url}/${id}`);
   
        
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const PostproductAsync=createAsyncThunk('Product/getproduct',async(cred,thunkAPI)=>{
    try {
        const resp = await axios.post(url,cred);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }

})

export const UpdateproductAsync=createAsyncThunk('Product/getproduct',async({id,cred},thunkAPI)=>{
   
    try {
        const resp = await axios.patch(`${url}/${id._id}`,cred);
       
        
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})





export const productSlice=createSlice({
    name:"Product",
    initialState:{
        products:{},
        loading:false,
        error:false,
        singleProduct:{}
    },

     reducers:{
      singleproductFind: (state, action) => {
           state.singleProduct=state.products.products.filter((item)=>item._id==action.payload)
      }
     },


    extraReducers:{
  
        [getproductAsync.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
		},

        [getproductAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload.ProductData            ;
            state.error = false;
		},
        [getproductAsync.rejected]: (state, action) => {
			state.error = true;
		},

        
       


       

    }
})
export const { removeItem,UpdateItem,singleproductFind} =productSlice.actions;
export default productSlice.reducer