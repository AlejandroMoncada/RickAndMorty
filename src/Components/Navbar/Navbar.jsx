import React from 'react'

export const Navbar = ({SearchInput}) => {
  return (
    <nav>
      <input onChange={SearchInput} type="text" placeholder="Buscar personaje..." />
    </nav>
    
  )
}
