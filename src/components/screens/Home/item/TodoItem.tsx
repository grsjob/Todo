import React from 'react'
import Check from "./Check";
import { BsTrash } from "react-icons/bs";
//интерфейс который опять юзает базовый туду и еще два поля. где то такое уже было да и переиспользовать типы надо. Написал один интерфейс - расширил его где то дальше. сузил еще где то дальше, если нужны
//отдельные поля из интерфейса. (хотя это лучше пореже использовать) но не нужно каждый раз писать новый
type TodoParams = {
    todo: {
        id: number
        completed: boolean
        title: string
    }
    change: Function
    remove: Function
}

const Todoitem = ({todo, change, remove}: TodoParams) => {
    return (
        <li className="flex items-center
            justify-between mb-3 rounded-2xl
            bg-gray-800 p-2 w-full"
        >
            <button className="flex items-center p-3 w-full hover:opacity-60" onClick={() => change(todo.id)}>
                <Check isCompleted={todo.completed}/>
                //писал выше - в разметке лучше без проверок. в строках тоже. разве что тернарником можно выводить разные куски разметки и то не желательно
                <span className={`mr-auto ${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                </span>                
            </button>
            <button className="p-3" onClick={() => remove(todo.id)}>
                <BsTrash size={22} className='text-gray-500 hover:text-red-700 transition-colors ease-in-out duration-300'/>
            </button>
        </li>
    )
}

export default Todoitem


// type TodoParams = {
//     todo: {
//         id: number
//         completed: boolean
//         title: string
//     }
//     change: (todo: number) => void
//     remove: (todo: number) => void
// }

// const Todoitem = ({todo, change, remove}: TodoParams) => {
//     return (
//         <li className="flex items-center
//             justify-between mb-3 rounded-2xl
//             bg-gray-800 p-2 w-full"
//         >
//             <button className="flex items-center p-3 w-full hover:opacity-60" onClick={() => change(todo.id)}>
//                 <Check isCompleted={todo.completed}/>
//                 <span className={`mr-auto ${todo.completed ? 'line-through' : ''}`}>
//                     {todo.title}
//                 </span>                
//             </button>
//             <button className="p-3" onClick={() => remove(todo.id)}>
//                 <BsTrash size={22} className='text-gray-500 hover:text-red-700 transition-colors ease-in-out duration-300'/>
//             </button>
//         </li>
//     )
// }

// export default Todoitem
