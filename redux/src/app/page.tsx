'use client'
import SubChild from '@/components/SubChild'
import Child from '@/components/Child'
import userContext from '@/context/userContext'
import { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from '@/store/store';
import { UseSelector } from 'react-redux';


export default function Home() {
  // const [username, setUsername] = useState("");
  // const [counter,setCounter] = useState(0)
  
  return (
    // <userContext.Provider value={{username, setUsername,counter, setCounter}}>
    // <div className='h-screen bg-gray-600'>
    //   This is main Main .Username is {username}
    //   Count Value = {counter}
    //   <Child/>
    // </div>
    // </userContext.Provider>
    <Provider store={store}>
      <Child />
    </Provider>
  )
}


