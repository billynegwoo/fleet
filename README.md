# Fleet Management App

This is a Fleet Management application built with the T3 Stack, which includes Next.js, React Query, and Tailwind CSS. The app allows you to manage employees and devices efficiently.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fleet-management-app.git
   cd fleet-management-app
   ```

2. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. Set up your environment variables. Create a `.env.local` file in the root of the project and add your environment variables. You can refer to `.env.example` for the required variables.

### Available Scripts

Here are the commands you can use to start and manage the project:

- **Development**: Start the Next.js development server with Express:
  ```bash
  npm run dev:all
  ```
  This command runs both the Next.js app and the Express server concurrently.

- **Start**: Start the production server:
  ```bash
  npm run start
  ```

- **Build**: Build the application for production:
  ```bash
  npm run build
  ```

- **Preview**: Preview the production build:
  ```bash
  npm run preview
  ```

- **Database Commands**:
  - Generate migrations:
    ```bash
    npm run db:generate
    ```
  - Migrate the database:
    ```bash
    npm run db:migrate
    ```
  - Push the database schema:
    ```bash
    npm run db:push
    ```
  - Open Prisma Studio:
    ```bash
    npm run db:studio
    ```

- **Linting**:
  - Check for linting errors:
    ```bash
    npm run check
    ```
  - Fix linting errors:
    ```bash
    npm run lint:fix
    ```

- **Type Checking**:
  ```bash
  npm run typecheck
  ```

- **Formatting**:
  - Format the code:
    ```bash
    npm run format:write
    ```
  - Check formatting:
    ```bash
    npm run format:check
    ```

## Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [React Query](https://react-query.tanstack.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Prisma](https://prisma.io)
- [Zod](https://zod.dev)
- [Express](https://expressjs.com)
- [CORS](https://www.npmjs.com/package/cors)
- [Geist](https://geist-ui.dev)
- [@t3-oss/env-nextjs](https://github.com/t3-oss/env-nextjs)
