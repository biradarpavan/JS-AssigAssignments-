import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a functional component named Posts
const Posts = () => {
  // Declare a state variable 'posts' with an initial value of an empty array
  const [posts, setPosts] = useState([]);

  // useEffect hook to fetch posts data when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch posts data
    const fetchPosts = async () => {
      try {
        // Make an API call to fetch posts data
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Update the 'posts' state with the fetched data
        setPosts(response.data);
      } catch (error) {
        // Log any errors to the console
        console.error('Error fetching posts:', error);
      }
    };

    // Call the fetchPosts function
    fetchPosts();
  }, []); // The effect runs only once when the component mounts

  return (
    <div>
      <h1>Posts</h1>
      {/* Render a list of post titles */}
      <ul>
        {posts.map(post => (
          // Each list item must have a unique key
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the Posts component to be used in other parts of the application
export default Posts;
