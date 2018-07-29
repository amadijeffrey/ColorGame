var numsquares=6;
var resetBtn=document.querySelectorAll("button")[0]
var colors = generateRandomColor(6);
var h1 =document.querySelector("h1")
var span = document.querySelectorAll("span")[0];
var span1 = document.querySelectorAll("span")[1];
var squares = document.getElementsByClassName("square");
var modeButton=document.querySelectorAll(".mode")
var pickedColor = pickcolor();
span.textContent = pickedColor;
 
// to select diiferent mode

for(var i=0;i<modeButton.length;i++){
modeButton[i].addEventListener("click",function(){
modeButton[0].classList.remove("selected");
modeButton[1].classList.remove("selected");
this.classList.add("selected");
if(this.textContent==="Easy"){
    numsquares=3;
}else{ numsquares=6};

 reset();
})
}
resetBtn.addEventListener("click",function(){
    //get new color
    
  reset()
   resetBtn.textContent="New color";
   span1.textContent=" ";
   h1.style.background="blue"
})



for (var i = 0; i < squares.length; i++) {
    //Assign colors to square
    squares[i].style.background = colors[i];

    //add cick listeners to squares
    squares[i].addEventListener("click", function () {
        //get color of clicked square
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            span1.textContent="correct"
            changecolor(clickedColor)
            h1.style.background=clickedColor;
            resetBtn.textContent="Play again?"
        } else {
            span1.textContent="try again";
            this.style.background="black"
        }
    })
}
function reset(){
    colors= generateRandomColor(numsquares)
    //select a pickedcolor
    pickedColor=pickcolor()
    span.textContent=pickedColor;
    //change the background of square
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block"
            squares[i].style.background=colors[i]
            }else squares[i].style.display="none";
    }

}

function changecolor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background= color;
    }
}
function pickcolor(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];
}


 function generateRandomColor(num){
     //make array
    var arr = [];
    //loop through array num times
    for(i=0;i<num;i++){
    arr.push(randomColor())
    }
    //return array
    return arr;

 }

  function randomColor(){
     var r= Math.floor(Math.random()*256);
     var g= Math.floor(Math.random()*256);
     var b= Math.floor(Math.random()*256);
     //"rgb(r, g, b)"
     return "rgb(" + r + ", " + g +", " + b + ")" ;
  }