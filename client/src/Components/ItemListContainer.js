import React from 'react';
import { useEffect, useState } from 'react';
import ConsoleItem from './ConsoleItem';
import GameItem from './GameItem';
import ShirtItem from './ShirtItem';
import '../App.css';





export default function ItemListContainer(props) {

   let [consoleList, setConsoleList] = useState([]);
   let [gamesList, setGamesList] = useState([]);
   let [tShirtList, setTShirtList] = useState([]);

    useEffect(() => {

        // getting all Consoles
        fetch("http://localhost:8080/consoles")
          .then(response => response.json())
        //   .then(result => console.log(result))
          .then(response => setConsoleList(response))
        .catch();


        // getting all T-Shirts
        fetch("http://localhost:8080/shirts")
          .then(response => response.json())
        //   .then(result => console.log(result))
          .then(response => setTShirtList(response))
        .catch();


            // getting all games        
        fetch("http://localhost:8080/games")
          .then(response => response.json())
        //   .then(result => console.log(result))
          .then(response => setGamesList(response))
        .catch();



    }, []);

 

    if(consoleList && gamesList && tShirtList)
    return (
            <table>
                    <tbody>
                        {
                       consoleList.map(console => <ConsoleItem key = {console.id}  props= {console}/>)
                        }
                    </tbody>

                    <tbody>
                        {
                       gamesList.map(game => <GameItem key = {game.id}  props= {game}/>)
                        }
                    </tbody>

                    <tbody>
                        {
                       tShirtList.map(shirt => <ShirtItem key = {shirt.id}  props= {shirt}/>)
                        }
                    </tbody>
                          
            </table>
         )
}
