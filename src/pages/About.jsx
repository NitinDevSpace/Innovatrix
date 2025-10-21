import React from 'react'

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary2 to-accent1 text-white rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1470&q=80"
          alt="Hackathon background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-5xl mx-auto py-24 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold font-grotesk mb-6 drop-shadow-lg">Empowering Innovators. Inspiring Change.</h1>
          <p className="text-xl font-light max-w-3xl mx-auto opacity-90">
            Innovatrix connects builders, dreamers, and doers from across the world to collaborate, innovate, and solve meaningful challenges.
          </p>
          <div className="flex justify-center gap-8 mt-10 text-lg font-semibold opacity-90">
            <span>10K+ Builders</span>
            <span>100+ Hackathons</span>
            <span>5+ Countries</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-20 px-6 sm:px-10">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-primary border-b-4 border-accent1 pb-3 font-grotesk">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to bridge innovation and impact, Innovatrix was born out of the need for a unified ecosystem where ideas meet execution.
            What started as a small virtual hackathon in 2025 has now evolved into a global community of creators shaping the digital future.
          </p>
          <p className="italic text-gray-500">“Great ideas deserve a great stage.”</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
          alt="Our Story"
          className="md:w-1/2 rounded-xl shadow-xl object-cover"
        />
      </section>

      {/* Mission + Vision Section */}
      <section className="bg-gradient-to-r from-secondary2 to-accent1 py-20 text-white px-6 sm:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold mb-3 font-grotesk">Our Mission</h3>
            <p className="text-lg opacity-90">
              To empower problem solvers with the tools, exposure, and network they need to turn ideas into impactful solutions.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-semibold mb-3 font-grotesk">Our Vision</h3>
            <p className="text-lg opacity-90">
              To be the world’s leading platform for collaborative innovation and open growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Innovatrix Section */}
      <section className="py-20 bg-white px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary font-grotesk">Why Innovatrix?</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            A platform built for creators — by creators. We simplify innovation, connecting brilliant minds and bold ideas across borders.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl shadow-md bg-gradient-to-br from-primary/10 to-accent1/10">
            <h4 className="text-xl font-semibold text-primary mb-2">🧩 Accessible for Everyone</h4>
            <p className="text-gray-700">A simple, intuitive experience for all skill levels.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md bg-gradient-to-br from-primary/10 to-accent1/10">
            <h4 className="text-xl font-semibold text-primary mb-2">⚡ End-to-End Platform</h4>
            <p className="text-gray-700">Host, join, and manage hackathons — all in one place.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md bg-gradient-to-br from-primary/10 to-accent1/10">
            <h4 className="text-xl font-semibold text-primary mb-2">🌍 Global Community</h4>
            <p className="text-gray-700">Collaborate with innovators from 5+ countries.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-primary font-grotesk mb-12">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white rounded-lg shadow p-6 w-[200px]">
              <h4 className="text-2xl font-bold text-primary">10K+</h4>
              <p className="text-gray-600">Active Builders</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-[200px]">
              <h4 className="text-2xl font-bold text-primary">100+</h4>
              <p className="text-gray-600">Successful Events</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-[200px]">
              <h4 className="text-2xl font-bold text-primary">50+</h4>
              <p className="text-gray-600">Partners & Sponsors</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 w-[200px]">
              <h4 className="text-2xl font-bold text-primary">5+</h4>
              <p className="text-gray-600">Global Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="bg-gradient-to-r from-accent1 via-secondary2 to-primary text-white text-center py-24 px-6">
        <h2 className="text-5xl font-extrabold mb-6 font-grotesk">Join the Movement</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Whether you're a developer, designer, or visionary — Innovatrix is where your next big idea begins.
          Be part of a growing movement that builds the future together.
        </p>
        <button className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-opacity-90 transition">
          Join Innovatrix
        </button>
      </section>
    </div>
  )
}

export default About