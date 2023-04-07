import React, { useCallback, useEffect, useState } from "react";
import CreateTodoField from "./item/CreateTodo";
import EmptyList from "./EmptyList";
import List from "./List";
//дженерик FC можно ставить и для пустых пропсов. Он автоматом прокинет в компонент пропс children и если вдруг понадобится, то не нужно будет писать отдельный интерфейс
const Home = () => {
    //для стейтов тоже нужна типизация. Пишется через дженерик useState<дженерик>(). Заодно себя перепроверишь что ничего не забыл и данные с бэка будешь перепроверять
    // по данным с бэка - тоже нужен тип возвращаемых значений и константа, которая проверяет что вернулось то что нужно)
    const [todos, setTodos] = useState([{
        id: 0,
        title: '',
        completed: false
    }])

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

    const changeTodo = useCallback((id: number): void => {
        const current = [...todos].find(t => t.id === id)
        
        if (current) {
            current.completed = !current.completed
            setTodos([...todos])
        } else {
            console.log('Error2')
        }
    }, [todos])
    
    const removeTodo = useCallback((id: number): void => {
        setTodos([...todos].filter(t => t.id !== id))
    //а у тебя тут разве имеет смысл держать todos в зависимости? ты меняешь стейт в этой же функции и сразу же ее опять пересоздаешь. ЗАчем?)
    }, [todos])

    
    const addTodo = (title: string, setTitle: Function): void => {
        setTodos(prev => [
            {
                id: Math.random() * 1000,
                title: title,
                completed: false 
            },
            ...prev
        ])
        
        setTitle('')
    }

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">Список дел</h1>
            <CreateTodoField addTodo={addTodo}/>
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
