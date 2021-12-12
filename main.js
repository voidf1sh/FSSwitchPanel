// node library pigpio is a wrapper for the pigpio C library.
const Gpio = require('pigpio').Gpio;

// Import the config file
const config = require('./config.json');
const pins = config.pins;

// Set up the switches
const s00 = new Gpio(pins.s00, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s01 = new Gpio(pins.s01, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s02 = new Gpio(pins.s02, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s03 = new Gpio(pins.s03, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s04 = new Gpio(pins.s04, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s05 = new Gpio(pins.s05, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s06 = new Gpio(pins.s06, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s07 = new Gpio(pins.s07, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s08 = new Gpio(pins.s08, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const s09 = new Gpio(pins.s09, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});

// Set up Buttons
const b00 = new Gpio(pins.b00, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b01 = new Gpio(pins.b01, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b02 = new Gpio(pins.b02, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b03 = new Gpio(pins.b03, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b04 = new Gpio(pins.b04, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b05 = new Gpio(pins.b05, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b06 = new Gpio(pins.b06, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b07 = new Gpio(pins.b07, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b08 = new Gpio(pins.b08, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});
const b09 = new Gpio(pins.b09, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.RISING_EDGE
});


// Handle Switch input
s00.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 00 Off');
			break;
		case 1:
			// On
			console.log('Switch 00 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 00 Timed Out');
			break;
	}
});
s01.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 01 Off');
			break;
		case 1:
			// On
			console.log('Switch 01 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 01 Timed Out');
			break;
	}
});
s02.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 02 Off');
			break;
		case 1:
			// On
			console.log('Switch 02 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 02 Timed Out');
			break;
	}
});
s03.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 03 Off');
			break;
		case 1:
			// On
			console.log('Switch 03 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 03 Timed Out');
			break;
	}
});
s04.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 04 Off');
			break;
		case 1:
			// On
			console.log('Switch 04 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 04 Timed Out');
			break;
	}
});
s05.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 05 Off');
			break;
		case 1:
			// On
			console.log('Switch 05 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 05 Timed Out');
			break;
	}
});
s06.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 06 Off');
			break;
		case 1:
			// On
			console.log('Switch 06 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 06 Timed Out');
			break;
	}
});
s07.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 07 Off');
			break;
		case 1:
			// On
			console.log('Switch 07 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 07 Timed Out');
			break;
	}
});
s08.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 08 Off');
			break;
		case 1:
			// On
			console.log('Switch 08 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 08 Timed Out');
			break;
	}
});
s09.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Switch 09 Off');
			break;
		case 1:
			// On
			console.log('Switch 09 On');
			break;
		default:
			// Timeout (2)
			console.log('Switch 09 Timed Out');
			break;
	}
});

// Handle Button Input
b00.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 00 Off');
			break;
		case 1:
			// On
			console.log('Button 00 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 00 Timed Out');
			break;
	}
});
b01.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 01 Off');
			break;
		case 1:
			// On
			console.log('Button 01 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 01 Timed Out');
			break;
	}
});
b02.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 02 Off');
			break;
		case 1:
			// On
			console.log('Button 02 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 02 Timed Out');
			break;
	}
});
b03.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 03 Off');
			break;
		case 1:
			// On
			console.log('Button 03 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 03 Timed Out');
			break;
	}
});
b04.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 04 Off');
			break;
		case 1:
			// On
			console.log('Button 04 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 04 Timed Out');
			break;
	}
});
b05.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 05 Off');
			break;
		case 1:
			// On
			console.log('Button 05 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 05 Timed Out');
			break;
	}
});
b06.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 06 Off');
			break;
		case 1:
			// On
			console.log('Button 06 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 06 Timed Out');
			break;
	}
});
b07.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 07 Off');
			break;
		case 1:
			// On
			console.log('Button 07 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 07 Timed Out');
			break;
	}
});
b08.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 08 Off');
			break;
		case 1:
			// On
			console.log('Button 08 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 08 Timed Out');
			break;
	}
});
b09.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			console.log('Button 09 Off');
			break;
		case 1:
			// On
			console.log('Button 09 On');
			break;
		default:
			// Timeout (2)
			console.log('Button 09 Timed Out');
			break;
	}
});