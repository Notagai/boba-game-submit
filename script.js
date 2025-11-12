const letters = "abcdefghijklmnopqrstuvwxyz";
const thesoundofthedemons = new Audio("fahhhhhhhhhhhhhh.mp3")

let interval = null;

document.querySelector("h1").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

let boba = 0;
let quality = 0.01;
let money = 0;
let btnAllowed = true;
let markAllowed = true;
let marketcost = 0.10;
let flag1 = false;
let flag2 = false;
let clickedCount = 3;

function brew() {
  if (btnAllowed == true) {
    btnAllowed = false;
    document.getElementById('brew').style.cursor = 'not-allowed';
    document.getElementById('brew').innerText = 'boba brewing...';
    document.getElementById('brew').style.backgroundColor = '#dbd0baff';
    setTimeout(() => {
      boba++;
      document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba and $' + Math.round(money * 100) / 100 + '.';
      document.getElementById('brew').style.cursor = 'pointer';
      document.getElementById('brew').style.backgroundColor = '#ffd079';
      btnAllowed = true;
      document.getElementById('sell').style.display = 'block';
      document.getElementById('sellDesc').style.display = 'block';
      document.getElementById('brew').innerText = 'brew boba';
    }, Math.floor(Math.random() * 200 + 400));
  } else {
    showBobaPopup("your boba is brewing! please wait before brewing more.");
  }
}

function marketingUnlock() {
  document.getElementById('mark').style.display = 'block';
  document.getElementById('markDesc').style.display = 'block';
}

function sell() {
  if (boba > 0) {
    boba--;
    money += quality;
    money = Math.round(money * 100) / 100;
    document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba and $' + Math.round(money * 100) / 100 + '.';
    if (money == 0.10) {
      marketingUnlock()
    }
  } else {
    showBobaPopup("you don't have any boba to sell! brew some first.");
  }
}

function market() {
  if (markAllowed == true && money >= marketcost) {
    markAllowed = false;
    document.getElementById('mark').style.cursor = 'not-allowed';
    document.getElementById('mark').style.backgroundColor = '#dbd0baff';
    document.getElementById('mark').innerText = 'running ads...';
    money -= marketcost;
    setTimeout(() => {
      document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba and $' + Math.round(money * 100) / 100 + '.';
      document.getElementById('mark').style.cursor = 'pointer';
      document.getElementById('mark').style.backgroundColor = '#ffd079';
      document.getElementById('mark').innerText = 'advertise';
      quality += 0.01;
      markAllowed = true;
      marketcost = Math.round((marketcost * 1.15) * 100) / 100;
      document.getElementById('mark').innerText = 'advertise for $' + marketcost;
      document.getElementById('qua').innerHTML = 'each boba you sell earns you $' + Math.round(quality * 100) / 100 + '.';
    }, 5000); //change back to 5000 l8r
  } else {
    if(money >= marketcost) {
      showBobaPopup("your marketing is in progress! please wait before advertising more.");
    } else {
      showBobaPopup("get some more money to hire an actually respectable advertising agency.");
    }
  }
}

const checkforwin = setInterval(() => {
  if (money >= 10 && clickedCount>0) {
    clearInterval(checkforwin);
    document.getElementById("winmsg").style.display = 'block';
    showBobaPopup("🎉YOU WIN!!!🎉")
    confetti();
  }
  updateCustomProgress(Math.floor((money / 100) * 1000));
}, 1);

const customBar = document.getElementById('myBar');
function updateCustomProgress(percent) {
  if (percent >= 0 && percent <= 100) {
    customBar.style.width = `${percent}%`;
    customBar.textContent = `${percent}% to $10!`;
  }
}

function showBobaPopup(text) {
  const overlay = document.getElementById("boba-popup-overlay");
  const popupText = document.getElementById("boba-popup-text");
  const btn = document.getElementById("boba-popup-btn");

  popupText.innerText = text;
  overlay.style.display = "flex";

  btn.onclick = () => {
    overlay.style.display = "none";
  };
}

function johnnybequiet() {
  confetti();
  showBobaPopup("wow you found an easter egg! here's some confetti for your effort 🎉");
  if (!flag1) {
    flag1 = true;
  }
}

function johnnybeloud() {
  showBobaPopup("nice try ts is not giving you more confetti");
  if (flag1) {
    flag2 = true;
    flag1 = false;
  }

  if (clickedCount == 0) {
    showBobaPopup("but it do be giving some moneys!!!");
    document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba and $' + Math.round(money * 100) / 100 + '.';
    thesoundofthedemons.play();
    money += 10;
  }
}

function johnnybeded() {
  if (flag1 && flag2) {
    clickedCount --;
  }
  
  flag1 = false;
  flag2 = false;
}

console.log('5, 10, 5, 3, x3, 10')

function bananaphone() {
  showBobaPopup("Leaderboard: \n 1. Little Timmy: $7890282746 \n 2. You: $" + money + "\n 3. Little Suzie: $0") 
}