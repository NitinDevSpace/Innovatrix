import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Card({ card, index, moveLeft, moveRight, deleteCard }) {
  const categoryBgColor = {
    Planned: 'bg-blue-100',
    'In Progress': 'bg-yellow-100',
    Done: 'bg-green-100',
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`rounded shadow p-4 mb-3 flex flex-col ${
            snapshot.isDragging ? 'bg-blue-50' : ''
          } ${categoryBgColor[card.category] || ''}`}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-bold text-gray-900">{card.title}</div>
              <div className="text-sm text-gray-800">{card.content}</div>
            </div>
            <button
              onClick={deleteCard}
              className="text-red-500 hover:text-red-700 font-bold ml-2"
              aria-label="Delete card"
            >
              &times;
            </button>
          </div>

          <div className="flex justify-between mt-2">
            <button
              onClick={moveLeft}
              className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm"
              aria-label="Move card left"
            >
              &larr;
            </button>
            <button
              onClick={moveRight}
              className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm"
              aria-label="Move card right"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Card