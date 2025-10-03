import React from 'react'
import { Instagram, Facebook } from 'lucide-react';

function Community() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">Join Our Community</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto animate-fadeIn delay-200">
          Connect, share, and grow with like-minded individuals around the world.
        </p>
        <div className="flex justify-center space-x-10 text-gray-600 mt-8">
          <a
            href="https://instagram.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transform transition-transform duration-300 hover:text-pink-600 hover:scale-110"
          >
            <Instagram className="w-8 h-8 text-white" />
          </a>

          <a
            href="https://facebook.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transform transition-transform duration-300 hover:text-blue-600 hover:scale-110"
          >
            <Facebook className="w-8 h-8 text-white" />
          </a>

          <a
            href="https://twitter.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
              className="w-8 h-8 filter invert transition-transform duration-300 hover:scale-110"
              alt="Twitter"
            />
          </a>

          <a
            href="https://wa.me/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              className="w-8 h-8 filter invert transition-transform duration-300 hover:scale-110"
              alt="WhatsApp"
            />
          </a>
        </div>
      </section>

      {/* Why Join Sections */}
      <section className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        {/* Section 1 */}
        <div className="md:flex md:items-center md:space-x-12">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Collaboration"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Collaborate with Passionate People</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Engage with a diverse group of individuals who share your interests and goals. Our community fosters collaboration and innovation.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="md:flex md:items-center md:space-x-12 md:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
            alt="Learning"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Learn and Grow Together</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Access exclusive resources, workshops, and discussions designed to help you advance your skills and knowledge.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="md:flex md:items-center md:space-x-12">
          <img
            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80"
            alt="Support"
            className="rounded-lg shadow-lg w-full md:w-1/2 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="mt-8 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Supportive Environment</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Find encouragement and motivation from members who understand your journey and are eager to help.
            </p>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Community