const app = document.getElementById('app');
// const canvasSize = 11;

const canvasSizeInput = document.getElementById('canvasSize');
const colorPicker = document.getElementById('colorPicker');
const resetButton = document.getElementById('resetButton');
const canvasContainer = document.getElementById('canvasContainer');

let canvasSize = parseInt(canvasSizeInput.value);

function createCanvas() {
    let canvasHTML = '<table>';
    for (let i = 0; i < canvasSize; i++) {
        canvasHTML += '<tr>';
        for (let j = 0; j < canvasSize; j++) {
            canvasHTML += `<td class="pixel" data-row="${i}" data-col="${j}"></td>`;
        }
        canvasHTML += '</tr>';
    }
    canvasHTML += '</table>';
    canvasContainer.innerHTML = canvasHTML;
}

function resetCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '#fff';
    });
}

function handlePixelClick(event) {
    const pixel = event.target;
    pixel.style.backgroundColor = colorPicker.value;
}

// Step 1
colorPicker.addEventListener('input', () => {
    // Step 3
    canvasContainer.addEventListener('click', handlePixelClick);
});

// Step 2
canvasSizeInput.addEventListener('input', () => {
    canvasSize = parseInt(canvasSizeInput.value);
    createCanvas();
});

// Step 4
resetButton.addEventListener('click', resetCanvas);

// Initialize Canvas
createCanvas();
;
f
f