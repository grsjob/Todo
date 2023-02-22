import Check from "./Check";
import { BsTrash } from "react-icons/bs";

const Todoitem = ({todo, change, remove}) => {
   
    return (
        <li className="flex items-center
            justify-between mb-3 rounded-2xl
            bg-gray-800 p-2 w-full"
        >
            <button className="flex items-center p-3 w-full hover:opacity-60" onClick={() => change(todo.id)}>
                <Check isCompleted={todo.completed}/>
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
