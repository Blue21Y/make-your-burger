// selectors and elements
const body = document.body;
const nav = document.createElement("nav");
const logoLinks = document.createElement("div");
const contacts = document.createElement("div");
const navlink1 = document.createElement("a");
const navlink2 = document.createElement("a");
const navImgLogo = document.createElement("img");
const navButton = document.createElement("button");
const navSpan = document.createElement("span");
const navImgLogo2 = document.createElement("img");

// nav section
const hoverStyling = document.createElement("style");
hoverStyling.textContent = `
.textHover {
  display: inline-block;
  position: relative;
  color: #5243C2;
}
.textHover::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #5243C2;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.textHover:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;
document.head.appendChild(hoverStyling);

navlink1.addEventListener("mouseenter", () => {
  navlink1.classList.add("textHover");
});

navlink1.addEventListener("mouseleave", () => {
  navlink1.classList.remove("textHover");
});

navlink2.addEventListener("mouseenter", () => {
  navlink2.classList.add("textHover");
});

navlink2.addEventListener("mouseleave", () => {
  navlink2.classList.remove("textHover");
});

nav.style.cssText = `    display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
margin: 10px auto;`;
body.appendChild(nav);
logoLinks.setAttribute("class", "logoLinks");
logoLinks.style.cssText = `    width: 30%;
display: flex;
align-items: center;
justify-content: space-evenly;`;

contacts.setAttribute("class", "contacts");
contacts.style.cssText = `    width: 30%;
display: flex;
align-items: center;
justify-content: space-evenly;`;

nav.append(logoLinks, contacts);
navImgLogo.src = "/logo.png";
navlink1.innerText = "Discover";
navlink1.href = "#";
navlink2.innerText = "make your burger";
navlink2.href = "#";
navButton.innerText = "call me back";

navButton.style.cssText = `
color: red;
font-size: 14px;
font-weight: bold;
border-radius: 25px;
border: none;
background-color: rgba(255, 0, 0, 0.1);
padding: 3px 10px;
cursor:pointer;
`;
navSpan.innerText = "+02 0123143241";
navImgLogo2.src = "/avatar-dropdown.png";

navImgLogo.style.cssText = `width: 50px;
height: 50px;`;
navImgLogo2.style.cssText = `width: 50px;
height: 50px;`;

navlink1.style.cssText = `color:black; text-decoration:none;`;
navlink2.style.cssText = `color:black; text-decoration:none;`;

logoLinks.append(navImgLogo, navlink1, navlink2);
contacts.append(navButton, navSpan, navImgLogo2);

// main-section
const mainDiv = document.createElement("main");
document.body.appendChild(mainDiv);
for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  div.className = "mainSectionDivs";
  mainDiv.append(div);
}
const mainSectionDivs = document.querySelectorAll(".mainSectionDivs");
const mainSectionH1 = document.createElement("h1");
const page2H1 = document.createElement("h1");
const mainSectionimg = document.createElement("img");
const mainSectionButton = document.createElement("button");

mainDiv.style.cssText = `    display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
margin: 10px auto;
`;
mainSectionH1.innerText = "Make Your Burger";
mainSectionH1.style.cssText = `font-size:50px; width:70%;`;
page2H1.innerText = "Make Your Burger";
page2H1.style.cssText = `font-size:50px; width:70%;`;
mainSectionButton.innerText = "Make Burger";
mainSectionButton.style.cssText = `width: 130px;
height: 130px;
border: none;
border-radius: 50%;
background-color: #5243C2;
color: white;
font-size: 17px;
font-weight: bold;
position:absolute;
left:60px;
bottom:110px;
cursor:pointer;`;

mainSectionimg.src = "/main-img.png";
mainSectionimg.style.cssText = `width:80%;`;
mainSectionDivs[0].appendChild(mainSectionH1);
mainSectionDivs[2].style.cssText = `position:relative; display:flex; align-items:center; justify-content: flex-end;`;
mainSectionDivs[2].append(mainSectionButton, mainSectionimg);
mainSectionDivs[1].remove();

// mainSectionButton.addEventListener("click", () => {
//   mainDiv.style.cssText = `display:none;`;
//   page2Container.style.cssText = `display:block;`;
// });

// page 2

const page2Container = document.createElement("div");
document.body.appendChild(page2Container);
const page2 = document.createElement("div");
document.body.appendChild(page2);
for (let i = 0; i < 3; i++) {
  const div = document.createElement("div");
  div.className = "page2Divs";
  page2.append(div);
}
const page2Divs = document.querySelectorAll(".page2Divs");
const page2Img = document.createElement("img");
const priceAndButton = document.createElement("div");
const page2Span = document.createElement("span");
const page2Button = document.createElement("button");
const page2Price = document.createElement("span");
const ingredientsDiv = document.createElement("div");
const bunImg = document.createElement("img");

bunImg.src = "/bun.png";
page2Span.innerText = "Summary";
page2Price.innerText = 0;
page2Price.style.cssText = "color:#5243C2; font-weight:bold; font-size:24px;";
page2Span.style.cssText = `font-size:24px;`;
page2Button.innerText = "check out";
page2Button.style.cssText = `border: none;
border-radius: 25px;
background-color: #5243C2;
padding: 5px 20px;
color: white;
cursor:pointer;`;
priceAndButton.append(page2Price, page2Button);
priceAndButton.style.cssText = `display: flex;
align-items: center;
justify-content: space-between;
width:100%;`;
page2Img.src = "/bg.png";
page2Img.style.cssText = `width:70%;`;
page2.style.cssText = `display:flex; align-items:center; justify-content:space-evenly; width:80%; margin:50px auto;`;
page2Divs[0].append(page2H1);
page2Divs[1].append(page2Img, bunImg, ingredientsDiv);
bunImg.style.cssText = `width: 250px;
height: 25%;
position: absolute;
bottom: -20px;
left: 45px;`;
page2Divs[1].style.cssText = `display:flex; flex-direction:column; position:relative;`;
ingredientsDiv.style.cssText = `    display: flex;
flex-direction: column-reverse;
position: absolute;
height: 600px;
top: -230px;`;
page2Divs[2].style.cssText = `    width: 20%;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;`;
page2Divs[2].append(page2Span, priceAndButton);
page2Container.style.cssText = `display:none;`;

// ingredients
let ingredientsValue;
let ingredients;
let addButton;
let removeButton;
let ingredientsImg;
let ingredientsSpan;
let buttonsAndSpan;
let ingredientsName;
let ingredientsContainer = document.createElement("div");
for (let i = 0; i < 8; i++) {
  ingredients = document.createElement("div");
  addButton = document.createElement("button");
  removeButton = document.createElement("button");
  ingredientsImg = document.createElement("img");
  ingredientsSpan = document.createElement("span");
  buttonsAndSpan = document.createElement("div");
  ingredientsName = document.createElement("span");

  addButton.innerText = "+";
  addButton.style.cssText = `border: none;
  border-radius: 50%;
  padding: 5px 10px;
  background-color: rgb(82,67,194,0.2);
  cursor:pointer;`;
  addButton.setAttribute("class", "addButtons");
  removeButton.setAttribute("class", "removeButtons");

  ingredientsSpan.setAttribute("class", "span");
  ingredientsSpan.textContent = 0;

  removeButton.innerText = "-";
  removeButton.style.cssText = `border: none;
  border-radius: 50%;
  padding: 5px 10px;
  background-color: rgb(82,67,194,0.2);
  cursor:pointer;`;
  ingredientsImg.src = `/${i + 1}.png`;
  ingredientsImg.style.cssText = `    width: 75px;
  height: 25px;`;

  buttonsAndSpan.style.cssText = `    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;`;
  buttonsAndSpan.append(removeButton, ingredientsSpan, addButton);
  ingredients.style.cssText = `height: 100px;
  width: 75px;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin:15px;`;
  ingredients.append(ingredientsImg, ingredientsName, buttonsAndSpan);
  ingredientsContainer.appendChild(ingredients);
}
ingredientsContainer.style.cssText = `display:flex; align-items:center; justify-content:space-evenly; width:80%; margin:0px auto;`;

page2Container.append(page2, ingredientsContainer);

const ingredientsSpans = document.querySelectorAll(".span");
const ingredientsAddButtons = document.querySelectorAll(".addButtons");
const ingredientsRemoveButtons = document.querySelectorAll(".removeButtons");
const burgerImg = document.createElement("img");

for (let i = 0; i < ingredientsAddButtons.length; i++) {
  ingredientsAddButtons[i].addEventListener("click", function () {
    // Get the current value of the span
    let currentValue = parseInt(ingredientsSpans[i].textContent);

    // Check if the current value is less than 3 before incrementing
    if (currentValue <= 2) {
      // Increment the value by 1
      currentValue++;

      // Update the text content of the span
      ingredientsSpans[i].textContent = currentValue;
    }
  });
}

let currentValue;
for (let i = 0; i < ingredientsRemoveButtons.length; i++) {
  ingredientsRemoveButtons[i].addEventListener("click", function () {
    // Get the current value of the span
    currentValue = parseInt(ingredientsSpans[i].textContent);

    // Check if the current value is greater than 0 before decrementing
    if (currentValue > 0) {
      // Decrement the value by 1
      currentValue--;

      // Update the text content of the span
      ingredientsSpans[i].textContent = currentValue;
    }
  });
}

let appendedOnce = true;
let priceChange = true;
let classStyling = document.createElement("style");
classStyling.textContent = `.myClass {margin-bottom:-55px;}`;
document.head.appendChild(classStyling);

let classStylingcheese = document.createElement("style");
classStylingcheese.textContent = `.myClassCheese {margin-bottom:-75px;}`;
document.head.appendChild(classStylingcheese);

let classStylingAll = document.createElement("style");
classStylingAll.textContent = `.myClassAll {margin-bottom:-50px;}`;
document.head.appendChild(classStylingAll);
let arr = [];
for (let i = 0; i < ingredientsAddButtons.length; i++) {
  ingredientsRemoveButtons[i].addEventListener("click", function () {
    ingredientsRemoveButtons[i].value = 0.75;
    let priceValue = parseFloat(page2Price.textContent);
    let buttonRemoveValue = parseFloat(ingredientsRemoveButtons[i].value);

    if (ingredientsSpans[i].textContent > 0) {
      priceChange = true;
    }
    switch (true) {
      case ingredientsSpans[i].textContent > 0 &&
        priceChange &&
        ingredientsDiv.hasChildNodes():
        priceChange = true;
        ingredientsDiv.lastChild.remove();
        page2Price.textContent = `${priceValue - buttonRemoveValue} $`;
        break;
      case ingredientsSpans[i].textContent == 0 &&
        priceChange &&
        ingredientsDiv.hasChildNodes():
        ingredientsDiv.lastChild.remove();
        page2Price.textContent = `${priceValue - buttonRemoveValue} $`;
        priceChange = false;
        break;
    }
  });

  ingredientsAddButtons[i].addEventListener("click", function () {
    const imgB = document.createElement("img");
    imgB.src = `/${i + 1}.png`;

    ingredientsAddButtons[i].value = 0.75;

    let priceValue = parseFloat(page2Price.textContent);

    let buttonValue = parseFloat(ingredientsAddButtons[i].value);
    if (ingredientsSpans[i].textContent < 3) {
      appendedOnce = true;
    }
    switch (true) {
      case ingredientsSpans[i].textContent < 3 && appendedOnce:
        appendedOnce = true;
        ingredientsDiv.append(imgB);

        page2Price.textContent = `${priceValue + buttonValue} $`;
        break;
      case ingredientsSpans[i].textContent == 3 && appendedOnce:
        ingredientsDiv.append(imgB);
        page2Price.textContent = `${priceValue + buttonValue} $`;
        appendedOnce = false;
        break;
    }

    if (i === 1) {
      imgB.classList.add("myClass");
    } else if (i === 4) {
      imgB.classList.add("myClassCheese");
    } else {
      imgB.classList.add("myClassAll");
    }
    imgB.style.cssText = `position: relative;
    width: 250px;
    height: 70px;
    bottom: 100px;
    left: 50px;`;
  });
}

// PAGE 3
const page3Container = document.createElement("div");
const checkout = document.createElement("div");
const nameAndPhone = document.createElement("div");
const addressAndTime = document.createElement("div");
const checkoutLogo = document.createElement("img");
const nameLogo = document.createElement("img");
const phoneLogo = document.createElement("img");
const addressLogo = document.createElement("img");
const checkoutH1 = document.createElement("h1");
const nameInput = document.createElement("input");
const phoneInput = document.createElement("input");
const addressInput = document.createElement("input");
const selectElement = document.createElement("select");
for (let i = 1; i <= 10; i++) {
  let optionElement = document.createElement("option");
  optionElement.value = i + ":00 PM";
  optionElement.textContent = i + ":00 PM";
  selectElement.appendChild(optionElement);
}
const buttonDiv = document.createElement("div");
const cancelButton = document.createElement("button");
const checkoutButton = document.createElement("button");

buttonDiv.append(cancelButton, checkoutButton);

checkoutLogo.src = "/checkout_logo.png";
nameLogo.src = "/face-Vector.png";
phoneLogo.src = "/phone-Vector.png";
addressLogo.src = "/map-Vector.png";
checkoutH1.textContent = "Checkout";

document.body.appendChild(page3Container);
page3Container.appendChild(checkout);
checkout.append(
  checkoutLogo,
  checkoutH1,
  nameAndPhone,
  addressAndTime,
  nameLogo,
  phoneLogo,
  addressLogo,
  buttonDiv
);
nameAndPhone.append(nameInput, phoneInput);
addressAndTime.append(addressInput, selectElement);

page3Container.style.cssText = `    background: rgba(82, 67, 194, 0.9);
width: 100%;
height: 111vh;
position: absolute;
top: 0px;
left: 0px;
display: flex;
align-items: center;
justify-content: center;
`;

checkout.style.cssText = `    background: white;
width: 60%;
height: 50%;
border-radius: 25px;
position:relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

