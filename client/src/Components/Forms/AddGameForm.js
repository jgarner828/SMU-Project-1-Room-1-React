import React from 'react'
import { useState } from 'react';

function AddGameForm() {


  const [game, setGame] = useState({});

  

  function handleChange(event) {
    const clone = { ...game };
    clone[event.target.name] = event.target.value;
    setGame(clone);
}

  function handleSubmit(e){
    e.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
    };

    fetch("http://localhost:8080/games", requestOptions)
    .then(response => response.json())
    .catch(error => console.error(error));
    
  }
  
  return (
    <div className="addContainer">            
      <h1> Add Game</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="">
            <label htmlFor="title">title</label>
            <input type="text" id="title" name="title"
                className="form-control"
                 onChange={handleChange}/>
        </div>
        <div className="">
            <label htmlFor="esrbRating">esrbRating</label>
            <input type="number" id="esrbRating" name="esrbRating"
                className="form-control"
                 onChange={handleChange}/>
        </div>
        <div className="">
            <label htmlFor="description">description</label>
            <input type="text" id="description" name="description"
                className="form-control"
                 onChange={handleChange} />
        </div>
        <div className="">
            <label htmlFor="price">price</label>
            <input type="number" id="price" name="price"
                className="form-control"
                 onChange={handleChange}/>
        </div>
        <div className="">
            <label htmlFor="studio">studio</label>
            <input type="string" id="studio" name="studio"
                className="form-control"
                 onChange={handleChange}/>
        </div>
        <div className="">
            <label htmlFor="quantity">quantity</label>
            <input type="number" id="quantity" name="quantity"
                className="form-control"
                 onChange={handleChange}/>
        </div>
        <div className="">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Save</button>
            <button className="btn btn-secondary" type="button" >Cancel</button>
        </div>
    </form></div>
  )
}

export default AddGameForm
