const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
	for (let x = 0; x < 16; x++) {
		const cellSize = 512 / 16;
		const cell = document.createElement('div');

		cell.style.border = "1px solid #000";
		cell.setAttribute('class', 'cell');
		cell.style.width = cellSize + 'px';
		cell.style.height = cellSize + 'px';
		container.appendChild(cell);
    }
};