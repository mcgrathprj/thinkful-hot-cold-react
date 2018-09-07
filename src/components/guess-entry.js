//this is my form for inputing my guesses

import React from 'react';
import './guess-entry.css';

export default function GuessEntry (props) {
    return (<form>
      <label for "guess">Guess a Number!</label>
      <input type="number" name="guess"></input>
      <button id="guess">SUBMIT YOUR GUESS!</button>
      </form>);
};

