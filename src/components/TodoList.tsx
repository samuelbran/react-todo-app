import React from 'react'
import TodoInterface from './Todo.interface'
import Todo from './Todo'

interface Props {
  todos: TodoInterface[]
}

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {todos
      .sort((a, b) => a?.id - b?.id)
      .map((todo) => (
        <Todo key={todo.id} data={todo} />
      ))}
  </ul>
)

export default TodoList
