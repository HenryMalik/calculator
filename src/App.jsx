import { useState } from 'react'
import './App.css'

function App() {
    const [hasil, setHasil] = useState("");

    const operation = (e) => {
        setHasil(hasil.concat(e.target.name));
    }
    const clear = () => {
        setHasil("");
    }
    const backspace = () => {
        setHasil(hasil.slice(0, - 1));
    }
    const kalkulasi = () => {
        try {
            setHasil(eval(hasil).toString());
        } catch (err) {
            setHasil("Error")
        }
    }
    return (
        <div className='container'>
            <input type="text" value={hasil} />
            <div className='keypad'>
                <button className='highlight' onClick={clear} id="clear">Clear</button>
                <button className='highlight' onClick={backspace} id="backspace">C</button>
                <button className='highlight' name="/" onClick={operation}>&divide;</button>
                <button name="7" onClick={operation}>7</button>
                <button name="8" onClick={operation}>8</button>
                <button name="9" onClick={operation}>9</button>
                <button className='highlight' name="*" onClick={operation}>&times;</button>
                <button name="4" onClick={operation}>4</button>
                <button name="5" onClick={operation}>5</button>
                <button name="6" onClick={operation}>6</button>
                <button className='highlight' name="-" onClick={operation}>&minus;</button>
                <button name="1" onClick={operation}>1</button>
                <button name="2" onClick={operation}>2</button>
                <button name="3" onClick={operation}>3</button>
                <button className='highlight' name="+" onClick={operation}>+</button>
                <button name="0" onClick={operation}>0</button>
                <button name="." onClick={operation}>.</button>
                <button className='highlight' onClick={kalkulasi} id="result">=</button>
            </div>
        </div>

    )
}

export default App