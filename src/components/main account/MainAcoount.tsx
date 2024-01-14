import React, { useState } from 'react'
import './main_account.css'
import DashboardCard from '../dashboardCard/DashboardCard'
import { Custom_Routes } from '../../definitions/Routes';

export default function MainAcoount() {

  const [selectedCard, setSelectedCard] = useState<Custom_Routes | null>(null);

  const handleCardClick = (destination:Custom_Routes) => {
    setSelectedCard(destination);
  };
  return (
    <div>
        <div className='main_account_dashboard_card'>
          <DashboardCard name="Deposit" amount={`₹ ${50000}`}  onClick={() => handleCardClick(Custom_Routes.deposit)} cardType='card-main'/>
          <DashboardCard name="Expenses" amount={`₹ ${50000}`} onClick={() => handleCardClick(Custom_Routes.expenses)} cardType='card-transfer'/>
        </div>
    </div>
  )
}
