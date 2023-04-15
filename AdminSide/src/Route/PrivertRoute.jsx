import { useToast } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import { getItem } from "../utility/localStorage";


const PrivateRoute = ({ children }) => {
 
  const toast = useToast();
  let user=getItem("Admin")
  const location = useLocation();
  
    const pathname = location.pathname ? location.pathname : null;
    if(!getItem("Admin")){
    toast({
      title: "U can use Same user creadentioals to login  ",
      description: "",
      duration: 6000,
      isClosable: true,
      backgroundColor: "Orenge",
      position:'top-left'
    });
   }
let data=getItem("Admin")
 

  if(data){
    return children
}else{
   toast({
      title: "please login ",
      description: "",
      status: "error",
      duration: 2000,
      isClosable: true,
      backgroundColor: "red",
    });
    return <Navigate to='/login' />
}
};

export default PrivateRoute;