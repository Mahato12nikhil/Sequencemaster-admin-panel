// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navigation from './components/Navigation';
import './components/home/home.css'
import MainAcoount from './components/main account/MainAcoount';
import EarnAccount from './components/earning account/EarnAccount';
import TrasnsferEarn from './components/transfer earning/TrasnsferEarn';
import { Custom_Routes } from './definitions/Routes';
const App: React.FC = () => {
  return (
    <Router>
      <div>
      <h1 className='home-header'>Sequence Master admin panel</h1>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path={`${Custom_Routes.main_account}`} element ={<MainAcoount/>}/>
           <Route path={`${Custom_Routes.earning_account}`} element ={<EarnAccount/>}/>
           <Route path={`${Custom_Routes.transfer_earning}`} element ={<TrasnsferEarn/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
