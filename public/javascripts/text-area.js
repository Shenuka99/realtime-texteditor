// script.js

function createRuler() {
    const ruler = document.getElementById('ruler');
    const editorWidth = document.querySelector('.editor-container').offsetWidth;
    const rulerWidth = editorWidth - 40; // Adjust for padding

    // Number of units (inches, centimeters, pixels) across the width of the ruler
    const units = 8; // Example: 8 inches
    const unitWidth = rulerWidth / units;

    // Generate the ruler markings
    for (let i = 0; i <= units; i++) {
        const span = document.createElement('span');
        span.style.width = unitWidth + 'px';
        span.innerText = i; // Marking the unit
        ruler.appendChild(span);
    }
}

document.addEventListener('DOMContentLoaded', createRuler);


window.addEventListener('resize', function () {
    const ruler = document.getElementById('ruler');
    ruler.innerHTML = ''; // Clear existing markings
    createRuler(); // Recreate the ruler with new dimensions
});
