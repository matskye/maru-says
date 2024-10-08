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
    { jp: "まるが言う: <ruby>左<rt>ひだり</rt></ruby>にスピン", en: "Maru says: Spin to the left.", image: "images/maru_spin.png" },
    { jp: "まるが言う: <ruby>左<rt>ひだり</rt></ruby>へスピン", en: "Maru says: Spin to the left.", image: "images/maru_spin.png" },
    { jp: "まるが言う: ダンス", en: "Maru says: dance.", image: "images/maru_dance.png" },
    { jp: "まるが言う: ダンスを<ruby>踊<rt>おど</rt></ruby>ろう", en: "Maru says: dance a dance.", image: "images/maru_dance.png" },
    { jp: "まるが言う: <ruby>小<rt>ちい</rt></ruby>さなダンスを<ruby>踊<rt>おど</rt></ruby>ろう", en: "Maru says: Do a little dance", image: "images/maru_dance.png" },
    { jp: "まるが言う: <ruby>熊<rt>くま</rt></ruby>のような<ruby>咆哮<rt>ほうこう</rt></ruby>。", en: "Maru says: Roar like a bear.", image: "kuma.png" },
    { jp: "まるが言う: <ruby>猫<rt>ねこ</rt></ruby>のように<ruby>鳴<rt>な</rt></ruby>いてください。", en: "Maru says: Meow like a cat.", image: "images/meow.png" },
    { jp: "まるが言う: <ruby>犬<rt>いぬ</rt></ruby>のように<ruby>吠<rt>ほ</rt></ruby>えてください。", en: "Maru says: Bark like a dog.", image: "images/bark.png" },
    { jp: "まるが言う: <ruby>熊<rt>くま</rt></ruby>のように<ruby>歩<rt>ある</rt></ruby>いてください。", en: "Maru says: Walk like a bear.", image: "images/bear.png" },
    { jp: "まるが言う: <ruby>鳥<rt>とり</rt></ruby>のように<ruby>羽<rt>は</rt></ruby>ばたいてください。", en: "Maru says: Flap your wings like a bird.", image: "images/flap.png" },
    { jp: "まるが言う: <ruby>馬<rt>うま</rt></ruby>のように<ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Run like a horse.", image: "images/horse_run.png" },
    { jp: "まるが言う: <ruby>鶏<rt>にわとり</rt></ruby>のように<ruby>鳴<rt>な</rt></ruby>いてください。", en: "Maru says: Cluck like a chicken.", image: "images/chicken.png" },
    { jp: "まるが言う: <ruby>魚<rt>さかな</rt></ruby>のように<ruby>泳<rt>およ</rt></ruby>いでください。", en: "Maru says: Swim like a fish.", image: "images/swim.png" },
    { jp: "まるが言う: <ruby>ウサギ<rt>うさぎ</rt></ruby>のように<ruby>跳<rt>は</rt></ruby>ねてください。", en: "Maru says: Hop like a rabbit.", image: "images/maru_hop.png" },
    { jp: "まるが言う: ライオンのように<ruby>吠<rt>ほ</rt></ruby>えてください。", en: "Maru says: Roar like a lion.", image: "images/maru_lionsroar.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Run.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>って<ruby>逃<rt>に</rt></ruby>げてください。", en: "Maru says: Run away.", image: "images/maru_run_away.png" },
    { jp: "まるが言う: その<ruby>場<rt>ば</rt></ruby>で<ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Run in place.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>ジョギング<rt>じょぎんぐ</rt></ruby>してください。", en: "Maru says: Jog.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>全力<rt>ぜんりょく</rt></ruby>で<ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Sprint.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>って<ruby>戻<rt>もど</rt></ruby>ってきてください。", en: "Maru says: Run back.", image: "images/maru_run.png" },
    { jp: "まるが言う: ゆっくり<ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Run slowly.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>りながら<ruby>手<rt>て</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>ってください。", en: "Maru says: Run and wave your hands.", image: "images/maru_run_wave.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>って<ruby>止<rt>と</rt></ruby>まってください。", en: "Maru says: Run and stop.", image: "images/maru_run.png" },
    { jp: "まるが言う: <ruby>友<rt>とも</rt></ruby>だちと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>走<rt>はし</rt></ruby>ってください。", en: "Maru says: Run with a friend.", image: "images/maru_run_with_friend.png" },
    { jp: "まるが言う: <ruby>走<rt>はし</rt></ruby>りながら<ruby>歌<rt>うた</rt></ruby>ってください。", en: "Maru says: Run and sing.", image: "images/maru_run_sing.png" },
    { jp: "まるが言う: <ruby>目<rt>め</rt></ruby>を<ruby>閉<rt>とじ</rt></ruby>てください。", en: "Maru says: Close your eyes.", image: "images/maru_close_eyes.png" },
    { jp: "まるが言う: <ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>大<rt>おお</rt></ruby>きく<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh out loud.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>お腹<rt>おなか</rt></ruby>を<ruby>抱<rt>かか</rt></ruby>えて<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Belly laugh.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>楽<rt>たの</rt></ruby>しい<ruby>笑顔<rt>えがお</rt></ruby>を<ruby>見<rt>み</rt></ruby>せてください。", en: "Maru says: Show you're happy.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>悪<rt>わる</rt></ruby>い<ruby>冗談<rt>じょうだん</rt></ruby>に<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh at a bad joke.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>静<rt>しず</rt></ruby>かに<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh quietly.", image: "images/maru_shy_laugh.png" },
    { jp: "まるが言う: <ruby>止<rt>と</rt></ruby>まらないように<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh uncontrollably.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>口<rt>くち</rt></ruby>を<ruby>押<rt>お</rt></ruby>さえて<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh with your hand over your mouth.", image: "images/maru_shy_laugh.png" },
    { jp: "まるが言う: <ruby>恥<rt>はず</rt></ruby>かしそうに<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh shyly.", image: "images/maru_shy_laugh.png" },
    { jp: "まるが言う: <ruby>声<rt>こえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh with sound.", image: "images/maru_laugh.png" },
    { jp: "まるが言う: <ruby>小<rt>ちい</rt></ruby>さな<ruby>笑<rt>わら</rt></ruby>い<ruby>声<rt>ごえ</rt></ruby>で<ruby>笑<rt>わら</rt></ruby>ってください。", en: "Maru says: Laugh in a small voice.", image: "images/maru_shy_laugh.png" },
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
