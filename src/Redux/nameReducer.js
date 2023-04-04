import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  name : "No Name",
  fakedata : [],
  json : []
}

export const fetchFakeApi = createAsyncThunk('fetch', async () =>{
  const response = await axios.get('https://fakestoreapi.com/products')
  return response.data
})

export const fetchjsonApi = createAsyncThunk('json', async () =>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
})

export const counterName = createSlice({
    name: 'name',
    initialState,
    reducers: {
        changeName: (state,action) => {
            state.name = action.payload
          },

        fakedata:(state,action) => {
          
          state.fakedata.push(...action.payload)
        }
    },

    extraReducers(builder) {
      builder
      .addCase(fetchFakeApi.pending, (state, action) => {
        state.fakeStatus = 'loading'
      })
      .addCase(fetchFakeApi.fulfilled, (state, action) => {
        state.fakedata = action.payload
        state.fakeStatus = 'loading'
      })
      .addCase(fetchFakeApi.rejected, (state, action) => {
        state.fakeStatus = 'fullfilled'
        state.fakeError = action.error.message
      })
      .addCase(fetchjsonApi.pending, (state, action) => {
        state.jsonStatus = 'loading'
      })
      .addCase(fetchjsonApi.fulfilled, (state, action) => {
        state.json = action.payload
        state.jsonStatus = 'fullfilled'
      })
      .addCase(fetchjsonApi.rejected, (state, action) => {
        
        state.jsonError = action.error.message
      })
        
    }
  })


  export const { changeName , fakedata } = counterName.actions

  export default counterName.reducer