import {createSlice} from '@reduxjs/toolkit'

const counter= createSlice({
    name : "tasbiix",
   initialState: {
    tasbiihValue: 0,
   
   },
   
   reducers : {
      incriment: (state,action) =>{
        state.tasbiihValue += action.payload;
      },
      decriment: (state)  =>{
       if(state.tasbiihValue>0){
        state.tasbiihValue -= 1;
       }
      },
      reset: (state) =>{
        state.tasbiihValue = 0
      },
      
   }
})

export const {incriment,decriment,reset}  = counter.actions

export default counter.reducer