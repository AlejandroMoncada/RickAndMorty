import React from 'react'

export const Navbar = ({change}) => {
  return (
    <nav>
      <h1>Search a character</h1>
      <input onChange={change} type="text" placeholder="Search..." />
    </nav>
    
  )
}
