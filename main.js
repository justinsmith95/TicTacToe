class App {
  constructor (){
    this.m = new Model();
    this.v = new View();
    this.v.setModel(this.m);
    this.c = new Controller(this.m, this.v);
    this.m.setController(this.c);
  }
  
  async init(){
    console.log("starting the app");
    await this.m.init();
    await this.v.init();
    await this.c.init();
    
  }
};

class View {
    constructor() {
        this.model = null;
        this.v = new View();
        this.v.setModel(this.model);
        this.c = new Controller(this.model, this.view);
        this.m.setController(this.controller);
        this.board = document.getElementById('Board');
        this.turnMsg = turnMsg
    };
    
    
    Init() {
        console.log("starting the app");
        this.controller.init();
        v = new View
        v.render();
    };

        render() {
        let container = this.generateHTML({ type: 'div', classes: 'container vh-100', parent: app })
        let titleText = this.generateHTML({type: 'div', classes: 'row', parent: container, id: 'titleText', text: 'Tic-Tac-Toe'})
        let row = this.generateHTML({ type: 'div', classes: 'row h-75', parent: container, id: 'Board' });
        let gameOverMsg = this.generateHTML({ type: 'div', classes: 'row', parent: container, id: 'gameOverMsg', text: null})
        elementArray = [];
        turnMsg = "It is Player" + this.m.currentPlayer + "'s turn";
        
        //dynamic rendering
        for (let index = 0; index < 9; index++) {
            let col = this.generateHTML({ type: 'div', classes: 'col-4 border border-dark', parent: row, id: ('column' + index) });
            let btn = this.generateHTML({
                type: 'button', classes: 'btn btn-danger btn-lg w-100 h-100',
                parent: col, id: ('button' + index), text: null,
            });
            
               btn.addEventListener("click", function (e){
                   let node = document.createTextNode (symbol);
                   e.target.appendChild(node);
                   this.model.board[e.target.id].value = symbol.value
                   // tell model to set array [e.target.id].value = X or O
               });
        }
    }
};

function init() {
    let a = new App();

    a.init();
    view.render();
};

App.onload = init();

class Model {
    constructor(board, titleText, turnMsg, tieOrWinnerMsg, turn, currentPlayer, tile) {
        this.controller = null;
        this.board = board;
        this.titleText = titleText;
        this.turnMsg = turnMsg;
        this.tieOrWinnerMsg = tieOrWinnerMsg;
        this.turn = turn;
        this.currentPlayer = currentPlayer;
        this.tile = tile;
    };
    setController(c) {
        this.controller = c;
    }
    setState(s) {
        this.board = s;
        this.onSetState();
    }
    getState() {
        return this.board;
        if (this.turn === 0 || this.turn%2 === 0){
            this.currentPlayer = 'X'
        } else {
            this.currentPlayer = 'O'
        }
    }
    onSetState() {
        this.c.updateView();

        

    //tile object. fill the board array with tiles. have the tile hold a value of 1 or 10 depending on turn button is clicked
    tile = 0
    board = [tile, tile, tile, 
            tile, tile, tile,
             tile, tile, tile]; 
    turn = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    currentPlayer = ['X', 'O'];
    symbol = currentPlayer
    
};
};