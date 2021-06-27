import React from 'react';

//Import JS
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Import CSS
import './Reset.css'
import './App.css'


function App() {
  return (
    <div class="wrapper">
      <Header />

      <main class="page">
        {/* Сюда кладем все компоненты кроме хедера и футера */}

      </main>


      <Footer />


    </div>
  );
}

export default App;
