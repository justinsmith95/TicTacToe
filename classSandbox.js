


class Model {
    constructor(board, titleText, tieOrWinnerMsg, turn, currentPlayer, tile) {
        this.c = null;
        this.board = board;
        this.titleText = titleText;
        this.tieOrWinnerMsg = tieOrWinnerMsg;
        this.turn = turn;
        this.currentPlayer = currentPlayer;
        this.tile = tile;
        this.symbol = '';
    };
    setController(c) {
        this.c = c;
    }
    setState(s) {
        this.board = s;
        this.onSetState();
    }
    getState() {
        if (this.turn % 2 === 0) {
            this.currentPlayer = 'X';
            document.getElementById('turnMsg').innerHTML = "It is Player X's turn"
        } else {
            this.currentPlayer = 'O'
            document.getElementById('turnMsg').innerHTML = "It is Player O's turn"
        };
        this.symbol = this.currentPlayer;
    }
    onSetState() {
        this.c.updateView();

    }

    //tile object. fill the board array with tiles. have the tile hold a value of 1 or 10 depending on turn button is clicked
    init() {
        this.tile = 0;
        this.board = [this.tile, this.tile, this.tile,
        this.tile, this.tile, this.tile,
        this.tile, this.tile, this.tile];
        this.turn = 0;
        this.currentPlayer = 'X';
        this.symbol = this.currentPlayer
    }

};


class View {
    constructor() {
        this.m = null;
        this.board = document.getElementById('Board');
        //this.turnMsg = ''
    };

    setModel(model) {
        this.m = model
    }

    Reset() {
        //TODO
    }

    generateHTML({ type, classes, text = '', href = '', parent = null, id = '' }) {
        let element = document.createElement(type)
        element.className = classes
        element.innerText = text
        element.id = id

        // TODO:
        // event listeners
        // id
        // value, data, checked, clicked

        // this is not the limit to what can be done in this helper function
        if (href.length > 0) {
            element.href = href
        }
        if (parent) {
            parent.appendChild(element)
        }
        return element
    };
    render() {
        let container = this.generateHTML({ type: 'div', classes: 'container vh-100', id: 'container', parent: app })
        let titleText = this.generateHTML({ type: 'div', classes: 'row', parent: container, id: 'titleText', text: 'Tic-Tac-Toe' })
        let row = this.generateHTML({ type: 'div', classes: 'row h-75', parent: container, id: 'Board' });
        let gameOverMsg = this.generateHTML({ type: 'div', classes: 'row', parent: container, id: 'gameOverMsg', text: '' })
        let turnMsgRow = this.generateHTML({ type: 'div', classes: 'row', parent: container, id: 'turnMsg', text: "It is Player" + this.m.currentPlayer + "'s turn" });
        let resetBtn = this.generateHTML({
            type: 'button', classes: 'btn btn-danger btn-lg',
            parent: container, id: ('resetBtn'), text: 'Reset',
        });
        resetBtn.addEventListener("click", this.m.c.resetGame.bind(this.m.c));
        //dynamic rendering
        for (let index = 0; index < 9; index++) {
            let col = this.generateHTML({ type: 'div', classes: 'col-4 border border-dark', parent: row, id: ('column' + index) });
            let btn = this.generateHTML({
                type: 'button', classes: 'btn btn-danger btn-lg w-100 h-100',
                parent: col, id: ('button' + index), text: null,
            });

            btn.addEventListener("click", this.m.c.clickHandler.bind(this.m.c));

        }
    }
};

//testing init()
function init() {
    let a = new App();

    a.init();
}



class Controller {
    constructor(model, view) {
        this.v = view;
        this.m = model;
        this.winCons;
    };
    async init() {
        this.winCons = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        this.gameFinished = false
        this.tileClicked = false
        this.isATie = null
    };
    changeTile(element) {
        let index = parseInt(element.split("button")[1])
        if (this.m.currentPlayer == 'X') {
            this.m.board[index] = 1
        };
        if (this.m.currentPlayer == 'O') {
            this.m.board[index] = 10
        }
    };

    updateWinner(isATie) {
        this.gameFinished = true;
        if (this.m.currentPlayer == 'X' && isATie == null) {
            document.getElementById('gameOverMsg').innerHTML = 'Player X is the Winner!';
        }
        else if (this.m.currentPlayer == 'O' && isATie == null) {
            document.getElementById('gameOverMsg').innerHTML = 'Player O is the Winner!';
        }
        else {
            document.getElementById('gameOverMsg').innerHTML = 'Its a TIE!'
        }
    }

    resetGame(e) {
        console.log('reset');
        location.reload();

        //this.v.document.getElementById('container').reset();
        //location.reload();
    }


    clickHandler(e) {
        if (this.gameFinished === false) {
            let node = document.createTextNode(this.m.symbol);
            e.target.appendChild(node);
            this.changeTile(e.target.id);
            this.checkWinner();
            this.m.turn++;
            this.m.getState();
            document.getElementById(e.target.id).disabled = true;
    }
}



    checkWinner() {
        if (this.m.turn >= 2) {
            for (let i = 0; i < this.winCons.length; i++) {
                let v = 0;
                for (let j = 0; j < this.winCons[i].length; j++) {
                    v += this.m.board[this.winCons[i][j]];
                    if ((v === 3) || (v === 30)) {
                        this.updateWinner();
                    }
                }
            }
        } else if (this.m.turn >= 7) {
            console.log('tie')
                this.isATie = true;
                this.isATie = document.getElementById('gameOverMsg').innerHTML = 'Its a TIE!'
                this.updateWinner();
        }
    }
};

class App {
    constructor() {
        this.m = new Model();
        this.v = new View();
        this.v.setModel(this.m);
        this.c = new Controller(this.m, this.v);
        this.m.setController(this.c);
    }

    async init() {
        console.log("starting the app");
        await this.m.init();
        await this.v.render();
        await this.c.init();

    }
}

App.onload = init();