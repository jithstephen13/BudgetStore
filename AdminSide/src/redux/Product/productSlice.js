import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"


const url="https://nice-teal-grasshopper-hose.cyclic.app/Productes/Product"

export const getproductAsyncSearch=createAsyncThunk('Product/getproduct',async(props,thunkAPI)=>{
 
    try {
        const resp = await axios.get(`${url}?search=${props}`);
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const getproductAsync=createAsyncThunk('Product/getproduct',async(props,thunkAPI)=>{
    const {categry,filterSlu}=props
    try {
        const resp = await axios.get(`${url}?${filterSlu? `filterSlug=${filterSlu}`:``}`);
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
        const resp = await axios.patch(`${url}/${id}`,cred);
        console.log(resp.data)
        
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})





export const productSlice=createSlice({
    name:"Product",
    initialState:{
        products:{},
        loading:false,
        error:false
    },

     reducers:{

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.products.products =  state.products.products.filter((item) => item._id !== itemId);
          },
        UpdateItem:(state,action)=>{
            const {id,cred}=action.payload
           // console.log(id,cred)

            state.products ={ ...state.products,
                        products:state.products.products.map((item)=>{
                               if(item._id==id){
                                item={...item,...cred}
                               }
                                return item
                        })
                     }           ;
        }  

        // [UpdateproductAsync.fulfilled]: (state, action) => {
        //     const {_id, ...rest}=action.payload
        //     state.loading = false;
        //     state.products ={ ...state.products,
        //         products:state.products.products.map((item)=>{
        //                if(item._id==_id){
        //                 item=rest
        //                }
        //                return item
        //         })
        //      }           ;
        //     state.error = false;
		// },
       
     },

   

    extraReducers:{
        [PostproductAsync.pending]: (state, action) => {
            state.error = false;
        state.loading = true;
		},

        [PostproductAsync.fulfilled]: (state, action) => {
            console.log(action.payload.ProductData)
            state.loading = false;
            state.products = action.payload.ProductData            ;
            state.error = false;
		},
        [PostproductAsync.rejected]: (state, action) => {
			state.error = true;
            
		},


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


        [getproductAsyncSearch.pending]: (state, action) => {
            state.error = false;
           state.loading = true;
		},

        [getproductAsyncSearch.fulfilled]: (state, action) => {
           
            state.loading = false;
            state.products = action.payload.ProductData            ;
            state.error = false;
		},
        [getproductAsyncSearch.rejected]: (state, action) => {
			state.error = true;
            
		},


        
        [UpdateproductAsync.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
		},

      
        [UpdateproductAsync.rejected]: (state, action) => {
			state.error = true;
            
		},



       

    }
})
export const { removeItem,UpdateItem} =productSlice.actions;
export default productSlice.reducer