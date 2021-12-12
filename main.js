// node library pigpio is a wrapper for the pigpio C library.
const Gpio = require('pigpio').Gpio;

// Import the config file
const config = require('./config.json');
const pins = config.pins;

// Set up the switches
const switchOne = new Gpio(pins.s00, {
	mode: Gpio.INPUT,
	pullUpDown: Gpio.PUD_DOWN,
	edge: Gpio.EITHER_EDGE
});

switchOne.on('interrupt', (level) => {
	switch (level) {
		case 0:
			// Off
			break;
		case 1:
			// On
			break;
		default:
			// Timeout (2)
			break;
	}
});