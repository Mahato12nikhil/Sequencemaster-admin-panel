import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import './multidropdown.css'
import { useAppDispatch } from '../../redux/customHook';
import { updateGameResultFilter } from '../../redux/GameSilce';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CURRENT_DATE, LAST_30_DAYS_TIMESTAMP, LAST_7_DAYS_TIMESTAMP } from '../../utils/contants';

 function Dropdown ({show}:any) {
  
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedValue,setSelectedValue]=useState<string | null>(null);
  const [isDatePicker,setIsDatePicker]=useState<boolean>(false);

  const dispatch=useAppDispatch();



  // function handleSelectChange(id: number){
  //     const updatedSelectedAmounts=selectedCheckBoxes.map((checkbox:checkboxType)=>checkbox.id===id?{ ...checkbox, isChecked: !checkbox.isChecked }:checkbox)
  //     setSelectedCheckBoxes(updatedSelectedAmounts)
  // }   
  // function handleSelectAllChange(): void {
  //     //const updatedSelectedAmounts=selectedCheckBoxes.map((checkbox:checkboxType)=>({ ...checkbox, isChecked: !isSelectAll }))
  //     //setSelectedCheckBoxes(updatedSelectedAmounts)
  //     //setIsSelectAll(!isSelectAll)
  // }
   
   function handleFilterSubmit(): void {
    let startTimeStamp=LAST_7_DAYS_TIMESTAMP
    let endTimeStamp=CURRENT_DATE
    if(selectedValue==null) return
    if(selectedValue=='99'){
      if(selectedStartDate!==null && selectedEndDate!==null){
        startTimeStamp=new Date(selectedStartDate).getTime();
        endTimeStamp=new Date(selectedEndDate).getTime();
      }
    }
    if(selectedValue==='7'){
      startTimeStamp=LAST_7_DAYS_TIMESTAMP
      endTimeStamp=CURRENT_DATE
    }
    if(selectedValue==='30'){
      startTimeStamp=LAST_30_DAYS_TIMESTAMP
      endTimeStamp=CURRENT_DATE
    }

    dispatch(updateGameResultFilter({filterTimeStamp:{startTimeStamp,endTimeStamp}}));

   }

   const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    setIsDatePicker(event.target.value==='99'? true:false)
  };

   function handleStartDateChange(date: Date | null, event: SyntheticEvent<any, Event> | undefined): void {
    
      setSelectedStartDate(date);
      
   }
   function handleEndDateChange(date: Date | null, event: SyntheticEvent<any, Event> | undefined): void {
      setSelectedEndDate(date);
   }

  return (
    <div className="dropdown">
        <div className={show ?'dropdown-stop' :'dropdown-content'}>
           <div className='filter_dropdown_item_container'>
            
            <div>
             <h4>Select date</h4> 
              <input type="radio"
                     id="7"
                     name="date_select"
                     value="7"
                     checked={selectedValue === '7'}
                     onChange={handleRadioChange}
                     />
                <label htmlFor="7">last 7 days</label><br/>
              <input type="radio"
                     id="30"
                     name="date_select"
                     value="30"
                     checked={selectedValue === '30'}
                     onChange={handleRadioChange}
                     />
                <label htmlFor="30">last 30 days</label><br/>
              <input type="radio"
                     id="99" 
                     name="date_select" 
                     value="99"
                     checked={selectedValue === '99'}
                     onChange={handleRadioChange}
                     />
                <label htmlFor="99">select date</label><br/>
          <div className={ isDatePicker?'date_select_container' : 'hide-date-picker'}>
              <DatePicker
                id="datepicker"
                selected={selectedStartDate}
                onChange={handleStartDateChange}
                placeholderText='from'
              />
              <DatePicker
                id="datepicker"
                selected={selectedEndDate}
                onChange={handleEndDateChange}
                placeholderText='to'
              />
              
          </div>

            </div>
            <div></div>
            {/* <div className='game_entry_amount_checkbox_conatainer'>
             
              <h4> Game entry amounts</h4>
              <input type="checkbox" id="select_all" checked={isSelectAll} value="select_all" onChange={handleSelectAllChange}/>
              <label htmlFor="select_all"> select all</label><br/>
                {selectedCheckBoxes.map((data) => (
                  <div key={data.id}>
                    <input type="checkbox" 
                           id={data.id.toString()} 
                           checked={data.isChecked}
                           name={data.value.toString()} 
                           value={data.value.toString()}
                           onChange={()=>handleSelectChange(data.id)}/>
                    <label htmlFor={data.value.toString()}> {data.value.toString()}</label>
                  </div>
                 ))
                }

            </div> */}
            
           </div>
           <div className='filter_dropdown_button_container'>
              <button className='dropdown_button'>reset</button>
              <button className='dropdown_button' onClick={handleFilterSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}
export default Dropdown