var Emitter = require("events").EventEmitter;


var modes = Object.freeze({
  INPUT: 0,
  OUTPUT: 1,
  ANALOG: 2,
  PWM: 3,
  SERVO: 4,
  I2C: 6
});

var modesMap = [
  "INPUT",
  "OUTPUT",
  "ANALOG",
  "PWM",
  "SERVO",
  "I2C"
];

function Electron(options) {

  options = options || {};

  if (!(this instanceof Electron)) {
    return new Electron(options)
  }

  Emitter.call(this);

  throw new Error("Electron: No Implementation");
}



Electron.prototype = Object.create(Emitter.prototype, {
  constructor: {
    value: Electron
  },
  MODES: {
    value: modes
  },
  HIGH: {
    value: 1
  },
  LOW: {
    value: 0
  },
});


module.exports = Electron;
