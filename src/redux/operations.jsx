import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://63fca2718ef914c5559be359.mockapi.io/',
});

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkApi) => {
    try {
      const response = await instance.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
