const listDays = ['sunday', 'monday', 'tuesday', 'wednesday','thursday', 'friday','saturday' ]

const myDate = new Date();
console.log('today is ', listDays[myDate.getDay()]);

var hours = myDate.getHours();
var ampm = (hours >= 12) ? "PM" : "AM";

console.log('fecha actual = ', hours,ampm, ' ',myDate.getMinutes(), ':', myDate.getSeconds(), '');