import React from 'react'
import TaskItem from './TaskItem'
import '../scss/taskList.scss'

const TasksList = () => {
  return (
    <ul className="task-list">
      <TaskItem />
    </ul>
  )
}

export default TasksList
