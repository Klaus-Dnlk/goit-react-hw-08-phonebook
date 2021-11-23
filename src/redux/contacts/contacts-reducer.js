import { createReducer, combineReducers } from '@reduxjs/toolkit';
import changeFilter from './contacts-actions';
import operations from './contacts-operations';

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addNewContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.addNewContact.pending]: () => true,
  [operations.addNewContact.fulfilled]: () => false,
  [operations.addNewContact.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
