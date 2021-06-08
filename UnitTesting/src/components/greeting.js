import { useState } from "react";

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
            {!changedText && <p>It's good to see you.</p>}
            {changedText && <p>Changed</p>}
            <button onClick={changeTextHandler}>click</button>
        </div>
    )
}
export default Greeting;