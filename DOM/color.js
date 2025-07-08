// // const box = document.querySelector('.box');
// // const button = document.querySelector('button');

// // button.addEventListener('click', () => {
// //     const randomColor = getRandomColor();
// //     box.style.backgroundColor = randomColor;
// // });

// // function getRandomColor() {
// //     const letters = '0123456789ABCDEF';
// //     let color = '#';
// //     for (let i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }
// // const box = document.querySelector('.box');
// // const button = document.querySelector('button');

// // button.addEventListener('click', () => {
// //     const randomColor = getRandomColor();
// //     box.style.backgroundColor = randomColor;
// // });

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const box = document.querySelector('.box');
const button = document.querySelector('button');

const rgbColors = generateRGBColors(51); // you can reduce step for more colors
let index = 0;

button.addEventListener('click', () => {
    box.style.backgroundColor = rgbColors[index];
    index = (index + 1) % rgbColors.length;
});

function generateRGBColors(step = 51) {
    const colors = [];
    for (let r = 0; r <= 255; r += step) {
        for (let g = 0; g <= 255; g += step) {
        for (let b = 0; b <= 255; b += step) {
            colors.push(`rgb(${r}, ${g}, ${b})`);
        }
        }
    }
    return colors;
}
