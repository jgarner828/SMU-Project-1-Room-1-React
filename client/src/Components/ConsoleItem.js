import React from 'react';
import { useState } from 'react';


export default function ListItem(props) {

    const [orderQuantity, setOrderQuantity] = useState(0);


    function createInvoice(target) {
        console.log(target.target.id)
      }
  
      function handleChange(target){
        console.log(target)
        setOrderQuantity(target.target.value)
  
      }

    return (
        <tr className="itemRow" key={props.consoleId} id={props.consoleId}>
            <th>Id: {props.props.consoleId}</th>
            <th>{props.props.manufacturer} {props.props.model}</th>
            <th>${props.props.price}</th>
            <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity" className="form-control" onChange={handleChange}   />
            
            </div>
            <button id ={props.props.consoleId} onClick={(target)=>createInvoice(target)}> Purchase </button>
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

