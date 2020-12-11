import React from 'react'
import Tour from './Tour'

function Tours({tours}) {
// const {id,name,info,image,price}=Tour
    return (
    <section>
        <div><center><h1>Our Tours</h1></center></div>
        <div>
            {tours.map((tour)=>{
                return(  
                    <div key={tour.id} className="container">
                        <center>
                    {/* <Tour  key={tour.id} ></Tour> */}
                    <img src={tour.image} alt=""/>
                <h3>Name:{tour.name}</h3>
                <p ><center>{tour.info}</center></p>
                <p><h2>price:{tour.price}</h2></p>
                </center>
                    </div>
                )
            })}
        </div>
    </section>
    )
}

export default Tours
