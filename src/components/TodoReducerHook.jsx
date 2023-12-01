import { useReducer, useState } from "react";

let initialState={
    todos:[]
};
let todoReducer=(state,action)=>
{
    switch(action.type)
    {
        case "ADD_TODO": return {todos:[...state.todos,{id:Date.now(), text:action.text}]};
        case "REMOVE_TODO": return {todos:state.todos.filter(todo=>todo.id!==action.id)};
        default: return state;
    }
    
}

export default function TodoReducerHook()
{
    let [state, dispatch]=useReducer(todoReducer,initialState);
    let [todoText, setTodoText]=useState('');

    const handleAddTodo=()=>
    {
        if(todoText.trim()!=='')
        {
            dispatch({type:"ADD_TODO", text:todoText})
            setTodoText('')
        }
    }

    const handleRemoveTodo=id=>
    {
        dispatch({type:'REMOVE_TODO',id})
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input 
                type="text"
                value={todoText}
                onChange={e=>setTodoText(e.target.value)}
                placeholder="Enter your task" 
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {state.todos.map(todo=>(
                    <li key={todo.id}>
                        {todo.text}{''}
                        <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}