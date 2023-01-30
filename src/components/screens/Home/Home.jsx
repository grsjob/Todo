import React, { useState } from "react";
import Todoitem from "./item/TodoItem";
import CreateTodoField from "./item/CreateTodo";
import { FaScroll } from "react-icons/fa"

const data = [
    {
        id: "1",
        title: "Покормить собаку",
        isCompleted: false,
    },
    {
        id: "2",
        title: "Передать документы",
        isCompleted: false,
    },
    {
        id: "3",
        title: "Вынести мусор",
        isCompleted: false,
    },
    {
        id: "4",
        title: "Похудеть к лету",
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Список задач</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos && todos.map((todo) => (
                <Todoitem 
                    key={todo.id} 
                    todo={todo} 
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            {todos.length < 1 && 
                <div className="flex items-center text-center justify-center">
                    <p className="text-center text-gray-400 transform text-xl mr-2">Список пуст</p>
                    <FaScroll size={22} className="text-gray-400"/>
                </div>
            }
        </div>
    )
}

export default Home