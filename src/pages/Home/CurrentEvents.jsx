import React from 'react'

function CurrentEvents() {
  const events = [
    {
      id: 1,
      title: 'Event One',
      description: 'This is a short description for event one.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 2,
      title: 'Event Two',
      description: 'This is a short description for event two.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 3,
      title: 'Event Three',
      description: 'This is a short description for event three.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 4,
      title: 'Event Four',
      description: 'This is a short description for event four.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 5,
      title: 'Event Five',
      description: 'This is a short description for event five.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 6,
      title: 'Event Five',
      description: 'This is a short description for event five.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 7,
      title: 'Event Five',
      description: 'This is a short description for event five.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
    {
      id: 8,
      title: 'Event Five',
      description: 'This is a short description for event five.',
      image: 'https://image-placeholder.com/images/actual-size/320x200.png',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Current Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map(({ id, title, description, image }) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentEvents