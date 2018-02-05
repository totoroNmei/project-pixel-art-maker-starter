// global variable for canvas Panel
const pixelPanel = $('#pixelCanvas');

// when size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);
// when a cell is clicked, fill its background with color in color picker
$('#pixelCanvas').on('click', 'td', function(e) {
	const color = $('#colorPicker').val();
  $(this).css('background-color', color);
}); 
// clear canvas
$('#clearCanvas').on('click', function() {
	$('td').css('background-color', '#fff');
})

/*
 * clear pixlePanel 
 */
function clearGrid() {
  pixelPanel.empty();
}

/*
 * create grid
 */
function makeGrid(e) {
	e.preventDefault();
	clearGrid();
	// select size input
	const width = parseInt($('#inputWeight').val());
	const height = parseInt($('#inputHeight').val());
	// nested for loop to create each cell
  for (let row = 0; row < height; row++) {
  	pixelPanel.append('<tr>'+row+'</tr>');
  	const panelRow = pixelPanel.children().last();
  	for (let col = 0; col < width; col++) {
      panelRow.append('<td></td>');
  	}
  }
}
