
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from './Component/Footer';
import { Navbar } from './Component/Navbar';
import { getTodoAsync } from './redux/todo/todoSlice';
import {AllRoutes} from "./Route/AllRoutes"
function App() {


  const dispatch=useDispatch()
  const {isLoading,todos} =useSelector((store)=>store.todo)

  useEffect(()=>{
   dispatch(getTodoAsync())
  },[])
  return (
    <div className='dark:bg-black p-4' >
     <Navbar/>
     <AllRoutes/>
     <Footer/>
      
    </div>
  );
}

export default App;
