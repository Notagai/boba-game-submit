const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

let boba = 0;
let quality = 0.001;
let btnAllowed = true;

function brew() {
    if(btnAllowed == true) {
        btnAllowed = false;
        document.getElementById('button').style.cursor = 'not-allowed';
        setTimeout(() => {
            boba++;
            document.getElementById("thing").innerText = 'you currently have ' + boba + ' boba.';
            document.getElementById('button').style.cursor = 'pointer';
        }, 5000);
    } else {
        alert("your boba is brewing! please wait before brewing more.");
    }     
}