"use client";

import classes from "./circles.module.css";



export default function Circles() {
        
    const circles = [
        {
          top: "20%",
          right: "30%",
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          top: "35%",
          left: "30%",
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          bottom: "35%",
          right: "20%",
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
        {
          bottom: "15%",
          left: "20%",
          shadow: "0px 0px 140px 150px rgba(37, 134, 106, 0.4)"
        },
    ]
      
    return <>
         {circles.map((circle, i )=>{
         return  <div
         key={i}
         className={`${classes.circle} ${classes[`circle__${i + 1}`]}`}
         style={{
            top:circle?.top,
            left: circle?.left,
            bottom:circle?.bottom,
            right:circle?.right,
            boxShadow:circle?.shadow,
            
         }}
         >
            
           </div>
        })}
    </>
   
    
}