import { useState } from "react"

export default function CounterButton() {

    let [counter, setCounter] = useState(0);

    let counterOnClick = () => {
        setCounter(++counter)
        console.log(counter)
    }

    return (
        <>
            <br />
            <br />
            <button onClick={counterOnClick}>Click To Increment!</button>
            <h1>Counter: {counter}</h1>
        </>
    )

}