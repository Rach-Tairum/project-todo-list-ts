import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styleApp from './App.module.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
     <Header />
     <main className={styleApp.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa'/>
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
