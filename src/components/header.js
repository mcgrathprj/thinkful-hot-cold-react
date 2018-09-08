import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateGameUpdate={() => props.onGenerateGameUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1>Are you HOT or COLD?</h1>
    </header>
  );
}
