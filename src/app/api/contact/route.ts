import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextRequest, NextResponse } from 'next/server'

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: process.env.AWS_ACCESS_KEY_ID
    ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      }
    : undefined, // If no credentials provided, use IAM role (for Amplify)
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Please provide your name.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Please provide your email address.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Please provide a message.' },
        { status: 400 }
      )
    }

    // Get recipient email from environment variable
    const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL
    if (!recipientEmail) {
      console.error('CONTACT_FORM_RECIPIENT_EMAIL is not configured')
      return NextResponse.json(
        { success: false, message: 'Contact form is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Prepare email content
    const emailSubject = subject && subject.trim() !== '' ? subject.trim() : 'Contact Form Submission - No Subject'
    const emailBody = `
New contact form submission from your website:

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${emailSubject}

Message:
${message.trim()}

---
This email was sent from your website contact form.
    `.trim()

    // Send email using SES
    const command = new SendEmailCommand({
      Source: process.env.CONTACT_FORM_FROM_EMAIL || recipientEmail, // Must be verified in SES
      Destination: {
        ToAddresses: [recipientEmail],
      },
      Message: {
        Subject: {
          Data: `Contact Form: ${emailSubject}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8',
          },
          Html: {
            Data: `
              <html>
                <body>
                  <h2>New contact form submission</h2>
                  <p><strong>Name:</strong> ${name.trim()}</p>
                  <p><strong>Email:</strong> ${email.trim()}</p>
                  <p><strong>Subject:</strong> ${emailSubject}</p>
                  <h3>Message:</h3>
                  <p>${message.trim().replace(/\n/g, '<br>')}</p>
                  <hr>
                  <p><em>This email was sent from your website contact form.</em></p>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [email.trim()], // Allow replying directly to the sender
    })

    await sesClient.send(command)

    return NextResponse.json({
      success: true,
      message: 'Thanks for your submission!',
    })
  } catch (error) {
    console.error('Contact form API error:', error)

    // Handle specific AWS errors
    if (error instanceof Error) {
      if (error.name === 'MessageRejected') {
        return NextResponse.json(
          { success: false, message: 'Email could not be sent. Please verify your email address.' },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      { success: false, message: 'Oops! There was a problem submitting your form' },
      { status: 500 }
    )
  }
}
