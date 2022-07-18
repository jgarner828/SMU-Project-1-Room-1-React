import React from 'react';
import { useState } from 'react';


export default function ListItem(props) {

    const [orderQuantity, setOrderQuantity] = useState(0);


    function createInvoice(target) {
      target.preventDefault();
  
      let newInvoice = {
        name: "Justin",
        street: "Peachtree St",
        city: "Atlanta",
        state: "GA",
        zipcode: "30050",
        itemType: "Consoles",
        itemId: props.props.consoleId,
        unitPrice: props.props.price,
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
  
      
    }
  

    function handleChange(target){
        console.log(target)
        setOrderQuantity(target.target.value)
  
    }

    function handleDelete(target) {

      target.preventDefault();

      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      };
  
      fetch("http://localhost:8080/consoles/" + target.target.id, requestOptions)
      .then(response => response.json())
      .catch(error => console.error(error));

      window.location.reload();
      
    }


    return (
        <tr className="itemRow" key={props.props.consoleId} id={props.props.consoleId}>
            <th>Id: {props.props.consoleId}</th>
            <th>{props.props.manufacturer} {props.props.model}</th>
            <th>${props.props.price}</th>
            <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity" className="form-control" onChange={handleChange}   />
            
            </div>
            <button id ={props.props.consoleId} onClick={(target)=>createInvoice(target)}> Purchase </button>
            <button id ={props.props.consoleId}  onClick={handleDelete}>Delete</button>
        </tr>
    )
}

// get and update values

//     "consoleId": 7,
//     "model": "Nintendo 64",
//     "manufacturer": "Nintendo",
//     "memoryAmount": "64k",
//     "processor": "Intel",
//     "price": 175.00,
//     "quantity": 50

// post values
// "model": "XBox 360",
// "manufacturer": "Microsoft",
// "memoryAmount": "1TB",
// "processor": "BillGates",
// "price": 175.00,
// "quantity": 50

