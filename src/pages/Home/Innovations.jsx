import React from 'react'

const innovations = [
	{
		id: 1,
		title: "Smart Agriculture",
		description: "Using AI to optimize crop yields and reduce waste.",
		image: "https://deepsea-cdn.b-cdn.net/2022/03/smart_agriculture.jpg.webp",
	},
	{
		id: 2,
		title: "Renewable Energy",
		description: "Innovative solar panels with higher efficiency.",
		image:
			"https://www.investopedia.com/thmb/7gfCixGE40_BlpBi2GqN1HTi51Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2174080781-508c0aae85a94ae6a7c4f9c303eae4f1.jpg",
	},
	{
		id: 3,
		title: "Healthcare Tech",
		description: "Wearable devices for real-time health monitoring.",
		image:
			"https://www.national.edu/wp-content/uploads/2021/11/Nov_4_iStock-1127069581-scaled.jpeg",
	},
	{
		id: 4,
		title: "Smart Cities",
		description: "IoT solutions for better urban living and safety.",
		image:
			"https://thedailyplaniot.com/wp-content/uploads/2023/04/Smart-City.jpg",
	},
];

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