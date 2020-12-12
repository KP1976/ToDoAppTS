import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import CreateTask from './components/CreateTask'
import './scss/app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <CreateTask />
    </div>
  )
}

export default App
