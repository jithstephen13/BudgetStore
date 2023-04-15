import React from 'react'
import {motion} from "framer-motion"

const TransitionEfect = () => {
  return (
    <>
     <motion.div  className=' fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-purple-700'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{duration:1,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)` }}
   
  
     />
     <motion.div  className=' fixed top-0 bottom-0 right-full w-3/4 h-screen z-40  bg-cyan-400'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{delay:0.8,duration:1,ease:"easeInOut"}}
      />
       <motion.div  className=' fixed top-0 bottom-0 right-full w-2/4 h-screen z-20 bg-white'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{delay:1.4,duration:1,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1680631886/BudgetApp/budget-store-website-favicon-color_jb6t16.png)` }}
     />
  </>)
}

export default TransitionEfect