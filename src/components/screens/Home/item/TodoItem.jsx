import Check from "./Check";
import { BsTrash } from "react-icons/bs";
// в пропсах отдельно взятой сущности передается весь список. он тебе нужен для работы функций изменения стейта? тогда логику перенеси в сам компонент хоум. 
// отдельный итем не должен знать ничего о всем списке. Он должен только рисовать свои поля и вешать на них обработчики
const Todoitem = ({todos, setTodos, todo}) => {

    const changeTodo = (id, todos, setTodos) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.completed = !current.completed
        setTodos(copy)
    }
    
    const removeTodo = (id, todos, setTodos) => {
        setTodos([...todos].filter(t => t.id !== id))
    }
    
    return (
        <div className="flex items-center
            justify-between mb-3 rounded-2xl
            bg-gray-800 p-2 w-full"
        >
            <button className="flex items-center p-3 w-full hover:opacity-60" onClick={() => changeTodo(todo.id, todos, setTodos)}>
                <Check isCompleted={todo.completed}/>
                <span className={`mr-auto ${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                </span>                
            </button>
            <button className="p-3" onClick={() => removeTodo(todo.id, todos, setTodos)}>
                <BsTrash size={22} className='text-gray-500 hover:text-red-700 transition-colors ease-in-out duration-300'/>
            </button>
        </div>
    )
}

export default Todoitem
