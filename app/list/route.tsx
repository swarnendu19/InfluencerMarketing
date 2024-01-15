import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

// Define a route for the API endpoint
app.get('/', (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    // Logic to generate random users (replace this with your own logic)
    const randomUsers = generateRandomUsers(page, limit);

    // Send the random users as JSON response
    res.json(randomUsers);
});

// Function to generate random users (replace this with your own logic)
function generateRandomUsers(page: number, limit: number) {
    // Your logic to generate random users goes here
    // For simplicity, I'll return a dummy array
    const users = [];
    for (let i = 1; i <= limit; i++) {
        users.push({
            id: i,
            name: `User ${i}`,
            // Add more fields as needed
        });
    }
    return users;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
