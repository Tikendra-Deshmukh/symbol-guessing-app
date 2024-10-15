// Define the symbols and their corresponding numbers
const symbols = [
    { number: 1, symbol: '⭐' },
    { number: 2, symbol: '❤️' },
    { number: 3, symbol: '⚽' },
    { number: 4, symbol: '🎵' },
    { number: 5, symbol: '🍎' },
    { number: 6, symbol: '🚗' },
    { number: 7, symbol: '📚' },
    { number: 8, symbol: '🎮' },
    { number: 9, symbol: '💡' },
    { number: 10, symbol: '🌟' },
];

// Define the groups based on binary-like representation
const groups = [
    { value: 1, symbols: [1, 3, 5, 7, 9] },  // Group 1
    { value: 2, symbols: [2, 3, 6, 7, 10] }, // Group 2
    { value: 4, symbols: [4, 5, 6, 7] },     // Group 4
    { value: 8, symbols: [8, 9, 10] },       // Group 8
];

let currentGroupIndex = 0;
let yesCount = 0;

// Get DOM elements
const step1 = document.getElementById('step1');
const symbolsDiv = document.getElementById('symbols');
const startButton = document.getElementById('start-button');

const step2 = document.getElementById('step2');
const groupQuestion = document.getElementById('group-question');
const groupSymbolsDiv = document.getElementById('group-symbols');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

const resultDiv = document.getElementById('result');
const chosenSymbolDiv = document.getElementById('chosen-symbol');
const boxesDiv = document.getElementById('boxes');
const restartButton = document.getElementById('restart-button');

// Function to display all symbols in Step 1
function displayAllSymbols() {
    symbols.forEach(item => {
        const symbolElement = document.createElement('div');
        symbolElement.classList.add('symbol');
        symbolElement.textContent = item.symbol;
        symbolsDiv.appendChild(symbolElement);
    });
}

// Function to display current group symbols in Step 2
function displayCurrentGroup() {
    groupSymbolsDiv.innerHTML = ''; // Clear previous symbols
    const currentGroup = groups[currentGroupIndex];
    currentGroup.symbols.forEach(num => {
        const symbolObj = symbols.find(s => s.number === num);
        if (symbolObj) {
            const symbolElement = document.createElement('div');
            symbolElement.classList.add('symbol');
            symbolElement.textContent = symbolObj.symbol;
            groupSymbolsDiv.appendChild(symbolElement);
        }
    });
    // Update the question
    groupQuestion.textContent = `Is your chosen symbol in Group ${currentGroup.value}?`;
}

// Function to calculate the chosen symbol based on yesCount
function calculateChosenSymbol() {
    let total = 0;
    for (let i = 0; i < yesCount.length; i++) {
        total += yesCount[i];
    }
    // Adjust for symbols 1-10
    if (total >= 1 && total <= 10) {
        return symbols.find(s => s.number === total).symbol;
    } else {
        return '❓'; // Fallback in case of error
    }
}

// Function to display the result
function displayResult() {
    step2.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    
    // Calculate the sum of group values where user answered 'Yes'
    const total = yesCount.reduce((acc, val) => acc + val, 0);
    const chosenSymbolObj = symbols.find(s => s.number === total);
    const chosenSymbol = chosenSymbolObj ? chosenSymbolObj.symbol : '❓';
    
    // Display the chosen symbol
    chosenSymbolDiv.textContent = chosenSymbol;
    
    // Display boxes 1 to 10
    for (let i = 1; i <= 10; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = i;
        if (i === total) {
            box.classList.add('revealed');
            box.textContent = `${i} - ${chosenSymbol}`;
        }
        boxesDiv.appendChild(box);
    }
}

// Event Listeners

// Start Button Click
startButton.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
    displayCurrentGroup();
});

// Yes Button Click
yesButton.addEventListener('click', () => {
    const currentGroup = groups[currentGroupIndex];
    yesCount.push(currentGroup.value);
    proceedToNextGroup();
});

// No Button Click
noButton.addEventListener('click', () => {
    proceedToNextGroup();
});

// Restart Button Click
restartButton.addEventListener('click', () => {
    // Reset all variables and UI
    currentGroupIndex = 0;
    yesCount = [];
    resultDiv.classList.add('hidden');
    boxesDiv.innerHTML = '';
    chosenSymbolDiv.textContent = '';
    step1.classList.remove('hidden');
});

// Function to proceed to the next group or show result
function proceedToNextGroup() {
    currentGroupIndex++;
    if (currentGroupIndex < groups.length) {
        displayCurrentGroup();
    } else {
        displayResult();
    }
}

// Initialize the app by displaying all symbols
displayAllSymbols();