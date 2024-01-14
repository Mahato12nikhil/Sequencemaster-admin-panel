import React from 'react'
import './gameHeader.css'
export default function GameItemHeader() {
  return (
    <div className='list_header_container'>
        <div className='list_head'> Date</div>
        <div className='list_head'>Game entry amounts</div>
        <div className='list_head'>Correct</div>
        <div className='list_head'>Incorrect</div>
        <div className='list_head'>Outcome</div>
   </div>
  )
}
