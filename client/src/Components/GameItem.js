import React from 'react'
import { useState } from 'react';

function GameItem({props}) {

  const [orderQuantity, setOrderQuantity] = useState(0);

  function createInvoice(target) {

  }



  function handleChange(target){
    setOrderQuantity(target.target.value)

  }

  

  return (
  <tr className="itemRow" key={props.gameId} id={props.gameId}>
      <th>Id: {props.gameId}</th>
      <th>{props.title}</th>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity" className="form-control" onChange={handleChange}   />
        </div>
      <button id ={props.gameId} onClick={(target)=>createInvoice(target)}>Purchase</button>
  </tr>
    
  )
}

export default GameItem



// GET
    // "gameId": 10,
		// "title": "Halo",
		// "esrbRating": 6,
		// "description": "shoot aliens",
		// "price": 29.99,
		// "studio": "Halo studios",
		// "quantity": 50

    // POST

    //   "title": "Halo 4",
    //   "esrbRating": 6,
    //   "description": "shoot aliens",
    //   "price": 29.99,
    //   "studio": "Halo studios",
    //   "quantity": 50
