import { useCounter } from "./useCounter";

function CounterOne(){
    let {count,increamentCounter,decreamentCounter}=useCounter(2)

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increamentCounter}>+</button>
            <button onClick={decreamentCounter}>-</button>
        </div>
    )
}

export default CounterOne