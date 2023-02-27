import React from "react"
import Todoitem from "./item/TodoItem"

const List = ({todos, changeTodo, removeTodo}) => {
    return (
        <ul>
            {todos && todos.map((todo) => (
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