import React from 'react';
import './header.css';

export default function Header(props) {
    return (<h2 onClick={e => {this.newGame(e)}>Create New Game</h2>);
};

