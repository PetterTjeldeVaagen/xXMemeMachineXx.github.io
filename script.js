
  var current_state = 0;
  var teller = 0;
  var check = 0;
  
  var farge = {};

  //ModeChangerVariables
  var modeNumber = 0;
  var NumberOfModes = 3; //antall moduser -1
  const modusNavnListe = ["Original", "Disco Mode", "Custom Color", "Tic Tac Toe"]
  var modusNavn;

  //TicTacToeVariables
  var playerActive = 1;
  const TicTacToe = document.getElementById("TicTacToe");
  const ActivePlayerText = document.getElementById("PlayerActiveText");
  const ResetButton = document.getElementById("ResetButton");
  TicTacToeTeller = 0;
  
  var A1=0;
  var A2=0;
  var A3=0;

  var B1=0;
  var B2=0;
  var B3=0;

  var C1=0;
  var C2=0;
  var C3=0;
  
  //CustomColorVariable
  var red=1;
  var blue=1;
  var green=1;

  var customColor;

  var RedSlider = document.getElementById("RedSlider");
  var RedOutput = document.getElementById("redNumber");
  RedOutput.innerHTML = RedSlider.value;

  var GreenSlider = document.getElementById("GreenSlider");
  var GreenOutput = document.getElementById("greenNumber");
  GreenOutput.innerHTML = GreenSlider.value;

  var BlueSlider = document.getElementById("BlueSlider");
  var BlueOutput = document.getElementById("blueNumber");
  BlueOutput.innerHTML = BlueSlider.value;

  var ColorPicker = document.getElementById("ColorPicker");

  const lys = document.getElementById("LightOff")
  const StartButton = document.getElementById("Hastighetknapp")

  var blinkeLysTimer;
  var blinkeLysTimerDisco;
  
  
  function start(){
  farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
 
      if(modeNumber == 0){
        check = 1;
        timer()
      } else if(modeNumber == 1){
        check = 2;
        timerDisco();
      } else if(modeNumber == 2){
        check = 3;
        timer();
      } else if(modeNumber == 3){
        check = 4;
        ActivePlayerText = "Player 1's turn";
      }
  }

  function BlinkeLys() {
    if(check == 1){
      customColor =  "#" + farge.randomColor;
    }
    if(check == 3){
      customColor =  customColor = "rgba("+red+","+ green+ "," + blue + ")";
    }

    if (current_state == 0) {
      
      lys.style.backgroundColor = "white";
      current_state = 1;
    } else {
      
      lys.style.backgroundColor = customColor;
      current_state = 0;
      teller = teller+1
      document.title = `Blinkendelys.no blink: ${teller}`
    }
  
  }

  function BlinkeLysDisco() {
    if(check == 2){
    
    farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
    lys.style.backgroundColor = "#" + farge.randomColor;
    
    if (current_state == 0) {
      
      lys.style.backgroundColor = "white";
      current_state = 1;
    } else {
      
      lys.style.backgroundColor = "#" + farge.randomColor;
      current_state = 0;
      teller = teller+1
      document.title = `Blinkendelys.no blink: ${teller}`
    }
  }
  }
  
  RedSlider.oninput = function() {
    RedOutput.innerHTML = this.value;
    red=this.value;
  }

  GreenSlider.oninput = function() {
    GreenOutput.innerHTML = this.value;
    green=this.value;
  }

  BlueSlider.oninput = function() {
    BlueOutput.innerHTML = this.value;
    blue=this.value;
  }


  function timer() {
    if(check == 1 || check == 3){
    clearInterval(blinkeLysTimer);
    clearInterval(blinkeLysTimerDisco);
    blinkeLysTimer = setInterval(BlinkeLys, 100);
    }
  }

  function timerDisco() {
    if(check == 2){
    clearInterval(blinkeLysTimerDisco);
    clearInterval(blinkeLysTimer);
    blinkeLysTimerDisco = setInterval(BlinkeLysDisco, 100);
    }
  }

  function sideButton(info){
    if(modeNumber==NumberOfModes && info == 1){   
      modeNumber=0;
    } else if(modeNumber==0 && info == -1){
      modeNumber=NumberOfModes;
    }else{
      modeNumber=modeNumber+info;
    }
    checkForStuff()
    ModeName.innerText = modusNavnListe[modeNumber].toLocaleString('en-US')
  }

  function checkForStuff(){
    //makes sure all the visible is visible and vice versa
    ColorPicker.style.display = "none";
    lys.style.display = "none";
    StartButton.style.display = "none";
    TicTacToe.style.display="none";
    ActivePlayerText.style.display="none";
    ResetButton.style.display="none";

    if(modeNumber == 0){
      lys.style.display = "block";
      StartButton.style.display = "block";
    } else if(modeNumber == 1){
      lys.style.display = "block";
      StartButton.style.display = "block";
    } else if(modeNumber == 2){
      lys.style.display = "block";
      StartButton.style.display = "block";
      ColorPicker.style.display = "block";
    } else if(modeNumber == 3){
      TicTacToe.style.display="block";
      ActivePlayerText.style.display="block";
      ResetButton.style.display="block";
    }
    
  }

  function TicTacToeFunc(placement){
    var place = placement;
    if(TicTacToeTeller < 9){
    if(playerActive == 1){
      checkForTicTacPlacement(1, place);
      checkForTicTacVictory();
    } else if(playerActive ==2){
      checkForTicTacPlacement(2, place)
      checkForTicTacVictory()
    }
    
    }
  }

  function TicTacToeCheck2(s, placement){
    //Check who is placing the next square
    var place = placement;
    var placeToLight = document.getElementById(place);
    var PlayerCheck = s;

    if(PlayerCheck == 1){
      placeToLight.style.backgroundColor="blue";
      playerActive = 2;
      ActivePlayerText.innerHTML = "Player 2's turn";
      TicTacToeTeller++;
    } else if(PlayerCheck == 2){
      placeToLight.style.backgroundColor="red";
      playerActive = 1;
      ActivePlayerText.innerHTML = "Player 1's turn";
      TicTacToeTeller++;
    }
  }

  function checkForTicTacPlacement(s, p){
    //Checks if the square is available and assigns the variable a value depending on who takes it
    var place = p;
    var PlayerCheck = s;
    if(place == "A1" && A1 == 0){
      A1 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    } else if(place == "A2"  && A2 == 0){
      A2 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    } else if(place == "A3"  && A3 == 0){
      A3 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "B1"  && B1 == 0){
      B1 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "B2"  && B2 == 0){
      B2 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "B3"  && B3 == 0){
      B3 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "C1"  && C1 == 0){
      C1 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "C2"  && C2 == 0){
      C2 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }else if(place == "C3"  && C3 == 0){
      C3 = PlayerCheck;
      TicTacToeCheck2(PlayerCheck, place );
    }

    
  }

  function checkForTicTacVictory(){
    //checks if someone has won
    if(A1 == 1 && A2 == 1 && A3 ==1){
      victoryTicTacToe(1)
    } else if(B1 == 1 && B2 == 1 && B3 ==1){
      victoryTicTacToe(1)
    } else if(C1 == 1 && C2 == 1 && C3 ==1){
      victoryTicTacToe(1)
    } else if(A1 == 1 && B1 == 1 && C1 ==1){
      victoryTicTacToe(1)
    } else if(A2 == 1 && B2 == 1 && C2 ==1){
      victoryTicTacToe(1)
    } else if(A3 == 1 && B3 == 1 && C3 ==1){
      victoryTicTacToe(1)
    } else if(A1 == 1 && B2 == 1 && C3 ==1){
      victoryTicTacToe(1)
    } else if(A3 == 1 && B2 == 1 && C1 ==1){
      victoryTicTacToe(1)
    } else if(A1 == 2 && A2 ==2 && A3 == 2){
      victoryTicTacToe(2)
    } else if(B1 == 2 && B2 == 2 && B3 ==2){
      victoryTicTacToe(2)
    } else if(C1 == 2 && C2 == 2 && C3 ==2){
      victoryTicTacToe(2)
    } else if(A1 == 2 && B1 == 2 && C1 ==2){
      victoryTicTacToe(2)
    } else if(A2 == 2 && B2 == 2 && C2 ==2){
      victoryTicTacToe(2)
    } else if(A3 == 2 && B3 == 2 && C3 ==2){
      victoryTicTacToe(2)
    } else if(A1 == 2 && B2 == 2 && C3 ==2){
      victoryTicTacToe(2)
    } else if(A3 == 2 && B2 == 2 && C1 ==2){
      victoryTicTacToe(2)
    } else if(TicTacToeTeller == 9){
      ActivePlayerText.innerHTML = "DRAW!";
    }
  }

  function victoryTicTacToe(vinner){
    var Victor = vinner;
    ActivePlayerText.innerHTML = "Player " +  Victor + " won";
  }

  function reset(){
    //resets variables and things like that

    A1 = 0;A2 = 0;A3 = 0;B1 = 0;B2 = 0;B3 = 0;C1 = 0;C2 = 0;C3 = 0;

    document.getElementById("A1").style.backgroundColor="white";
    document.getElementById("A2").style.backgroundColor="white";
    document.getElementById("A3").style.backgroundColor="white";

    document.getElementById("B1").style.backgroundColor="white";
    document.getElementById("B2").style.backgroundColor="white";
    document.getElementById("B3").style.backgroundColor="white";

    document.getElementById("C1").style.backgroundColor="white";
    document.getElementById("C2").style.backgroundColor="white";
    document.getElementById("C3").style.backgroundColor="white";

    playerActive = 1;
    ActivePlayerText.innerHTML = "Player 1's turn";
    TicTacToeTeller = 0;
  }