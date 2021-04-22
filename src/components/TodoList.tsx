import React from 'react'
import TodoInterface from './Todo.interface'
import Todo from './Todo'

interface Props {
  todos: TodoInterface[]
}

const TodoList: React.FC<Props> = ({ todos }) => (
  <ol>
    {todos.map((todo) => (
      <Todo key={todo.idx} data={todo} />
    ))}
  </ol>
)

export default TodoList
