import { FC } from 'react';

export const DragList: FC<DragListPropsType> = ({
  listId,
  items,
  onDragStart,
  onDragEnter,
  onDragListEnter,
}: DragListPropsType) => {
  return (
    <ul
      role="presentation"
      className="list"
      onDragEnter={() => {
        if (onDragListEnter) {
          onDragListEnter(listId);
        }
      }}
    >
      {items.map(item => (
        <li
          role="presentation"
          draggable
          key={item.id}
          className="list__item"
          onDragStart={() => {
            onDragStart({ listId, elementId: item.id });
          }}
          onDragEnter={() => {
            onDragEnter(item.id);
          }}
        >
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
type DragListPropsType = {
  listId: string;
  items: {
    id: string;
    name: string;
  }[];

  onDragStart: (params: { listId: string; elementId: string }) => void;
  onDragEnter: (targetId: string) => void;
  onDragListEnter?: (listId: string) => void;
};
