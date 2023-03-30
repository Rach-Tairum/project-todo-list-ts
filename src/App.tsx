import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Modal from './components/Modal/Modal';

import { ITask } from './interfaces/Task';
import styleApp from './App.module.css';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>()

  const addTask = (task: ITask[]) => {
    setTaskList(task)
    const listString = JSON.stringify(task)
    localStorage.setItem('list', listString)
  }

  const deleteTask = (id: number) => {
    const newList = taskList!.filter((item) => item.id !== id)

    setTaskList(newList)
    const listString = JSON.stringify(newList)
    localStorage.setItem('list', listString)
  }

  const handleEdit = (status: boolean) => {    
    setIsOpen(status)
  }

  const editTask = (task: ITask): void => {
    setTaskToUpdate(task)
    
    handleEdit(true)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = taskList!.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask
      }
      return task
    })

    setTaskList(updatedItems)
    const listString = JSON.stringify(updatedItems)
    localStorage.setItem('list', listString)
    handleEdit(false)
  }

  useEffect(() => {
    const listStoraged = localStorage.getItem('list')

    if (listStoraged) {
      const loadList = JSON.parse(listStoraged)
      setTaskList(loadList)
    } else {
      setTaskList([])
    }
  }, [])

  return (
    <div className="App">
      <Modal 
        children={
            <TaskForm 
              btnText='Editar tarefa' 
              taskList={taskList!} 
              task={taskToUpdate} 
              handleUpdate={updateTask} 
            />
          }
        isOpen={isOpen}
        openModal={handleEdit}
      />
      <Header />
      <main className={styleApp.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm 
              btnText='Criar Tarefa' 
              taskList={taskList!} 
              addTaskList={addTask}
            />
          <div>
            <h2>Suas tarefas:</h2>
            <TaskList taskList={taskList!} handleDelete={deleteTask} openModal={editTask} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
