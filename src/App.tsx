import React, { useState, useEffect } from 'react'
import TodoInterface from './components/Todo.interface'

import TodoList from './components/TodoList'
import Form from './components/Form'

const App: React.FC = () => {
  const getPersistedTodos = () => {
    const persistedTodos = window.localStorage.getItem('todos')
    return persistedTodos ? JSON.parse(persistedTodos) : []
  }
  const persistedTodos = getPersistedTodos()

  const [todos, setTodos] = useState<TodoInterface[]>(persistedTodos)
  const [id, setId] = useState<number>(
    persistedTodos.length > 0 ? persistedTodos.length : 1
  )
  const [todo, setTodo] = useState<TodoInterface>({ id, text: '' })

  useEffect(() => {
    if (todos.length > 0) {
      setId((prev) => prev + 1)
      window.localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.text) {
      setTodos((prevTodos) => [todo, ...prevTodos])
      setTodo({ id, text: '' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTodo({ id, text: value })
  }

  return (
    <div>
      <TodoList todos={todos} />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={todo}
      />
    </div>
  )
}

export default App
