import React from "react"
import Todoitem from "./item/TodoItem"

type RenderList = {
    todos: {
        userId?: number,
        id: number,
        title: string,
        completed: boolean
    }[]
    changeTodo: Function
    removeTodo: Function
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

// type RenderList = {
//     todos: {
//         userId?: number,
//         id: number,
//         title: string,
//         completed: boolean
//     }[]
//     changeTodo: (todo: number) => {}
//     removeTodo: (todo: number) => {}
// }

// type Todo = {
//     id: number
//     completed: boolean
//     title: string
// }

// const List = ({todos, changeTodo, removeTodo}: RenderList) => {
//     return (
//         <ul>
//             {todos && todos.map((todo: Todo) => (
//                 <Todoitem
//                     key={todo.id} 
//                     todo={todo} 
//                     change={changeTodo}
//                     remove={removeTodo}
//                 />
//             ))}
//         </ul>
//     )
// }

// export default List