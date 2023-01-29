import {BsCheck} from 'react-icons/bs'

const Check = ({isCompleted}) => {
    return (
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