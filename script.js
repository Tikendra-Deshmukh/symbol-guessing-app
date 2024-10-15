const symbols = ['⭐', '❤️', '⚽', '🎵', '🍎', '🚗', '📚', '🎮', '💡', '🌟'];
const symbolList = document.getElementById('symbols');
const nextButton = document.getElementById('next-button');
const resultDiv = document.getElementById('result');

let selectedGroups = [];

function displaySymbols() {
    symbols.forEach((symbol, index) => {
        const symbolDiv = document.createElement('div');
        symbolDiv.classList.add('symbol');
        symbolDiv.textContent = symbol;
        symbolDiv.addEventListener('click', () => selectSymbol(index + 1));
        symbolList.appendChild(symbolDiv);
    });
}

function selectSymbol(symbolNumber) {
    if (confirm(`Is your symbol ${symbols[symbolNumber - 1]} (number ${symbolNumber})?`)) {
        selectedGroups.push(symbolNumber);
    }
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    if (selectedGroups.length > 0) {
        const total = selectedGroups.reduce((sum, val) => sum + val, 0);
        resultDiv.textContent = `Your symbol is: ${symbols[total - 1]}`;
        resultDiv.classList.remove('hidden');
        nextButton.classList.add('hidden');
    }
});

// Start the game
displaySymbols();