import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ITask } from '../../interfaces/Task';
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
  taskList: ITask[];
  addTaskList?: (task: ITask[]) => void
  task?: ITask | null
  handleUpdate?: (id: number, title: string, difficulty: number) => void
}

const TaskForm = ({ btnText, taskList, addTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleUpdate) {
      handleUpdate(id, title, difficulty)

    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = {id, title, difficulty}

      addTaskList!([...taskList, newTask])

      setTitle('')
      setDifficulty(0)
    }
    
  }

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'title') {
      setTitle(target.value)
    } else {
      setDifficulty(+target.value)
    }
  }

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

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
