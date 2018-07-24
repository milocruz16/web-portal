import howler from 'howler';

const Sounds = {
  insertCoin: new Howl({
    src: ['/sounds/please_insert_coin_raw.mp3'],
    loop: false,
    buffer: false,
    preload: true
  }),

  connected: new Howl({
    src: ['/sounds/connected.mp3'],
    buffer: false,
    preload: true
  }),

  disconnected: new Howl({
    src: ['/sounds/button-2.mp3'],
    buffer: false,
    preload: true
  }),

  coinInserted: new Howl({
    src: ['/sounds/button-14.mp3'],
    buffer: false,
    preload: true
  }),
  notAllowed: new Howl({
    src: ['/sounds/wrong-answer.mp3'],
    buffer: false,
    preload: true
  })
};


export default Sounds
