'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function name() {
  const [h3Style, setH3Style] = useState({backgroundColor: 'green'})
  return (
    <>
    <div style={h3Style}>My name is Ali</div>
    <Link href='./name/address'>What is my address</Link>
    <br />
    <button onClick={()=>setH3Style({backgroundColor: "blue"})}>Update color</button>
    </>
  )
}
