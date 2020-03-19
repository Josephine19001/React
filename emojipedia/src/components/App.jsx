import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Emojinote from './Emojinote';
import emojis from '../emojis';

function createEmoji(emoji){
  return(
    <Emojinote 
      key = {emoji.id}
      emoji = {emoji.emoji}
      name = {emoji.name}
      description = {emoji.description}
    />
    );
}

function App() {
  return (
    <div className="container">
    
    <div className="title">
    <Header />
    </div>
    <div className="content">
      {emojis.map(createEmoji)}
    </div>
   
    <div className="buttom">
      <Footer />
    </div>
   
    
    </div>
  );
}

export default App;