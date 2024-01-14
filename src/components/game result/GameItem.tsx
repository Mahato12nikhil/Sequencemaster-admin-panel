import React from 'react'
import './gameItem.css'
export default function GameItem(val:any) {
  return (
    <div className='list_item_container'>
        <div className='list_item'> {val._id}</div>
        <div className='list_item'>{val.amounts.join(', ')}</div>
        <div className='list_item'>{val.correctCount}</div>
        <div className='list_item'>{val.incorrectCount}</div>
        <div className='list_item'>{val.totalProfit}</div>
    </div>
  )
}
