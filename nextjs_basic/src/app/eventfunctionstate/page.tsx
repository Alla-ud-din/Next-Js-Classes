'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState("Anil")

  const apple = () => {
    setName("Sidhu")
  }
  function InnerComp(){
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Events , function and state {name} </h1>
      <button onClick={() => apple()}>Click Me</button>
      <InnerComp />
      {/* {InnerComp()} */}
    </main>
  )
}

// When you use <Component /> in your JSX, you are treating it as a React component. This means that React will create an instance of the component and manage its state and lifecycle. It can accept props just like any other React component. This is the recommended way to use components in React.

// When you use {Component()} in your JSX, you are treating it as a JavaScript function call. It is not treated as a React component. This means that React will execute the Component function immediately and render the JSX returned by that function. It does not have access to React's state management or lifecycle methods.

// In this case, you cannot pass props directly to Component, and it will not behave like a typical React component. It's just a function that returns JSX, and it gets called whenever your main component (Home in this case) re-renders.