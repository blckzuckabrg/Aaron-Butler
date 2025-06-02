const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dog-canine-pet-puppy-preview.jpg") {
    myImage.setAttribute("src", "images/cute-white-puppy-dog-preview.jpg");
  } else {
    myImage.setAttribute("src", "images/dog-canine-pet-puppy-preview.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Pitbulls are cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Pitbulls are cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});


