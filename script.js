// time display function
 function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + "";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    // add zero in front of numbers < 10
    if (i < 10) { i = "0" + i };  
    return i;
}
// 

// define all variables
const clearBtn = document.querySelector('#clearBtn')
const sevenBtn = document.querySelector('#sevenBtn')
const eightBtn = document.querySelector('#eightBtn')
const nineBtn = document.querySelector('#nineBtn')
const multiplyBtn = document.querySelector('#multiplyBtn')
const fourBtn = document.querySelector('#fourBtn')
const fiveBtn = document.querySelector('#fiveBtn')
const sixBtn = document.querySelector('#sixBtn')
const subtractBtn = document.querySelector('#subtractBtn')
const oneBtn = document.querySelector('#oneBtn')
const twoBtn = document.querySelector('#twoBtn')
const threeBtn = document.querySelector('#threeBtn')
const addBtn = document.querySelector('#addBtn')
const zeroBtn = document.querySelector('#zeroBtn')
const decimalBtn = document.querySelector('#decimalBtn')
const equalsBtn = document.querySelector('#equalsBtn')
const divideBtn = document.querySelector('#divideBtn')
const topMessage = document.querySelector('#topMessage')
const bottomMessage = document.querySelector('#bottomMessage')
// 

bottomMessage.textContent = '7'
topMessage.textContent = '10'