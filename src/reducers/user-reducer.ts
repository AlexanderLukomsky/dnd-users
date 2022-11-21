import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { UserType } from 'reducers/types';

const initialState = {
  listId: 'users',
  items: [
    { name: 'Bruce', id: v1() },
    { name: 'David', id: v1() },
    { name: 'John', id: v1() },
  ],
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      state.items.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);

      state.items.splice(index, 1);
    },
    changeUserPosition: (
      state,
      action: PayloadAction<{ currentId: string; targetId: string }>,
    ) => {
      const currentIndex = state.items.findIndex(
        item => item.id === action.payload.currentId,
      );
      const targetIndex = state.items.findIndex(
        item => item.id === action.payload.targetId,
      );

      const currentElementContent = state.items[currentIndex];

      state.items.splice(currentIndex, 1);
      state.items.splice(targetIndex, 0, currentElementContent);
    },
  },
});

export const usersReducer = slice.reducer;
export const { deleteUser, changeUserPosition, addUser } = slice.actions;
