# Notebook Backend
Endpoints for a Note Taking app. 

# Setup
1. Create and clone a branch
2. Open terminal and point to the application root directory
3. Run 'npm install' to install the node modules
4. Run 'npm run dev' to start the application
5. Open your browser and use this url: http://localhost:3000/api/v1/notes/

# Endpoints 
1. Create New Note: 
Post
Endpoint: http://localhost:3000/api/v1/notes/
Request Body: 
```
{
    "title": string,
    "content": string
}
```

2. Update a Note: 
Put
Endpoint: http://localhost:3000/api/v1/notes/:id
Request Body: 
```
{
    "title": string,
    "content": string
}
```

3. Delete a Note: 
Delete
Endpoint: http://localhost:3000/api/v1/notes/:id

4. Get all Notes:
Get
Endpoint: http://localhost:3000/api/v1/notes/

5. Get a specific Note:
Get 
Endpoint: http://localhost:3000/api/v1/notes/:id
