import React from 'react'
import TodoInterface from './Todo.interface'

interface Props {
  data: TodoInterface
}

const Todo: React.FC<Props> = ({ data }) => (
  <li>
    <span>{data.id}</span>. <span>{data.text}</span>
  </li>
)

export default Todo
