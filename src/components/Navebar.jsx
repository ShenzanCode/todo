import React from 'react'

const Navebar = () => {
  return (
    <div className='flex flex-row justify-around  my-5 py-3'>
        <div>Todo</div>
        <ul className='flex flex-row gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navebar