checkoutLogo.style.cssText = `    position: absolute;
left: 25px;
top: 4px;
color: rgb(31, 41, 57);
width: 25px;
height: 25px;`;

checkoutH1.style.cssText = `    position: absolute;
top: -16px;
left: 65px; color:#1F2939; font-weight:normal; font-size:26px;`;

nameAndPhone.style.cssText = `display: flex;
align-items: center;
justify-content: space-evenly;`;
addressAndTime.style.cssText = `display: flex;
align-items: center;
justify-content: space-evenly;`;

nameLogo.style.cssText = `    width: 18px;
position: absolute;
top: 64px;
left: 86px;`;
phoneLogo.style.cssText = `width: 18px;
position: absolute;
top: 63px;
left: 426px;`;

addressLogo.style.cssText = `    width: 18px;
position: absolute;
top: 166px;
left: 87px;`;

nameInput.style.cssText = `padding: 20px 30px;
border-radius: 25px;
border: 1px solid lightgrey;
width: 200px;`;

phoneInput.style.cssText = `padding: 20px 30px;
border-radius: 25px;
border: 1px solid lightgrey;
width: 200px;`;

addressInput.style.cssText = `padding: 20px 30px;
border-radius: 25px;
border: 1px solid lightgrey;
width: 200px;`;

