import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
  Date: string; // Adjust this based on the actual structure of your user data
}

const YourComponent: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/public/randomusers?page=1&limit=10'
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error occurred</div>;
  }

  if (!users.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='text-center'> My value </h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.Date}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
