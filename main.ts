import "./style.css";

// ToDo Liste
// const todos: string[] = [];
// const todoinput: HTMLInputElement = document.querySelector("input#todoinput")!;
// const todobutton: HTMLButtonElement =
//   document.querySelector("button#todoappend")!;
// const liste: HTMLElement = document.querySelector("ul#todoliste")!;

// function checklist() {
//   const todolistpoints = Array.from(document.querySelectorAll("li"));

//   todolistpoints.map((listpoint) => {
//     listpoint.removeEventListener("click", () => removelist(listpoint));
//     listpoint.addEventListener("click", () => removelist(listpoint));
//   });
// }

// function removelist(listpoint: HTMLLIElement) {
//   listpoint?.classList.toggle("disable");
// }

// checklist();

// todobutton.addEventListener("click", function () {
//   if (todoinput.value) {
//     todos.push(todoinput.value);
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(todoinput.value));
//     liste.appendChild(li);
//     todoinput.value = "";
//     checklist();
//   } else {
//     alert("Eingabe leer");
//   }
// });

// function getElements() {
//   const flipperContainer: HTMLElement =
//     document.querySelector(".flipper-container")!;
//   const button: HTMLButtonElement = document.querySelector(
//     "button.color-switcher"
//   )!;

//   const flippertext: HTMLElement = document.querySelector(
//     ".flipper-container p"
//   )!;
//   const hexname = flipperContainer.querySelector("span")!;

//   return { flipperContainer, button, hexname, flippertext };
// }

// const randomNumberpercent = () => {
//   return Math.floor(Math.random() * 100);
// };

// const randomNumber = () => {
//   return Math.floor(Math.random() * 255);
// };

// const generatehsl = () => {
//   const hslarray = [
//     randomNumber(),
//     randomNumberpercent(),
//     randomNumberpercent(),
//   ];
//   return hslarray;
// };

// const generateColor = () => {
//   const [h, s, l] = generatehsl();
//   const color = `hsl(${h}, ${s}%, ${l}%)`;

//   return color;
// };

// const generateContrast = () => {
//   const [h, s, l] = generatehsl();
//   let contrastcolor = 100;

//   if (l <= 50) {
//     contrastcolor = 0;
//   }

//   const spancolor = `hsl(${h}, ${s}%, ${contrastcolor}%)`;

//   return spancolor;
// };

// function changeColor() {
//   const { flipperContainer, flippertext, hexname } = getElements();

//   const color = generateColor();
//   const spancolor = generateContrast();

//   flipperContainer.style.backgroundColor = color;
//   flippertext.style.color = spancolor;
//   hexname.innerHTML = color;
// }

// function event() {
//   const { button } = getElements();
//   button.addEventListener("click", changeColor);
// }

// event();

// weight converter

// const getElements = () => {
//   const inputfield: HTMLInputElement = document.querySelector("input")!;
//   const resultfield = document.querySelector("span.result")!;

//   return {
//     inputfield,
//     resultfield,
//   };
// };

// const convertKG = () => {
//   const { inputfield } = getElements();
//   const pound = Number(inputfield.value) * 2.205;
//   return pound;
// };

// const calcWeight = () => {
//   const { resultfield } = getElements();
//   const pound = convertKG();
//   const poundrounded = pound.toFixed(2);
//   resultfield.innerHTML = poundrounded.toString();
// };

// const initializeWeightCounter = () => {
//   const { inputfield } = getElements();
//   inputfield.addEventListener("change", calcWeight);
// };

// initializeWeightCounter();

// HTML

// <!-- ToDo Liste -->
//     <!-- <form onsubmit="event.preventDefault();" id="to-do-list">
//       <input id="todoinput" type="text" placeholder="Deine Todo" />
//       <button id="todoappend" type="submit">Todo hinzufügen</button>
//     </form>

//     <ul id="todoliste">
//       <li>Ich bin ein Standard TODO den es immer gibt</li>
//       <li>Ich bin ein Standard TODO den es immer gibt</li>
//       <li>Ich bin ein Standard TODO den es immer gibt</li>
//     </ul> -->

//     <!-- ColorFlipper -->
//     <!-- <div class="color-flipper">
//       <div class="flipper-container">
//         <p>Background-color: <span>#000000</span></p>
//       </div>
//       <button class="color-switcher">Change Color</button>
//     </div> -->

//     <!-- <div class="weight-converter">
//       <h2>Weight Converter</h2>
//       <label>
//         Kilogramm:

//         <input type="number" placeholder="0.00 KG" />
//       </label>

//       <p>Das sind umgerechnet <span class="result">0</span> Pfund</p>
//     </div> -->
