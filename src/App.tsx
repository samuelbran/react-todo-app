import React from 'react'
import { useState } from 'react'
import TodoInterface from './components/Todo.interface'

import TodoList from './components/TodoList'
import Form from './components/Form'

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])
  const [todo, setTodo] = useState<TodoInterface>({ idx: 0, text: '' })

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.text) {
      setTodos((prevTodos) => [todo, ...prevTodos])

      setTodo({
        idx: todos.length,
        text: '',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: text } = e.target

    setTodo({
      idx: todos.length | 0,
      text,
    })
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
