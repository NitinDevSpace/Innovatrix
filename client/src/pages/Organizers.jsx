import React, { useState } from 'react'

function Organizers() {
  const [formData, setFormData] = useState({
    organizerId: `ORG-${Date.now()}`,
    instituteType: '',
    instituteName: '',
    email: '',
    phone: '',
    jobTitle: '',
    hackathonType: '',
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const instituteTypes = [
    'University',
    'College',
    'Bootcamp',
    'Company',
    'Community',
    'Other',
  ]

  const hackathonTypes = [
    'Online',
    'Onsite',
    'Hybrid',
  ]

  const validate = () => {
    const newErrors = {}

    if (!formData.instituteType) newErrors.instituteType = 'Type of Institute is required'
    if (!formData.instituteName.trim()) newErrors.instituteName = 'Institute Name is required'

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required'
    } else if (
      !/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/\s+/g, ''))
    ) {
      newErrors.phone = 'Invalid phone number (E.164 format recommended)'
    }

    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job Title is required'
    if (!formData.hackathonType) newErrors.hackathonType = 'Hackathon Type is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
    setSuccessMessage('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSuccessMessage('')

    try {
      const response = await fetch('http://localhost:8080/api/organizers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSuccessMessage('Registration successful! Thank you.')
      setFormData({
        organizerId: `ORG-${Date.now()}`,
        instituteType: '',
        instituteName: '',
        email: '',
        phone: '',
        jobTitle: '',
        hackathonType: '',
      })
      setErrors({})
    } catch (error) {
      setErrors({ submit: error.message || 'Submission failed' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 sm:p-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 animate-fadeInDown">
            Organizer Registration
          </h1>
          <p className="text-gray-600 text-lg animate-fadeInUp">
            Join us in making hackathons amazing. Register your institute now!
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <input type="hidden" name="organizerId" value={formData.organizerId} />

          <div>
            <label htmlFor="instituteType" className="block text-sm font-medium text-gray-700">
              Type of Institute <span className="text-red-500">*</span>
            </label>
            <select
              id="instituteType"
              name="instituteType"
              value={formData.instituteType}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.instituteType ? 'border-red-500' : ''
              }`}
            >
              <option value="" disabled>
                Select institute type
              </option>
              {instituteTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.instituteType && (
              <p className="mt-1 text-sm text-red-600">{errors.instituteType}</p>
            )}
          </div>

          <div>
            <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700">
              Institute Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="instituteName"
              id="instituteName"
              placeholder="Your Institute's Name"
              value={formData.instituteName}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.instituteName ? 'border-red-500' : ''
              }`}
            />
            {errors.instituteName && (
              <p className="mt-1 text-sm text-red-600">{errors.instituteName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+1234567890"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.phone ? 'border-red-500' : ''
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Your Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.jobTitle ? 'border-red-500' : ''
              }`}
            />
            {errors.jobTitle && (
              <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
            )}
          </div>

          <div>
            <label htmlFor="hackathonType" className="block text-sm font-medium text-gray-700">
              Hackathon Type <span className="text-red-500">*</span>
            </label>
            <select
              id="hackathonType"
              name="hackathonType"
              value={formData.hackathonType}
              onChange={handleChange}
              required
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ${
                errors.hackathonType ? 'border-red-500' : ''
              }`}
            >
              <option value="" disabled>
                Select hackathon type
              </option>
              {hackathonTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.hackathonType && (
              <p className="mt-1 text-sm text-red-600">{errors.hackathonType}</p>
            )}
          </div>

          {errors.submit && (
            <p className="text-red-600 text-center text-sm">{errors.submit}</p>
          )}

          {successMessage && (
            <p className="text-green-600 text-center text-sm">{successMessage}</p>
          )}

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Organizers