//console.log('i\'m connected');
//organization layout is inspired from class work


$(() => {

    //connect four has 6 rows on it's y-axis
    //and 7 columns in it's x-axis

    let rows = 6; //y-axis

    let columns = 7; //x-axis

    //start game by checking for end of game case
    //it will take 3 parameters a div $square, a column and a row
    const startGame= ($square, rows, columns) => {
        if (gameOver || $square.text()) {
            return;
        }

        //assign text to currentPlayer
        $square.text = currentPlayer;
        //assign grid array to current player
        grid[rows][columns] = currentPlayer;
        //switch player every turn, start game with red player
        currentPlayer = (currentPlayer == 'red') ? 'blue' : 'red';

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

//create a grid using jquery


for (let y = 0; y < rows; y++) {
    const $row = $('<div>').addClass('row');
    for (let x = 0; x < columns; x++) {
        const $col = $('<div>').addClass('square');

        //add borders to column
        if (columns > 0) {
            $col.addClass('border-bottom-left');
        }
        if (rows > 0) {
            $col.addClass('border-top-right');
        }
        $row.append($col);
    }
    $('#container').append($row)

}



    $('#reset').on('click', () => {
        $('#reset').html('<a href="index.html"></a>');
    })
})