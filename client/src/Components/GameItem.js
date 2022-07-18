import React from 'react'

function GameItem({props}) {



  function createInvoice(target) {
    
  }



  return (
  <tr key={props.gameId} id={props.gameId}>
      <th>Id: {props.gameId}</th>
      <th>{props.title}</th>
      <td>{props.price}</td>
      <td>{props.description}</td>
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
