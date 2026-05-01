import { configureStore } from '@reduxjs/toolkit'
import groceryReducer from '../features/grocery/grocerySlice'

export default configureStore({
    reducer : {
       grocery : groceryReducer
    }
})