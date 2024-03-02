let myI = document.getElementsByClassName("myI");
let myList = document.getElementsByClassName("drop-dwon-list");

for (let i = 0; i < myI.length; i++) {
  myI[i].addEventListener("mouseover", () => {
    myList[i].style.visibility = "visible";
  });
}


function hide(x) {
  const ve = x.children
  ve[1].style.visibility = "hidden"
}

let flag = true
function searchOn() {

  if (flag == true) {
    document.getElementsByClassName("search-bar")[0].style.visibility = "visible"
    flag = false

  }
  else {
    document.getElementsByClassName("search-bar")[0].style.visibility = "hidden"

    flag = true
  }
}


let flag1 = true
function hideChild(x) {
  if (flag1 == true) {
    x.children[1].style.visibility = "visible"
    flag1 = false
  }
  else {
    x.children[1].style.visibility = "hidden"
    flag1 = true
  }
}



//======= on slider change ===========
var inc = 2;
let slider = document.getElementsByClassName("slider")
let slide = document.getElementsByClassName("mian-slider")

setInterval(function () {

  slide[0].style.background = "url('./images/slide-" + inc + ".jpg')"
  slide[0].style.backgroundRepeat = "no-repeat"
  slide[0].style.backgroundSize = "calc(100vw) 44.3vw"



  slider[inc - 1].style.background = "#20366b"
  for (let i = 0; i < slider.length; i++) {
    if ((inc - 1) != i)
      slider[i].style.background = "white"
  }

  console.log(inc - 1)
  inc++;

  if (inc >= 4)
    inc = 1
}, 3000);



function sliderChange(myThis, para) {

  slider[para].style.background = "#20366b"
  for (let i = 0; i < slider.length; i++) {
    if (para != i)
      slider[i].style.background = "white"
  }

  slide[0].style.background = "url('./images/slide-" + (para + 1) + ".jpg')"
  slide[0].style.backgroundRepeat = "no-repeat"
  slide[0].style.backgroundSize = "calc(100vw) 44.3vw"

}


// COMPANY SUCCESS stats changes

stats = document.getElementsByClassName("timer1")
let stInc = 0
function reloadCompStats() {
  t1 = 30, t2 = 100, t3 = 53, t4 = 24;



  setInterval(function () {

    if (stInc <= t1)
      stats[0].innerHTML = stInc
    if (stInc <= t2)
      stats[1].innerHTML = stInc
    if (stInc <= t3)
      stats[2].innerHTML = stInc
    if (stInc <= t4)
      stats[3].innerHTML = stInc
    stInc++
  }, 25);
}