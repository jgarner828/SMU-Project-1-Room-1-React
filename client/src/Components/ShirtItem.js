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
            </tr>
          )
}

export default ShirtItem


