import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { MentorType } from 'reducers/types';

const initialState = {
  listId: 'mentors',
  items: [
    { name: 'Alex', id: v1() },
    { name: 'Hanna', id: v1() },
  ],
};
const slice = createSlice({
  name: 'mentors',
  initialState,
  reducers: {
    addMentor: (state, action: PayloadAction<MentorType>) => {
      state.items.push(action.payload);
    },
    deleteMentor(state, action: PayloadAction<string>) {
      const index = state.items.findIndex(mentor => mentor.id === action.payload);

      state.items.splice(index, 1);
    },
    changeMentorPosition: (
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

export const { addMentor, deleteMentor, changeMentorPosition } = slice.actions;
export const mentorsReducer = slice.reducer;
