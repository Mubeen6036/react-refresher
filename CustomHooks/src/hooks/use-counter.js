import { useEffect, useState } from "react";

const useCounter = (func) =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter(func);
        }, 1000);

        return () => clearInterval(interval);
    }, [func]);

    return counter;
}
export default useCounter;