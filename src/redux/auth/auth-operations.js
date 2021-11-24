import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/singup', credentials);
    return data;
  } catch (error) {}
});

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`
//     }
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     }
// }

/* POST registration */

/* POST */

// const logIn = createAsyncThunk('auth/login', async credentilas => {
//     try {
//         const {data} = await.post('user/login', credentials);
//         token.set(data.token)
//         return
//     } catch (error) {

//     }
// })

/* GET */

// const fetchCurrentUser = createAsyncThunk(
//     'auth/refresh',
//     async(_, thunkAPI) => {
//         const state = thunkAPI.getState()
//         const persistedToken = state.auth.token;

//     }

const operations = {
  register,
};

export default operations;
