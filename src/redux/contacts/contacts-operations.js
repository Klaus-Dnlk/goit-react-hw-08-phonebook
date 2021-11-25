import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://61980945164fa60017c22f32.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // fetchContacts,
  addNewContact,
  deleteContact,
};
