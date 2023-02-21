const changeTodo = (id, todos, setTodos) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.completed = !current.completed
    setTodos(copy)
}

const removeTodo = (id, todos, setTodos) => {
    setTodos([...todos].filter(t => t.id !== id))
}

export {changeTodo, removeTodo}