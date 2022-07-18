import React from 'react'

import { useState } from 'react';


function ShirtItem(props) {

  const [orderQuantity, setOrderQuantity] = useState(0);



    function createInvoice(target) {
      console.log(target.target.id)
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
  
      fetch("http://localhost:8080/shirts/" + target.target.id, requestOptions)
      .then(response => response.json())
      .catch(error => console.error(error));

      window.location.reload();
      
    }

          return (
            <tr className="itemRow" key={props.props.id} id = {props.props.id}>
              <th>Id: {props.props.id}</th>
              <th>{props.props.size}</th>
              <td>{props.props.color}</td>
              <td>{props.props.description}</td>
              <td>{props.props.price}</td>
              <div className="">
                <label htmlFor="quantity">quantity</label>
                <input type="number" id="quantity" name="quantity" className="form-control" onChange={handleChange}   />
              </div>
              <button id ={props.props.id} onClick={(target)=>createInvoice(target)}>Purchase</button>
              <button id ={props.props.id}  onClick={handleDelete}>Delete</button>
            </tr>
          )
}

export default ShirtItem


