import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MAJOR_ARCANA = [
  "0 The Fool",
  "1 The Magician",
  "2 The High Priestess",
  "3 The Empress",
  "4 The Emperor",
  "5 The Hierophant",
  "6 The Lovers",
  "7 The Chariot",
  "8 Strength",
  "9 The Hermit",
  "10 Wheel of Fortune",
  "11 Justice",
  "12 The Hanged Man",
  "13 Death",
  "14 Temperance",
  "15 The Devil",
  "16 The Tower",
  "17 The Star",
  "18 The Moon",
  "19 The Sun",
  "20 Judgement",
  "21 The World"
]

const SUITS = [
  'Swords',
  'Wands',
  'Pentacles',
  'Cups'
]

const CARDS_PER_SUIT = [
  'Ace', 
  'Two', 
  'Three', 
  'Four', 
  'Five', 
  'Six', 
  'Seven', 
  'Eight', 
  'Nine', 
  'Ten', 
  'Page', 
  'Knight', 
  'Queen', 
  'King'
]

const minorArcanaCards = ()=> {
  let ary = []
  SUITS.forEach((suit)=>{
    CARDS_PER_SUIT.forEach((cardNumber)=>{
      ary.push(`${cardNumber} of ${suit}`)
    })
  })
  return ary
}

const createDeck = function() {
  return MAJOR_ARCANA.concat(minorArcanaCards())
}

function Deck(props) {
  const cards = props.cards;
  const listItems = cards.map((card) =>
    <li>{card}</li>
  );
  return (
    <div>
      <h1>Tarot Deck</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

const tarotCards = createDeck()
ReactDOM.render(
  <Deck cards={tarotCards} />,  document.getElementById('root')
);
