import React from 'react'

const innovations = [
  {
    id: 1,
    title: 'Smart Agriculture',
    description: 'Using AI to optimize crop yields and reduce waste.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 2,
    title: 'Renewable Energy',
    description: 'Innovative solar panels with higher efficiency.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 3,
    title: 'Healthcare Tech',
    description: 'Wearable devices for real-time health monitoring.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 4,
    title: 'Smart Cities',
    description: 'IoT solutions for better urban living and safety.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 5,
    title: 'Autonomous Vehicles',
    description: 'Self-driving cars improving transportation safety.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 6,
    title: 'Autonomous Vehicles',
    description: 'Self-driving cars improving transportation safety.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 7,
    title: 'Autonomous Vehicles',
    description: 'Self-driving cars improving transportation safety.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
  {
    id: 8,
    title: 'Autonomous Vehicles',
    description: 'Self-driving cars improving transportation safety.',
    image: 'https://image-placeholder.com/images/actual-size/320x200.png',
  },
]

function Innovations() {
  return (
    <section className="py-12 bg-accent3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white font-grotesk mb-8 text-center">Innovations</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {innovations.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img src={image} alt={title} className="w-full h-44 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovations