import React from 'react'

import Pokemon from './components/Pokemon/Pokemon'
import Todos from './components/Todos/Todos'

const App: React.FC = () => {
  return (
    <div>
      <Todos />
      <Pokemon name="rayquaza" />
    </div>
  )
}

export default App
