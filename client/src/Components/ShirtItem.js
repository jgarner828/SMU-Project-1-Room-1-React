import React from 'react'



function ShirtItem(props) {



    function createInvoice(target) {
      console.log(target.target.id)
    }


          return (
            <tr key={props.props.id} id = {props.props.id}>
              <th>Id: {props.props.id}</th>
              <th>{props.props.size}</th>
              <td>{props.props.color}</td>
              <td>{props.props.description}</td>
              <td>{props.props.price}</td>
              <button id ={props.props.id} onClick={(target)=>createInvoice(target)}>Purchase</button>
            </tr>
          )
}

export default ShirtItem


