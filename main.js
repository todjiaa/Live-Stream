const sessionWrapper = document.querySelector(".session-wrapper");

const playerPlaceholder = document.querySelector(".player-placeholder");

const urlInput = document.querySelector(".url-input");

const startStreamButton = document.querySelector(".start-stream-button");

let playerWidth = 600;
let playerHeight = 339;

// Set the widht and height of the video player placeholder
const setWidthHeight = (element, width, height) => {
    element.style.width = width + "px";
    element.style.height = height + "px";
}

// Set the size on Window load
const onWindowLoad = () => {
    playerSize();
}
window.addEventListener("load", onWindowLoad);

// Set the size on window resize
const onWindowResize = () => {
    if (window.innerWidth < playerWidth) {
        playerSize();

        restartPlayer();

        playerInit();
    }
}
window.addEventListener("resize", onWindowResize);

// Get and set the width and height for the player and the player placeholder dynamically depending on the size of the screen
const playerSize = () => {
    let width = playerWidth;
    let height = playerHeight;

    const ratio = playerWidth/playerHeight;

    if (window.innerWidth < playerWidth) {
        width = window.innerWidth;
        height = width / ratio;

        setWidthHeight(playerPlaceholder, width, height);
    }
    else {
        width = playerWidth;
        height = playerHeight;

        setWidthHeight(playerPlaceholder, width, height);
    }

    return {
        width: width,
        height: height
    }
}

// Start the stream
const startStream = (e) => {
    restartPlayer();
    
    playerInit();
}
startStreamButton.addEventListener("click", startStream);

// Restart the video player
const restartPlayer = () => {
    const player = document.querySelector(".sldp_player_wrp");

    if (player && player.classList.contains("sldp_player_wrp")) {
        player.remove();
    }
}

// Initialize the video player
const playerInit = () => {
    console.log(playerSize().width)

    const activeWidth = playerSize().width;
    const activeHeight = playerSize().height;

    setWidthHeight(playerPlaceholder, activeWidth, activeHeight);

    SLDP.init({
        container:          `player-placeholder`,
        stream_url:         urlInput.value,
        initial_resolution: '240p',
        buffering:          500,
        autoplay:           true,
        muted:              false,
        width:              activeWidth,
        height:             activeHeight,
        // fullscreen:         true
    })
}