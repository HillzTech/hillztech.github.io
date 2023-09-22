// DECLARING VARIABLES
let currentLevel = 0;
let gold = 100;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const checkButton = document.querySelector("#checkButton");
const useCoin = document.querySelector("#useCoin");
const resultMsg = document.querySelector("#resultMessage");
const levelText = document.querySelector("#levelText");
const gameContainer = document.getElementById('gameContainer');
const hint = document.getElementById('hint');
const userInput = document.getElementById('userInput');
const coinText = document.getElementById('coinText');
const backgroundAudio = document.getElementById('backgroundAudio');
const homegroundAudio = document.getElementById('homegroundAudio');
const endAudio = document.getElementById('endAudio');
const correctAudio = document.getElementById('correctAudio');
const errorAudio = document.getElementById('errorAudio');
const laughAudio = document.getElementById('laughAudio');

homeAudio.play();

const levels = [
  
  {
    images: ["fruits/Images1.jpeg", "fruits/Images2.jpeg", "fruits/Images3.jpeg", "fruits/Images4.jpeg"],
    answer: "fruit",
    hint: "5 Letters"
  },
  {
    images: ["Cats/Images1.jpeg", "Cats/Images2.jpeg", "Cats/Images3.jpeg", "Cats/Images4.jpeg"],
    answer: "cat",
    hint: "3 Letters"
  },
  {
    images: ["Call/call1.jpeg", "Call/call2.png", "Call/call3.jpeg", "Call/call4.jpeg"],
    answer: "call",
    hint: "4 Letters"
  },
  {
    images: ["Pet/pet.jpeg", "Pet/pet2.jpeg", "Pet/pet3.jpeg", "Pet/pet4.jpeg"],
    answer: "pet",
    hint: "3 Letters"
  },
  {
    images: ["People/people.jpeg", "People/people2.jpeg", "People/people3.jpeg", "People/people4.jpeg"],
    answer: "people",
    hint: "6 Letters"
  },
  {
    images: ["Travel/travel.jpeg", "Travel/travel2.jpeg", "Travel/travel3.jpeg", "Travel/travel4.jpeg"],
    answer: "travel",
    hint: "6 Letters"
  },
  {
    images: ["Queen/queen.jpeg", "Queen/queen2.jpeg", "Queen/queen3.jpeg", "Queen/queen4.jpeg"],
    answer: "queen",
    hint: "5 Letters"
  },
  {
    images: ["shopping/shopping.jpeg", "shopping/shopping2.jpeg", "shopping/shopping3.jpeg", "shopping/shopping4.jpeg"],
    answer: "shopping",
    hint: "8 Letters"
  },
  {
    images: ["hero/hero.jpeg", "hero/hero2.jpeg", "hero/hero3.jpeg", "hero/hero4.jpeg"],
    answer: "hero",
    hint: "4 Letters"
  },
  {
    images: ["religion/religion.jpeg", "religion/religion2.jpeg", "religion/religion3.jpeg", "religion/religion4.jpeg"],
    answer: "religion",
    hint: "8 Letters"
  },
   {
    images: ["workout/workout.jpeg", "workout/workout2.jpeg", "workout/workout3.jpeg", "workout/workout4.jpeg"],
    answer: "workout",
    hint: "7 Letters"
  },
  {
    images: ["villain/villain.jpeg", "villain/villain2.jpeg", "villain/villain3.jpeg", "villain/villain4.jpeg"],
    answer: "villain",
    hint: "7 Letters"
  },
  {
    images: ["Aves/aves.jpeg", "Aves/aves2.jpeg", "Aves/aves3.jpeg", "Aves/aves4.jpeg"],
    answer: "aves",
    hint: "4 Letters"
  },
  {
    images: ["Cathedral/cathedral.jpeg", "Cathedral/cathedral2.jpeg", "Cathedral/cathedral3.jpeg", "Cathedral/cathedral4.jpg"],
    answer: "cathedral",
    hint: "9 Letters"
  },
  {
    images: ["America/america.jpeg", "America/america2.jpeg", "America/america3.jpeg", "America/america4.jpeg"],
    answer: "america",
    hint: "7 Letters"
  },
  {
    images: ["Aves/aves.jpeg", "Aves/aves2.jpeg", "Aves/aves3.jpeg", "Aves/aves4.jpeg"],
    answer: "aves",
    hint: "4 Letters"
  },
  {
    images: ["France/france.jpeg", "France/france2.jpeg", "France/france3.jpeg", "France/france4.jpeg"],
    answer: "france",
    hint: "6 Letters"
  },
  {
    images: ["Melanin/melanin.jpeg", "Melanin/melanin2.jpg", "Melanin/melanin3.jpeg", "Melanin/melanin4.jpeg"],
    answer: "melanin",
    hint: "7 Letters"
  }
  
  
  
];

//INITIALIZING BUTTONS

button1.onclick = play;
hint.onclick = Hint;
useCoin.onclick = Help;

function Home() {
  button1.innerText = "Play";
  button1.onclick = play;
  home.style.display = "block";
  gameContainer.style.display = "none";
  input.style.display = "none";
   backgroundAudio.pause();
  game.style.background = 'rgb(43, 49, 2)';
}

function Hint(){
  hint.innerText = levels[currentLevel].hint;
  
}

function Help() {
  
  if (gold >= 10) {
    laughAudio.play();
    coinText.textContent = ` ${gold -= 50}`;
    useCoin.innerText = levels[currentLevel].answer;
  } else{
    useCoin.innerText = "Use Coin";
  }
}

function play(){
  game.style.background = 'rgb(54, 1, 1)';
  button1.innerText = "Quit";
  button1.onclick = Home;
  home.style.display = "none";
  gameContainer.style.display = "block";
  input.style.display = "block";
   backgroundAudio.play();
   homeAudio.pause();

  
  function loadLevel(level) {
    
    gameContainer.innerHTML = '';
  
    for (const image of levels[level].images) {
        const img = document.createElement('img');
        img.src = `${image}`;
        gameContainer.appendChild(img);

    }
    
    levelText.textContent = ` ${currentLevel + 1}`;
  }
  loadLevel(currentLevel);

  function checkGuess() {
    const guess = userInput.value.toLowerCase().trim();
  
    if (guess === levels[currentLevel].answer) {
        correctAudio.play();
        errorAudio.pause();
        currentLevel++;
        coinText.textContent = ` ${gold += 10}`;
  
        if (currentLevel < levels.length) {
            loadLevel(currentLevel);
          hint.innerText = "Hint";
          useCoin.innerText = "Use Coin";
        } else {
          resultMessage.textContent = "Congratulations! You finished all levels";
          useCoin.style.display = 'none';
          backgroundAudio.pause();
          endAudio.play();
        }
    } else {
      errorAudio.play();
      resultMessage.textContent = "";
    }
  
    userInput.value = '';
  }
  
  checkButton.addEventListener('click', checkGuess);
 
}





