import React from './react';

export default function GameStatus(props) {
  return (
    <p 
    id="status-readout"
    className="visuallyhidden"
    aria-live="assertive"
    aria-atomic="true"
    >
    {props.GameStatus}
    </p>
    );
}