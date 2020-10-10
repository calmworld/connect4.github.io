//console.log('i\'m connected');

//create a grid using jquery

let rows = 6; //y-axis

let columns = 7; //x-axis

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