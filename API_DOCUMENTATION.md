# API Documentation

This document provides detailed information about the API endpoints, request/response formats, and error handling.

## Base URL

All API endpoints are prefixed with `/api`.

When running locally: `http://localhost:3000/api`

## Authentication

Currently, this API does not implement authentication.

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:

```json
{
  "message": "Error message describing what went wrong",
  "error": "Optional detailed error information"
}
```

Common HTTP status codes:

- `200 OK` - Request succeeded
- `201 Created` - Resource was successfully created
- `400 Bad Request` - Invalid request parameters
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server-side error

## Endpoints

### Status

#### GET /api/status

Returns the current status of the API.

**Response Example:**

```json
{
  "status": "OK",
  "message": "Server is running smoothly",
  "timestamp": "2025-05-23T14:30:00.000Z"
}
```

### Items

#### GET /api/items

Retrieves all items from the database.

**Response Example:**

```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Sample Item",
    "description": "This is a sample item description",
    "createdAt": "2025-05-22T10:30:00.000Z",
    "updatedAt": "2025-05-22T10:30:00.000Z"
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "Another Item",
    "description": "This is another sample item",
    "createdAt": "2025-05-22T11:45:00.000Z",
    "updatedAt": "2025-05-22T11:45:00.000Z"
  }
]
```

#### POST /api/items

Creates a new item.

**Request Body:**

```json
{
  "name": "New Item",
  "description": "Description of the new item"
}
```

**Response Example:**

```json
{
  "_id": "60d21b4667d0d8992e610c87",
  "name": "New Item",
  "description": "Description of the new item",
  "createdAt": "2025-05-23T15:30:00.000Z",
  "updatedAt": "2025-05-23T15:30:00.000Z"
}
```

#### DELETE /api/items/:id

Deletes an item by ID.

**URL Parameters:**

- `id` - The ID of the item to delete

**Response Example:**

```json
{
  "message": "Item deleted successfully"
}
```

## Data Models

### Item

An item represents a basic entity in the database with the following schema:

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: Date,  // Automatically generated
  updatedAt: Date   // Automatically generated
}
```

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or curl commands:

### Example curl commands

**Get Status:**

```bash
curl -X GET http://localhost:3000/api/status
```

**Get All Items:**

```bash
curl -X GET http://localhost:3000/api/items
```

**Create New Item:**

```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item", "description":"This is a test item"}'
```

**Delete Item:**

```bash
curl -X DELETE http://localhost:3000/api/items/60d21b4667d0d8992e610c85
```

## Development and Extending

### Adding New Endpoints

1. Create a new controller in the `controllers` directory
2. Create new route handlers in the `routes` directory
3. Update the server.js file to use the new routes

### Modifying the Item Model

Edit the `models/Item.js` file to add or modify fields as needed.
