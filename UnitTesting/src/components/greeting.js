import { useState } from "react";
import Output from "./Output";

const Greeting = () =>{
    const [changedText, setCHangedText] = useState(false);
    const changeTextHandler = () =>{
        setCHangedText(true);
    }
    return(
        <div>
            <h2>
                Hello World!!
            </h2>
            {!changedText && <Output>It's good to see you.</Output>}
            {changedText && <Output>Changed</Output>}
            <button onClick={changeTextHandler}>click</button>
        </div>
    )
}
export default Greeting;