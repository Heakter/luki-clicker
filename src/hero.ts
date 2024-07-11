import "./style.css";

//grab relevant Elements
const getElements = () => {
  const cookie: HTMLImageElement = document.querySelector("img.cookie")!;
  const donetaps = document.querySelector(".count p span")!;
  const cpcstat = document.querySelector(".cpc p span")!;
  const cpsstat = document.querySelector(".cps p span")!;

  const cpcupgradebutton = document.querySelectorAll(".shop .cpc-upgrade")!;
  const cpsupgradebutton = document.querySelectorAll(".shop .cps-upgrade")!;

  const berts = document.querySelector(".berts")!;
  const monster = document.querySelector(".monster")!;

  return {
    cookie,
    donetaps,
    cpcstat,
    cpcupgradebutton,
    cpsupgradebutton,
    cpsstat,
    berts,
    monster,
  };
};

//Userstat values
let tapcount: number = 0;
let cpc: number = 10;
let cps: number = 0;

//clickstats
let bertamount = 0;
let bertclickgenerated = 0;
let bertcpc = 0;

//clickstats
let monsteramount = 0;
let monsterclickgenerated = 0;
let monstercpc = 0;

//cost variables
//auto clicks
const cpsupgradecost = 1.15;
//manual clicks
const cpcupgradecost = 5;

//mousemovement

const mouse = () => {};

//add click
const addTap = () => {
  mouse();
  tapcount = tapcount + cpc;
  currenttapcount();
};

const bertclicked = () => {
  bertclickgenerated = bertclickgenerated + bertcpc;
  const bertclickstat = document.querySelector(
    ".type[data-type='bert'] p .stat"
  )!;
  bertclickstat.innerHTML = bertclickgenerated.toFixed(2).toString();
};

const monsterclicked = () => {
  monsterclickgenerated = monsterclickgenerated + monstercpc;
  const monsterclickstat = document.querySelector(
    ".type[data-type='monster'] p .stat"
  )!;
  monsterclickstat.innerHTML = monsterclickgenerated.toFixed(2).toString();
};

const autotaps = () => {
  bertclicked();
  monsterclicked();

  tapcount = tapcount + cps;
  currenttapcount();
};

// genereate Bert
const genBert = () => {
  const { berts } = getElements();
  const rndInt = Math.floor(Math.random() * 3) + 1;
  let img = new Image();
  img.src = "img/bert" + rndInt + ".png";

  berts.appendChild(img);
};

// genereate Monster
const genMonster = () => {
  const { monster } = getElements();
  // const bertarray: Array = []
  const rndInt = Math.floor(Math.random() * 2) + 1;
  let img = new Image();
  img.src = "img/monster" + rndInt + ".png";

  monster.appendChild(img);
};

//upgrade function
const upgradecpc = (button: Element) => {
  const upgradeAmount = button.querySelector(".upgrade")?.textContent!;
  const costspan = button.querySelector(".cost")!;
  const cost = button.querySelector(".cost")?.textContent!;
  const amount = button.querySelector(".amount")!;

  if (Number(cost) <= tapcount) {
    new Audio("sound/upgrade.mp3").play();
    let currentAmount = Number(amount.textContent);
    let newcost = Number(cost);

    currentAmount = currentAmount + 1;
    cpc = cpc * Number(upgradeAmount);
    tapcount = tapcount - newcost;
    newcost = newcost * cpcupgradecost;

    amount.innerHTML = currentAmount.toString();
    costspan.innerHTML = newcost.toFixed(2).toString();
    currentCpc();
    currenttapcount();
  }
};

const upgradecps = (button: Element) => {
  const upgradeAmount = button.querySelector(".upgrade")?.textContent!;
  const costspan = button.querySelector(".cost")!;
  const cost = button.querySelector(".cost")?.textContent!;
  const amount = button.querySelector(".amount")!;

  const type: HTMLElement = button.querySelector(".type")!;

  if (Number(cost) <= tapcount) {
    let currentAmount = Number(amount.textContent);
    let newcost = Number(cost);

    currentAmount = currentAmount + 1;
    cps = cps + Number(upgradeAmount);
    tapcount = tapcount - newcost;
    newcost = newcost * cpsupgradecost;

    amount.innerHTML = currentAmount.toString();
    costspan.innerHTML = newcost.toFixed(2).toString();

    if (type.dataset.type == "bert") {
      bertamount = bertamount + 1;
      bertcpc = bertcpc + Number(upgradeAmount);
      genBert();
    } else if (type.dataset.type == "monster") {
      monsteramount = monsteramount + 1;
      monstercpc = monstercpc + Number(upgradeAmount);
      genMonster();
    }

    currentCps();
    currenttapcount();
  }
};

//update UserStats
const updateAllStats = () => {
  currentCpc();
  currentCps;
  currenttapcount();
};

const currentCpc = () => {
  const { cpcstat } = getElements();
  cpcstat.innerHTML = cpc.toFixed().toString();
};

const currenttapcount = () => {
  const { donetaps } = getElements();
  donetaps.innerHTML = tapcount.toFixed(1).toString();
};

const currentCps = () => {
  const { cpsstat } = getElements();
  cpsstat.innerHTML = cps.toFixed(1).toString();
};

//eventlistener of cookie
// const cookielistener = (cookie: HTMLImageElement) =>
//   cookie?.addEventListener("click", addTap);

async function mouseclick(cookie: HTMLImageElement) {
  cookie.addEventListener("click", (event) => {
    let x = event.clientX;
    let y = event.clientY;

    const clicktext = document.createElement("p");
    clicktext.innerHTML = "+" + cpc;
    clicktext.classList.add("clickerevent");

    clicktext.style.position = "absolute";
    clicktext.style.top = `${y}px`;
    clicktext.style.left = `${x}px`;
    document.body.appendChild(clicktext);

    setTimeout(() => {
      document.body.removeChild(clicktext);
    }, 1000);
  });
}

const cookielistener = (cookie: HTMLImageElement) => {
  cookie.addEventListener("click", addTap);

  mouseclick(cookie);
};

// Game Basics

const startGame = () => {
  const { cookie, cpcupgradebutton, cpsupgradebutton } = getElements();
  updateAllStats();
  cookielistener(cookie);
  setInterval(autotaps, 1000);

  cpcupgradebutton.forEach((element) => {
    element.addEventListener("click", () => upgradecpc(element));
  });

  cpsupgradebutton.forEach((element) => {
    element.addEventListener("click", () => upgradecps(element));
  });
};

startGame();
