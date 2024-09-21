const prompts = [
    { jp: "まるが言う: <ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your right hand.", image: "images/maru_right_hand.png" },
    { jp: "まるが言う: <ruby>左手<rt>ひだりて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your left hand.", image: "images/maru_left_hand.png" },
    { jp: "まるが言う: ジャンプしてください。", en: "Maru says: Jump.", image: "images/maru_jump.png" },
    { jp: "まるが言う: <ruby>手<rt>て</rt></ruby>を<ruby>叩<rt>たた</rt></ruby>いてください。", en: "Maru says: Clap your hands.", image: "images/maru_clap.png" },
    { jp: "まるが言う: こんにちはと<ruby>言<rt>い</rt></ruby>ってください。", en: "Maru says: Say hello.", image: "images/maru_say_hello.png" },
    { jp: "まるが言う: <ruby>手<rt>て</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", en: "Maru says: Show your hands.", image: "images/maru_show_hands.png" },
    // Add more prompts and corresponding images here
];

let timer;
let currentPromptIndex = -1;  // Initialize with an invalid value to indicate no previous prompt

document.getElementById('toggle-furigana').addEventListener('click', function() {
    const promptTextElement = document.getElementById('prompt-text');

    // Toggle the 'hide-furigana' class to hide or show furigana
    promptTextElement.classList.toggle('hide-furigana');

    // Update the button text based on the current state
    if (promptTextElement.classList.contains('hide-furigana')) {
        this.textContent = 'Show Furigana';
    } else {
        this.textContent = 'Hide Furigana';
    }
});

// Function to start a new round
function startNewRound() {
    const selectedTime = document.getElementById('time-select').value;
    const showEnglish = document.getElementById('english-translation').checked;

    // Ensure the new prompt is different from the last one
    let newPromptIndex;
    do {
        newPromptIndex = Math.floor(Math.random() * prompts.length);
    } while (newPromptIndex === currentPromptIndex);  // Repeat until a different prompt is selected

    currentPromptIndex = newPromptIndex;  // Update to the newly selected prompt index
    const prompt = prompts[currentPromptIndex];

    // Display the Japanese prompt
    document.getElementById('prompt-text').innerHTML = prompt.jp;

    // Hide the English prompt initially, it will be shown after the timer runs out
    document.getElementById('english-prompt-text').style.display = 'none';

    // Start the timer
    let timeLeft = selectedTime;
    document.getElementById('timer-display').textContent = `タイマー: ${timeLeft}秒`;

    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = `タイマー: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showAnswer(showEnglish);
        }
    }, 1000);
}

function showAnswer(showEnglish) {
    // Display the image corresponding to the prompt
    const prompt = prompts[currentPromptIndex];
    document.getElementById('panda-img').src = prompt.image;

    // Display the English translation if the user checked the option
    if (showEnglish) {
        document.getElementById('english-prompt-text').textContent = prompt.en;
        document.getElementById('english-prompt-text').style.display = 'block';
    }

    // Automatically start a new round after showing the answer
    setTimeout(startNewRound, 3000); // Change the delay as needed
}

// Start the game when the start button is pressed
document.getElementById('start-button').addEventListener('click', function() {
    console.log('Start button pressed!'); // Debugging line

    // Optional: Disable the button after starting the game
    this.disabled = true; 

    // Start the first round
    startNewRound();
});
