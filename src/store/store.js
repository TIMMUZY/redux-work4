import { configureStore } from '@reduxjs/toolkit'
import postSlice from './slice/postSlice'
import postDetailsSlice from './slice/postDetailsSlice'

const store = configureStore({
     reducer:{
        postSlice,
        postDetailsSlice
     }
    })
export default store