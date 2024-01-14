import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CURRENT_DATE, LAST_7_DAYS_TIMESTAMP } from "../utils/contants";

export interface RevenueStatType{
    totalProfit:number,
    amounts:number[],
    correctCount:number,
    incorrectCount:number,
    _id:string
};
interface GameStateType{
    filterTimeStamp:{
        startTimeStamp:number
        endTimeStamp:  number 
    }
};
const initialState:GameStateType={
    filterTimeStamp:{
        startTimeStamp:LAST_7_DAYS_TIMESTAMP,
        endTimeStamp:CURRENT_DATE
    }

}
const GameSlice=createSlice({
    name:'gameSlice',
    initialState,
    reducers:{
        updateGameResultFilter(state, actions:PayloadAction<GameStateType>){
           state.filterTimeStamp.startTimeStamp=actions.payload.filterTimeStamp.startTimeStamp;
           state.filterTimeStamp.endTimeStamp=actions.payload.filterTimeStamp.endTimeStamp;
        },
    }
}
)
export const {updateGameResultFilter}=GameSlice.actions
export default GameSlice