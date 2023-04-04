import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
import nameReducer from './nameReducer'


export const store = configureStore({
  reducer: {
    name:nameReducer,
    counter:counterReducer
    
},
})