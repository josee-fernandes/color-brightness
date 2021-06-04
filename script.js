'use strict'

const colorBrightness = (colorHex, brightness = 0) => {
	colorHex = String(colorHex).replace(/[^0-9a-f]/gi, '')
	if (colorHex.length < 6) {
		colorHex = `${colorHex[0]}${colorHex[0]}${colorHex[1]}${colorHex[1]}${colorHex[2]}${colorHex[2]}`
	}
	brightness = brightness / 100;

	let rgb = "#";
   let color
   let index
	for (index = 0; index < 3; index++) {
		color = parseInt(colorHex.substr(index *2 , 2), 16);
		color = Math.round(Math.min(Math.max(0, color + (color * brightness)), 255)).toString(16);
		rgb += (`00${color}`).substr(color.length);
	}

	return rgb;
}

const colorElement = document.querySelector('.color')
const lighterColorElement = document.querySelector('.lighter-color')
const darkerColorElement = document.querySelector('.darker-color')

const myColor = '#ff0000'

colorElement.style.backgroundColor = colorBrightness(myColor)
lighterColorElement.style.backgroundColor = colorBrightness(myColor, 50)
darkerColorElement.style.backgroundColor = colorBrightness(myColor, -50)

colorElement.innerHTML = colorBrightness(myColor)
lighterColorElement.innerHTML = colorBrightness(myColor, 50)
darkerColorElement.innerHTML = colorBrightness(myColor, -50)
