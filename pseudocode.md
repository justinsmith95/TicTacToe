App Class (Parent) -
    Model - (Constructor) - Board Class (Stateful) -
            Tiles -
                [0, 1, 2, 
                3, 4, 5,
                6, 7, 8,]
                0(not clicked/empty), 1(has X), 10(has O)
            rows/columns - 
                row [row1,row2,row3]
                    row1 [0,1,2]
                    row2 [3,4,5]
                    row3 [6,7,8]
                column [col1,col2,col3]
                    col1 [0,3,6]
                    col2 [1,4,7]
                    col3 [2,5,8]
            Turn -
                0 through 8 (9 tiles, with turn 0 being empty board)
                whose turn is it (whoseTurn()) -
                    if turn = 0 or if (array.length %  2 === 0), then its player x's turn.
                    else its player o's turn
                use to check for win if turn is >= 4 (5 turns passed)
                use to check for tie if turn === 8
        Board (Constant) - 

                
    


    View - 
        generateHTML() -
            could be global OR could be passed down to the children to inherit the HTML function
        init() -
            create grid/board/tile -
                'div', row, 'col-4'x9 that autofits to grid
        UpdateView() - 
            show Grid OR generateHTML ?????
            check whoseTurn() -
                if x's turn, display message for x's turn
                if o's turn, display message for o's turn
            updateBoard/Grid() -
                if tile = hasX, display X in the tile
                if tile = hasO, display O in the tile
                if tile = empty, remain empty
            UpdateTieOrWinner() -
                 if checkTieOrWinner returns true -
                    check whoseTurn() -
                        if turn is o's then display 'x is winner'
                        if turn is x's then display 'o is winner'


    Controller - 
        init() -
            display empty board
            turn = 0
            hide winner and tie messages
            show 'its x's turn'
        restart() - 
            remove the board object
            run init()
        check Win Condition or CheckTieOrWinner -
            check Model's turn, only run on turn 4 or greater
            if turn is >= 4 (5 turns passed) then check for win
            if turn === 8 then check for tie
            array of possible wincons using for loop
                1. if row 1 2 or 3 === total value 3, then player x is   Winner OR 30, then player o is Winner
                2. if column 1 2 or 3 === total value 3 then player x is Winner OR 30, then player o is Winner
                3. if diagLeft [0,4,8] OR diagRight [2,4,6] === total value 3 then player x is Winner OR 30, then player o is Winner
            if CheckTieOrWinner() = true, run updateTieOrWinner()function in view;
            if turn === 8 and checkTieOrWinner() = false, then display message for tie (run updateTieOrWinner()) function in view
            else checkTieOrWinner = false
        UpdateClickArray() - 
            onClick() = 
                check whoseTurn()
                if x's turn, tile = 1
                if o's turn, tile = 10
                tile clicked can no longer be clicked
                Model.turn + 1 
                run updateState() - ??????
                run updateView()
            

    

Tile/Button Class (Child)- 
    Model -
        know who clicked -
            check whoseTurn()
        know if its clicked - 
            T/F OR whoclicked.length
            empty, x, o
            does NOT need to know its grid location because the app keeps track
    View - 
        generateHTML()
        init()
        hover effect highlight the button/column
        onClick() -
            display x or o, depending on who clicked
        updateView() -
            render x, o, or blank
    Controller - 
        onclick() {
            if x's turn, update model to x
        } else if o's turn, update model to o
            toggle button to disabled

Variables  - 
    row - class?
    column - class?
    diagLeft 
    diagRight 
    playerX
    playerO
    empty
    x
    o
    board (class)
    tile (class)

