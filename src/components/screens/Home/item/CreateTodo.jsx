import { useState } from "react"
import { VscAdd } from "react-icons/vsc"

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const onKeyDown = (evt) => {
        if(evt.key === 'Enter' && title.length) {
            addTodo(title)
        }
    }
    
    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date(),
                title: title,
                completed: false 
            },
            ...prev
        ])

        setTitle('')
    }

    return (
        <div className="flex justify-between items-center mb-10 rounded-xl border-gray-800 border-2 w-full px-5 py-3 mt-8">
            <input 
                className="bg-transparent w-full border-none outline-none" 
                type="text" 
                onChange={evt => setTitle(evt.target.value)} 
                value={title}
                onKeyDown={onKeyDown}  
                placeholder="Введите задачу"  
            />
            {!!title.length &&
                <button className="pl-4" onClick={() => addTodo(title)}>
                    <VscAdd size={22} className='text-gray-300 hover:text-green-600 transition-colors ease-in-out duration-300'/>
                </button>
            }
        </div>
    )
}

export default CreateTodoField
