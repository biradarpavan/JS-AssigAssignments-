// Import React, useState, and useEffect from the 'react' package.
import React, { useState, useEffect } from 'react';
// Import axios for making HTTP requests.
import axios from 'axios';

// Custom hook to fetch data from a given URL.
const useFetch = (url) => {
  // State to store the fetched data.
  const [data, setData] = useState(null);
  // State to track if data is still being loaded.
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during the fetch.
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts or URL changes.
  useEffect(() => {
    // Asynchronous function to fetch data from the URL.
    const fetchData = async () => {
      try {
        // Make a GET request to the provided URL.
        const response = await axios.get(url);
        // Update state with the fetched data.
        setData(response.data);
      } catch (err) {
        // Update state with the error if the request fails.
        setError(err);
      } finally {
        // Set loading to false regardless of the request outcome.
        setLoading(false);
      }
    };

    // Call the fetchData function to initiate the data fetch.
    fetchData();
  // Dependency array ensures fetchData is called when URL changes.
  }, [url]);

  // Return an object with data, loading, and error states.
  return { data, loading, error };
};

// Functional component to display a list of users.
const Users = () => {
  // Use the custom useFetch hook to fetch users from the given URL.
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  // Show a loading message while data is being fetched.
  if (loading) return <p>Loading...</p>;
  // Show an error message if there is an error during data fetch.
  if (error) return <p>Error: {error.message}</p>;

  // Render the list of users once data is successfully fetched.
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          // Display each user's name in a list item.
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the Users component for use in other parts of the application.
export default Users;
