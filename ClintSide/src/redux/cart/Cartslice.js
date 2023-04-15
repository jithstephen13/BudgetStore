import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import { getItem } from '../../utility/localStorage'
import { toast } from 'react-toastify'


const url="https://nice-teal-grasshopper-hose.cyclic.app/cart/cart"


export const Stripe_CheckoutApi=createAsyncThunk("stripe/sell",async(Carts,thunkAPI)=>{
  console.log(Carts)
  try {
    const resp = await axios.post('https://nice-teal-grasshopper-hose.cyclic.app/stripe/create-checkout-session',{Carts},{ headers: {"Authorization" :  getItem("User").token} })
     console.log(resp.data)
     window.location.href = resp.data.url

  } catch (error) {
    
  }
})


export const DeletCartCheckout=createAsyncThunk('Cart/delete',async(thunkAPI)=>{
  try {
      const resp = await axios.delete(`https://nice-teal-grasshopper-hose.cyclic.app/cart/cartMany/${getItem("User").userId}`,{ headers: {"Authorization" :  getItem("User").token} });
 
      console.log(resp)
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
})



export const getCartAsync=createAsyncThunk('Cart/getCart',async(props,thunkAPI)=>{  
    try {
        const resp = await axios.get(`${url}`,{ headers: {"Authorization" :  getItem("User").token} });
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const DeletCartAsync=createAsyncThunk('Cart/delete',async(id,thunkAPI)=>{
    try {
        const resp = await axios.delete(`${url}/${id}`,{ headers: {"Authorization" :  getItem("User").token} });
   
        console.log(resp)
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})

export const PostCartAsync=createAsyncThunk('Cart/postCart',async(cred,thunkAPI)=>{
    try {
        const resp = await axios.post(url,cred,{ headers: {"Authorization" :  getItem("User").token} });
        toast.success(`${resp.data.Message}`, {
          position: toast.POSITION.TOP_CENTER
        });
        return resp.data;

      } catch (error) {
        toast.error(`Please login `, {
          position: toast.POSITION.BOTTOM_CENTER
        });
        return thunkAPI.rejectWithValue('something went wrong');
      }

})

export const UpdateCartAsync=createAsyncThunk('Cart/UPCart',async({id,cred},thunkAPI)=>{
   
    try {
        const resp = await axios.patch(`${url}/${id}`,cred,{ headers: {"Authorization" :  getItem("User").token} });
       
        
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})





export const Cartslice=createSlice({
    name:"Cart",
    initialState:{
        Carts:[],
        loading:false,
        error:false,
        total:0
    },

     reducers:{
      removeItem: (state, action) => {
        const itemId = action.payload;
        state.Carts =  state.Carts.filter((item) => item._id !== itemId);
        state.total=  state.Carts.reduce((sum, i) => ( sum += i.quentity * i.minRentAmount ), 0)      
      },
      removeItemCheckout: (state, action) => {
        const itemId = action.payload;
        state.Carts =  state.Carts.filter((item) => item.user_id !== itemId);
        state.total=  state.Carts.reduce((sum, i) => ( sum += i.quentity * i.minRentAmount ), 0) 
      },
    UpdateItem:(state,action)=>{
        const {id,cred}=action.payload


        state.Carts =state.Carts.map((item)=>{
                           if(item._id==id){
                            item={...item,...cred}
                          
                           }
                            return item
                    })
        state.total=  state.Carts.reduce((sum, i) => ( sum += i.quentity * i.minRentAmount ), 0)          
                 
    }  
     },


    extraReducers:{
  
        [getCartAsync.pending]: (state, action) => {
            state.error = false;
            state.loading = true;
		},

        [getCartAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.Carts = action.payload ;
            state.total=  state.Carts.reduce((sum, i) => ( sum += i.quentity * i.minRentAmount ), 0)      
            state.error = false;
		},
        [getCartAsync.rejected]: (state, action) => {
			state.error = true;
		},

        
       


       

    }
})
export const { removeItem,UpdateItem,removeItemCheckout} =Cartslice.actions;
export default Cartslice.reducer