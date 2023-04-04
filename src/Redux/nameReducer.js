import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name : "No Name",
}


export const counterName = createSlice({
    name: 'name',
    initialState,
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload  
          },
      
    },
  })


  export const { changeName } = counterName.actions

  export default counterName.reducer