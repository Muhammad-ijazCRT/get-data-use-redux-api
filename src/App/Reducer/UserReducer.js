import { createSlice } from '@reduxjs/toolkit'
import {getUsers} from '../Reducer/action/UserAction'

export const UserSlice = createSlice({
  name: 'khan',
  initialState: {
    User: [],
    loader:false,
    error: {}
    
  },

  reducers:{
    addUser:(state, action) =>{
      console.log(action);
      state.User(...state, action.payload)

    },
},

  ExtrarReducer:{
    [getUsers.pending] : (state, action) =>{
      state.loader = true
    },
    [getUsers.fulfilled] : (state, action) =>{
      [state.loader] = true;
      [state.User] = action.payload;
    },
    [getUsers.pending] : (state, action) =>{
      [state.loader] = false;
      [state.error] = action.payload;

    },
  }





});
export const { addUser } = UserSlice.actions
export default UserSlice.reducer