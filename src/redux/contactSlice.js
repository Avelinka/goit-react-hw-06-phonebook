import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from '../components/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
