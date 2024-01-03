// DashboardCard.js
import React from 'react';
import './DashboardCard.css'; // Include your CSS file for styling

const DashboardCard = ({ name, amount,onClick,cardType }:any) => {
    const handleCardClick = () => {
        if (onClick) {
          onClick();
        }
    }

  return (
    <div className={`dashboard-card ${cardType}`} onClick={handleCardClick}>
      <h2 >{` ${amount}`}</h2>
      <p>{name}</p>
    </div>
  );
};

export default DashboardCard;
