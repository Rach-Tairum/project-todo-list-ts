import React from 'react'
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
   <form className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor='title'>
        Titulo:
      </label>
        <input type="text" name='title' placeholder='Titulo da tarefa'/>
    </div>
    <div className={styles.input_container}>
      <label htmlFor='difficulty'>
        Dificuldade:
      </label>
        <input type="text" name='difficulty' placeholder='Dificuldade da tarefa'/>
    </div>
    <button type='button'> {btnText} </button>
   </form>
  )
}

export default TaskForm
