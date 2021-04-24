import React, { useState, useEffect } from 'react'
import TodoInterface from './components/Todo.interface'

import TodoList from './components/TodoList'
import Form from './components/Form'
import Pokemon from './components/Pokemon'

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
  const [todo, setTodo] = useState<TodoInterface>({ id, text: '', done: false })

  useEffect(() => {
    if (todos.length > 0) {
      window.localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.text) {
      setTodos((prevTodos) => [todo, ...prevTodos])
      setId((prev) => prev + 1)
      setTodo({ id, text: '', done: false })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setTodo({ id, text: value, done: false })
  }

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }

        return todo
      })
    )
  }

  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={todo}
      />
      <TodoList todos={todos} handleDone={handleDone} />
      <Pokemon name="rayquaza" />
    </div>
  )
}

export default App
