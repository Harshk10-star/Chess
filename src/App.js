import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Main from './Main';
import GameView from './components/GameView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/chess-game/:id" element={<GameView />} />

        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
