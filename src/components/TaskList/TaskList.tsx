import React from 'react'
import { ITask } from '../../interfaces/Task';
import styles from './TaskList.module.css';

type Props = {
  taskList: ITask[];
  handleDelete: (id: number) => void
  openModal: (task: ITask) => void
}

const TaskList = ({ taskList, handleDelete, openModal }: Props) => {
  return (
    <>
      {taskList.length > 0 ? 
      (taskList.map((item) => (
        <div key={item.id} className={styles.task}>
          <div className={styles.details}>
            <h4>{item.title}</h4>
            <p>Dificuldade: {item.difficulty}</p>
          </div>
          <div className={styles.actions}>
            <i className='bi bi-pencil' onClick={() => openModal(item)}></i>
            <i className='bi bi-trash' onClick={() => handleDelete(item.id)}></i>
          </div>
        </div>
        
        ))
      )
        : <p> Não há itens na lista</p>}
    </>
  )
}

export default TaskList