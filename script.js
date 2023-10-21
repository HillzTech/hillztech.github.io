
  let currentLevel = 0;
  let gold = 0;
  let originalParent = null; // Add this line at the beginning of your script

  
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
  const homeAudio = document.getElementById('homeAudio');
  const endAudio = document.getElementById('endAudio');
  const correctAudio = document.getElementById('correctAudio');
  const slogan = document.querySelector("#slogan");
  const game = document.querySelector("#game");
  const advertPage = document.querySelector("#advertPage");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Function to get a random letter
  function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }
  
  const levels = [
    
    {
      images: ["fruits/Images1.jpeg", "fruits/Images2.jpeg", "fruits/Images3.jpeg", "fruits/Images4.jpeg"],
      answer: "FRUIT",
      hint: "5 Letters"
    },
    {
      images: ["hero/hero.jpeg", "hero/hero2.jpeg", "hero/hero3.jpeg", "hero/hero4.jpeg"],
      answer: "HERO",
      hint: "4 Letters"
    },
    {
      images: ["Cats/Images1.jpeg", "Cats/Images2.jpeg", "Cats/Images3.jpeg", "Cats/Images4.jpeg"],
      answer: "CAT",
      hint: "3 Letters"
    },
    {
      images: ["Call/call1.jpeg", "Call/call2.jpg", "Call/call3.jpeg", "Call/call4.jpeg"],
      answer: "CALL",
      hint: "4 Letters"
    },
    {
      images: ["Pet/pet.jpeg", "Pet/pet2.jpeg", "Pet/pet3.jpeg", "Pet/pet4.jpeg"],
      answer: "PET",
      hint: "3 Letters"
    },
    {
      images: ["People/people.jpeg", "People/people2.jpeg", "People/people3.jpeg", "People/people4.jpeg"],
      answer: "PEOPLE",
      hint: "6 Letters"
    },
    {
      images: ["Travel/travel.jpeg", "Travel/travel2.jpeg", "Travel/travel3.jpeg", "Travel/travel4.jpeg"],
      answer: "TRAVEL",
      hint: "6 Letters"
    },
    {
      images: ["Queen/queen.jpeg", "Queen/queen2.jpeg", "Queen/queen3.jpeg", "Queen/queen4.jpeg"],
      answer: "QUEEN",
      hint: "5 Letters"
    },
    {
      images: ["shopping/shopping.jpeg", "shopping/shopping2.jpeg", "shopping/shopping3.jpeg", "shopping/shopping4.jpeg"],
      answer: "SHOPPING",
      hint: "8 Letters"
    },
   
    {
      images: ["religion/religion.jpeg", "religion/religion2.jpeg", "religion/religion3.jpeg", "religion/religion4.jpeg"],
      answer: "RELIGION",
      hint: "8 Letters"
    },
    {
      images: ["workout/workout.jpeg", "workout/workout2.jpeg", "workout/workout3.jpeg", "workout/workout4.jpeg"],
      answer: "WORKOUT",
      hint: "7 Letters"
    },
    {
      images: ["villain/villain.jpeg", "villain/villain2.jpeg", "villain/villain3.jpeg", "villain/villain4.jpeg"],
      answer: "VILLAIN",
      hint: "7 Letters"
    },
    {
      images: ["Aves/aves.jpeg", "Aves/aves2.jpeg", "Aves/aves3.jpeg", "Aves/aves4.jpeg"],
      answer: "AVES",
      hint: "4 Letters"
    },
    {
      images: ["Cathedral/cathedral.jpeg", "Cathedral/cathedral2.jpeg", "Cathedral/cathedral3.jpeg", "Cathedral/cathedral4.jpg"],
      answer: "CATHEDRAL",
      hint: "9 Letters"
    },
    {
      images: ["Melanin/melanin.jpeg", "Melanin/melanin2.jpg", "Melanin/melanin3.jpeg", "Melanin/melanin4.jpeg"],
      answer: "MELANIN",
      hint: "7 Letters"
    },
   
    
  ];
  
  
  //INITIALIZING BUTTONS
  
  button1.onclick = buyCoins;
  button2.onclick = rules;
  button3.onclick = dictionBtn;
  
  
  slogan.onclick = Begin;
  
  

  //BEGIN BUTTON//
  function Begin(){
    homeAudio.play();
    whole.style.background = 'rgb(60, 1, 1)';
    button1.innerText = "Back";
    button1.onclick = Home;
    button2.innerText = "Get Coins";
    button2.onclick = buyCoins;
    home.style.display = "none";
    info.style.display = "none";
    gameContainer.style.display = "block";
    backgroundAudio.play();
    button3.style.display = "none";
    button2.style.background = "rgb(1, 40, 3)";
    button1.style.background = "rgb(1, 40, 3)";
    input.style.display = "block";
    
    dictionary.style.display = "none";
    levelText.style.display = "block";
    levelImg.style.display = "block";
    statistics.style.display = "flex"
    
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

  // Create an array to hold all letters (including those from the word)
  const allLetters = [...levels[level].answer.toUpperCase()];

  // Add additional random letters
  const additionalLettersNeeded = 8 - levels[level].answer.toUpperCase().length; 
  for (let i = 0; i < additionalLettersNeeded; i++) {
    allLetters.push(getRandomLetter());
  }

  // Shuffle the letters
  allLetters.sort(() => Math.random() - 0.5);

  // Create letter elements and add them to the letter container
  const letterContainer = document.getElementById('letter-container');
  letterContainer.innerHTML = ''; // Clear existing letters
  for (let i = 0; i < allLetters.length; i++) {
    const letterElement = document.createElement('div');
    letterElement.classList.add('letter');
    letterElement.setAttribute('draggable', true);
    letterElement.setAttribute('id', `letter-${i}`);
    letterElement.innerText = allLetters[i];
    letterElement.addEventListener('dragstart', drag);
    letterContainer.appendChild(letterElement);
  }

  // Create guess boxes equal to the number of letters in the word
  const guessContainer = document.getElementById('guess-container');
  guessContainer.innerHTML = ''; // Clear existing guess boxes
  for (let i = 0; i < levels[level].answer.toUpperCase().length; i++) {
    const guessBox = document.createElement('div');
    guessBox.classList.add('guess-box');
    guessBox.setAttribute('ondrop', 'drop(event)');
    guessBox.setAttribute('ondragover', 'allowDrop(event)');
    guessBox.addEventListener('drop', drop); 
    guessContainer.appendChild(guessBox);
  }
  
}



