const symbols = ['⭐', '❤️', '⚽', '🎵', '🍎', '🚗', '📚', '🎮', '💡', '🌟'];
const symbolList = document.getElementById('symbols');
const nextButton = document.getElementById('next-button');
const resultDiv = document.getElementById('result');

let currentSlide = 0;
let yesCount = 0;

// Function to display symbols
function displaySymbols() {
    symbols.forEach((symbol, index) => {
        const symbolDiv = document.createElement('div');
        symbolDiv.classList.add('symbol');
        symbolDiv.textContent = symbol;
        symbolList.appendChild(symbolDiv);
    });
}

// Function to start the slides
function startSlides() {
    // Show the first slide
    if (currentSlide < 4) {
        const symbol = symbols[currentSlide];
        const response = confirm(`Is your chosen symbol ${symbol} on slide ${currentSlide + 1}?`);
        if (response) {
            yesCount++;
        }
        currentSlide++;
        startSlides(); // Proceed to the next slide
    } else {
        // After 4 slides, show result
        showResult();
    }
}

// Function to show the result
function showResult() {
    resultDiv.innerHTML = "<h2>Your chosen symbol is:</h2>";
    
    // Calculate which box to open based on yesCount
    const boxToOpen = yesCount; // Since yesCount is 1-based
    const chosenSymbol = symbols[boxToOpen - 1];

    // Show boxes from 1 to 10
    for (let i = 1; i <= 10; i++) {
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('box');
        boxDiv.textContent = i;
        resultDiv.appendChild(boxDiv);
    }

    // Reveal the chosen symbol in the corresponding box
    resultDiv.innerHTML += `<p>Box ${boxToOpen} opened: ${chosenSymbol}</p>`;
    resultDiv.classList.remove('hidden');
}

// Start the game
displaySymbols();

// Handle the button click to start the game
nextButton.addEventListener('click', () => {
    // Hide the button after clicking to avoid multiple starts
    nextButton.classList.add('hidden');
    startSlides();
});