import React from 'react'

type Props = {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
   <form>
    <div>
      <label htmlFor='title'>
        Titulo:
        <input type="text" name='title' placeholder='Titulo da tarefa'/>
      </label>
    </div>
    <div>
      <label htmlFor='difficulty'>
        Dificuldade:
        <input type="text" name='difficulty' placeholder='Dificuldade da tarefa'/>
      </label>
    </div>
    <button type='button'> {btnText} </button>
   </form>
  )
}

export default TaskForm