function checkGuess() {
  const guessContainer = document.getElementById('guess-container');
  const guess = Array.from(guessContainer.children).map(box => box.innerText).join('');
  
  if (guess === levels[currentLevel].answer) {
    correctAudio.play();
    errorAudio.pause();
    gold += 50;
    currentLevel++;
    resultMsg.textContent = "";
    

    if (currentLevel < levels.length) {
      resultMsg.textContent = "";
      loadLevel(currentLevel);
      const letterContainer = document.getElementById('letter-container');
      letterContainer.innerHTML = ''; // Clear existing letters
      const allLetters = [...levels[currentLevel].answer.toUpperCase()];
      const additionalLettersNeeded = 8 - levels[currentLevel].answer.toUpperCase().length; 
      for (let i = 0; i < additionalLettersNeeded; i++) {
        allLetters.push(getRandomLetter());
      }
      allLetters.sort(() => Math.random() - 0.5);
      for (let i = 0; i < allLetters.length; i++) {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.setAttribute('draggable', true);
        letterElement.setAttribute('id', `letter-${i}`);
        letterElement.innerText = allLetters[i];
        letterElement.addEventListener('dragstart', drag);
        letterElement.addEventListener('dragover', allowDrop);
        letterElement.addEventListener('drop', drop);
        letterContainer.appendChild(letterElement);
      }
    } else {
      resultMsg.textContent = "Congratulations! You finished all levels";
      useCoin.style.display = 'none';
      backgroundAudio.pause();
      endAudio.play();
     
    }
  } else {
    resultMsg.textContent = "Incorrect";
  }

  coinText.textContent = ` ${gold}`;
  savePlayerData();
  checkButton.style.display = 'none';
}



  checkButton.addEventListener('click', checkGuess)
  
  // Load player data and current level on page load
  let currentLevel = 0;
  let gold = 0;
  loadPlayerData();
  loadLevel(currentLevel);
  

  }
  
  
   // Create an array to hold all letters (including those from the word)
   const allLetters = [...levels[currentLevel].answer.toUpperCase()];

   // Add additional random letters
   const additionalLettersNeeded = 10 - levels[currentLevel].answer.toUpperCase().length; 
   for (let i = 0; i < additionalLettersNeeded; i++) {
     allLetters.push(getRandomLetter());
   }
 
   // Shuffle the letters
   allLetters.sort(() => Math.random() - 0.5);
 
   // Create letter elements and add them to the letter container
   const letterContainer = document.getElementById('letter-container');
   for (let i = 0; i < allLetters.length; i++) {
     const letterElement = document.createElement('div');
     letterElement.classList.add('letter');
     letterElement.setAttribute('draggable', true);
     letterElement.setAttribute('id', `letter-${i}`);
     letterElement.innerText = allLetters[i];
     letterElement.addEventListener('dragstart', drag);
  letterElement.addEventListener('dragover', allowDrop); // Add this line
  letterElement.addEventListener('drop', drop); // Add this line
     letterContainer.appendChild(letterElement);
   }
 
   // Create guess boxes equal to the number of letters in the word
   const guessContainer = document.getElementById('guess-container');
   for (let i = 0; i < levels[currentLevel].answer.toUpperCase().length; i++) {
     const guessBox = document.createElement('div');
     guessBox.classList.add('guess-box');
     guessBox.setAttribute('ondrop', 'drop(event)');
     guessBox.setAttribute('ondragover', 'allowDrop(event)');
     guessContainer.appendChild(guessBox);
   }

   
  
  //BACK BUTTON//
  function Home() {
    input.style.display = "none";
    home.style.display = "block";
    gameContainer.style.display = "none";
    backgroundAudio.pause();
    whole.style.background = "linear-gradient(to top, rgb(11, 36, 177), rgb(8, 8, 8))";
    button3.style.display = "block";
    button2.style.background = 'rgb(54, 1, 1)';
    button1.style.background = 'rgb(54, 1, 1)';
    dictionary.style.display = "none";
    button2.innerText = "Rules";
    button1.innerText = "Get Coins";
    button2.onclick = rules;
    button1.onclick = buyCoins;
    statistics.style.display = "flex"
    advertPage.style.display = "none";
    info.style.display = "none";
    levelText.style.display = "block";
    levelImg.style.display = "block";
   
  }
  
  
  //RULES BUTTON//
  
  function rules() {
    button1.innerHTML = "Back";
    button1.onclick = Home;
    button2.innerText = "Get Coins";
    button2.onclick = buyCoins;
    info.style.display = 'block';
    home.style.display = "none";
    homeAudio.pause();
    dictionary.style.display = "none";
    levelText.style.display = "none";
    levelImg.style.display = "none";
    statistics.style.display = "flex"
    advertPage.style.display = "none";
  }
  
  //WORD SEARCH BUTTON//
  
  function dictionBtn() {
    button1.innerHTML = "Back";
    button1.onclick = Home;
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
    advertPage.style.display = "none";
    
  }
  
  
  //USE COIN BUTTON//
  
  function Help() {
    
    if (gold >= 100) {
      
      coinText.textContent = ` ${gold -= 100}`;
      hintMsg.textContent = levels[currentLevel].answer;
    } else{
      useCoin.innerText = "Use Coin";
    }
    
  }
  
  //HINT BUTTON
  
  function Hint(){
    if (gold >= 10) {
      hintMsg.textContent = levels[currentLevel].hint;
      coinText.textContent = ` ${gold -= 10}`;
    }
  }
  
  //buy coin button//
  
  function buyCoins() {
    
    gameContainer.style.display = "none";
    input.style.display = "none";
    backgroundAudio.pause();
    info.style.display = 'none';
    dictionary.style.display = "none";
    statistics.style.display = "none";
    home.style.display = "none";
    advertPage.style.display = "block";
    button1.innerText = "Back";
    button1.onclick= Home;
    levelImg.style.display = "block";
    levelText.style.display = "block";
  }
  
  
  //FREE COIN
  function play() {
    home.style.display = "none";
    dictionary.style.display = "none";
    info.style.display = "none";
    gameContainer.style.display = "none";
    statistics.style.display = "none"
    advertPage.style.display = "none";
  }
  
  
  //DRAG AND DROP
  let currentDraggedElement = null;


  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    originalParent = event.target.parentNode;
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
  
    // If the drop target is a guess box, replace its content with the dragged element
    if (event.target.classList.contains('guess-box')) {
      const clone = draggedElement.cloneNode(true);
      event.target.innerHTML = ''; // Clear existing content
      event.target.appendChild(draggedElement);
      if (isGuessBoxFull()) {
        checkButton.style.display = 'block';
      }
    } else {
      // If not, append it back to the letter container
      const letterContainer = document.getElementById('letter-container');
      letterContainer.appendChild(draggedElement);
    }
  }
function allowDrop(event) {
  event.preventDefault();
}

function isGuessBoxFull() {
  const guessContainer = document.getElementById('guess-container');
  const guessBoxes = guessContainer.getElementsByClassName('guess-box');
  for (const box of guessBoxes) {
    if (!box.hasChildNodes()) {
      return false;
    }
  }
  return true;
}

