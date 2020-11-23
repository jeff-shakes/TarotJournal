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

// minor arcana pattern
// "https://www.biddytarot.com/tarot-card-meanings/minor-arcana/suit-of-swords/seven-of-swords/"

// major arcana pattern
// "https://www.biddytarot.com/tarot-card-meanings/major-arcana/devil/"

window.onload = function() {
  let contentDiv = document.getElementById("tarot-cards");
  createDeck().forEach((card)=>{
    pUnit = document.createElement("p")
    cardTextNode = document.createTextNode(card)
    pUnit.appendChild(cardTextNode)
    contentDiv.appendChild(pUnit)
  })
}