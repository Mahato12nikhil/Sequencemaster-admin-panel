// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import './components/home/home.css'
import MainAcoount from './components/main account/MainAcoount';
import { Custom_Routes } from './definitions/Routes';
import GameResult from './components/game result/GameResult';
const App: React.FC = () => {
  return (
    <Router>
      <div>
      <h1 className='home-header'>Sequence Master admin panel</h1>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path={`${Custom_Routes.main_account}`} element ={<MainAcoount/>}/>
           <Route path={`${Custom_Routes.game_results}`} element ={<GameResult/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
