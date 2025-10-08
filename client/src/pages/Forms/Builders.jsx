import React, { useState } from 'react'

function Builders() {
  const [formData, setFormData] = useState({
    participantId: `P-${Math.floor(100000 + Math.random() * 900000)}`,
    name: '',
    email: '',
    companyName: '',
    skill: '',
    phoneNumber: '',
    jobTitle: '',
    referralSource: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email) => {
    // Basic email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone) => {
    // Basic phone validation (digits, spaces, dashes, parentheses)
    return /^[0-9\s\-()+]+$/.test(phone)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    // Basic validations
    if (!formData.name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!formData.companyName.trim()) {
      setError('Please enter your company name.')
      return
    }
    if (!formData.skill.trim()) {
      setError('Please enter your skill.')
      return
    }
    if (!validatePhone(formData.phoneNumber)) {
      setError('Please enter a valid phone number.')
      return
    }
    if (!formData.jobTitle.trim()) {
      setError('Please enter your job title.')
      return
    }
    if (!formData.referralSource.trim()) {
      setError('Please enter how you heard about us.')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('http://localhost:8080/api/builders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errData = await response.json()
        throw new Error(errData.message || 'Failed to submit form')
      }

      setSuccess('Registration successful! Thank you for registering.')
      setFormData({
        participantId: `P-${Math.floor(100000 + Math.random() * 900000)}`,
        name: '',
        email: '',
        companyName: '',
        skill: '',
        phoneNumber: '',
        jobTitle: '',
        referralSource: '',
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-600 flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
        <div className="lg:flex">
          <div className="lg:w-1/2 bg-gradient-to-br from-purple-700 to-pink-500 p-12 flex flex-col justify-center text-white">
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Builder Registration</h1>
            <p className="text-lg font-light opacity-90 leading-relaxed">
              Join our community of innovators and builders. Fill out the form to register and showcase your skills.
            </p>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="Builders working"
                className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-white p-10 sm:p-12 flex flex-col justify-center"
            noValidate
          >
            <input type="hidden" name="participantId" value={formData.participantId} />
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Your company or organization"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="skill" className="block text-gray-700 font-semibold mb-1">
                Skill <span className="text-red-500">*</span>
              </label>
              <input
                id="skill"
                name="skill"
                type="text"
                placeholder="Your main skill or expertise"
                value={formData.skill}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="Your current job title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="referralSource" className="block text-gray-700 font-semibold mb-1">
                Referral Source <span className="text-red-500">*</span>
              </label>
              <input
                id="referralSource"
                name="referralSource"
                type="text"
                placeholder="How did you hear about us?"
                value={formData.referralSource}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            {error && <p className="mb-4 text-red-600 font-semibold animate-pulse">{error}</p>}
            {success && <p className="mb-4 text-green-600 font-semibold animate-pulse">{success}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-3 rounded-md shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Builders