# Chat with Your Experience

This project lets you chat with your professional experience using the [remoet.dev](https://remoet.dev) API and AI.

## What is this?

This is a Next.js application that allows you to:

1. Connect to your remoet.dev profile using your API key
2. Pull in your professional experience data
3. Chat with an AI that has context about your work history, skills, and projects

It's a demo of the remoet.dev API.

## How to Use

1. Fork this repository
2. Add your remoet.dev API key (instructions below)
3. Deploy to Vercel or run locally
4. Start chatting with your experience!

## Setup

### Prerequisites

- A [remoet.dev](https://remoet.dev) account with your experience data entered
- An API key from remoet.dev (requires signing up at [remoet.dev](https://remoet.dev) and creating an account)

### Configuration

1. Create a `.env.local` file in the root directory
2. Add your remoet.dev API key:
   ```
   REMOET_API_KEY=your_api_key_here
   ```
3. The API documentation at [docs.remoet.dev](https://docs.remoet.dev) provides details on endpoints and data structures, but you'll still need to sign up at [remoet.dev](https://remoet.dev) to obtain an API key

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Radix UI](https://www.radix-ui.com/) - UI component library
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - For streaming AI responses
- [remoet.dev API](https://remoet.dev) - Professional experience data (documentation at [docs.remoet.dev](https://docs.remoet.dev))

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## About remoet.dev

[remoet.dev](https://remoet.dev) is a job search platform for software developers that allows you to store and manage your professional experience. By using the remoet.dev API, you can programmatically access your experience data for use in applications like this one.

There's also remote company, job boards and other listings for finding a new job.

To learn more about the API capabilities and how to get your API key, visit [remoet.dev](https://remoet.dev). Full API documentation is available at [docs.remoet.dev](https://docs.remoet.dev), but remember that you must create an account and generate a key on remoet.dev to access the API.
