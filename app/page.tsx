import axios from 'axios';
import { useState } from 'react';

interface User {
  username: string;
  email: string;
}

export const GetUserDetails = () => {
  const [userDetails, setDetails] = useState<User | null>(null);

  // Call the function directly to fetch data without useEffect (e.g., for testing purposes)
  const fetchData = async () => {
    try {
      const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  fetchData(); // This will run the function and fetch the data

  return (
    <>
      {userDetails ? (
        <>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
