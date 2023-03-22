import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  users: []
};


export const getUsers = createAsyncThunk('/', async(_,{ rejectWithValue, dispatch}) =>  {
  const res = await axios.get('https://reactapi.bsite.net/api/Employee')
  dispatch(setUsers(res))
})
const userSlice = createSlice({

  
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: {
    [getUsers.fulfilled]: ()=> console.log('fullfiled'),
    [getUsers.pending]: ()=> console.log('pending'),
    [getUsers.rejected]: ()=> console.log('ошибкааа'),
  }
});


export const { addUser, editUser, deleteUser, setUsers, } = userSlice.actions;
export default userSlice.reducer;
