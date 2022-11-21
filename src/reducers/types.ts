export type ItemsType = { name: string; id: string };

export type UserType = { name: string; id: string };
export type MentorType = Pick<UserType, 'name' | 'id'>;

export type UsersStateType<T> = {
  listId: string;
  items: T;
};
export type MentorsStateType<T> = {
  listId: string;
  items: T;
};
