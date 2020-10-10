//console.log('i\'m connected');
//organization layout is inspired from class work


$(() => {

    //connect four has 6 rows on it's y-axis
    //and 7 columns in it's x-axis

    let rows = 6; //y-axis

    let columns = 7; //x-axis

    //start game by checking for end of game case
    //it will take 3 parameters a div $square, a column and a row
    const startGame= ($square, columns, rows) => {
        if (gameOver || $square.text()) {
            return;
        }

        //assign text to currentPlayer
        //$square.text = currentPlayer;
        //assign grid array to current player
        grid[rows][columns] = currentPlayer;
        //switch player every turn, start game with red player
        // currentPlayer = (currentPlayer == 'red') ? 'blue' : 'red';

        //make a call to check winner function
        checkWinner();
    }

    //declare check winner function
    const checkWinner = () => {
        //loop over rows
        for (let y = 0; y < rows; y++) {
            rowDirection(grid[y][0], grid[y][1], grid[y][2], grid[y][3], grid[y][4], grid[y][5]);
            if (gameOver) {
                return;
            }
        }
        //loop over columns
        for (let x = 0; x < columns; x++) {
            rowDirection(grid[0][x], grid[1][x], grid[2][x], grid[3][x], grid[4][x], grid[5][x], grid[6][x]);
            if (gameOver) {
                return;
            }
        }
        //check forward direction
        rowDirection(grid[0][0], grid[1][1], grid[2][2], grid[3][3], grid[4][4], grid[5][5]);
        if (gameOver) {
            return;
        }

        //check backward direction
        rowDirection(grid[0][5], grid[1][4], grid[2][3], grid[3][2], grid[4][1], grid[5][0]);
        if (gameOver) {
            return;
        }

        checkDraw();
    }

    //declare check row direction function
    const rowDirection = (cell1, cell2, cell3, cell4) => {
        if (cell1 && cell1 == cell2 && cell1 == cell3 && cell2 == cell4) {
            showModal (cell1 + ' wins!');
            gameOver = true;
        }
    }

    //declare check draw function
    const checkDraw = () => {
        //loop through rows and columns to see if a row of 4 matches
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                //if there are no full grids, then the board is not full yet
                if (!grid[y][x]) {
                    return;
                }
            }
        }
        //if player hasn't been redirected to game board, it means all grids are full
        showModal('Tie game!');
        //set gameover to true;
        gameOver = true;
    }

    //declare modal function
    showModal = (message) => {
        $('#modal-textbox').text(message);
        $('#modal').css('display', 'flex');
    }


    //draw game grid as array of arrays
    const grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]

    let currentPlayer = 'red';
    let gameOver = 'false';

    //create a grid using jquery

    
    for (let y = 0; y < rows; y++) {
        const $row = $('<div>').addClass('row');
        for (let x = 0; x < columns; x++) {
            const $square = $('<div>').addClass('square');
            $square.text(currentPlayer);
            currentPlayer = (currentPlayer == 'red') ? 'blue' : 'red';
            //add borders to column
            if (columns > 0) {
                $square.addClass('border-bottom-left');
            }
            if (rows > 0) {
                $square.addClass('border-top-right');
            }

            $square.on('click', (event) => {
                console.log('stop clicking me');
                startGame($(event.currentTarget), columns, rows);
            });

            $row.append($square);
        }
    $('#container').append($row)
    }

    $('#reset').on('click', () => {
        startGame();
        //$('#reset').html('<a href="index.html"></a>');
    })
})