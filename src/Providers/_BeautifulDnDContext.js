import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { AppContext } from '@App';

export default function BeautifulDnDContext({ children }) {
  const { readingList, setReadingList } = useContext(AppContext);

  return (
    <DragDropContext onDragEnd={ (result) => onDragEnd(result) }>
     { children }
    </DragDropContext>
  )

  function onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const itemToMove = readingList.find(item => {
      return item._id === draggableId
    })

    const newIds = Array.from(readingList);
    newIds.splice(source.index, 1);
    newIds.splice(destination.index, 0, itemToMove);

    setReadingList([...newIds])
  }

}
