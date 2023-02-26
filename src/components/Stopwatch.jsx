import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const [time,setTime]=useState(0);
    const [isRunning, setIsRunning]= useState(false);

    useEffect(()=>{
        let id;
        if(isRunning){
            id = setInterval(()=> setTime(time + 1),10);
        }
        return () => clearInterval(id);

    },[isRunning,time])

    const hours= Math.floor(time/360000)
    const minutes= Math.floor((time % 360000)/6000)
    const seconds= Math.floor((time %6000) /100)
    const milliseconds= Math.floor((time % 100))

    const startStop=()=>{
        setIsRunning(!isRunning);
    }

    const reset=()=>{
        setTime(0);
    }

  return (
    <div className='heading-box'>Stopwatch Component
        <div className='time-box'>
            {hours}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}:
            {milliseconds.toString().padStart(2,'0')}
        </div>
        <div className='button-box'>
            <button onClick={startStop}>{isRunning ? "Stop":"Start"}</button>
            <button onClick={reset}>Reset</button>

        </div>
    </div>
  )
}

export default Stopwatch