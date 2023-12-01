import { useCounter } from "./useCounter"

export default function CounterTwo(){
    let {count,increamentCounter,decreamentCounter}=useCounter(5)

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increamentCounter}>+</button>
            <button onClick={decreamentCounter}>-</button>
        </div>
    )
}