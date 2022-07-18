import React from 'react'

import { useState } from 'react';

function AddConsoleForm() {
 
  let [console, setConsole] = useState({});
  

  function handleChange(event) {
    const clone = { ...console };
    clone[event.target.name] = event.target.value;
    setConsole(clone);
}

function handleSubmit(e){
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(console)
    };

    fetch("http://localhost:8080/consoles", requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error));
    
  }

  return (
    <div className="addContainer">            
      <h1>Add Console</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="">
            <label htmlFor="model">model</label>
            <input type="text" id="model" name="model"
                className="form-control"
                 onChange={handleChange}
                 value= {console.model} />
        </div>
        <div className="">
            <label htmlFor="manufacturer">manufacturer</label>
            <input type="text" id="manufacturer" name="manufacturer"
                className="form-control"
                 onChange={handleChange}
                 value= {console.manufacturer} />
        </div>
        <div className="">
            <label htmlFor="memoryAmount">memory Amount</label>
            <input type="text" id="memoryAmount" name="memoryAmount"
                className="form-control"
                 onChange={handleChange}
                 value= {console.memoryAmount} />
        </div>
        <div className="">
            <label htmlFor="processor">processor</label>
            <input type="text" id="processor" name="processor"
                className="form-control"
                 onChange={handleChange}
                 value= {console.processor} />
        </div>
        <div className="">
            <label htmlFor="price">price</label>
            <input type="number" id="price" name="price"
                className="form-control"
                 onChange={handleChange}
                 value= {console.price} />
        </div>
        <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity"
                className="form-control"
                 onChange={handleChange}
                 value= {console.quantity} />
        </div>
        <div className="">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Save</button>
            <button className="btn btn-secondary" type="button" >Cancel</button>
        </div>
    </form></div>
  )
}
export default AddConsoleForm