selectElement.style.cssText = `padding: 20px 30px;
border-radius: 25px;
border: 1px solid lightgrey;
width: 265px;`;

nameInput.placeholder = "Your Name";
phoneInput.placeholder = "Phone Number";
addressInput.placeholder = "Your Address";

buttonDiv.style.cssText = `display: flex;
align-items: center;
justify-content: flex-end;
margin: 0px 90px;`;

cancelButton.innerText = "Cancel";
checkoutButton.innerText = "Checkout";
cancelButton.style.cssText = `    border: none;
border-radius: 25px;
width: 110px;
height: 40px;
margin-right:15px;
color:#5243C2;
background:rgba(82, 67, 194, 0.1);
cursor:pointer;`;
checkoutButton.style.cssText = `    border: none;
border-radius: 25px;
width: 110px;
height: 40px;
color:white;
background:#5243C2;
cursor:pointer;`;

let styleElement = document.createElement("style");
styleElement.textContent = `
    ::placeholder {
        color: lightgrey; 
        font-style: italic;
        
    }
`;
document.head.appendChild(styleElement);

const mainDiv1 = document.createElement("div");
const mainDiv2 = document.createElement("div");
const mainDiv3 = document.createElement("div");
document.body.append(mainDiv1, mainDiv2, mainDiv3);

