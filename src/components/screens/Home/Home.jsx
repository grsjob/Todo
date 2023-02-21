import React, { useEffect, useState } from "react";
import Todoitem from "./item/TodoItem";
import CreateTodoField from "./item/CreateTodo";
import EmptyList from "./item/EmptyList";
import { changeTodo, removeTodo } from "../../../utils/controlTodos";

const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((res) => res.json())
            .then((data) => {
                setTodos(data.slice(0, 5))
            })
    }, [])

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Список дел</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos && todos.map((todo) => (
                <Todoitem 
                    key={todo.id} 
                    todo={todo} 
                    todos={todos}
                    setTodos={setTodos}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            {todos.length < 1 && 
                <EmptyList/>
            }
        </div>
    )
}

export default Home