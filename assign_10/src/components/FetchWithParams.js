// Import React, useState, and useEffect from the 'react' package.
import React, { useState, useEffect } from 'react';
// Import axios for making HTTP requests.
import axios from 'axios';

// Custom hook to fetch data from a URL with parameters.
const useFetchWithParams = (url, params) => {
  // State to store the fetched data.
  const [data, setData] = useState(null);
  // State to track if data is still being loaded.
  const [loading, setLoading] = useState(true);
  // State to store any error that occurs during the fetch.
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts or URL/params change.
  useEffect(() => {
    // Asynchronous function to fetch data from the URL with parameters.
    const fetchData = async () => {
      try {
        // Make a GET request to the provided URL with parameters.
        const response = await axios.get(url, { params });
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
  // Dependency array ensures fetchData is called when URL or params change.
  }, [url, params]);

  // Return an object with data, loading, and error states.
  return { data, loading, error };
};

// Functional component to display posts filtered by user ID.
const FilteredPosts = () => {
  // State to store the user ID input value.
  const [userId, setUserId] = useState('');
  // Use the custom useFetchWithParams hook to fetch posts filtered by user ID.
  const { data, loading, error } = useFetchWithParams(
    'https://jsonplaceholder.typicode.com/posts',
    { userId }
  );

  // Function to trigger data re-fetch when the user ID changes.
  const handleFetch = () => {
    // Set userId to trigger a re-fetch with the new userId value.
    setUserId(userId);
  };

  return (
    <div>
      {/* Input field for entering the user ID */}
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      {/* Button to trigger the fetch based on the entered user ID */}
      <button onClick={handleFetch}>Fetch Posts</button>
      {/* Show a loading message while data is being fetched. */}
      {loading && <p>Loading...</p>}
      {/* Show an error message if there is an error during data fetch. */}
      {error && <p>Error: {error.message}</p>}
      {/* Render the list of posts once data is successfully fetched. */}
      {data && (
        <ul>
          {data.map(post => (
            // Display each post's title in a list item.
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the FilteredPosts component for use in other parts of the application.
export default FilteredPosts;
