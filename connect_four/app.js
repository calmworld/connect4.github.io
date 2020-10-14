//console.log('i\'m connected');
//organization layout is inspired from class work on tic tac toe.
//inserting animations is from animista.net
//learned how to make a circle through w3schools.com

/////////////////////////////////////////
//create a grid using jquery
/////////////////////////////////////////

//connect four has 6 rows on it's y-axis
//and 7 columns in it's x-axis

let rows = 6; //y-axis

let columns = 7; //x-axis

//let yellowArr = [];
//let blueArr = [];

$(() => {
        for (let y = 0; y < rows; y++) {
            const $row = $('<div>').addClass('row');
            $row.attr('id', [y]);

            for (let x = 0; x < columns; x++) {
                const $square = $('<div>').addClass('square')
                .addClass('border')
                //.addClass(x)

                $($square).attr('id', `${x},${y}`);
                
                console.log($square);
                
                $row.append($square);
            }
            $('#container').append($row);
        }
    $('.square').on('click', playerMove)
});


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

for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid[y]; x++) {
        let cellId = grid[y][x];
    }
    //console.log(cellId)
}



let gameOver = 'false';

let currentPlayer = 'yellow';

let choice = true;
function toggle() {
    choice = choice ? false : true
}

const playerMove = () => {

    let $move = $(event.CurrentTarget);
    console.log($move);

    if (choice === true) {
        $move.addClass('full').css('pointer-events', 'none')
        .css('background-color', 'yellow')
        let x = $move.id.split(',')[0]
        let y = $move.id.split(',')[1]
        grid[y][x] = 'yellow'
        .attr('id', 'slide-in-top');
        toggle()
        //yellowArr.push($(event.currentTarget))
        //console.log(yellowArr)
        checkWinner()

    } else {
        $move.addClass('full').css('pointer-events', 'none')
        .css('background-color', 'blue')
        let x = $move.id.split(',')[0]
        let y = $move.id.split(',')[1]
        grid[y][x] = 'blue'
        .attr('id', 'slide-in-top');
        toggle()
        //blueArr.push('#x')
        //console.log(blueArr)
        checkWinner()

    }
    
}



/////////////////////////////////////////
////declare check winner 
/////////////////////////////////////////

const checkWinner = () => {
    //loop over rows
    for (let y = 0; y < rows; y++) {
        rowDirection(grid[y][0], grid[y][1], grid[y][2], grid[y][3], grid[y][4], grid[y][5]);
        //console.log(rowDirection)
        console.log(grid[y])

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
    //if (cell1 && cell1 == cell2 && cell1 == cell3 && cell1 == cell4) {
    if (cell1 == cell2 && cell1 === cell3 && cell1 === cell4) {
        //showModal (cell1 + ' wins!');
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

// const playerYellWin = () => {
//     showModal('yellow wins!')
// }

// const playerBlueWin = () => {
//     showModal('blue wins!')
// }

/////////////////////////////////////////
////declare check winner Yellow
/////////////////////////////////////////

// const checkWinnerYellow = () => {
//     if (yellowArr.includes([0, 1, 2, 3])) {
//         console.log('yellow wins')
//         playerYellWin()
//     }
// }

/////////////////////////////////////////
////declare check winner Blue
/////////////////////////////////////////

// const checkWinnerBlue = () => {
//     if (blueArr.includes([0, 1, 2, 3])) {
//         console.log('blue wins')
//         playerBlueWin()
//     }
// }