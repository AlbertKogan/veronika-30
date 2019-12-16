// ESM syntax is supported.
const a = 'test';

const emojis = [
	'😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😁','😌','😂','😅','😆','😋','😎','😴','😇','👼','👸','😻','😽','😼','🙀','😹','💩','🔥','✨','🌟','💫','💥'
];

const emojiPlaceholder = document.getElementById('emoji');

function randomEmoji() {
  setInterval(() => {
    emojiPlaceholder.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
  }, 1000)
}

export { randomEmoji };
