import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ITask } from '../../interfaces/Task';
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
  taskList: ITask[];
  addTaskList?: (task: ITask[]) => void
}

const TaskForm = ({ btnText, taskList, addTaskList }: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title, difficulty}

    addTaskList!([...taskList, newTask])

    setTitle('')
    setDifficulty(0)
    console.log('taskList', taskList);
  }

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'title') {
      setTitle(target.value)
    } else {
      setDifficulty(+target.value)
    }
  }

  return (
   <form className={styles.form} onSubmit={addTaskHandler}>
    <div className={styles.input_container}>
      <label htmlFor='title'>
        Titulo:
      </label>
        <input 
          type="text"
          name='title'
          value={title}
          placeholder='Titulo da tarefa'
          onChange={handleChange}
        />
    </div>
    <div className={styles.input_container}>
      <label htmlFor='difficulty'>
        Dificuldade:
      </label>
        <input 
          type="text"
          name='difficulty'
          value={difficulty}
          placeholder='Dificuldade da tarefa'
          onChange={handleChange}
        />
    </div>
    <button type='submit'> {btnText} </button>
   </form>
  )
}

export default TaskForm
