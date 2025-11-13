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
let bobasold = 0;
let adsrun = 0;

function brew() {
  if (btnAllowed == true) {
    btnAllowed = false;
    document.getElementById('brew').style.cursor = 'not-allowed';
    document.getElementById('brew').innerText = 'boba brewing...';
    document.getElementById('brew').style.backgroundColor = '#dbd0baff';
    bobasold++;
    setTimeout(() => {
      boba++;
      document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba and $' + Math.round(money * 100) / 100 + '.';
      document.getElementById('brew').style.cursor = 'pointer';
      document.getElementById('brew').style.backgroundColor = '#ffd079';
      btnAllowed = true;
      document.getElementById('sell').style.display = 'block';
      document.getElementById('sellDesc').style.display = 'block';
      const sellDescEl = document.getElementById('sellDesc');
      document.getElementById('brew').innerText = 'brew boba';
      if (bobasold == 1) {
        typeText(sellDescEl, ">boba-game/console: great job, you made boba. try to make $0.10 selling boba!");
      }
    }, Math.floor(Math.random() * 200 + 400));
  } else {
    showBobaPopup("your boba is brewing! please wait before brewing more.");
  }
}

function marketingUnlock() {
  document.getElementById('mark').style.display = 'block';
  document.getElementById('markDesc').style.display = 'block';
  const markDescEl = document.getElementById('markDesc');
  typeText(markDescEl, ">boba-game/console: let's advertise the boba to make more money. click the button to tell the world about your boba!");
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
    adsrun++;
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
      document.getElementById('firstAd').style.display = 'block';
      const firstAdEl = document.getElementById('firstAd');
      if (adsrun == 1) {
        typeText(firstAdEl, ">boba-game/console: now that you know the game, it's all up to you. goal: make $10.");
      }
    }, 5000); //change back to 5000 l8r
  } else {
    if (money >= marketcost) {
      showBobaPopup("your marketing is in progress! please wait before advertising more.");
    } else {
      showBobaPopup("get some more money to hire an actually respectable advertising agency.");
    }
  }
}

const checkforwin = setInterval(() => {
  if (money >= 10 && clickedCount > 0) {
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
  const popup = document.getElementById("boba-popup");
  const btn = document.getElementById("boba-popup-btn");

  document.getElementById("boba-popup-text").innerText = text;
  overlay.style.display = "flex";

  popup.classList.remove("show"); // reset animation
  void popup.offsetWidth; // trigger reflow
  popup.classList.add("show");

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
    clickedCount--;
  }

  flag1 = false;
  flag2 = false;
}

console.log('5, 10, 5, 3, x3, 10')

function bananaphone() {
  showBobaPopup("Leaderboard: \n 1. Little Timmy: $7890282746 \n 2. You: $" + money + "\n 3. Little Suzie: $0")
}

function typeText(element, text, speed = 50) {
  element.innerHTML = "";
  element.style.opacity = 0;
  element.style.transform = "scale(0.8)";
  element.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  setTimeout(() => {
    element.style.opacity = 1;
    element.style.transform = "scale(1)";
  }, 50);

  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}