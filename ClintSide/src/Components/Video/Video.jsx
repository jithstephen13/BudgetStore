import React, { Component } from "react";


 function VideoCompont({Video,title}) {
   
    return (
      <div className="flex  flex-col relative">
        <div >
        <video width="320" height="240" autoPlay loop muted>
                 <source src={Video} type="video/mp4" />
 
        </video>
        </div>
        <div  width="320" height="240" className="absolute top-10  md:left-4 z-4 text-4xl md:text-5xl text-center font-extrabold tex hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> {title}</h1> 
        </div>
         
      </div>
    );
  }


export default VideoCompont;