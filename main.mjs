import Game from "./game.mjs";

document.getElementById('btn-start').onclick = e => {
    window._game = new Game();
}