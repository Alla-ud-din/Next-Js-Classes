'use client'
import { useState } from "react";

// export default function page() {
//     const [input, setInput] = useState([]);
//     const [todos, setTodo] = useState([
//         {
//             id: 1,
//             title: "Todo1"
//         },
//         {
//             id: 2,
//             title: "Todo2"
//         },
//     ])
//     const addTodo = () => {

//     }
//     const removeTodo = () => {

//     }
//     return (
//         <div>
//             <div>
//                 <div>
//                     <input value="" type="text" placeholder='Add Todo' />
//                     <button onClick={addTodo}>Add</button>
//                 </div>
//                 <div>
//                     {todos.map((todo:any)=>(
//                         <div className='flex bg-slate-100' key={todo.id}>
//                             <h1></h1>
//                         <button></button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }
// function useState(arg0: { id: number; title: string }[]): [any, any] {
//     throw new Error('Function not implemented.')
// }


interface todotype {
    id: number,
    title: string
}

export default function Page() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState<todotype[]>([]);
  const addTodo = () => {
    setTodo([...todos, { id: Date.now(), title: input }]);
    setInput("");
  };
  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo: todotype) => todo.id !== id); // []
    setTodo(newTodos);

  };
  return (
    <div>
      <div>
        <div>
          <input
            value={input}
            type="text"
            placeholder="Add Todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div className=" flex flex-col gap-2">
          {todos.map((todo: todotype) => (
            <div className=" flex bg-slate-100 gap-x-3" key={todo.id}>
              <h1>{todo.title}</h1>
              <button
                onClick={() => removeTodo(todo.id)}
                className=" border bg-slate-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}