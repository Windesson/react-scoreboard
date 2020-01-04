import React from 'react';
import PropTypes from 'prop-types'
import Stats from './Stats';
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    const { players, title} = props;
    return (
      <header>
        <Stats players={players}/>
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

Header.propTypes = {
  players: PropTypes.array,
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;