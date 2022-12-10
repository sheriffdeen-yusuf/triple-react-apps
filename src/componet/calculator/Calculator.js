import { useRef, useState } from "react";


const Calculator = () => {
    const result = useRef(null);
    const inputText = useRef(null)

    const  [value, setValue] = useState(0);

    function add(e) {
        e.preventDefault();
        setValue((value) => value + Number(inputText.current.value))     
    }

    function sub(e) {
        e.preventDefault();
        setValue((value) => value - Number(inputText.current.value))     
    }

    function mul(e) {
        e.preventDefault();
        setValue((value) => value * Number(inputText.current.value))     
    }

    function divide(e) {
        e.preventDefault();
        setValue((value) => value / Number(inputText.current.value))     
    }

    function resetInput(e) {
        e.preventDefault();
        inputText.current.value = 0     
    }

    function resetResult(e) {
        e.preventDefault();
       setValue(0)  
    }


    return(
        <div>
            <h1>Calculator Componet</h1>

            <h3 ref={result}> Answer {value}</h3>
            <form>
                <input
                    type="Number"
                    ref={inputText}
                    placeholder="Type in a number"
                    
                />
                <br/>
                <button onClick={add}>Add</button>
                <button onClick={sub}>Subtract</button>
                <button onClick={mul}>Multiply</button>
                <button onClick={divide}>Divide</button>
                <button onClick={resetInput}>ResetInput</button>
                <button onClick={resetResult}>RestResult</button>
            </form>
        </div>
    )
}

export default Calculator;