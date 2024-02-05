import React from 'react'
// This is a simple dynamic route components. Write anything after http://localhost:3000 (i.e http://localhost:3000/xyz).
// In this case xyz will be the value of params

export default function page({params}:{ params: { dynamicroute: string } }) {
    // console.log(params)
  return (
    <div>this is dynamic route: {params.dynamicroute}</div>
  )
}

