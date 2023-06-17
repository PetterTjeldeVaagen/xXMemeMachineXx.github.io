
  var current_state = 0;
  var teller = 0;
  var check = 0;
  var modeNumber = 0;
  var farge = {};
  var NumberOfModes = 1; //antall moduser -1

  const modusNavnListe = ["Original", "Disco Mode", "Custom Color"]
  var modusNavn;
  
  function start(){
    const lys = document.getElementById("LightOff")
    farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
    lys.style.backgroundColor = "#" + farge.randomColor
      if(modeNumber == 0){
        check = 1;
        timer()
      } else if(modeNumber == 1){
        check = 2;
        timerDisco();
      }
  }







  function BlinkeLys() {
    if(check == 1){
    if (current_state == 0) {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = "white";
      current_state = 1;
    } else {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = "#" + farge.randomColor;
      current_state = 0;
      teller = teller+1
      document.title = `Blinkendelys.no blink: ${teller}`
    }
  }
  }

  function BlinkeLysDisco() {
    if(check == 2){
    const lys = document.getElementById("LightOff")
    farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
    lys.style.backgroundColor = "#" + farge.randomColor;
    
    if (current_state == 0) {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = "white";
      current_state = 1;
    } else {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = "#" + farge.randomColor;
      current_state = 0;
      teller = teller+1
      document.title = `Blinkendelys.no blink: ${teller}`
    }
  }
  }
  










  function timer() {
    if(check == 1){
    setInterval(BlinkeLys, 100);
    }
  }

  function timerDisco() {
    if(check == 2){
      setInterval(BlinkeLysDisco, 75);
    }
  }


  function goRight(){
    if(modeNumber==NumberOfModes){   
      modeNumber=0;
    } else{
      modeNumber=modeNumber+1;
    }

    ModeName.innerText = modusNavnListe[modeNumber].toLocaleString('en-US')
    console.log(modeNumber);
  }

  function goLeft(){
    if(modeNumber==0){
      modeNumber=NumberOfModes;
    } else{
      modeNumber=modeNumber-1;
    }

    ModeName.innerText = modusNavnListe[modeNumber].toLocaleString('en-US')
    console.log(modeNumber);
  }