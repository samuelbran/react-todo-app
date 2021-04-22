import { render, fireEvent } from '@testing-library/react'

import App from '../App'

beforeEach(() => {
  window.localStorage.clear()
})

it('Renders app correctly', () => {
  const { getByLabelText } = render(<App />)
  expect(getByLabelText('Nuevo todo')).not.toBeNull()
})

it('Adds a new todo', () => {
  const todoText = 'Todo ejemplo'

  const { getByLabelText, getByText } = render(<App />)
  const input = getByLabelText('Nuevo todo')
  fireEvent.change(input, { target: { value: todoText } })
  fireEvent.click(getByText('Agregar'))

  getByText(todoText)
})

it('Prevents todo creation if text is empty', () => {
  const { getByText } = render(<App />)
  fireEvent.click(getByText('Agregar'))
  const listItems = document.querySelectorAll('li')

  expect(listItems.length).toBe(0)
})

it('Clears input after todo creation', () => {
  const todoText = 'Todo ejemplo'

  const { getByLabelText, getByText } = render(<App />)
  const input = getByLabelText('Nuevo todo') as HTMLInputElement
  fireEvent.change(input, { target: { value: todoText } })

  fireEvent.click(getByText('Agregar'))

  expect(input.value).toBe('')
})

it('Each todo has a different ID', () => {
  const todoText = 'Tarea 1'
  const todoText2 = 'Tarea 2'

  const { getByLabelText, getByText } = render(<App />)
  const input = getByLabelText('Nuevo todo')
  fireEvent.change(input, { target: { value: todoText } })
  fireEvent.click(getByText('Agregar'))

  fireEvent.change(input, { target: { value: todoText2 } })
  fireEvent.click(getByText('Agregar'))

  getByText('1')
  getByText('2')
})
