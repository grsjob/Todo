import React, { useCallback, useEffect, useState } from "react";
import CreateTodoField from "./item/CreateTodo";
import EmptyList from "./EmptyList";
import List from "./List";


const Home = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((res) => res.json())
            .then((data) => {
                setTodos(data.slice(0, 5))
            })
            .catch(() => {
                console.log('Error')
            })
    }, [])

    const changeTodo = useCallback((id) => {
        const current = !![...todos] ? [...todos].find(t => t.id === id) : ''
        current.completed = !current.completed
        setTodos([...todos])
    }, [todos])
    
    const removeTodo = useCallback((id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }, [todos])

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Список дел</h1>
            <CreateTodoField setTodos={setTodos}/>
            <List
                todos={todos}
                changeTodo={changeTodo}
                removeTodo={removeTodo}    
            />
            {!todos.length && 
                <EmptyList/>
            }
        </div>
    )
}

export default Home
