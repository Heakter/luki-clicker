import "./style.css";

//Userstat values
let tapcount: number = 15;
let cpc: number = 1;
let cps: number = 0;

//clickstats
let bertupgrademodifier = 1;
let bertamount = 0;
let bertcps = 0;

//auto clicks cost multiplier
const cpsupgradecost = 1.15;
//manual clicks

// -----------------------------------------------------------------------------------

const getElements = () => {
  const cookie: HTMLImageElement = document.querySelector("img.cookie")!;
  const cpsstat = document.querySelector(".clickspersecond span")!;
  const donetaps = document.querySelector(".currentclicks span")!;

  const cpsupgradebutton = document.querySelectorAll(".cps-upgrade")!;

  const bertupgrade = document.querySelector(".type[data-type='bert']")!;

  const berts = document.querySelector(".berts")!;
  const monster = document.querySelector(".monster")!;

  return {
    cookie,
    donetaps,
    cpsupgradebutton,
    cpsstat,
    berts,
    monster,
    bertupgrade,
  };
};

// -----------------------------------------------------------------------------------

//update UserStats
const updateAllStats = () => {
  currentCps;
  currenttapcount();
};

const currenttapcount = () => {
  const { donetaps } = getElements();
  donetaps.innerHTML = tapcount.toFixed(1).toString();
};

const currentCps = () => {
  const { cpsstat } = getElements();
  cpsstat.innerHTML = cps.toFixed(1).toString();
};

// -----------------------------------------------------------------------------------

//Mouse events
const addTap = () => {
  tapcount = tapcount + cpc;
  currenttapcount();
};

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

const clicklistener = (cookie: HTMLImageElement) => {
  cookie.addEventListener("click", addTap);
  mouseclick(cookie);
};

// -----------------------------------------------------------------------------------

//logic for autoclicker

const autoclicker = () => {
  costchecker();
  const { cpsstat } = getElements();
  cpsstat.innerHTML = cps.toString();
  tapcount = tapcount + cps / 10;
  updateAllStats();
};

const upgradecosts = (upgradecost: number) => {
  tapcount -= upgradecost;
  currenttapcount();
};

const combinecps = () => {
  cps = Number(bertcps.toFixed(1));
};

const costchecker = () => {
  const { bertupgrade } = getElements();
  const bertupgradecost: HTMLElement = bertupgrade.querySelector(".info")!;

  const bertupgradecostNumber = Number(
    bertupgradecost.querySelector(".cost")?.textContent
  );

  if (tapcount > bertupgradecostNumber) {
    bertupgradecost.style.color = "green";
  } else {
    bertupgradecost.style.color = "red";
  }
};

// genereate Bert
const genBert = () => {
  const { berts } = getElements();
  const rndInt = Math.floor(Math.random() * 3) + 1;
  let img = new Image();
  img.src = "img/bert" + rndInt + ".png";

  berts.appendChild(img);
};

const bertupgradefunction = () => {
  const { bertupgrade } = getElements();
  //get Button Details
  const upgradecost = bertupgrade.querySelector(".cost")!;
  const baseupgrade = bertupgrade.querySelector(".upgrade span")!;
  const amount = bertupgrade.querySelector(".amount")!;
  //get number values out of HTMLElement
  let upgradecostnumber = Number(upgradecost?.textContent);
  let baseupgradenumber = Number(baseupgrade?.textContent);

  //check if user can buy
  if (Number(upgradecostnumber) <= tapcount) {
    upgradecosts(upgradecostnumber);

    bertcps += baseupgradenumber;
    upgradecostnumber = upgradecostnumber * cpsupgradecost;
    upgradecost.innerHTML = upgradecostnumber.toFixed(1).toString();

    bertamount++;
    amount.innerHTML = bertamount.toString();

    genBert();
    combinecps();
  }
};

//game init
const startgame = () => {
  const { cookie, cpsupgradebutton, bertupgrade } = getElements();
  updateAllStats();
  clicklistener(cookie);
  bertupgrade.addEventListener("click", bertupgradefunction);

  setInterval(autoclicker, 100);

  cpsupgradebutton.forEach((element) => {
    element.addEventListener("click", () => upgradefunction(element));
  });
};

startgame();
