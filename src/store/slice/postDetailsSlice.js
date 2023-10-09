import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    post:{},
 }

const postDetSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost:(state,action)=>{
      state.post = action.payload
    
    }
  },

})

export const { setPost } = postDetSlice.actions;
export default postDetSlice.reducer;