mainDiv1.appendChild(mainDiv);
mainDiv2.appendChild(page2Container);
mainDiv3.appendChild(page3Container);
mainDiv3.style.cssText = `display:none;`;

phoneInput.addEventListener("keypress", function (event) {
  let charCode = event.which ? event.which : event.keyCode;

  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
    alert("this input only accepts numbers");
  }
});

mainSectionButton.addEventListener("click", () => {
  mainDiv1.style.cssText = `display:none;`;
  mainDiv2.style.cssText = `display:block;`;
  page2Container.style.cssText = `display:block;`;
});

page2Button.addEventListener("click", () => {
  mainDiv3.style.cssText = `display:block;`;
});

checkoutButton.addEventListener("click", (event) => {
  if (nameInput.value.trim() === "") {
    window.alert("Name field is empty!");
    event.preventDefault();
  } else if (addressInput.value.trim() === "") {
    window.alert("Address field is empty!");
    event.preventDefault();
  } else if (phoneInput.value.trim() === "") {
    window.alert("Phone field is empty!");
    event.preventDefault();
  } else {
    mainDiv2.style.cssText = `display:none;`;
    mainDiv3.style.cssText = `display:none;`;
    mainDiv1.style.cssText = `display:block;`;
  }
});

cancelButton.addEventListener("click", () => {
  mainDiv3.style.cssText = `display:none;`;
});

//
document.title = "make your burger🍔";
