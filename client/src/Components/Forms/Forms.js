import React from 'react'
import GameForm from './GameForm';
import ShirtForm from './ShirtForm';
import ConsoleForm from './ConsoleForm';
import AddGameForm from './AddGameForm';
import AddConsoleForm from './AddConsoleForm';
import AddShirtForm from './AddShirtForm';

function Forms() {





  return (
      <div className="formContainer">
                <AddGameForm/>
                <AddConsoleForm/>
                <AddShirtForm/>
                <GameForm className="gameForm"/>
               <ShirtForm className="shirtForm" />
              <ConsoleForm className="consoleForm" />
       </div>

  )
}

export default Forms