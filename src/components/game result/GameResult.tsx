import React, { useState, useEffect } from 'react';
import './gameResult.css';
import { BsFilter } from "react-icons/bs";
import { GetDataMetric, GetGameRevenue } from '../services/backend';
import Dropdown from '../filterDropdown/Dropdown';
import GameItem from './GameItem';
import GameItemHeader from './GameItemHeader';
import { useAppSelector } from '../../redux/customHook';
import { LAST_7_DAYS_TIMESTAMP } from '../../utils/contants';

const GameResult = () => {
 const [fetchDatas, setFetchData] = useState<any>([])
 const [dropdownvisible, setDropdownvisible] = useState(true)
 const {startTimeStamp,endTimeStamp} = useAppSelector(state => state.game.filterTimeStamp)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        console.log(startTimeStamp,' ',endTimeStamp)
        const  {data}  = await GetGameRevenue(startTimeStamp, endTimeStamp);      
        if(data && data.data){
          setFetchData(data.data)
          console.log(fetchDatas)
        }
         
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }
    , [startTimeStamp,endTimeStamp])

  function handleFilterButtonClick(event: any) {
    if(dropdownvisible) setDropdownvisible(false)
    else setDropdownvisible(true)
  }

  return (
    <div className='game_result_container'>
      <div className='filter_container'>
        <button className='filter_button' onClick={handleFilterButtonClick}>
          <BsFilter size={30} /> 
          <span>Filter</span>
        </button>
        <div className='dropdown_layout'><Dropdown show={dropdownvisible}></Dropdown></div>

      </div>
      <div className='view_breakup_table_alignment'>
        <div className='view_breakup'>
         
        </div>
        <div className='table_container'>
          <GameItemHeader/>
         {
          fetchDatas.map((val: any)=>(
              
              <div key={Math.random()}><GameItem { ...val}/> </div>
            
          ))
         }
          
        </div>
      </div>
      

    </div>
  );
};

export default GameResult;
