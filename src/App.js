import React from 'react';
import SignIn from './components/SIgnIn/SignIn';

//Import JS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Import CSS
import './Reset.css'
import './App.css'


function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        {/* Сюда кладем все компоненты кроме хедера и футера */}

      </main>


      <Footer />


    </div>
  );
}

export default App;
