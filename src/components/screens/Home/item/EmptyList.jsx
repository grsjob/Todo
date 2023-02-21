import { FaScroll } from "react-icons/fa"

const EmptyList = () => {
    return (
        <div className="flex items-center text-center justify-center">
            <p className="text-center text-gray-400 transform text-xl mr-2">Список пуст</p>
            <FaScroll size={22} className="text-gray-400"/>
        </div>
    )
}

export default EmptyList