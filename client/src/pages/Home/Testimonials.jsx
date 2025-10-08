import React, { useState } from 'react'

const testimonials = [
  {
    avatar: 'https://i.pravatar.cc/100?img=1',
    name: 'Jane Doe',
    title: 'Marketing Manager',
    quote: 'This product has completely transformed the way our team works. Highly recommended!'
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=2',
    name: 'John Smith',
    title: 'Software Engineer',
    quote: 'An intuitive and powerful tool that has boosted our productivity immensely.'
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=3',
    name: 'Emily Johnson',
    title: 'UX Designer',
    quote: 'The user experience is fantastic. It’s clear a lot of thought went into this.'
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=4',
    name: 'Michael Brown',
    title: 'Product Owner',
    quote: 'Our team collaboration has never been better thanks to this amazing solution.'
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=5',
    name: 'Sarah Wilson',
    title: 'Content Strategist',
    quote: 'I love how easy it is to use and the support team is super responsive.'
  }
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const { avatar, name, title, quote } = testimonials[current]

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] px-4 py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">What Our Clients Say</h2>
      <p className="text-gray-600 mb-6 text-center max-w-xl">Hear from our customers how our platform has transformed their workflows.</p>
      <div className="flex items-center space-x-6">
        <button
          onClick={prevTestimonial}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow hover:bg-secondary transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          &#x276E;
        </button>
        <div className="max-w-xl bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-500 ease-in-out">
          <img
            src={avatar}
            alt={name}
            className="mx-auto w-24 h-24 rounded-full object-cover mb-4 shadow-md"
          />
          <p className="text-gray-700 italic mb-6">&quot;{quote}&quot;</p>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500 mb-4">{title}</p>
        </div>
        <button
          onClick={nextTestimonial}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow hover:bg-secondary transition-colors duration-300"
          aria-label="Next testimonial"
        >
          &#x276F;
        </button>
      </div>
    </div>
  )
}

export default Testimonials