import React from 'react'
import '../scss/main.scss'
import '../scss/tasks-done.scss'
import TasksList from './TasksList'

const Main = () => {
  return (
    <main className="main">
      <h3 className="task-title">zadania</h3>
      <TasksList />
      <div className="tasks-done">
        <h3 className="task-title">skończone</h3>
        <span className="tasks-done__number">5</span>
      </div>
    </main>
  )
}

export default Main
