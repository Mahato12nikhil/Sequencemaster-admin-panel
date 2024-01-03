import React from 'react'
import './main_account.css'
import DashboardCard from '../dashboardCard/DashboardCard'

export default function MainAcoount() {

  const handleCardClick = () => {
   
  };
  return (
    <div className='main_account_dashboard_card'>
       <DashboardCard name="Deposit" amount={`₹ ${50000}`} onClick={handleCardClick} cardType='card-main'/>
       <DashboardCard name="Expenses" amount={`₹ ${50000}`}  onClick={handleCardClick} cardType='card-transfer'/>
    </div>
  )
}
