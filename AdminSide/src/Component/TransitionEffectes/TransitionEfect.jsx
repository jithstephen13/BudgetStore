import React from 'react'
import {motion} from "framer-motion"

const TransitionEfect = () => {
  return (
    <>
   
    <motion.div 

style={{position:"fixed" ,top:"0" ,right:"0", right:"full",  width:"full" ,zIndex:"50" ,backgroundColor:"#FAF5FF", backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)` }} 
initial={{x:"100%",width:"100%"}}
animate={{x:"0%",width:"0%"}}

     transition={{duration:2,ease:"easeInOut"}}
   
  
     />
    
       <motion.div   
          animate={{
                  x: 0,
                  width:"full",
                  backgroundColor: "#805AD5",
                  boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                  position: "fixed",
                  top:0,
                  bottom:0,
                  right:"full",
                  transitionEnd: {
                  display: "none",
              
                  },
               }}
               zIndex={"50"}
     transition={{delay:1.1,duration:1,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)`}}
    
   
     />
  </>)
}

export default TransitionEfect