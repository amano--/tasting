import React, { useState, Suspense } from 'react'
// import ReactDOM from "react-dom";

// import "./styles.css";
import { fetchProfileData } from './fakeApi'

function getNextId(id: number) {
  return id === 3 ? 0 : id + 1
}

const initialResource = fetchProfileData(0)

function App() {
  const [resource, setResource] = useState(initialResource)

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <ProfilePage resource={resource} />

        <div className="px-6 py-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            role="next"
            onClick={() => {
              const nextUserId = getNextId(resource.userId)
              const data = fetchProfileData(nextUserId)
              console.log('data=', data)
              setResource(data)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

function ProfilePage({ resource }) {
  return (
    <div className="px-6 py-4">
      <Suspense fallback={<h1 className="font-bold text-xl mb-2">Loading profile...</h1>}>
        <div className="font-bold bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
          <ProfileDetails resource={resource} />
        </div>

        <Suspense fallback={<h1 className="font-bold text-xl mb-2">Loading posts...</h1>}>
          <ProfileTimeline resource={resource} />
        </Suspense>
      </Suspense>
    </div>
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
      {posts.map((post: any) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  )
}

export default App
