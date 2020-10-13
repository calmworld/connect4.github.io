//console.log('i\'m connected');
//organization layout is inspired from class work 
//inserting animations is from animista.net
//learned how to make a circle through w3schools.com

/////////////////////////////////////////
//create a grid using jquery
/////////////////////////////////////////

    //connect four has 6 rows on it's y-axis
    //and 7 columns in it's x-axis

    let rows = 6; //y-axis

    let columns = 7; //x-axis

    let yellowArr = [];
    let blueArr = [];

$(() => {
    for (let y = 0; y < rows; y++) {
        const $row = $('<div>').addClass('row');
        for (let x = 0; x < columns; x++) {
            const $square = $('<div>').addClass('square')
            .addClass('border')

            let $cellId = $($square).attr('id', [x])
            console.log($square);
            
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
        .css('background-color', 'yellow')
        .attr('id', 'slide-in-top');
        toggle()
        yellowArr.push()
        console.log(yellowArr)
        checkWinnerYellow()

    } else {
        $move.addClass('full').css('pointer-events', 'none')
        .css('background-color', 'blue')
        .attr('id', 'slide-in-top');
        toggle()
        blueArr.push($('#x'))
        console.log(blueArr)
        checkWinnerBlue()

    }

}


/////////////////////////////////////////
////declare check winner Yellow
/////////////////////////////////////////

const checkWinnerYellow = () => {
    if (yellowArr.includes([0, 1, 2, 3])) {
        console.log('yellow wins')
    }
}

/////////////////////////////////////////
////declare check winner Blue
/////////////////////////////////////////

const checkWinnerBlue = () => {
    if (blueArr.includes([0, 1, 2, 3])) {
        console.log('blue wins')
    }
}
/////////////////////////////////////////
////declare rowDirection function
/////////////////////////////////////////


/////////////////////////////////////////
////declare checkDraw function
/////////////////////////////////////////


/////////////////////////////////////////
////declare modal function
/////////////////////////////////////////

showModal = (message) => {
    $('#modal-textbox').text(message);
    $('#modal').css('display', 'flex');
}

/////////////////////////////////////////