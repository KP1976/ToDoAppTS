import React from 'react'
import '../scss/task.scss'

const TaskItem = () => {
  return (
    <li className="task">
      <div className="task__icon task__icon--food"></div>
      <div className="task__text-and-date">
        <h4 className="task__text">Dokończyć aplikację To-Do</h4>
        <span className="task__date">18 listopada, 2020</span>
      </div>
      <span className="task__time">11:20</span>
    </li>
  )
}

export default TaskItem
