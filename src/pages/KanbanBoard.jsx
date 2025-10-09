import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../components/Column";

const LOCAL_STORAGE_KEY = 'kanban-board-data';

const initialData = {
  columns: {
    "column-1": { id: "column-1", title: "Planned", cardIds: [] },
    "column-2": { id: "column-2", title: "In Progress", cardIds: [] },
    "column-3": { id: "column-3", title: "Done", cardIds: [] },
  },
  cards: {},
  columnOrder: ["column-1","column-2","column-3"],
};

function KanbanBoard() {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : initialData;
    } catch {
      return initialData;
    }
  });

  const [newCardContent, setNewCardContent] = useState({ title: "", content: "" });
  const [selectedColumn, setSelectedColumn] = useState(data.columnOrder[0]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch {}
  }, [data]);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, cardIds: newCardIds };
      setData(prev => ({
        ...prev,
        columns: { ...prev.columns, [newColumn.id]: newColumn },
      }));
      return;
    }

    // moving to different column
    const startCardIds = Array.from(start.cardIds);
    startCardIds.splice(source.index, 1);
    const newStart = { ...start, cardIds: startCardIds };

    const finishCardIds = Array.from(finish.cardIds);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, cardIds: finishCardIds };

    setData(prev => {
      // update card category as well
      const updatedCard = { ...prev.cards[draggableId], category: finish.title };
      return {
        ...prev,
        cards: { ...prev.cards, [draggableId]: updatedCard },
        columns: { ...prev.columns, [newStart.id]: newStart, [newFinish.id]: newFinish },
      };
    });
  };

  const onAddCard = () => {
    if (!newCardContent.title.trim() && !newCardContent.content.trim()) return;
    const id = `card-${Date.now()}`;
    const newCard = { id, title: newCardContent.title.trim(), content: newCardContent.content.trim(), category: data.columns[selectedColumn].title };
    setData(prev => {
      const newCards = { ...prev.cards, [id]: newCard };
      const newColumn = { ...prev.columns[selectedColumn], cardIds: [...prev.columns[selectedColumn].cardIds, id] };
      return { ...prev, cards: newCards, columns: { ...prev.columns, [selectedColumn]: newColumn } };
    });
    setNewCardContent({ title: "", content: "" });
  };

  const onMoveCard = (cardId, direction) => {
    const currentColumnId = Object.keys(data.columns).find(colId => data.columns[colId].cardIds.includes(cardId));
    if (!currentColumnId) return;
    const order = data.columnOrder;
    const idx = order.indexOf(currentColumnId);
    const toIdx = direction === 'left' ? idx -1 : idx +1;
    if (toIdx < 0 || toIdx >= order.length) return;
    const targetColumnId = order[toIdx];
    const targetCategory = data.columns[targetColumnId].title;

    setData(prev => {
      const fromCardIds = prev.columns[currentColumnId].cardIds.filter(id => id !== cardId);
      const toCardIds = [...prev.columns[targetColumnId].cardIds, cardId];
      const updatedCard = { ...prev.cards[cardId], category: targetCategory };
      return {
        ...prev,
        cards: { ...prev.cards, [cardId]: updatedCard },
        columns: {
          ...prev.columns,
          [currentColumnId]: { ...prev.columns[currentColumnId], cardIds: fromCardIds },
          [targetColumnId]: { ...prev.columns[targetColumnId], cardIds: toCardIds },
        },
      };
    });
  };

  const onDeleteCard = (cardId) => {
    setData(prev => {
      const { [cardId]: _, ...restCards } = prev.cards;
      const newColumns = Object.fromEntries(Object.entries(prev.columns).map(([colId, col]) => [colId, { ...col, cardIds: col.cardIds.filter(id => id !== cardId) }]));
      return { ...prev, cards: restCards, columns: newColumns };
    });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kanban Board</h1>
        <div className="mb-4 flex gap-2 items-center">
          <select className="border px-2 py-1 rounded" value={selectedColumn} onChange={e=>setSelectedColumn(e.target.value)}>
            {data.columnOrder.map(colId=> <option key={colId} value={colId}>{data.columns[colId].title}</option>)}
          </select>
          <input className="border px-3 py-2 rounded w-40" placeholder="Title" value={newCardContent.title} onChange={e=>setNewCardContent(prev => ({ ...prev, title: e.target.value }))} onKeyDown={e=> e.key==='Enter' && onAddCard()} />
          <input className="flex-1 border px-3 py-2 rounded" placeholder="Content" value={newCardContent.content} onChange={e=>setNewCardContent(prev => ({ ...prev, content: e.target.value }))} onKeyDown={e=> e.key==='Enter' && onAddCard()} />
          <button onClick={onAddCard} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.columnOrder.map(colId => {
              const column = data.columns[colId];
              const cards = column.cardIds.map(id => data.cards[id]).filter(Boolean);
              return <Column key={colId} column={column} cards={cards} onMoveCard={onMoveCard} onDeleteCard={onDeleteCard} category={column.title} />
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default KanbanBoard;
