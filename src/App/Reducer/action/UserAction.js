import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getUsers = createAsyncThunk('users',async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      console.log(response.data);
      
      return response.data
    }
  );


export default getUsers;