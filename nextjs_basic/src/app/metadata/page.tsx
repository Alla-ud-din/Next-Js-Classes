import React from 'react'

export default function page() {
  return (
    <div>
        <h1>Users page</h1>
    </div>
  )
}
export function generateMetadata(){
    return{
        title: "user page title",
        description: "user page description",
    }
}
