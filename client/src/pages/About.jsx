import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-6 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg overflow-hidden mb-12 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"
          alt="Hackathon background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative max-w-4xl mx-auto py-24 px-6 text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">About Hackon</h1>
          <p className="text-xl font-light drop-shadow-md max-w-2xl mx-auto">
            Connecting innovators worldwide to build, learn, and create together.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Our Mission Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80"
            alt="Our Mission"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-semibold text-indigo-700 border-b-4 border-indigo-300 pb-2 mb-4">Our Mission</h2>
            <p className="leading-relaxed text-lg">
              At Hackon, our mission is to foster creativity and innovation by providing a seamless platform where hackers can come together to solve real-world problems. We strive to nurture talent, encourage collaboration, and celebrate the spirit of open-source development.
            </p>
          </div>
        </section>

        {/* Why Hackon Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 md:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="Why Hackon"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-semibold text-indigo-700 border-b-4 border-indigo-300 pb-2 mb-4">Why Hackon?</h2>
            <p className="leading-relaxed text-lg">
              Whether you're a seasoned developer or just starting out, Hackon offers a user-friendly interface, powerful tools, and a vibrant community. Participate in themed hackathons, showcase your skills, and gain valuable experience while networking with industry experts and peers.
            </p>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Join Us"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl font-semibold text-indigo-700 border-b-4 border-indigo-300 pb-2 mb-4">Join Us</h2>
            <p className="leading-relaxed text-lg">
              Ready to turn your ideas into reality? Join Hackon today and be part of a global movement that celebrates innovation and collaboration. Sign up, join upcoming hackathons, and start building the future with us!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About