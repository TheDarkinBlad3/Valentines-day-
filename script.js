const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! I knew you would say Yes! ❤️😍</h1>
            <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="Happy Gif" class="gif">
            <p>Can't wait for our Valentine's date! 🥰</p>
        </div>
    `;
});

noBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Wait... You really said NO? 😭💔</h1>
            <img src="https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif" alt="Sad Gif" class="gif">
            <p>Are you **really sure**? 🥺</p>
            <button id="rethinkBtn">Okay... Maybe Yes? 😢</button>
        </div>
    `;

    document.getElementById("rethinkBtn").addEventListener("click", () => {
        document.body.innerHTML = `
            <div class="container">
                <h1>Yay! You changed your mind! ❤️😍</h1>
                <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="Happy Gif" class="gif">
                <p>Best decision ever! Can't wait for our date! 💖</p>
            </div>
        `;
    });
});
