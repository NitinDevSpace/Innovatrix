import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'

function Column({ column, cards, onMoveCard, onDeleteCard }) {
  return (
    <div className="bg-gray-100 rounded-md p-4 w-72 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">{column.title}</h2>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-col space-y-3 min-h-[120px] p-2 rounded-md ${
              snapshot.isDraggingOver ? 'bg-blue-50' : ''
            }`}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                index={index}
                category={column.title}
                moveLeft={() => onMoveCard(card.id, 'left')}
                moveRight={() => onMoveCard(card.id, 'right')}
                deleteCard={() => onDeleteCard(card.id)}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column