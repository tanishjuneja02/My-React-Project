import { useState,useEffect,useRef } from "react";
import "./stopwatch.css"
function StopWatch(){

    const[isRunning,setIsRunning] = useState(false);
    const[elapsedTime,setElapsedTime] = useState(0);
    const intervalidref = useRef(null);
    const startTimerref = useRef(0);



    useEffect(()=>{
           
        if(isRunning){
            intervalidref.current = setInterval(()=>{ 
                    setElapsedTime(Date.now() - startTimerref.current)
                    },10)
        }
        return()=>{

            clearInterval(intervalidref.current)

        }
    },[isRunning])

    function start(){

        setIsRunning(true);
        startTimerref.current = Date.now() - elapsedTime;

    }
    function stop(){

        setIsRunning(false);


    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }


    function formattime(){

        let hours = Math.floor( elapsedTime /(1000 *60 *60));
        let minutes = Math.floor( elapsedTime /(1000 *60) %60);
        let seconds = Math.floor( elapsedTime /(1000 ) % 60);
        let milliseconds = Math.floor( (elapsedTime %1000) /10 );


        return`${paddzero(minutes)}:${paddzero(seconds)}:${paddzero(milliseconds)}`;
    }


    function paddzero(number){
        return(number < 10 ?"0":"") + number
    }

    return(<>
    
    <div className="stopWatch">

        <div className="display">{formattime()}</div>

        <div className="control">
            <button className="start-btn" onClick={start}>Start</button>
            <button className="stop-btn" onClick={stop}>Stop</button>
            <button className="reset-btn" onClick={reset}>Reset</button>
        </div>

    </div>
    
    
    </>)
}




export default StopWatch