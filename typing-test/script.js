const typingTextElement = document.querySelector('.typing-text p');
const inputField = document.querySelector('.wrapper .input-field');
const timeDisplay = document.querySelector('.time span b');
const mistakeDisplay = document.querySelector('.mistake span');
const wpmDisplay = document.querySelector('.wpm span');
const cpmDisplay = document.querySelector('.cpm span');
const resetButton = document.querySelector('button');

// Initialize values
let countdownTimer;
const totalTime = 60;
let remainingTime = totalTime;
let currentCharIndex = 0;
let errorCount = 0;
let hasStartedTyping = false;

function loadNewParagraph() {
    const paragraphs = [
        "Avoid daydreaming about the years to come.",
        "You are the most important person in your whole life.",
        "Always be true to who you are, and ignore what other people have to say about you.",
        "Only demonstrate your strength when it’s really required.",
        "Subscribe to Drop X Out"
    ];

    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingTextElement.innerHTML = '';

    for (const character of paragraphs[randomIndex]) {
        console.log(character);
        typingTextElement.innerHTML += `<span>${character}</span>`;
    }

    typingTextElement.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => inputField.focus());
    typingTextElement.addEventListener("click", () => inputField.focus());
}

// Handle user input
function startTyping() {
    const characters = typingTextElement.querySelectorAll('span');
    const currentTypedChar = inputField.value.charAt(currentCharIndex);

    if (currentCharIndex < characters.length && remainingTime > 0) {
        if (!hasStartedTyping) {
            countdownTimer = setInterval(updateTime, 1000);
            hasStartedTyping = true;
        }

        if (characters[currentCharIndex].innerText === currentTypedChar) {
            characters[currentCharIndex].classList.add('correct');
            console.log("correct");
        } else {
            errorCount++;
            characters[currentCharIndex].classList.add('incorrect');
            console.log("incorrect");
        }

        currentCharIndex++;
        characters[currentCharIndex].classList.add('active');

        mistakeDisplay.innerText = errorCount;
        cpmDisplay.innerText = currentCharIndex - errorCount;
    } else {
        clearInterval(countdownTimer);
        inputField.value = '';
    }
}

function updateTime() {
    if (remainingTime > 0) {
        remainingTime--;
        timeDisplay.innerText = remainingTime;

        let calculatedWPM = Math.round(((currentCharIndex - errorCount) / 5) / ((totalTime - remainingTime) / 60));
        wpmDisplay.innerText = calculatedWPM;
    } else {
        clearInterval(countdownTimer);
    }
}

function resetGame() {
    loadNewParagraph();
    clearInterval(countdownTimer);
    remainingTime = totalTime;
    timeDisplay.innerText = remainingTime;
    inputField.value = '';
    currentCharIndex = 0;
    errorCount = 0;
    hasStartedTyping = false;
    wpmDisplay.innerText = 0;
    cpmDisplay.innerText = 0;
    mistakeDisplay.innerText = 0;
}

inputField.addEventListener("input", startTyping);
resetButton.addEventListener("click", resetGame);
loadNewParagraph();