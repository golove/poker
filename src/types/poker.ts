const suits = [
  { value: '♠️', color: 'black' },
  { value: '♦️', color: 'red' },
  { value: '♥️', color: 'red' },
  { value: '♣️', color: 'black' }
] as const

const types = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const

const pokers = types.flatMap((type) => suits.map((suit) => ({ type, suit })))

export type Poker = (typeof pokers)[number]

export { pokers }
