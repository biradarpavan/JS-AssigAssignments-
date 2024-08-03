//in the new folder
//first in the console write mkdir Assign_8
//then cd Assign_8
//then npm init -y
//and npm install axios
// after that create one file and write this code and run

//Tip run one question at a time and comment rest of all

//assignment 8
//question 1

const axios = require('axios');// here imported the axios library

async function fetchData() {// here i created a func to fetch data using async/await
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');// Make a GET request to the API
        console.log(response.data);//here print data to the console
    } catch (error) {// in this process if any error occure then handle and print the err
        console.error('Error fetching data:', error);
    }
}

fetchData();//here i call the func

//assignment 8
//question 2

const axios = require('axios');// here imported the axios library

const fetchData = async () => {// here i created a func using async/await
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
    //here given an invalid link to check/test the error
    console.log(response.data);
  } catch (error) {// in this process error occure then handle and print the err
    console.error('Error fetching data:', error.message);
  }
};

fetchData();//here i call the func

//assignment 8
//question 3

const axios = require('axios');// here imported the axios library

const fetchData = async () => {// here i created a func using async/await
  try {
    // Fetch data from the first API
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Posts:', posts.data);

    // Fetch data from the second API
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Users:', users.data);
  } catch (error) {// in this process if any error occure then handle and print the err
    console.error('Error fetching data:', error.message);
  }
};

fetchData();//here i call the func


//assignment 8
//question 4

const axios = require('axios');// here imported the axios library

const fetchData = async () => {// here i created function to fetch data in parallel using async/await and Promise.all
  try {
    // Use Promise.all to fetch data from both APIs in parallel
    const [posts, users] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ]);
    //here it will print the result of api to the console
    console.log('Posts:', posts.data);
    console.log('Users:', users.data);
  } catch (error) {// in this process if any error occure then handle and print the err
    console.error('Error fetching data:', error.message);
  }
};

fetchData();//here i call the func


//assignment 8
//question 5

const axios = require('axios');// here imported the axios library

const fetchPosts = async () => {//here created func post using async/await
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');// Make a GET request to the API
    return response.data;//here return the data
  } catch (error) {// in this process if any error occure then handle and print the err
    console.error('Error fetching posts:', error.message);
  }
};

const fetchComments = async () => {//here created func comments using async/await
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');// Make a GET request to the API
    return response.data;//here return the data
  } catch (error) {// in this process if any error occure then handle and print the err
    console.error('Error fetching comments:', error.message);
  }
};

const fetchData = async () => {//here created func to chain fetchPosts and fetchComments
  try {
    const posts = await fetchPosts();//from here it will take the data from the fetch post and store into posts
    console.log('Posts:', posts);//and print it to the console

    const comments = await fetchComments();//from here it will take the data from the fetch comments and store into comments
    console.log('Comments:', comments);//and print it to the console
  } catch (error) {// in this process if any error occure then handle and print the err
    console.error('Error fetching data:', error.message);
  }
};

fetchData();//here i call the func


