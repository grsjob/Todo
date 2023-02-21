import React, { useEffect, useState } from "react";
import Todoitem from "./item/TodoItem";
import CreateTodoField from "./item/CreateTodo";
import EmptyList from "./EmptyList";
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
//ок . а теперь тоже самое только переразбить правильнее. создать компонент список - который рисует как не старнно список)) в него сложить то что запросил с бэка
    // компонент список рисует компоненты итемы, в которые складываются только то что нужно им. На бэк ходим только из контейнеров или страниц. компоненты атомарные 
    // данные только обрабатывают. но не запрашивают
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Список дел</h1>
            <CreateTodoField setTodos={setTodos}/>
            {todos && todos.map((todo) => (
                <Todoitem 
                    key={todo.id} 
                    todo={todo} 
                    todos={todos}
// плохая практика передавать напрямую диспач экшены реакта в компоненты ниже. Оборачивай их в свою функцию, желательно ее еще обернуть в useCallback, чтобы она не
// пересоздавалась заново и отправить это все пропсом дальше
                    setTodos={setTodos}
//зачем ты передаешь пропсом функции, которые тянешь из утилит. Почему их не вытянуть напрямую в компонент? плодим пропсы просто так
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            {!todos.length && 
                <EmptyList/>
            }
        </div>
    )
}

export default Home
