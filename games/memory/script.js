
var tileImages = []; // main container for game images
var tileArray = [];
var tileFlippedOver = [];
var cardFlipped = -1;
var timer = '';
var playLockout = false;
var gamePlay = false; // controls if we rebuild the board restart
var startButton = document.getElementById('start');
var gameBoard = document.getElementById('gameboard');
var message = document.getElementById('message');



///////////////-->  MOI STVARI <--////////////////////
var linkButton  = document.getElementById('linkovi');
//*var povtorno = document.getElementById('restart');
//povtorno.addEventListener('click', rest);
//function rest() {
 // playLockout = false;
 // cardFlipped = - 1;
 // startButton.style.display = 'block';
///gameBoard = document.getElementById('gameboard');
 // gamePlay = false;
 // tileImages = [];
 /// tileFlippedOver = [];
 // tileArray = [];
  //}



///////////////////////////////////////////////




////////  event listens  ///////////////
startButton.addEventListener('click', startGame);

////////////  Functions  ///////////////

function startGame() {
  playLockout = false;
  cardFlipped = - 1;
  startButton.style.display = 'none';
  linkButton.style.display = 'inline-block';
  if(!gamePlay) {
    gamePlay = true;
    buildArray();
    tileArray = tileImages.concat(tileImages);
    shuffleArray(tileArray);
    buildBoard();
    message.innerHTML = "Click any tile";
  }
}

//-----------------------------------------

function buildArray() {
  for (var x = 11; x < 20; x++) {
    tileImages.push(x + '.jpg');
  }
}
//console.log(tileImages);

//-----------------------------------------

function buildBoard() {
  var html = "";
  for(var x = 0; x <= (tileArray.length - 1); x++) {
    html += '<div class="gameTile"><div class="gameTile">';
    html += '<img id="cardz'+x+'" src="images/lion-back.jpg" onclick="pickCard('+x+', this)" class="flipImage"></div></div>';
  }
  gameBoard.innerHTML = html;
}

//-----------------------------------------

function pickCard(tileIndex, t) {
  //console.log(tileIndex);
  // console.log(cardFlipped);
  //console.log(t.src);
  ///  check if its already flipped ///
  if(!isinArray(t.id, tileFlippedOver) && !playLockout) {
    // message.innerHTML = "Check for Match";
    //console.log('not in array');
    if(cardFlipped >= 0) {
      //second cardFlipped   
      cardFlip(t, tileIndex);
      // var secondCard = tileIndex;
      // check for match
      playLockout = true;
      if(checkSrc(tileFlippedOver[tileFlippedOver.length - 1]) == checkSrc(tileFlippedOver[tileFlippedOver.length - 2])) {
        //// MATCH                  
        message.innerHTML = "Match Found. Click more tiles";  // console.log('Match');
        playLockout = false;
        cardFlipped = - 1;
        ///// CHECK if GAME is OVER
        if(tileFlippedOver.length == tileArray.length) {
          gameover();
        }
      }else {
        ///// NO MATCH // console.log('No Match');
        message.innerHTML = "No Match Found";
        timer = setInterval(hideCard, 1000);
      }
      // console.log('second', cardFlipped);
    }else {
      //first cardFlipped
      cardFlipped = tileIndex;
      cardFlip(t, tileIndex);
      // console.log('first', cardFlipped);
    }
  } else {
    message.innerHTML = "Not clickable";
    //console.log('in array');
  }
}

//-----------------------------------------

function hideCard() {
  for(var x = 0; x < 2; x++) {
    var vid = tileFlippedOver.pop();
    document.getElementById(vid).src = "images/lion-back.jpg";  //console.log(vid);
  }
  clearInterval(timer);
  playLockout = false;
  cardFlipped = - 1;
  message.innerHTML = "Притисни било која Карта";
}

//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//

function gameover() {
  startButton.style.display = 'block';
  linkButton.style.display = 'none';
  message.innerHTML = "Почни Нова Игра";
  gamePlay = false;
  tileImages = [];
  tileFlippedOver = [];
}

//-----------------------------------------

function isinArray(v, array) {
  return array.indexOf(v) > -1;
}

//-----------------------------------------

function cardFlip(t, ti) {
  t.src = "images/" + tileArray[ti];
  tileFlippedOver.push(t.id);
  // console.log(tileFlippedOver);
}

//-----------------------------------------

function checkSrc(v) {
  var v = document.getElementById(v).src;
  return v;
}

//-----------------------------------------

function shuffleArray(array) {
  for(var x = array.length - 1; x > 0; x--) {
    var holder  = Math.floor(Math.random() * (x+1) );     var itemValue = array[x];
    array[x] = array[holder];
    array[holder] = itemValue;
    //console.log(itemValue);
  }
  return array;
}
