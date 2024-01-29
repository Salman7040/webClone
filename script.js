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


let flag1=true
function hideChild(x){
  if (flag1 == true) {
    x.children[1].style.visibility="visible"
    flag1 = false  
  }
  else {
    x.children[1].style.visibility="hidden"
    flag1 = true
  }
}



//======= on slider change ===========

function sliderChange(myThis,para){

  myThis.style.background="#20366b"
  document.getElementsByClassName("main")[0].style.background="url('./images/slide-"+para+".jpg')"

}

