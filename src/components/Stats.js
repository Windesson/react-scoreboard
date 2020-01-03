import React from 'react';

const Stats = (props) => {
    const players = props.players;
    const TotalPoints = players.reduce( (total, player) => {
        return total + player.score;
    }, 0);

    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{players.length}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{TotalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
}

export default Stats;