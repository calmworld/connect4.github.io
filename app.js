//console.log('i\'m connected');
//part of solution is inspired from class work on tic tac toe. https://git.generalassemb.ly/seir-9-21/student-resources/tree/master/8_hw_solutions/w03d03/solution
//modal settings from class work https://git.generalassemb.ly/calmworld/student-resources/tree/master/1_front_end_development/w03d02/morning_exercise 
//inserting animations is from animista.net
//Michael Sturrus helped a lot with win condition functionality.
//I researched a lot of methods on https://api.jquery.com/ I find it very easy to read!




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

// $('.square').on('click', playerMove(event) {
//     for (let i = grid.length -1; grid >= 0; i--) {
//         if (grid[i] = null) {
//             $(event.currentTarget).children.eq(i).css('background-color', 'red');
//             grid[y] = 'Yellow'
//             console.log(grid[i])
//             break;
//         } else {
//         grid[x] !== 'blue';
//             return;
//             //console.log(grid[0])
//         }
//     }
// });




/////////////////////////////////////////
////game start - stats
/////////////////////////////////////////


let gameOver = 'false';

$('#msg-text').html("<p>It\'s <em>Yellow\'s</em> Turn</p>").css('color', 'yellow')


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
        .addClass('bounce-top');
        let y = target.id.split(',')[0]
        let x = target.id.split(',')[1]
        grid[y][x] = 'Yellow'
        //console.log(grid[x][y])
        $('#msg-text').html("<p>It\'s <em>Blue\'s</em> Turn</p>").css('color', 'blue')
        toggle()
        checkWinner()

    } else {
        $move.addClass('full')
        .css('pointer-events', 'none').css('background-color', 'blue')
        .addClass('bounce-top');

        let y = target.id.split(',')[0]
        let x = target.id.split(',')[1]
        grid[y][x] = 'Blue'
        //console.log(grid[x][y])
        $('#msg-text').html("<p>It\'s <em>Yellow\'s</em> Turn</p>").css('color', 'yellow')
        toggle()
        checkWinner()

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

    checkDraw();
}


/////////////////////////////////////////
////declare rowDirection function
/////////////////////////////////////////
//see if any 4 colors match
const rowDirection = (cell1, cell2, cell3, cell4) => {
    //check for truthy value on cell1
    if (cell1 && cell1 == cell2 && cell1 === cell3 && cell1 === cell4) {
        //console.log(rowDirection)
        showModal(cell1 + ' Wins!');
        gameOver = true;
    }
}


/////////////////////////////////////////
////declare checkDraw function
/////////////////////////////////////////

const checkDraw = () => {
    //loop through rows and columns to see if a row of 4 matches
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            //if there are no full grids, then the board is not full yet
            if (!grid[x][y]) {
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