import React from 'react'
import TodoInterface from './Todo.interface'

interface Props {
  data: TodoInterface
}

const Todo: React.FC<Props> = ({ data }) => <li>{data.text}</li>

export default Todo
