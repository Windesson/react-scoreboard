import React from 'react';
import {Consumer} from "./Context/index";
import Player from "./Player";


const PlayerList = () => {
    return ( <Consumer>
    { ({players, actions}) =>  (    
      <React.Fragment>
        { players.map( (player,index) =>
            <Player 
            {...player}
                index={index}
                key={player.id.toString()} 
                changeScore={actions.changeScore}
                removePlayer={actions.removePlayer}    
                isHighScore={actions.highScore === player.score}        
            /> )}
        </React.Fragment>    
      )
  }
  </Consumer>);
};

export default PlayerList;