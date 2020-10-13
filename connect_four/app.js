//console.log('i\'m connected');
//organization layout is inspired from class work 
//inserting animations is from animista.net
//learned how to make a circle through w3schools.com


$(() => {

    //connect four has 6 rows on it's y-axis
    //and 7 columns in it's x-axis

    let rows = 6; //y-axis

    let columns = 7; //x-axis

    // let $playerToken = $('<span>').addClass('slide-in-top');
    // $playerToken.css('color', 'red');

    // let $pcToken = $('<span>').addClass('slide-in-top');
    // $pcToken.css('color', 'blue');

    //start game by checking for end of game case
    //it will take 3 parameters a div $square, a column and a row
    const startGame= ($square, columns, rows) => {
        if (gameOver) {
            return;
        }

        //assign text to currentPlayer
        //$square.text = currentPlayer;
        //assign grid array to current player
        grid[rows][columns] = currentPlayer;
        //switch player every turn, start game with red player
        // currentPlayer = (currentPlayer == 'yellow') ? 'blue' : 'yellow';


        //make a call to check winner function
        checkWinner();
    }


    /////////////////////////////////////////
    ////declare check winner function
    /////////////////////////////////////////
    
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

    /////////////////////////////////////////
    ////declare rowDirection function
    /////////////////////////////////////////
    //see if any 4 colors match
    const rowDirection = (cell1, cell2, cell3, cell4) => {
        // if (cell1 && cell1 == cell2 && cell1 == cell3 && cell2 == cell4) {
        if (cell1 == cell2 && cell1 === cell3 && cell1 === cell4) {
            showModal (cell1 + ' wins!');
            gameOver = true;
        }
    }

    /////////////////////////////////////////
    ////declare checkDraw function
    /////////////////////////////////////////
    
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

    /////////////////////////////////////////
    ////declare modal function
    /////////////////////////////////////////

    showModal = (message) => {
        $('#modal-textbox').text(message);
        $('#modal').css('display', 'flex');
    }

    /////////////////////////////////////////
    ////game grid array of arrays
    /////////////////////////////////////////
    
    const grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ];
    
    //let currentPlayer = 'yellow';
    //console.log(currentPlayer);
    

    //////////////////////////////


    /////////////////////////////////////////
    //create a grid using jquery
    /////////////////////////////////////////
    for (let y = 0; y < rows; y++) {
        const $row = $('<div>').addClass('row');
        for (let x = 0; x < columns; x++) {
            const $square = $('<div>').addClass('square')
            .addClass('border')

            //console.log($square);
            
            $row.append($square);
        }
        $('#container').append($row);
    }
    $('.square').on('click', playerMove)
});

    let gameOver = 'false';
    let choice = true;
    function toggle() {
        choice = choice ? false : true
    }
    const playerMove = () => {
        let $move = $(event.currentTarget);
        if (choice === true) {
            $move.addClass('full').css('pointer-events', 'none')
            .css('background-color', 'blue')
            .attr('id', 'slide-in-top');
            toggle()
            checkWinner()

        } else {
            $move.addClass('full').css('pointer-events', 'none')
            .css('background-color', 'yellow')
            .attr('id', 'slide-in-top');
            toggle()
            checkWinner()

        }

    }

        
    /////////////////////////////////////////
    //event handlers
    /////////////////////////////////////////
            // $square.on('click', () => {
            //     $square.css('background-color', 'yellow')
            // })

    

//})