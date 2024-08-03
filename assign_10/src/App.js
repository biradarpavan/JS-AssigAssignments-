import React from 'react'
import Counter from './components/Counter'
import Posts from './components/Posts'
import UserSearch from './components/UserSearch'
import Fetch from './components/Fetch'
import FetchWithParams from './components/FetchWithParams'
const App = () => {
  return (
    <div>
    <Counter />
    <Posts />
    <UserSearch />
    <Fetch />
    <FetchWithParams />
    </div>
  )
}

export default App