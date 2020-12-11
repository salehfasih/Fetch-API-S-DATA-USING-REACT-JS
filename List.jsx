

   
// Birth day project using usestate
import React from 'react'
import './App.css'

function List({people}) {
  return (
    <>
    {people.map((person)=>{
      const {id,img,name,Age}=person
      return(
        <article className="person" key={id}>
         <img src={img} alt={name}/>
      <h4>{name}</h4> <br/>
      <p>{Age} Year</p>
        </article>
      )
    })}
    </>
  )
}

export default List

  

