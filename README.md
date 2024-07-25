# Expense Manager Application

This is a full-stack expense management application built with the MERN stack (MongoDB, Express, React, Node.js). It utilizes Redux Toolkit for state management, RTK Query for data fetching, and Tailwind CSS for styling. The application is designed to provide a robust and efficient user experience.

![Demo]<img width="842" alt="image" src="https://github.com/shaileshthakur1/Expense-Manager/assets/110343920/541d6416-02a3-49f9-a72d-6c96079ddaf6">

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **MongoDB**: NoSQL database for storing data.
- **Express.js**: Web framework for building the backend API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **Redux Toolkit**: State management for the application.
- **RTK Query**: Data fetching and caching tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Components**: Reusable UI components.
- **MongoDB Atlas**: Cloud database service for MongoDB.
- **Lodash**: Utility library for JavaScript.
- **Express Framework**: Web application framework for Node.js.

## Features

- **User Authentication**: Secure login and registration system.
- **CRUD Operations**: Create, Read, Update, and Delete functionality for managing expenses.
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS.
- **State Management**: Efficient state management with Redux Toolkit.
- **Data Fetching**: Optimized data fetching with RTK Query.
- **Reusable Components**: Modular and reusable React components.

## Project Structure

```
expense-manager/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── readme.md
│   ├── config.overrides.js
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.css
├── backend/
│   ├── controller/
│   │   └── controller.js
│   ├── db/
│   │   └── connection.js
│   ├── models/
│   │   └── model.js
│   ├── route/
│   │   └── route.js
│   ├── config.env
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
├── LICENSE
├── readme.md
├── package-lock.json
├── package.json
```

## Installation

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install)
- [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register)

### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/backend
   ```

2. **Install backend dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add your MongoDB Atlas connection string and other necessary environment variables.
   ```env
   MONGO_URI=your-mongodb-atlas-connection-string
   PORT=5000
   ```

4. **Start the backend server:**
   ```sh
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd ../frontend
   ```

2. **Install frontend dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `frontend` directory and add any necessary environment variables.
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the frontend development server:**
   ```sh
   npm start
   ```

### Running the Application

1. Open your browser and navigate to `http://localhost:3000` to view the frontend.
2. The backend API is accessible at `http://localhost:5000/api`.

## Usage

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in production mode.
- `npm run dev`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
