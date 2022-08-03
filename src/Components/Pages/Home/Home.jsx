import React from 'react'
import { Header } from '../../Header/Header'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Main/Main'
import  image  from '../../images/header.jpg'


export const Home = ({characters,SearchInput}) => {
  return (
    <>
      <Header image={image} />
      <Navbar SearchInput={SearchInput}/>
      <Main characters={characters} />
    </>

  )
}
