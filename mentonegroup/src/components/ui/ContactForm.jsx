// src/components/ui/ContactForm.jsx
import { useState } from 'react'
import { send } from '@emailjs/browser'
import Button from './Button'

const ContactForm = ({ companyId = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: companyId
      ? `Inquiry about ${companyId.replace(/-/g, ' ')}`
      : 'General Inquiry',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)


// 👉 Static EmailJS credentials
    const serviceID  = 'service_2g0tsyi'
    const templateID = 'template_72waimz'
    const userID     = 'r5tocCdEr9r_Lm34V'

    try {
      await send(
        serviceID,
        templateID,
        {
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          companyId,              // if you want this in your template
        },
        userID
      )

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        subject: companyId
          ? `Inquiry about ${companyId.replace(/-/g, ' ')}`
          : 'General Inquiry',
      })

      // clear success banner after 3s
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitError(true)
      // clear error banner after 5s
      setTimeout(() => setSubmitError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

      {submitSuccess && (
        <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for your message! We’ll get back to you soon.
        </div>
      )}
      {submitError && (
        <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          Oops! Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-gray-700 mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-auto bg-blue-900 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
