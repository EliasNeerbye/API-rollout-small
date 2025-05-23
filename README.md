# API Rollout Small

A simple RESTful API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Overview

This project provides a basic API for managing items with CRUD operations. It uses Express for routing, MongoDB/Mongoose for data storage, and includes basic logging functionality.

## Project Structure

```md
API-rollout-small/
├── controllers/                # Request handlers
│   ├── itemController.js       # Item-related controller functions
│   └── statusController.js     # Server status controller
├── middleware/
│   └── logger.js               # Request logging middleware
├── models/
│   └── Item.js                 # Item model schema
├── routes/
│   └── itemRoutes.js           # Routes for the API
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js                   # Entry point for the application
```

## Setup and Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/EliasNeerbye/API-rollout-small.git
   cd API-rollout-small
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/mydatabase
   LOG_FILE_PATH=server.log
   ```

4. **Start the server**

   ```sh
   npm start
   ```

## API Endpoints

### Status

- **GET /status** - Get server status
  - Returns information about the server status, including timestamp

### Items

- **GET /items** - Get all items
  - Returns a list of all items in the database
  
- **POST /items** - Create a new item
  - Request body should include `name` and `description`
  - Returns the created item with status code 201
  
- **DELETE /items/:id** - Delete an item by ID
  - Requires item ID as a URL parameter
  - Returns confirmation message upon successful deletion

## Models

### Item

The Item model includes the following fields:

| Field       | Type   | Required | Description                      |
|-------------|--------|----------|----------------------------------|
| name        | String | Yes      | Name of the item                 |
| description | String | Yes      | Description of the item          |
| createdAt   | Date   | Auto     | Timestamp when item was created  |
| updatedAt   | Date   | Auto     | Timestamp when item was updated  |

## Middleware

### Logger

The application uses a custom logger middleware that records HTTP requests to a log file. Each log entry includes:

- Timestamp (ISO format)
- HTTP method
- Request URL

The log file path can be configured via the `LOG_FILE_PATH` environment variable.

## Environment Variables

| Variable      | Default Value                      | Description                       |
|---------------|-----------------------------------|-----------------------------------|
| PORT          | 3000                              | Port for the server to listen on  |
| MONGO_URI     | mongodb://localhost:27017/mydatabase | MongoDB connection string         |
| LOG_FILE_PATH | server.log                        | Path for the request log file     |

## Dependencies

- **express** - Web framework for Node.js
- **mongoose** - MongoDB object modeling tool

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
