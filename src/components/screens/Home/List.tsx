import React from "react"
import Todoitem from "./item/TodoItem"

type RenderList = {
    todos: []
    changeTodo: () => {}
    removeTodo: () => {}
}

type Todo = {
    id: number
    completed: boolean
    title: string
}

const List = ({todos, changeTodo, removeTodo}: RenderList) => {
    return (
        <ul>
            {todos && todos.map((todo: Todo) => (
                <Todoitem
                    key={todo.id} 
                    todo={todo} 
                    change={changeTodo}
                    remove={removeTodo}
                />
            ))}
        </ul>
    )
}

export default List