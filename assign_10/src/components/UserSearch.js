import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a functional component named UserSearch
const UserSearch = () => {
  // Declare state variables 'query' and 'user' with initial values
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);

  // useEffect hook to fetch user data when the 'query' state changes
  useEffect(() => {
    if (query) {
      // Define an asynchronous function to fetch user data
      const fetchUser = async () => {
        try {
          // Make an API call to GitHub to fetch user data based on the 'query'
          const response = await axios.get(`https://api.github.com/users/${query}`);
          // Update the 'user' state with the fetched data
          setUser(response.data);
        } catch (error) {
          // Log any errors to the console
          console.error('Error fetching user:', error);
        }
      };

      // Call the fetchUser function
      fetchUser();
    }
  }, [query]); // The effect runs whenever 'query' changes

  return (
    <div>
      {/* Input field to enter GitHub username */}
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update 'query' state on input change
      />
      {/* Display user information if 'user' is not null */}
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.avatar_url} alt={user.name} width="100" />
        </div>
      )}
    </div>
  );
};

// Export the UserSearch component to be used in other parts of the application
export default UserSearch;
