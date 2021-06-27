import React from 'react';

//Import JS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';


// Import CSS
import './Reset.css'
import './App.css'


function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        {/* Сюда кладем все компоненты кроме хедера и футера */}
        <HomePage />
      </main>


      <Footer />


    </div>
  );
}

export default App;
