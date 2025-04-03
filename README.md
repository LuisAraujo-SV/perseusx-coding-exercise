# PerseusX Coding Exercise

This project is an API built with Node.js and Express.js. It provides endpoints to manage a collection of people, allowing operations such as retrieving, adding, and updating records. The project is designed as a coding exercise and demonstrates the use of TypeScript, Zod for validation, and an in-memory database.

## Table of Contents
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Improvements](#improvements)

## Project Structure
The project is organized as follows:

```
perseusx-coding-exercise/
├── src/
│   ├── app.ts                # Main application setup
│   ├── server.ts             # Server entry point
│   ├── controllers/          # Controllers for handling API logic
│   │   └── people.controller.ts
│   ├── data/                 # In-memory database
│   │   └── people.database.ts
│   ├── dto/                  # Data Transfer Objects (DTOs) for validation
│   │   └── queryParam.dto.ts
│   ├── middleware/           # Middleware for validation
│   │   └── validate.middleware.ts
│   ├── model/                # Models and schemas
│   │   └── person.model.ts
│   ├── routes/               # API routes
│   │   └── people.routes.ts
│   └── utils/                # Utility functions
│       └── sort.utils.ts
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
├── .gitignore                # Git ignore rules
└── README.md                 # Project documentation
```

## Requirements
This project was built using the following technologies:

- **Node.js (v23 or higher)**: A JavaScript runtime environment for building scalable network applications.
- **npm (v11 or higher)**: A package manager for managing dependencies and scripts.

Ensure you have these installed to run the project successfully.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/LuisAraujo-SV/perseusx-coding-exercise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd perseusx-coding-exercise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. The server will be running at `http://localhost:3000`.

## API Endpoints

For detailed API documentation, including available endpoints, request/response schemas, and example usage, please refer to the [Swagger Documentation](http://localhost:3000/api-docs). The Swagger UI provides an interactive interface to explore and test the API.

## Improvements
This project is a great starting point, but there are several areas for improvement:

1. **Pagination**: Add pagination to the GET endpoints to handle large datasets efficiently.
2. **Database Integration**: Replace the in-memory database with a real database (e.g., MongoDB, PostgreSQL).
3. **Authentication and Authorization**: Implement security features to restrict access to certain endpoints.
4. **Error Handling**: Improve error handling to provide more detailed and user-friendly error messages.
5. **Testing**: Add unit and integration tests to ensure the reliability of the application.
6. **Environment Variables**: Use environment variables for configuration (e.g., port, database connection).
7. **Deployment**: Provide instructions for deploying the application to a cloud provider (e.g., AWS, Heroku).