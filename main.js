const sessionWrapper = document.querySelector(".session-wrapper");

const playerPlaceholder = document.querySelector(".player-placeholder");

const urlInput = document.querySelector(".url-input");

const startStreamButton = document.querySelector(".start-stream-button");

const playerWidth = 600;
const playerHeight = 339;

playerPlaceholder.style.width = playerWidth + "px";
playerPlaceholder.style.height = playerHeight + "px";

const startStream = (e, urlInputValue) => {
    const player = e.target.parentNode.previousElementSibling.firstElementChild;
    if (player) {
        restartPlayer(player);
    }
    
    playerInit(urlInputValue);
}
startStreamButton.addEventListener("click", (e) => {
    startStream(e, urlInput.value)
});

const playerInit = (urlInputValue) => {
    SLDP.init({
        container:          `player-placeholder`,
        stream_url:         urlInputValue,
        initial_resolution: '240p',
        buffering:          500,
        autoplay:           true,
        muted:              false,
        width:              playerWidth,
        height:             playerHeight,
        fullscreen:         true
    })
}

const restartPlayer = (player) => {
    if (player.classList.contains("sldp_player_wrp")) {
        player.remove();
    }
}