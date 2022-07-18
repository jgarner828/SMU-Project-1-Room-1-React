import React from 'react'

import { useState } from 'react';

function ConsoleForm() {
 
  let [console, setConsole] = useState({});
  

  function handleChange(event) {
    const clone = { ...console };
    clone[event.target.name] = event.target.value;
    setConsole(clone);
}

function handleSubmit(e){
    e.preventDefault();

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(console)
    };

    fetch("http://localhost:8080/consoles", requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error));
    
  }

  return (
    <div>            
      <h1>{console.consoleId > 0} Update Console</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="">
            <label htmlFor="size">consoleId</label>
            <input type="number" id="consoleId" name="consoleId"
                className="form-control"
                 onChange={handleChange}
                 value= {console.consoleId} />
        </div>
        <div className="">
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title"
                className="form-control"
                 onChange={handleChange}
                 value= {console.title} />
        </div>
        <div className="">
            <label htmlFor="esrbRating">esrbRating</label>
            <input type="number" id="esrbRating" name="esrbRating"
                className="form-control"
                 onChange={handleChange}
                 value= {console.esrbRating} />
        </div>
        <div className="">
            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description"
                className="form-control"
                 onChange={handleChange}
                 value= {console.description} />
        </div>
        <div className="">
            <label htmlFor="price">price</label>
            <input type="number" id="price" name="price"
                className="form-control"
                 onChange={handleChange}
                 value= {console.price} />
        </div>
        <div className="">
            <label htmlFor="price">studio</label>
            <input type="text" id="studio" name="studio"
                className="form-control"
                 onChange={handleChange}
                 value= {console.studio} />
        </div>
        <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity"
                className="form-control"
                 onChange={handleChange}
                 value= {console.quantity} />
        </div>
        <div className="">
            <button className="btn btn-primary" type="submit">Save</button>
            <button className="btn btn-secondary" type="button" >Cancel</button>
        </div>
    </form></div>
  )
}
export default ConsoleForm

//     "consoleId": 7,
//     "model": "Nintendo 64",
//     "manufacturer": "Nintendo",
//     "memoryAmount": "64k",
//     "processor": "Intel",
//     "price": 175.00,
//     "quantity": 50