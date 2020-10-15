//console.log('i\'m connected');
//solution is inspired from class work on tic tac toe. 
//inserting animations is from animista.net
//Michael Sturrus helped a lot with win condition functionality.


alert('Player 1: your token will be yellow!');
alert('Player 2: your token will be blue!');
    

/////////////////////////////////////////
//create a grid using jquery
/////////////////////////////////////////

//connect four has 6 rows on it's y-axis
//and 7 columns on it's x-axis

let rows = 6; //y-axis

let columns = 7; //x-axis


$(() => {
        for (let y = 0; y < rows; y++) {
            const $row = $('<div>').addClass('row');
            $row.attr('id', [y]);

            for (let x = 0; x < columns; x++) {
                const $square = $('<div>').addClass('square')
                .addClass('border')

                $square.attr('id', `${y},${x}`);
                
                //console.log($square);
                
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


/////////////////////////////////////////
////Dropping tokens in grid bottom 
/////////////////////////////////////////


for (let i = grid.length -1; grid >= 0; i--) {
    if (grid[y] = null) {
        grid[y] = 'yellow'
        console.log(grid[y])
        break;
    } else {
        grid[x] = 'blue'
        console.log(grid[x])
    }
}



/////////////////////////////////////////
////game start - stats
/////////////////////////////////////////


let gameOver = 'false';
let yellowScore = 0;
let blueScore = 0;


let score = document.querySelector('#score');
score.innerHTML = `
<h3>Yellow Score: <span> ${yellowScore}</span></h3>
<h3>Blue Score: <span> ${blueScore}</span></h3>
`;

/////////////////////////////////////////
////player move function
/////////////////////////////////////////

let choice = true;
function toggle() {
    choice = choice ? false : true
}

const playerMove = () => {
    //console.log(event)
    let $move = $(event.currentTarget);
    const target = event.currentTarget;
    //console.log($move);
    console.log(target)

    if (choice === true) {
        $move.addClass('full')
        .css('pointer-events', 'none').css('background-color', 'yellow')
        .addClass('slide-in-top');
        let y = target.id.split(',')[0]
        let x = target.id.split(',')[1]
        grid[y][x] = 'yellow'
        //console.log(grid[x][y])

        toggle()
        checkWinner()

    } else {
        $move.addClass('full')
        .css('pointer-events', 'none').css('background-color', 'blue')
        .addClass('slide-in-top');

        let y = target.id.split(',')[0]
        let x = target.id.split(',')[1]
        grid[y][x] = 'blue'
        //console.log(x)
        //console.log(y)
        //console.log(grid[x][y])

        toggle()
        checkWinner()

    }

    if (checkWinner === 'yellow') {
        yellowScore++;
    }
    if (checkWinner === 'blue') {
        blueScore++;
    }
    
}



/////////////////////////////////////////
////declare check winner 
/////////////////////////////////////////

const checkWinner = () => {
    //loop over rows
    for (let x = 0; x < rows - 3; x++) {
        for (let y = 0; y < columns; y++) {
            rowDirection(grid[x][y], grid[x + 1][y], grid[x + 2][y], grid[x + 3][y])
        }
    }
    
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns - 3; y++) {
            rowDirection(grid[x][y], grid[x][y + 1], grid[x][y + 2], grid[x][y + 3])
        }
    }

    for (let x = 0; x < rows - 3; x++) {
        for (let y = 0; y < columns - 3; y++) {
            rowDirection(grid[x][y], grid[x + 1][y + 1], grid[x + 2][y + 2], grid[x + 3][y + 3])
        }
    }

    for (let x = 0; x < rows; x++) {
        for (let y = 3; y < columns; y++) {
            rowDirection(grid[x][y], grid[x + 1][y - 1], grid[x + 2][y - 2], grid[x + 3][y - 3])
        }
    }
    

    //loop over columns
    // for (let x = 0; x < columns; x++) {
    //     rowDirection(grid[0][x], grid[1][x], grid[2][x], grid[3][x], grid[4][x], grid[5][x], grid[6][x]);
    //     if (gameOver) {
    //         return;
    //     }
    // }
    
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
    // console.log(rowDirection)
    //check for truthy value on cell1
    if (cell1 && cell1 == cell2 && cell1 === cell3 && cell1 === cell4) {
        console.log(rowDirection)
        showModal(cell1 + ' wins!');
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