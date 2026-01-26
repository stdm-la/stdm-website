# AWS SES Contact Form Setup Guide

This guide will help you set up AWS Simple Email Service (SES) for your contact form on AWS Amplify.

## Prerequisites

- AWS Account
- AWS Amplify app deployed
- Access to AWS Console

## Step 1: Set Up AWS SES

### 1.1 Verify Your Email Address (Sandbox Mode)

1. Go to [AWS SES Console](https://console.aws.amazon.com/ses/)
2. Navigate to **Verified identities** in the left sidebar
3. Click **Create identity**
4. Select **Email address**
5. Enter the email address where you want to receive contact form submissions
6. Click **Create identity**
7. Check your email and click the verification link

### 1.2 Verify Sender Email (Optional but Recommended)

1. In **Verified identities**, create another identity for the "from" email address
2. This should be an email you own (e.g., `noreply@yourdomain.com` or `contact@yourdomain.com`)
3. Verify this email as well

### 1.3 Request Production Access (If Needed)

If you want to send emails to unverified addresses:
1. In SES Console, go to **Account dashboard**
2. Click **Request production access**
3. Fill out the form explaining your use case
4. Wait for approval (usually 24-48 hours)

**Note:** In sandbox mode, you can only send emails to verified addresses. For production, you need to request access.

## Step 2: Configure IAM Permissions in Amplify

### 2.1 Create IAM Policy

1. Go to [IAM Console](https://console.aws.amazon.com/iam/)
2. Click **Policies** → **Create policy**
3. Click **JSON** tab and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

4. Click **Next**, name it `AmplifySESPolicy`
5. Click **Create policy**

### 2.2 Attach Policy to Amplify Service Role

1. In IAM Console, go to **Roles**
2. Find your Amplify service role (usually named like `amplify-*-us-east-1-*`)
3. Click on the role
4. Click **Add permissions** → **Attach policies**
5. Search for and select `AmplifySESPolicy`
6. Click **Add permissions**

## Step 3: Configure Environment Variables in Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your app
3. Go to **App settings** → **Environment variables**
4. Add the following variables:

```
CONTACT_FORM_RECIPIENT_EMAIL=your-email@example.com
CONTACT_FORM_FROM_EMAIL=noreply@yourdomain.com (or same as recipient)
AWS_REGION=us-east-1 (or your preferred region)
```

**Optional (if not using IAM role):**
```
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
```

**Note:** If you're using Amplify's IAM role (recommended), you don't need to set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. The API route will automatically use the IAM role.

## Step 4: Install Dependencies

Run this command in your project:

```bash
pnpm install @aws-sdk/client-ses
```

Or if using npm/yarn:

```bash
npm install @aws-sdk/client-ses
# or
yarn add @aws-sdk/client-ses
```

## Step 5: Deploy to Amplify

1. Commit and push your changes to your repository
2. Amplify will automatically build and deploy
3. Monitor the build logs to ensure everything works

## Step 6: Test the Contact Form

1. Go to your deployed website
2. Fill out the contact form
3. Check the recipient email inbox
4. You should receive the contact form submission

## Troubleshooting

### Email Not Sending

1. **Check SES Sandbox Mode**: If you're in sandbox mode, make sure the recipient email is verified
2. **Check IAM Permissions**: Verify the Amplify service role has SES permissions
3. **Check CloudWatch Logs**: In Amplify, go to **Monitoring** → **CloudWatch Logs** to see error messages
4. **Verify Email Addresses**: Ensure both sender and recipient emails are verified in SES

### Common Errors

- **MessageRejected**: Email address not verified (in sandbox mode)
- **AccessDenied**: IAM permissions not configured correctly
- **InvalidParameterValue**: Email format is invalid

## Cost Considerations

- **SES Free Tier**: First 62,000 emails per month are free (if sent from EC2)
- **After Free Tier**: $0.10 per 1,000 emails
- **Very cost-effective** for contact forms

## Security Best Practices

1. ✅ Use IAM roles instead of access keys when possible
2. ✅ Verify sender email addresses
3. ✅ Use environment variables for sensitive data
4. ✅ Enable CloudWatch logging for monitoring
5. ✅ Consider adding rate limiting to prevent abuse

## Next Steps

- Set up email templates for better formatting
- Add email notifications to multiple recipients
- Configure bounce and complaint handling
- Set up SNS for delivery notifications
