# Simple Todo REST API

This project includes a Node.js application that provides a simple Todo REST API.

## Beginning

Follow these steps to start the project:

1. **Install Dependencies:**
    ```bash
    npm install
    ```

2. **Launch Application:**
    ```bash
    node app.js
    ```

    The application will run at `http://localhost:3000` by default.

## API Endpoints

- `GET /todos`: Gets all todos.
- `GET /todos/:id`: Gets a specific todo.
- `POST /todos`: Adds a new todo.
- `PUT /todos/:id`: Updates a specific todo.
- `DELETE /todos/:id`: Deletes a specific todo.

## Example Usage

1. **Fetching All Todos:**
    ```bash
    curl http://localhost:3000/todos
    ```

2. **Fetching a Specific Todo:**
    ```bash
    curl http://localhost:3000/todos/1
    ```

3. **Adding a New Todo:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"title":"New Todo", "completed": false}' http://localhost:3000/todos
    ```

4. **Updating a Todo:**
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Todo", "completed": true}' http://localhost:3000/todos/1
    ```

5. **Deleting a Todo:**
    ```bash
    curl -X DELETE http://localhost:3000/todos/1
    ```