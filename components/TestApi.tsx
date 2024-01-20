 'use client';

import { useEffect, useState } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
 
}

const YourPage: React.FC = () => {
  const [users, setUsers] = useState<Todo[]>([]); // Use the Todo interface
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Specify the type for the error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/public/randomusers?page=1&limit=10');
        const jsonData: Todo = await response.json(); // Use the Todo interface

        console.log(jsonData);

        // Assuming the API response has a 'data' property containing the user list
        setUsers([jsonData]);
      } catch (error) {
        console.error('Error fetching data:', error);
       } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {!loading &&
          users.map((user, index) => (
            <li key={index}>
              {/* Render user information as needed */}
              {user.data.data.first }
            </li>
          ))}
      </ul>
    </div>
  );
};

export default YourPage;
