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
const slogan = document.querySelector("#slogan");
const adWatch = document.querySelector("#adWatch");




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
freeCoin.onclick = Free;
adWatch.onclick = Adstart;
slogan.onclick = Begin;

function Adstart() {
  coinText.textContent = ` ${gold += 2}`;
  
}

function Begin() {
  gameContainer.style.display = "block";
  whole.style.background = 'rgb(54, 1, 1)';
  button1.innerText = "Back";
  button1.onclick = Home;
  button2.innerText = "Get Coins";
  button2.onclick = buyCoins;
  home.style.display = "none";
  info.style.display = "none";
  input.style.display = "block";
  backgroundAudio.play();
  button3.style.display = "none";
  button1.style.background = "rgb(1, 20, 3)";
  button2.style.background = "rgb(1, 20, 3)";
  hint.style.background = "rgb(1, 20, 3)";
  checkButton.style.background = "rgb(1, 20, 3)";
  useCoin.style.background = "rgb(1, 20, 3)";
  dictionary.style.display = "none";
  levelText.style.display = "block";
  levelImg.style.display = "block";
  adPage.style.display = "none";
  freeCoin.style.display = "none";

   function loadPlayerData() {
      // Load player's current level and gold from local storage
      const savedLevel = localStorage.getItem('currentLevel');
      const savedGold = localStorage.getItem('currentGold');
      currentLevel = savedLevel ? parseInt(savedLevel) : 0;
      gold = savedGold ? parseInt(savedGold) : 0;
      coinText.textContent = ` ${gold}`;
  }
  
  function savePlayerData() {
      // Save current level and gold to local storage
      localStorage.setItem('currentLevel', currentLevel);
      localStorage.setItem('currentGold', gold);
  }
  
  function loadLevel(level) {
      // Save current level to local storage and update UI
      savePlayerData();
      gameContainer.innerHTML = '';
  
      for (const image of levels[level].images) {
          const img = document.createElement('img');
          img.src = `${image}`;
          gameContainer.appendChild(img);
      }
  
      levelText.textContent = ` ${level + 1}`;
  }
  
  function checkGuess() {
      const guess = userInput.value.toLowerCase().trim();
  
      if (guess === levels[currentLevel].answer) {
          correctAudio.play();
          errorAudio.pause();
          gold += 50;
          currentLevel++;
  
          if (currentLevel < levels.length) {
              loadLevel(currentLevel);
              coinText.textContent = ` ${gold}`;
              hintMsg.textContent = "";
              resultMsg.textContent = "";
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
      savePlayerData();
  }
  
  checkButton.addEventListener('click', checkGuess);
  
  // Load player data and current level on page load
  let currentLevel = 0;
  let gold = 0;
  loadPlayerData();
  loadLevel(currentLevel);
  

  
  
  
  
  
   
  }


function Free() {
  home.style.display = "none";
  dictionary.style.display = "none";
  info.style.display = "none";
  adPage.style.display = "block";
  gameContainer.style.display = "none";
  statistics.style.display = "none"
}

function dictionBtn() {
  button2.innerText = "Get Coins";
  button2.onclick = buyCoins;
  dictionary.style.display = "block";
  home.style.display = "none";
  dictionary.style.background = 'rgb(180, 180, 180)';
  whole.style.background = 'rgb(40, 1, 1)';
 button3.style.display = "none";
 info.style.display = 'none';
 levelText.style.display = "none";
  levelImg.style.display = "none";
  button1.style.background = "rgb(1, 20, 3)";
  button2.style.background = "rgb(1, 20, 3)";
  adPage.style.display = "none";
  freeCoin.style.display = "none";
  statistics.style.display = "flex"
  
}



function Home() {
  input.style.display = "none";
  home.style.display = "block";
  gameContainer.style.display = "none";
  backgroundAudio.pause();
  whole.style.background = "linear-gradient(to top, rgb(31, 36, 1), rgb(8, 8, 8))";
  button3.style.display = "block";
  button2.style.background = 'rgb(54, 1, 1)';
  button1.style.background = 'rgb(54, 1, 1)';
  dictionary.style.display = "none";
 button1.innerText = "Play";
  button1.onclick = play;
  button2.innerText = "Rules";
  button2.onclick = rules;
  adPage.style.display = "none";
  freeCoin.style.display = "block";
  statistics.style.display = "flex"
 
}

function Hint(){
  if (gold >= 1) {
    hintMsg.textContent = levels[currentLevel].hint;
    coinText.textContent = ` ${gold -= 1}`;
  }
 
}

function rules() {
  button2.innerText = "Get Coins";
  button2.onclick = buyCoins;
  info.style.display = 'block';
  home.style.display = "none";
  homeAudio.pause();
  dictionary.style.display = "none";
  levelText.style.display = "none";
  levelImg.style.display = "none";
  adPage.style.display = "none";
  freeCoin.style.display = "none";
  statistics.style.display = "flex"
}

function Help() {
  
  if (gold >= 10) {
    laughAudio.play();
    coinText.textContent = ` ${gold -= 10}`;
    hintMsg.textContent = levels[currentLevel].answer;
  } else{
    useCoin.innerText = "Use Coin";
  }
  
}
function buyCoins() {
  
  gameContainer.style.display = "none";
  input.style.display = "none";
  backgroundAudio.pause();
  info.style.display = 'none';
  dictionary.style.display = "none";
  adPage.style.display = "block";
  statistics.style.display = "none"
}

function play(){
  whole.style.background = 'rgb(40, 1, 1)';
  button1.innerText = "Back";
  button1.onclick = Home;
  button2.innerText = "Get Coins";
  button2.onclick = buyCoins;
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
  adPage.style.display = "none";
  freeCoin.style.display = "none";
  statistics.style.display = "flex"
 
  
  
 
  
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
        coinText.textContent = ` ${gold += 5}`;
        hintMsg.textContent = "";
        resultMsg.textContent = "";
        
        if (currentLevel < levels.length) {
          
          loadLevel(currentLevel);
          resultMsg.textContent = "";
          hintMsg.textContent = "";
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



// Function to increment the score
function incrementCoin() {
  const coinTextElement = document.getElementById('coinText');
  let coinText = parseInt(coinTextElement.textContent) || 0;
  coinText++;
  coinTextElement.textContent = coinText;
  saveGameState();
}

// Function to increment the level
function incrementLevel() {
  const levelTextElement = document.getElementById('levelText');
  let levelText = parseInt(levelElement.textContent) || 0;
  levelText++;
  levelTextElement.textContent = levelText;
  saveGameState();
}

// Function to reset the game
function resetGame() {
  document.getElementById('levelText').textContent = '0';
  document.getElementById('coinText').textContent = '0';
  saveGameState();
}

// Function to save game state
function saveGameState() {
  const levelText = document.getElementById('levelText').textContent;
  const coinText = document.getElementById('coinText').textContent;
  localStorage.setItem('gameLevel', levelText);
  localStorage.setItem('gameCoin', coinText);
}

// Event listeners
const incrementCoinButton = document.getElementById('incrementCoin');
incrementCoinButton.addEventListener('click', incrementCoin);

const incrementLevelButton = document.getElementById('incrementLevel');
incrementLevelButton.addEventListener('click', incrementLevel);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

 // Autosave every 5 seconds
 setInterval(function() {
  const coinText = document.getElementById('coinText').textContent;
  localStorage.setItem('gameCoin', coinText);
  console.log('Autosaved');
}, 1000);
setInterval(function() {
  const levelText = document.getElementById('levelText').textContent;
  localStorage.setItem('gameCoin', levelText);
  console.log('Autosaved');
}, 1000);

// Initialize game state from local storage
const initialLevelText = localStorage.getItem('gameLevel');
const initialCoinText = localStorage.getItem('gameCoin');

if (initialLevelText) {
  document.getElementById('levelText').textContent = initialLevelText;
}

if (initialCoinText) {
  document.getElementById('coinText').textContent = initialCoinText;
}
