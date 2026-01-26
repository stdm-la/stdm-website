'use server'

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    const name = formData.get('name')
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return {
        success: false,
        message: 'Please provide your name.',
      }
    }

    const email = formData.get('email')
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return {
        success: false,
        message: 'Please provide your email address.',
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      }
    }

    const message = formData.get('message')
    if (!message || typeof message !== 'string' || message.trim() === '') {
      return {
        success: false,
        message: 'Please provide a message.',
      }
    }

    const subject = formData.get('subject') || ''

    // Get the API route URL (works in both dev and production)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/contact'

    // Prepare JSON payload
    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: typeof subject === 'string' ? subject.trim() : '',
      message: message.trim(),
    }

    // Call the API route
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (res.ok && data.success) {
      return { success: true, message: data.message || 'Thanks for your submission!' }
    } else {
      return {
        success: false,
        message: data.message || 'Oops! There was a problem submitting your form',
      }
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Oops! There was a problem submitting your form',
    }
  }
}

export default action
