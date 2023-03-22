import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styleApp from './App.module.css';

function App() {
  return (
    <div className="App">
     <Header />
     <main className={styleApp.main}>Conteudo Elemento X</main>
     <Footer />
    </div>
  );
}

export default App;
