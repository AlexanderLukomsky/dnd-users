import { MentorType, UserType } from 'reducers/types';
import { AppStoreType } from 'store';

export const selectUsersItems = (state: AppStoreType): UserType[] => state.users.items;
export const selectUsersListId = (state: AppStoreType): string => state.users.listId;

export const selectMentorsItems = (state: AppStoreType): MentorType[] =>
  state.mentors.items;
export const selectMentorsListId = (state: AppStoreType): string => state.mentors.listId;
