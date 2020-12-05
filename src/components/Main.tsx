import React from 'react'
import '../scss/main.scss'
import TasksList from './TasksList'
import TasksDone from './TasksDone'

const Main = () => {
  return (
    <main className="main">
      <h3 className="task-title">zadania</h3>
      <TasksList />
      <TasksDone />
      <button className="main__add-task-btn"></button>
    </main>
  )
}

export default Main
