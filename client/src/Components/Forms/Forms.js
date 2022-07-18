import React from 'react'
import GameForm from './GameForm';
import ShirtForm from './ShirtForm';
import ConsoleForm from './ConsoleForm';

function Forms() {
  return (
      <div>
                <GameForm className="gameForm"/>
               <ShirtForm className="shirtForm" />
              <ConsoleForm className="consoleForm" />
       </div>

  )
}

export default Forms