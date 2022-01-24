import React,{useState,useEffect} from 'react'

function Counter({icon,initialvalue,heading,finalvalue}) {

    const [count, setCounter] = useState(initialvalue)

   useEffect(() => {
        // if (initialvalue<50)
        // {
            const timer = setInterval(() => {
            setCounter(prevCount => prevCount + 1); }, 100);
            setTimeout(() => {clearInterval(timer);}, finalvalue);
        // }
        // if (initialvalue>49 && initialvalue< 101)
        // {
        //      const timer = setInterval(() => {
        //     setCounter(prevCount => prevCount + 1); }, 100);
        //     setTimeout(() => {clearInterval(timer);}, 5000); 
        // }
        //  if (initialvalue>100)
        // {
        //      const timer = setInterval(() => {
        //     setCounter(prevCount => prevCount + 1); }, 100);
        //     setTimeout(() => {clearInterval(timer);}, 25000); 
        // }
    return () => {
    };
  }, [initialvalue,finalvalue]); // Pass in empty array to run effect only once!


    return (
    
        <div>
            <div className="d-flex justify-content-center text-center mx-auto pt-5">{icon}</div>
            <div className="d-flex justify-content-center text-center mx-auto pt-5 timer">{count}+</div>
            <h5 className="d-flex justify-content-center text-center mx-auto pt-5 timerheading">{heading}</h5>
        </div>
    )
}

export default Counter
