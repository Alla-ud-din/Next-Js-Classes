import React from 'react'
import custom from '@/src/app/custom.module.css'
import other from '../other.module.css'
import outside from '../style/outside.module.css'

export default function page() {
  return (
    <div>
      <h1 className={custom.main} >CSS Modules with Next js</h1>
      <h2 className={other.main} >CSS Modules with Next js</h2>
      <h2 className={outside.main} >Outside css</h2>
    </div>
  )
}
