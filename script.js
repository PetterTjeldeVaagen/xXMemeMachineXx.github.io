
  var current_state = 0;
  var teller = 0;
  var check = 0;
  var farge = {};
  
  function start(){
    const lys = document.getElementById("LightOff")
    farge.randomColor = Math.floor(Math.random()*16777215).toString(16);
    lys.style.backgroundColor = "#" + farge.randomColor;
    if(check < 1){
      timer()
    }
  }

  function BlinkeLys() {
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
  
  function timer() {
    setInterval(BlinkeLys, 100);
    check = check + 1
  }