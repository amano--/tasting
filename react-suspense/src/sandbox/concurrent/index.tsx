/* eslint-disable jsx-a11y/anchor-is-valid */
// import Link from 'next/link'

import React, { useState, Suspense } from 'react'
import ReactDOM from 'react-dom'

// import "./styles.css";
import { fetchProfileData } from './fakeAPI'

function getNextId(id) {
  return id === 3 ? 0 : id + 1
}

const initialResource = fetchProfileData(0)

function App() {
  const [resource, setResource] = useState(initialResource)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          const nextUserId = getNextId(resource.userId)
          setResource(fetchProfileData(nextUserId))
        }}
      >
        Next
      </button>
      <ProfilePage resource={resource} />
    </>
  )
}

function ProfilePage({ resource }) {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </Suspense>
    </Suspense>
  )
}

function ProfileDetails({ resource }) {
  const user = resource.user.read()
  return <h1>{user.name}</h1>
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  )
}

export default App
// ReactDOM.render(<App />, document.getElementById('root'))

// const rootElement = document.getElementById('root')
// ReactDOM.createPortal(rootElement).render(<App />)
