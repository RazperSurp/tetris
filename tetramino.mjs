export default class Tetramino {
    _ID;

    _ROOT;

    _LIB = {
        STATUS: {
            ACTIVE: 1,
            INACTIVE: 2
        }
    }

    _PARTS = [];

    _debug(msg) {
        console.warn(`<${Date.now()}> [DEBUG] ${msg}`)
    }

    constructor(structure, root) {
        this._ROOT = root;
        this._ID = window._game._TETRAMINOS.length,
        this._debug(`Инициализация нового экземпляра класса Tetramino (ID: ${this._ID}) запущена`)
        
        structure.forEach(part => {
            if (part.isPart) {
                const ROOT_PART = this._findRootPart(part.x, part.y);
                ROOT_PART.setAttribute('data-id', this._ID);
                ROOT_PART.classList.add('tetramino');

                this._PARTS.push({ x: part.x, y: part.y });
            }
        })

        this._debug(`Инициализация нового экземпляра класса Tetramino (ID: ${this._ID}) завершена`)
        return this;
    }

    _findRootPart(x, y) {
        return this._ROOT.querySelector(`tr[data-addr="${x}"] td[data-addr="${y}"]`);
    } 
}