import React, { useEffect, useRef } from 'react'

// useRef()
// The object returned by useRef() is the same object between rerenders.
// It could be implemented ontop of  useState():
// function useRef(initialValue) {
//     const [ref, unused] = useState({ current: initialValue });
//     return ref;
//   }


export default function Stopwatch() {

    const [startTime, setStartTime] = React.useState(null)
    const [now, setNow] = React.useState(null)
    const intervalRef = useRef(null)

    function handleStart(e) {
        console.log('started')
        setStartTime(new Date())
        setNow(new Date())
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            console.log('set now')
            setNow(new Date())
        }, 1000)
    }

    function handleStop(e) {
        console.log('stopped')
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0
    if(startTime !== null && now !== null) {
        secondsPassed = (now - startTime)/1000
    }



    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <h3>Time Passed:{secondsPassed.toFixed(1)}</h3>
        </div>
    )

}