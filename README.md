# Agency Portfolio

A modern agency portfolio website built with Next.js 15, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Linting/Formatting:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd stdm-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and configure the following variables:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**For AWS SES Contact Form (Production):**

Set these in AWS Amplify Console → App settings → Environment variables:

```bash
CONTACT_FORM_RECIPIENT_EMAIL=your-email@example.com
CONTACT_FORM_FROM_EMAIL=noreply@yourdomain.com
AWS_REGION=us-east-1
```

See `AWS_SETUP.md` for detailed setup instructions.

### Running the Development Server

Start the development server with Turbopack:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

- `src/`: Contains the source code (pages, components, styles).
- `content/`: Contains content files (projects, testimonials).
- `public/`: Static assets.