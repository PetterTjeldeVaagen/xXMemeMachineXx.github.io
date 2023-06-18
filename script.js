
  var current_state = 0;
  var teller = 0;
  var check = 0;
  var modeNumber = 0;
  var farge = {};
  var NumberOfModes = 2; //antall moduser -1

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

  const modusNavnListe = ["Original", "Disco Mode", "Custom Color"]
  var modusNavn;
  
  function start(){
  const lys = document.getElementById("LightOff")
  farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
      if(modeNumber == 0){
        check = 1;
        timer()
      } else if(modeNumber == 1){
        check = 2;
        timerDisco();

      } else if(modeNumber == 2){
        check = 3;
        timerCustom();
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

  function BlinkeLysCustom() {
    if(check == 3){
    if (current_state == 0) {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = "white";
      current_state = 1;
    } else {
      const lys = document.getElementById("LightOff")
      lys.style.backgroundColor = customColor ;
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
  
  

  RedSlider.oninput = function() {
    RedOutput.innerHTML = this.value;
    red=this.value;
    fargeLys();
  }

  GreenSlider.oninput = function() {
    GreenOutput.innerHTML = this.value;
    green=this.value;
    fargeLys();
  }

  BlueSlider.oninput = function() {
    BlueOutput.innerHTML = this.value;
    blue=this.value;
    fargeLys();
  }

  function fargeLys(){
    const lys = document.getElementById("LightOff")
    customColor = "rgba("+red+","+ green+ "," + blue + ")";
    lys.style.backgroundColor= customColor;
    console.log(customColor);
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

  function timerCustom() {
    if(check == 3){
    setInterval(BlinkeLysCustom, 100);
    }
  }


  function goRight(){
    if(modeNumber==NumberOfModes){   
      modeNumber=0;
    } else{
      modeNumber=modeNumber+1;
    }
    checkForStuff()
    ModeName.innerText = modusNavnListe[modeNumber].toLocaleString('en-US')
    console.log(modeNumber);
    
  }

  function goLeft(){
    
    if(modeNumber==0){
      modeNumber=NumberOfModes;
    } else{
      modeNumber=modeNumber-1;
    }
    checkForStuff()
    ModeName.innerText = modusNavnListe[modeNumber].toLocaleString('en-US')
    console.log(modeNumber);
  }

  function checkForStuff(){
    if(modeNumber == 0){
      ColorPicker.style.display = "none";
    } else if(modeNumber == 1){
      ColorPicker.style.display = "none";
    } else if(modeNumber == 2){
      ColorPicker.style.display = "block";
    }
    
  }