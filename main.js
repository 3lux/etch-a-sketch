const container = document.querySelector('#container');
var numCells;

function resetCells(){
	while (container.hasChildNodes()) {
		container.removeChild(container.childNodes[0]);
	}
	numCells = prompt("Grid size");
	createGrid(numCells);
}

function createGrid(cellNum){
	for (i = 0; i < cellNum; i++) {
		for (let x = 0; x < cellNum; x++) {
			const cellSize = 512 / cellNum;
			const cell = document.createElement('div');

			cell.style.border = "1px solid #000";
			cell.setAttribute('class', 'cell');
			cell.style.width = cellSize + 'px';
			cell.style.height = cellSize + 'px';
			cell.setAttribute('onmouseenter', 'this.setAttribute("class", "filled")');
			container.appendChild(cell);
		}
	};
}

createGrid(16);