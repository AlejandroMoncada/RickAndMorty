import React from 'react'

export const Main = ({characters}) => {

  return (
    <main>
      
        {characters.map((Element, indice) => (
          <div key={indice} className="card">
            <img src={Element.image}/>
            <h1 > {Element.name} </h1>
            <p>{Element.gender}</p>
          </div>
        ))}
        
      
    </main>
  )
}
