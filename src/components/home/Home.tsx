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
   <div>
   
     <div className="dashboard">
       <DashboardCard name="Main account" amount={`₹ ${50000}`} onClick={() => handleCardClick(Custom_Routes.main_account)} cardType='card-main'/>
       <DashboardCard name="Earning account" amount={`₹ ${50000}`}  onClick={() => handleCardClick(Custom_Routes.earning_account)} cardType='card-transfer'/>
       <DashboardCard name="Trasnfer earning"amount={`₹ ${50000}`} onClick={() => handleCardClick(Custom_Routes.transfer_earning)} cardType='card-feedback'/>
    </div>
    <div className="dashboard">
       <DashboardCard  amount="User details" onClick={handleCardClick} cardType='card-main'/>
       <DashboardCard  amount="Feedback"  onClick={handleCardClick} cardType='card-transfer'/>
       <DashboardCard  amount="Misc" onClick={handleCardClick} cardType='card-feedback'/>
    </div>
   </div>

  )
}
