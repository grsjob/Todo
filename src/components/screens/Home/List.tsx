import React from "react"
import Todoitem from "./item/TodoItem"

type RenderList = {
    //напиши отдельный тип для todo и здесь будет Todo[] проще масштабировать будет и отнаследоваться от меньшего типа если это нужно. Солид и вот это вот все))
    todos: {
        userId?: number,
        id: number,
        title: string,
        completed: boolean
    }[]
    //функции лучше типизировать через ()=>void сразу видно аргументы
    changeTodo: Function
    removeTodo: Function
}
//писал коммент выше и не заметил вот этот тип. Для начала - над компонентами обычно все типы не хранят. Только пропсы. Так удобнее читать. Типы выводи в отдельный файл
//types.ts. Расположение файла - в зависимости что за типы. Конкретного компонента - папка компонента и тд. Второе - у тебя есть тип Todo но выше ты для массива
//заводишь отдельную типизацию, где добавляется еще одно поле. Тебе или надо наследоваться от туду и расширять его полем и уже этим типом типизировать массив выше
//либо в туду ставить опциональное поле юзер и прокидывать этот тип в массив выше
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
//если что так не может быть)) возвращает пустой объект - это странно. функция или ничего не вернет или вернет данные. А тут фигня какая то)
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
