import React from 'react'
import {BsCheck} from 'react-icons/bs'
//опять же - проще CheckProps
type State = {
    isCompleted: boolean
}

const Check = ({isCompleted}: State) => {
    return (
        //юзай библиотеку classnames смотрится как абракадабра в которой еще и внутри строки какие то проверки идут. Такое нельзя держать в разметке))
        //либа позволить сконфигурировать гибко константу и уже ее одну отправить в поле className
        <div className={`flex items-center 
            justify-center border-2 rounded-lg border-pink-400 
            ${isCompleted ? 'bg-pink-400' : ''} 
            w-6 h-6 mr-2`}
        >
            {isCompleted && <BsCheck size={24} className='text-gray-900'/>}
        </div>
    )
}

export default Check
