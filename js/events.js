console.log("this is dom events day");

// option 2: add onclick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3: add onclick function

const makeBlueButton = document.getElementById("Make-Blue");
makeBlueButton.onclick = makeBlue;
// option-2
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3(another): add onclick function

const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option-4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option-4(another)

const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option-4(final)
// we will use this some times
// document.getElementById(make-goldenrod).addEventListener('click',function(){})
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
