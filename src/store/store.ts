import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { mentorsReducer, usersReducer } from 'reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  mentors: mentorsReducer,
});

export const store = configureStore({ reducer: rootReducer });
