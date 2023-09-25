// DECLARING VARIABLES

let currentLevel = 0;
let gold = 0;

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


const levels = [
  
  {
    images: ["fruits/Images1.jpeg", "fruits/Images2.jpeg", "fruits/Images3.jpeg", "fruits/Images4.jpeg"],
    answer: "fruit",
    hint: "5 Letters"
  },
  {
    images: ["hero/hero.jpeg", "hero/hero2.jpeg", "hero/hero3.jpeg", "hero/hero4.jpeg"],
    answer: "hero",
    hint: "4 Letters"
  },
  {
    images: ["Cats/Images1.jpeg", "Cats/Images2.jpeg", "Cats/Images3.jpeg", "Cats/Images4.jpeg"],
    answer: "cat",
    hint: "3 Letters"
  },
  {
    images: ["Call/call1.jpeg", "Call/call2.jpg", "Call/call3.jpeg", "Call/call4.jpeg"],
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
    images: ["Melanin/melanin.jpeg", "Melanin/melanin2.jpg", "Melanin/melanin3.jpeg", "Melanin/melanin4.jpeg"],
    answer: "melanin",
    hint: "7 Letters"
  },
 
  
];

//INITIALIZING BUTTONS

button1.onclick = play;
button2.onclick = rules;
button3.onclick = dictionBtn;
hint.onclick = Hint;
useCoin.onclick = Help;


function dictionBtn() {
  dictionary.style.display = "block";
  home.style.display = "none";
  dictionary.style.background = 'rgb(180, 180, 180)';
  whole.style.background = 'rgb(54, 1, 1)';
 button3.style.display = "none";
 info.style.display = 'none';
 levelText.style.display = "none";
  levelImg.style.display = "none";
  button1.style.background = "rgb(1, 20, 3)";
  button2.style.background = "rgb(1, 20, 3)";
}


function Home() {
  input.style.display = "none";
  home.style.display = "block";
  gameContainer.style.display = "none";
  backgroundAudio.pause();
  whole.style.background = "rgb(25, 29, 1)";
  button3.style.display = "block";
  button2.style.background = 'rgb(54, 1, 1)';
  button1.style.background = 'rgb(54, 1, 1)';
  dictionary.style.display = "none";
 button1.innerText = "Play";
  button1.onclick = play;
  button2.innerText = "Rules";
  button2.onclick = rules;
}

function Hint(){
  if (gold >= 10) {
    hintMsg.textContent = levels[currentLevel].hint;
    coinText.textContent = ` ${gold -= 10}`;
  }
 
}

function rules() {
  button2.innerText = "Buy Coins";
  button2.onclick = "buyCoins";
  info.style.display = 'block';
  home.style.display = "none";
  homeAudio.pause();
  dictionary.style.display = "none";
  levelText.style.display = "none";
  levelImg.style.display = "none";
}
function buyCoins() {
  info.style.display = 'none';
  home.style.display = "none";
}
function Help() {
  
  if (gold >= 100) {
    laughAudio.play();
    coinText.textContent = ` ${gold -= 100}`;
    useCoin.innerText = levels[currentLevel].answer;
  } else{
    useCoin.innerText = "Use Coin";
  }
  
}
function restart() {
   
   
}

function play(){
  whole.style.background = 'rgb(54, 1, 1)';
  button1.innerText = "Back";
  button1.onclick = Home;
  button2.innerText = "Get Coins";
  button2.onclick = "buyCoins";
  home.style.display = "none";
  info.style.display = "none";
  gameContainer.style.display = "block";
  input.style.display = "block";
  backgroundAudio.play();
  homeAudio.pause();
  button3.style.display = "none";
  button1.style.background = "rgb(1, 20, 3)";
  button2.style.background = "rgb(1, 20, 3)";
  hint.style.background = "rgb(1, 20, 3)";
  checkButton.style.background = "rgb(1, 20, 3)";
  useCoin.style.background = "rgb(1, 20, 3)";
  dictionary.style.display = "none";
  levelText.style.display = "block";
  levelImg.style.display = "block";
  
  
 
  
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
        coinText.textContent = ` ${gold += 50}`;
        hintMsg.textContent = "";
        
        if (currentLevel < levels.length) {
          
          loadLevel(currentLevel);
         
        } else {
          resultMessage.textContent = "Congratulations! You finished all levels";
          useCoin.style.display = 'none';
          backgroundAudio.pause();
          endAudio.play();
          button1.innerText = "Restart";
          button1.onclick = restart;
          
        }
    } else {
      resultMessage.textContent = "";
    
    }
  
    userInput.value = '';
  
  }
  
  checkButton.addEventListener('click', checkGuess);
 
}

//Dictionary

document.getElementById('searchButton').addEventListener('click', function() {
  const word = document.getElementById('wordInput').value;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(data => {
          const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
          const output = definition ? definition : 'Definition not found.';
          document.getElementById('results').textContent = output;
          wordInput.value= "";
      })
      .catch(error => console.error('Error:', error));
});





