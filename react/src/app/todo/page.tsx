'use client'
import React from 'react'

export default function page() {
    const [input, setInput] = useState([]);
    const [todos, setTodo] = useState([
        {
            id: 1,
            title: "Todo1"
        },
        {
            id: 2,
            title: "Todo2"
        },
    ])
    const addTodo = () => {

    }
    const removeTodo = () => {

    }
    return (
        <div>
            <div>
                <div>
                    <input value="" type="text" placeholder='Add Todo' />
                    <button onClick={addTodo}>Add</button>
                </div>
                <div>
                    {todos.map((todo:any)=>(
                        <div className='flex bg-slate-100' key={todo.id}>
                            <h1></h1>
                        <button></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
function useState(arg0: { id: number; title: string }[]): [any, any] {
    throw new Error('Function not implemented.')
}

