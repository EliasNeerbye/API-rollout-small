# Developer Setup Guide

This guide provides detailed instructions for setting up the development environment for the API Rollout Small project.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

## Initial Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/EliasNeerbye/API-rollout-small.git
   cd API-rollout-small
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create environment variables file**

   Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   LOG_FILE_PATH=server.log
   ```

   Adjust these values according to your environment.

## Database Setup

1. **Start MongoDB**

   If you've installed MongoDB locally, start the service:

   - On Windows:

     ```bash
     # Start the MongoDB service
     net start MongoDB
     ```

   - On macOS/Linux:

     ```bash
     # Start the MongoDB service
     mongod --dbpath=/path/to/data/directory
     ```

2. **Verify MongoDB Connection**

   You can verify that your MongoDB connection is working by starting the API server and checking the console output for a successful connection message.

## Running the Application

1. **Start the server**

   ```bash
   npm start
   ```

   The server will start on the port specified in your environment variables (default: 3000).

2. **Testing the API**

   You can test the API using tools like [Postman](https://www.postman.com/) or curl commands as described in the [API Documentation](./API_DOCUMENTATION.md).

## Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/new-feature-name
   ```

2. **Make your changes**

   - Add new controllers in the `controllers` directory
   - Add new models in the `models` directory
   - Add new routes in the `routes` directory
   - Modify existing files as needed

3. **Test your changes**

   Manually test your changes using Postman or curl commands.

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add detailed description of changes"
   ```

5. **Push your changes**

   ```bash
   git push origin feature/new-feature-name
   ```

6. **Create a pull request**

   Create a pull request on GitHub from your feature branch to the main branch.

## Project Structure

- **controllers/**: Contains all the controller functions for handling requests
- **middleware/**: Contains middleware functions
- **models/**: Contains all the data models/schemas
- **routes/**: Contains all the route definitions
- **server.js**: Main entry point for the application

## Adding New Features

### Adding a New Model

1. Create a new file in the `models` directory (e.g., `models/User.js`)
2. Define the schema and model, following the pattern used in `models/Item.js`

### Adding a New Controller

1. Create a new file in the `controllers` directory (e.g., `controllers/userController.js`)
2. Define and export controller functions

### Adding New Routes

1. Create a new file in the `routes` directory (e.g., `routes/userRoutes.js`) or add to existing route files
2. Import required controllers and define routes

### Updating the Server

1. Import new routes in `server.js`
2. Add the routes to the Express application

## Best Practices

1. **Code Style**
   - Use consistent indentation (2 or 4 spaces)
   - Follow camelCase naming convention for variables and functions
   - Use descriptive names for functions and variables

2. **Error Handling**
   - Always use try-catch blocks in async functions
   - Return appropriate HTTP status codes and error messages

3. **Async/Await**
   - Use async/await for handling asynchronous operations
   - Avoid nested callbacks and promise chains

4. **Comments**
   - Add comments to explain complex logic
   - Use JSDoc comments for functions

5. **Modularity**
   - Keep functions small and focused on a single task
   - Follow the Single Responsibility Principle

## Troubleshooting

### MongoDB Connection Issues

1. Ensure MongoDB is running on your machine
2. Check that the MongoDB URI in your `.env` file is correct
3. Verify network connectivity if using a remote MongoDB instance

### Server Won't Start

1. Check for syntax errors in your code
2. Ensure all required environment variables are set
3. Check that the port is not already in use by another application

### Other Issues

If you encounter other issues:

1. Check the server logs for error messages
2. Review your recent code changes
3. Open an issue on the GitHub repository with details about the problem
