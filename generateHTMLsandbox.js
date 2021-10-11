function checkWinner() {
        if (this.m.turn >= 5) {
            for (i = 0; i <= this.winCons.length; i++) {
                let v = 0;
                for (j = 0; j <= winCon[i].length; j++) {
                    v += this.m.board[winCon[i][j]].value;
                    console.log(v)
                    if ((v === 3) || (v === 30)) {
                        return v;
                    }
                }
               console.log(v)
            }
        }
}