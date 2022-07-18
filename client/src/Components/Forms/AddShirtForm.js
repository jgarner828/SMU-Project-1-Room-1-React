import React from 'react'
import { useState } from 'react';

function ShirtForm() {


  const [shirt, setShirt] = useState({});

  

    function handleChange(event) {
        const clone = { ...shirt };
        clone[event.target.name] = event.target.value;
        setShirt(clone);
    }


    function handleSubmit(e){
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shirt)
        };

        fetch("http://localhost:8080/shirts", requestOptions)
        .then(response => response.json())
        .catch(error => console.error(error));
        
        window.location.reload();
    }
  
  return (
    <div className="addContainer">            
    <h1>{shirt.id > 0} Add Shirt</h1>

    <form onSubmit={handleSubmit}>

        <div className="mb-3">
            <label htmlFor="size">size</label>
            <input type="text" id="size" name="size"
                className="form-control"
                 onChange={handleChange}
                 value= {shirt.size} />
        </div>
        <div className="mb-3">
            <label htmlFor="color">color</label>
            <input type="text" id="color" name="color"
                className="form-control"
                 onChange={handleChange}
                 value= {shirt.color} />
        </div>
        <div className="mb-3">
            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description"
                className="form-control"
                 onChange={handleChange}
                 value= {shirt.description} />
        </div>
        <div className="mb-3">
            <label htmlFor="price">price</label>
            <input type="number" id="price" name="price"
                className="form-control"
                 onChange={handleChange}
                 value= {shirt.price} />
        </div>
        <div className="mb-3">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity"
                className="form-control"
                 onChange={handleChange}
                 value= {shirt.quantity} />
        </div>
        <div className="mb-3">
            <button className="btn btn-primary mr-3" type="submit" onClick={handleSubmit}>Save</button>
            <button className="btn btn-secondary" type="button" >Cancel</button>
        </div>
    </form></div>
  )
}

export default ShirtForm




