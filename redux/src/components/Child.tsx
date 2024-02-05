import React from 'react'
import SubChild from './SubChild'
import { useSelector } from 'react-redux'

export default function child() {
    const counter = useSelector((state: any)=>state.counterReducer);
    const username = useSelector((state: any)=>state.counterReducer);
  console.log(counter)
  return (
    <div className='bg-gray-800 p-4'>
        {/* Child
      {name}
      <SubChild/> */}
      counter {counter}
      User {username}
      <SubChild/>
    </div>
  )
}
