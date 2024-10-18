// Global Variables
let step = 1;
let mainEmoji = ['⭐', '💖', '⚽', '🍎', '📚', '💡', '💰', '🪔', '🤫', '🎁', '🧨', '🥭', '🧊', '🔥', '🫧'];
let extraEmoji = ['☠️', '🌼', '☔', '🌏', '🍉', '🎀', '🎈', '🏆', '🥎', '🎯'];
let colors = ['red', 'green', 'yellow', 'blue', 'pink', 'black', 'orange', 'purple', 'brown', 'gray'];
let selectedEmoji, favColor, favNumber;
let yesAnswers = 0;

// Initialize game
function initGame() {
    document.querySelector(`#step${step}`).classList.add('active');
    displayEmojiList();
    displayColorList();
}

function nextStep(next) {
    document.querySelector(`#step${step}`).classList.remove('active');
    step = next;
    document.querySelector(`#step${step}`).classList.add('active');
}

function displayEmojiList() {
    let emojiDiv = document.getElementById('emojiList');
    emojiDiv.innerHTML = mainEmoji.map(emoji => `<div class='emoji'>${emoji}</div>`).join('');
}

function displayColorList() {
    let colorDiv = document.getElementById('colorList');
    colorDiv.innerHTML = colors.map(color => `<div class='color' style='background-color:${color};'></div>`).join('');
}

function checkColorPart() {
    // Logic to check if selected color is in shown list
}

function eliminateBoxes() {
    // Logic to eliminate boxes based on favorite number
}

// Run on load
window.onload = initGame;