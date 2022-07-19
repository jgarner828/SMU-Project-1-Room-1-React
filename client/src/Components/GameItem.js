import React from 'react'
import { useState } from 'react';

function GameItem({props}) {

  const [orderQuantity, setOrderQuantity] = useState(0);



  function createInvoice(target) {
    target.preventDefault();

    let newInvoice = {
      name: "Justin",
      street: "Peachtree St",
      city: "Atlanta",
      state: "GA",
      zipcode: "30050",
      itemType: "Games",
      itemId: props.gameId,
      unitPrice: props.price,
      quantity: orderQuantity
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInvoice)
    };

    fetch("http://localhost:8080/invoices", requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error));

    window.location.reload();
    
  }


  function handleChange(target){
    setOrderQuantity(target.target.value)

  }

  function handleDelete(target) {

    target.preventDefault();

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch("http://localhost:8080/games/" + target.id, requestOptions)
    .catch(error => console.error(error));
    

    window.location.reload();
  }

  
  return (
  <tr className="itemRow" key={props.toString()} id={props.gameId}>
      <th>Id: {props.gameId}</th>
      <th>{props.title}</th>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity" className="form-control" onChange={handleChange}   />
        </div>
      <button id ={props.gameId} onClick={(target)=>createInvoice(target)}>Purchase</button>
      <button id ={props.gameId}  onClick={handleDelete}>Delete</button>
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
