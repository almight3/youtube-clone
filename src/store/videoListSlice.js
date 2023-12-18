import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videoList: [],
}

export const videoList = createSlice({
  name: 'videoList',
  initialState,
  reducers: {
   
  },
})

export const {  } = videoList.actions

export default videoList.reducer