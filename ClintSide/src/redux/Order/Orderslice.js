import { createAsyncThunk,createSlice,
} from "@reduxjs/toolkit";
import { getItem } from "../../utility/localStorage";
import axios from "axios";
const url="https://nice-teal-grasshopper-hose.cyclic.app/order/Orderid"
const url_up ="https://nice-teal-grasshopper-hose.cyclic.app/order/Order"

export const getOrderAsync=createAsyncThunk('Order/getOrder',async(thunkAPI)=>{
    let id=getItem("User").userId
    console.log(id)
    
    try {
    const resp = await axios.get(`${url}/${id}`);
   
        return resp.data;
      } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue('something went wrong');
      }

})
export const UpdateOrderAsync=createAsyncThunk('Order/updateOrder',async({id,cred},thunkAPI)=>{
    
   
    try {
        const resp = await axios.patch(`${url_up}/${id}`,cred);
      
        
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
})






export const OrderSlice=createSlice({
    name:"Orders",
    initialState:{
        Order:[],
        loading:false,
        error:false
    },
      
    reducers:{
        UpdateItemOrder:(state,action)=>{
            const {id,cred}=action.payload



        state.Order =state.Order.map((item)=>{
                           if(item._id==id){
                            item={...item,...cred}
                          
                           }
                            return item
                    })   ;
        }  
     },
   

    extraReducers:{
        [getOrderAsync.pending]: (state, action) => {
            state.error = false;
        state.loading = true;
		},

        [getOrderAsync.fulfilled]: (state, action) => {
            state.loading = false;
            state.Order = action.payload;
            state.error = false;
		},
        [getOrderAsync.rejected]: (state, action) => {
			state.error = true;
            
		},

    }
})
export const {UpdateItemOrder} = OrderSlice.actions;

export default OrderSlice.reducer