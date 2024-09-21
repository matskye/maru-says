const prompts = [
    { jp: "まるが言う: <ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your right hand.", image: "images/maru_right_hand.png" },
    { jp: "まるが言う: <ruby>左手<rt>ひだりて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your left hand.", image: "images/maru_left_hand.png" },
    { jp: "まるが言う: ジャンプしてください。", en: "Maru says: Jump.", image: "images/maru_jump.png" },
    { jp: "まるが言う: <ruby>手<rt>て</rt></ruby>を<ruby>叩<rt>たた</rt></ruby>いてください。", en: "Maru says: Clap your hands.", image: "images/maru_clap.png" },
    { jp: "まるが言う: こんにちはと<ruby>言<rt>い</rt></ruby>ってください。", en: "Maru says: Say hello.", image: "images/maru_say_hello.png" },
    { jp: "まるが言う: <ruby>手<rt>て</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", en: "Maru says: Show your hands.", image: "images/maru_show_hands.png" },
    { jp: "まるが言う: <ruby>左手<rt>ひだりて</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", en: "Maru says: Show your left hand.", image: "images/maru_show_left_hand.png" },
    { jp: "まるが言う: <ruby>右手<rt>みぎて</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", en: "Maru says: Show your right hand.", image: "images/maru_show_right_hand.png" },
    { jp: "まるが言う: <ruby>足<rt>あし</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your foot.", image: "images/maru_raise_foot.png" },
    { jp: "まるが言う: キックしてください。", en: "Maru says: Please Kick.", image: "images/maru_kick.png" },
    { jp: "まるが言う: <ruby>左足<rt>ひだりあし</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your left leg.", image: "images/maru_raise_left_foot.png" },
    { jp: "まるが言う: <ruby>右足<rt>みぎあし</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げてください。", en: "Maru says: Raise your right leg.", image: "images/maru_raise_right_foot.png" },
    { jp: "まるが言う: <ruby>お辞儀<rt>おじぎ</rt></ruby>してください。", en: "Maru says: Bow.", image: "images/maru_bow.png" },
    { jp: "まるが言う: <ruby>くるくる<rt>くるくる</rt></ruby>回ってください。", en: "Maru says: Spin around.", image: "images/maru_spin.png" },
    { jp: "まるが言う: <ruby>右<rt>みぎ</rt></ruby>にスピン", en: "Maru says: Spin to the right.", image: "images/maru_spin.png" },
    { jp: "まるが言う: <ruby>右<rt>みぎ</rt></ruby>へスピン", en: "Maru says: Spin to the right.", image: "images/maru_spin.png" },
    { jp: "まるが言う: <ruby>左<rt>ひだり</rt></ruby>にスピン", en: "Maru says: Spin to the lef.", image: "images/maru_spin.png" },
    { jp: "まるが言う: <ruby>左<rt>ひだり</rt></ruby>へスピン", en: "Maru says: Spin to the left.", image: "images/maru_spin.png" },
    { jp: "まるが言う: ダンス", en: "Maru says: dance.", image: "images/maru_dance.png" },
    { jp: "まるが言う: ダンスを<ruby>踊<rt>おど</rt></ruby>ろう", en: "Maru says: dance a dance.", image: "images/maru_dance.png" },
    { jp: "まるが言う: <ruby>小<rt>ちい</rt></ruby>さなダンスを<ruby>踊<rt>おど</rt></ruby>ろう", en: "Maru says: Do a little dance", image: "images/maru_dance.png" },
    // Add more prompts and corresponding images here
];

let timer;
let currentPromptIndex = -1;  // Initialize with an invalid value to indicate no previous prompt
let gameRunning = false; // Game state variable

document.getElementById('toggle-furigana').addEventListener('click', function() {
    const promptTextElement = document.getElementById('prompt-text');

    // Toggle the 'hide-furigana' class to hide or show furigana
    promptTextElement.classList.toggle('hide-furigana');

    // Update the button text based on the current state
    this.textContent = promptTextElement.classList.contains('hide-furigana') ? 'Show Furigana' : 'Hide Furigana';
});

function cleanForTTS(html) {
    const div = document.createElement('div');
    div.innerHTML = html;

    let spokenText = "";
    
    // Loop through all child nodes
    div.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            // If it's a text node, add its text directly
            spokenText += node.textContent;
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName.toLowerCase() === 'ruby') {
            // If it's a ruby element, find the furigana
            const rt = node.querySelector('rt');
            if (rt) {
                spokenText += rt.textContent; // Replace the kanji with its furigana
            }
        }
    });

    return spokenText.trim(); // Remove any leading or trailing spaces
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; // Set to Japanese
    window.speechSynthesis.speak(utterance);
}

// Function to start a new round
function startNewRound() {
    const selectedTime = document.getElementById('time-select').value;
    const showEnglish = document.getElementById('english-translation').checked;
    const ttsEnabled = document.getElementById('toggle-tts').checked; 

    // Ensure the new prompt is different from the last one
    let newPromptIndex;
    do {
        newPromptIndex = Math.floor(Math.random() * prompts.length);
    } while (newPromptIndex === currentPromptIndex);  // Repeat until a different prompt is selected

    currentPromptIndex = newPromptIndex;  // Update to the newly selected prompt index
    const prompt = prompts[currentPromptIndex];

    // Display the Japanese prompt
    document.getElementById('prompt-text').innerHTML = prompt.jp;

    // Clean the prompt for TTS
    const ttsText = cleanForTTS(prompt.jp);
    if (ttsEnabled) {
        speak(ttsText);
    }
    
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
    setTimeout(() => {
        startNewRound();
        gameRunning = false; // Reset the flag when starting a new round
    }, 3000); // Change the delay as needed
}

// Start the game when the start button is pressed
document.getElementById('start-button').addEventListener('click', function() {
    console.log('Start button pressed!');

    // Prevent starting a new game if one is already running
    if (gameRunning) return;
    gameRunning = true; // Set the flag to true

    this.disabled = true; // Optional: Disable the button after starting the game

    // Start the first round
    startNewRound();
});
