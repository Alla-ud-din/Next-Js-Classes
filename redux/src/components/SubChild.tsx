import userContext from '@/context/userContext'
import React, { useContext } from 'react'

export default function SubChild() {
    const state: any = useContext(userContext);
    console.log(state)
    return (
        <div>
            {/* SubChild{state.username} */}
            <button className='border p-2 block'
                onClick={() => state.setUsername("John")}>
                set username
            </button>

            <button className='border p-2 block'
                onClick={() => state.setCounter(state.counter+1)}>
                Increment COunter
            </button>

            <button className='border p-2 block'
                onClick={() => {return (state.counter!==0?state.setCounter(state.counter-1):state.setCounter(0))}}>
                Decrement COunter
            </button>
        </div >
    )
}
