import React, { useState } from "react"
import { VscAdd } from "react-icons/vsc"
//React.Dispatch<React.SetStateAction<string>> вот такое лучше не передавать. К тому же ты как то слишком сложно завернул. Функция, которая аргументом принимает 
//реактовский диспатч и это еще и в пропсах все. Какая то жесть)) разбей отдельно. СТейтовые функции должны использоваться в этом же компоненте, либо получать
//обертку и передаваться дальше по дереву пропсами, завернутыми в юз колбек. а тут пропс, который нельзя менять, принимает диспатч реакта. Жесть кака то)))
//если тебе что то надо передать на уровень выше - напиши кастомный хук. используй контекст. Используй редакс. Либо пробрось отдельную функцию, котора обернет этот
//диспатч, но не нужно это внутри пропса аргументом передавать)
type AddTodo = {
    addTodo: (title: string, setTitle: React.Dispatch<React.SetStateAction<string>>) => void
}

type Evt = {
    key: string
}

const CreateTodoField = ({addTodo}: AddTodo) => {
    const [title, setTitle] = useState('')

    const onKeyDown = (evt: Evt) => {
        if(evt.key === 'Enter' && title.length) {
            addTodo(title, setTitle)
        }
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
            //вот такого лучше избегать. не очевидно с первого взгляда что это булевое. преобразуй сверху нормально и сюда вставь константу
            {!!title.length &&
                <button className="pl-4" onClick={() => addTodo(title, setTitle)}>
                    <VscAdd size={22} className='text-gray-300 hover:text-green-600 transition-colors ease-in-out duration-300'/>
                </button>
            }
        </div>
    )
}

export default CreateTodoField
