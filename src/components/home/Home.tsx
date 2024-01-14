import React from 'react'
import DashboardCard from '../dashboardCard/DashboardCard'
import './home.css'
import { useNavigate } from 'react-router-dom';
import { Custom_Routes } from '../../definitions/Routes';

export default function Home() {

  const navigate = useNavigate();

  const handleCardClick = (destination:Custom_Routes) => {
    navigate(`/${destination}`);
  };
  return (
   <div >
   
     <div className="dashboard">
       <DashboardCard amount="Game results" onClick={() => handleCardClick(Custom_Routes.game_results)} cardType='card-main'/>
       <DashboardCard name="Earning account" amount={`₹ ${50000}`}  onClick={() => handleCardClick(Custom_Routes.earning_account)} cardType='card-transfer'/>

    </div>
   </div>

  )
}
