import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

import { ITask } from './interfaces/Task';
import styleApp from './App.module.css';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const addTask = (task: ITask[]) => {
    setTaskList(task)
  }


  return (
    <div className="App">
     <Header />
     <main className={styleApp.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} addTaskList={addTask}/>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </div>
     </main>
     <Footer />
    </div>
  );
}

export default App;
