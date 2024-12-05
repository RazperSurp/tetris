import Tetramino from "./tetramino.mjs";

export default class Game {
    _DEBUG_ENABLED = true;

    _LIB = {
        GAME_STATUS: {
            NOT_STARTED: 0,
            STARTED: 1,
            WIN: 2,
            LOSE: 3
        }, KEYBOARD: {
            // ArrowUp,
            // ArrowDown,
            // ArrowLeft,
            // ArrowRight
        }, TETRAMINO: {
            STICK: [
                {
                    x: 0,
                    y: 0,
                    isPart: true
                },
                {
                    x: 0,
                    y: 1,
                    isPart: true
                },
                {
                    x: 0,
                    y: 2,
                    isPart: true
                },
                {
                    x: 0,
                    y: 3,
                    isPart: true
                },
                {
                    x: 1,
                    y: 0,
                    isPart: false
                },
                {
                    x: 1,
                    y: 1,
                    isPart: false
                },
                {
                    x: 1,
                    y: 2,
                    isPart: false
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            CUBE: [
                {
                    x: 0,
                    y: 0,
                    isPart: true
                },
                {
                    x: 0,
                    y: 1,
                    isPart: true
                },
                {
                    x: 0,
                    y: 2,
                    isPart: false
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: true
                },
                {
                    x: 1,
                    y: 1,
                    isPart: true
                },
                {
                    x: 1,
                    y: 2,
                    isPart: false
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            L_SHAPE: [
                {
                    x: 0,
                    y: 0,
                    isPart: true
                },
                {
                    x: 0,
                    y: 1,
                    isPart: true
                },
                {
                    x: 0,
                    y: 2,
                    isPart: true
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: false
                },
                {
                    x: 1,
                    y: 1,
                    isPart: false
                },
                {
                    x: 1,
                    y: 2,
                    isPart: true
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            J_SHAPE: [
                {
                    x: 0,
                    y: 0,
                    isPart: false
                },
                {
                    x: 0,
                    y: 1,
                    isPart: false
                },
                {
                    x: 0,
                    y: 2,
                    isPart: true
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: true
                },
                {
                    x: 1,
                    y: 1,
                    isPart: true
                },
                {
                    x: 1,
                    y: 2,
                    isPart: true
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            T_SHAPE: [
                {
                    x: 0,
                    y: 0,
                    isPart: true
                },
                {
                    x: 0,
                    y: 1,
                    isPart: false
                },
                {
                    x: 0,
                    y: 2,
                    isPart: false
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: true
                },
                {
                    x: 1,
                    y: 1,
                    isPart: true
                },
                {
                    x: 1,
                    y: 2,
                    isPart: false
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: true
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            Z_SHAPE: [
                {
                    x: 0,
                    y: 0,
                    isPart: false
                },
                {
                    x: 0,
                    y: 1,
                    isPart: true
                },
                {
                    x: 0,
                    y: 2,
                    isPart: true
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: true
                },
                {
                    x: 1,
                    y: 1,
                    isPart: true
                },
                {
                    x: 1,
                    y: 2,
                    isPart: false
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
            Z_REVERSE_SHAPE: [
                {
                    x: 0,
                    y: 0,
                    isPart: true
                },
                {
                    x: 0,
                    y: 1,
                    isPart: true
                },
                {
                    x: 0,
                    y: 2,
                    isPart: false
                },
                {
                    x: 0,
                    y: 3,
                    isPart: false
                },
                {
                    x: 1,
                    y: 0,
                    isPart: false
                },
                {
                    x: 1,
                    y: 1,
                    isPart: true
                },
                {
                    x: 1,
                    y: 2,
                    isPart: true
                },
                {
                    x: 1,
                    y: 3,
                    isPart: false
                },
                {
                    x: 2,
                    y: 0,
                    isPart: false
                },
                {
                    x: 2,
                    y: 1,
                    isPart: false
                },
                {
                    x: 2,
                    y: 2,
                    isPart: false
                },
                {
                    x: 2,
                    y: 3,
                    isPart: false
                }
            ],
        }
    }

    _GAME_FIELD = document.getElementById('game-field');

    _TETRAMINOS = [];
    _ACITVE_TETRAMINO;

    _STATUS;

    _LEVEL;
    _LEVEL_XP = 500;
    _LEVEL_XP_INCREMENT = 1.25;

    _ROW_XP_COST = 100;
    _TETRIS_XP_COST = 1000;

    _SPEED_DEFAULT = 1;
    _SPEED_INCREMENT = 0.25;

    _CELLS = [];

    constructor() {
        this._debug('Инициализация нового экземпляра класса Game запущена');
        this._changeGameStatus(this._LIB.GAME_STATUS.NOT_STARTED);

        this._initGameField();

        this._changeGameStatus(this._LIB.GAME_STATUS.STARTED);
        this._debug('Инициализация нового экземпляра класса Game завершена');

        setTimeout(() => {
            this._spawnTetramino();
        }, 1000);

        return this;
    }

    _changeGameStatus(status = 3) {
        this._debug(`Смена статуса игры. Предыдущий статус: ${this._STATUS ?? 'NULL'}, новый статус: ${status}`)
        this._STATUS = status;

        switch (status) {
            default:
                break;
        }
    }

    _debug(msg) {
        if (this._DEBUG_ENABLED) console.warn(`<${Date.now()}> [DEBUG] ${msg}`)
    } 

    _resetCell(cellEl) {
        this._debug(`Реинициализация клетки (x: ${cellEl.dataset.addr}, y: ${cellEl.parentNode.dataset.addr})`);

        if (cellEl.hasAttribute('data-id')) cellEl.removeAttribute('data-id');
        if (cellEl.classList.contains('tetramino')) cellEl.classList.remove('tetramino');
    }

    _initGameField() {
        this._debug(`Инициализация игрового поля`)
        const CELLS = document.querySelectorAll('#game-field td[data-addr]');

        document.querySelectorAll('#game-field td[data-addr]').forEach((cell, i) => {

            this._resetCell(cell);

            this._CELLS.push({
                x: cell.dataset.addr,
                y: cell.parentNode.dataset.addr,
                el: cell
            })
        });
    }

    _spawnTetramino() {
        const tmp = Math.floor(Math.random() * Object.keys(this._LIB.TETRAMINO).length);
        console.log(tmp);

        const TETRAMINO_NAME = Object.keys(this._LIB.TETRAMINO)[tmp];
        this._debug(`Спавн фигуры "${TETRAMINO_NAME}"`);

        this._ACITVE_TETRAMINO = new Tetramino(this._LIB.TETRAMINO[TETRAMINO_NAME], this._GAME_FIELD);
        this._TETRAMINOS.push(this._ACITVE_TETRAMINO);
    }

    _translateControl() {

    }

    _initGameControls() {

    }
}