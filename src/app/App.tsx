import { useState } from 'react';

import { useSelector } from 'react-redux';

import 'app/style/app.scss';
import { DragList } from 'common/components';
import {
  selectMentorsItems,
  selectMentorsListId,
  selectUsersItems,
  selectUsersListId,
} from 'common/utils';
import { addMentor, changeMentorPosition, deleteMentor } from 'reducers/mentors-reducer';
import { addUser, changeUserPosition, deleteUser } from 'reducers/user-reducer';
import { useAppDispatch } from 'store';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const usersListId = useSelector(selectUsersListId);
  const usersItems = useSelector(selectUsersItems);

  const mentorsListId = useSelector(selectMentorsListId);
  const mentorsItems = useSelector(selectMentorsItems);

  const [dragFromListId, setDragFromListId] = useState<string>('');
  const [dragElementId, setDragElementId] = useState<string>('');

  const handleItemDragStart = (params: { listId: string; elementId: string }): void => {
    setDragFromListId(params.listId);
    setDragElementId(params.elementId);
  };

  const handleUserDragEnter = (targetId: string): void => {
    if (dragElementId === targetId) {
      return;
    }
    dispatch(changeUserPosition({ currentId: dragElementId, targetId }));
  };
  const handleMentorDragEnter = (targetId: string): void => {
    if (dragElementId === targetId) {
      return;
    }
    dispatch(changeMentorPosition({ currentId: dragElementId, targetId }));
  };

  const handleListDragEnter = (listId: string): void => {
    if (listId !== dragFromListId) {
      setDragFromListId(listId);
      if (dragFromListId === usersListId) {
        const user = usersItems.find(user => user.id === dragElementId);

        if (user) {
          dispatch(addMentor(user));
          dispatch(deleteUser(user.id));
        }
      }
      if (dragFromListId === mentorsListId) {
        const mentor = mentorsItems.find(mentor => mentor.id === dragElementId);

        if (mentor) {
          dispatch(addUser(mentor));
          dispatch(deleteMentor(mentor.id));
        }
      }
    }
  };

  return (
    <div className="app">
      <DragList
        listId={usersListId}
        items={usersItems}
        onDragStart={handleItemDragStart}
        onDragEnter={handleUserDragEnter}
        onDragListEnter={handleListDragEnter}
      />
      <DragList
        listId={mentorsListId}
        items={mentorsItems}
        onDragStart={handleItemDragStart}
        onDragEnter={handleMentorDragEnter}
        onDragListEnter={handleListDragEnter}
      />
    </div>
  );
};
