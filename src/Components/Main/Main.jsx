import React from 'react'

export const Main = ({characters}) => {

  return (
    <main>
      
        {characters.map((Element, indice) => (
          <div key={indice} className="card">
            <img src={Element.image}/>
            <div className="description">
              <h2>{Element.name} </h2>
              <p>Gender: {Element.gender}</p>
              <p>Location: {Element.location.name}</p>
            </div>
          </div>
        ))}
        
      
    </main>
  )
}
