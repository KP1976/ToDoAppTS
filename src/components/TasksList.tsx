import React from 'react'
import TaskItem from './TaskItem'

const TasksList = () => {
  return (
    <ul className="task-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}

export default TasksList
