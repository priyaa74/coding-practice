import React, { useEffect, useState } from 'react'

function ProgressBar() {
    const[completed, setCompleted]= useState(0);
    useEffect(()=>{
        setInterval(()=> setCompleted(Math.floor(Math.random()*100)+ 1) , 1000);
    },[])

    const box= {
        backgroundColor:'#e0e0de',
        height: '30px',
        width: '80%',
        borderRadius:'30px',
        margin: '40px auto'
    
    }
    const filler={
        backgroundColor:'salmon',
        height: '30px',
        width: `${completed}%`,
        borderRadius:'30px', 
        trasition:'width 1s ease-in-out'
    }
  return (

    <div style={box}> 
        <div style={filler}>
            <span>
            {`${completed}%`}
            </span>
        </div>
    </div>
  )
}

export default ProgressBar