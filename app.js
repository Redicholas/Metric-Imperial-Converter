const convertBtn = document.querySelector("#convertBtn");
const volumeOut = document.querySelector("#volume");
const massOut = document.querySelector("#mass");
const lengthOut = document.querySelector("#length");
const usrInput = document.querySelector("#input");

usrInput.value = 1;

convertBtn.addEventListener("click", function () {
    lengthOut.textContent = 
    `${usrInput.value} Meters = ${usrInput.value * 3.281.toFixed(2)} Feet`
    volumeOut.textContent = 
    `${usrInput.value} Liters = ${usrInput.value * 0.264.toFixed(2)} Gallons`
    massOut.textContent = 
    `${usrInput.value} Kilogram = ${usrInput.value * 2.204.toFixed(2)} Pounds`
})