const prompts = [
    { jp: "まるが言う: 右手を上げてください。", en: "Maru says: Raise your right hand.", image: "images/maru_right_hand.png" },
    { jp: "まるが言う: 左手を上げてください。", en: "Maru says: Raise your left hand.", image: "images/maru_left_hand.png" },
    { jp: "まるが言う: ジャンプしてください。", en: "Maru says: Jump.", image: "images/maru_jump.png" },
    { jp: "まるが言う: 手を叩いてください。", en: "Maru says: Clap your hands.", image: "images/maru_clap.png" },
    { jp: "まるが言う: こんにちはと言ってください。", en: "Maru says: Say hello.", image: "images/maru_say_hello.png" },
    { jp: "まるが言う: 手を見せてください。", en: "Maru says: Show your hands.", image: "images/maru_show_hands.png" },

    // Add more prompts and corresponding images here
];

let timer;
let currentPromptIndex = -1;  // Initialize with an invalid value to indicate no previous prompt

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
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
    document.getElementById('prompt-text').textContent = prompt.jp;

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
}
