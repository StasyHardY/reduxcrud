import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

  const initialState = {
    users: []
  };

  export const getUsers = createAsyncThunk('users/getUsers', async (_, { rejectWithValue, dispatch }) => {
    try {
      const {data} = await axios.get('https://reactapi.bsite.net/api/Employee')
      dispatch(setUsers(data))
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  });

  const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      addUser: (state, action) => {
        state.users.push(action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload
      console.log(action.payload)
      
      },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
  deleteUser: (state, action) => {
    const { id } = action.payload;
    const existingUserIndex = state.users.findIndex((user) => user.id === id);
    if (existingUserIndex !== -1) {
      state.users.splice(existingUserIndex, 1);
    }
  },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
    console.log('pending');
    })
    .addCase(getUsers.fulfilled, (state) => {
    console.log('fulfilled');
    })
    .addCase(getUsers.rejected, (state) => {
    console.log('rejected');
    });
  }
  });

export const { addUser, editUser, deleteUser, setUsers } = userSlice.actions;
export default userSlice.reducer;