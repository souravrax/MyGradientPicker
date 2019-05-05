let myColorOne = document.querySelector(".color1");
let myColorTwo = document.querySelector(".color2");
let background = document.getElementById("body");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let body = document.querySelector("body");
function ColorChange() {
    background.style.background = "linear-gradient(to right, " + myColorOne.value	+ ", " + myColorTwo.value + ")";
    body.style.background = "linear-gradient(to left, " + myColorOne.value	+ ", " + myColorTwo.value + ")";
    value1.innerHTML = myColorOne.value;
    value2.innerHTML = myColorTwo.value;

    console.log(myColorOne.value);
    console.log(myColorTwo.vlaue);
}



myColorOne.addEventListener("input", ColorChange);
myColorTwo.addEventListener("input", ColorChange);


