var InputHYPO = document.querySelectorAll(".Input-QAHA");
var ClickHYPO = document.querySelector("#Click-QAHA");
var OutputHYPO = document.querySelector(".Output-HYPO");

ClickHYPO.addEventListener("click", Calculate);
function Calculate(){
  var Base = InputHYPO[0].value;
  var Height = InputHYPO[1].value;
  if(Base>0 && Height>0){
  var sumOfSquares = Base*Base + Height*Height;
  var sumOfSquaresRoot = Math.sqrt(sumOfSquares);
  OutputHYPO.innerText = "The length of hypotenuse is " + sumOfSquaresRoot;
  }else{
    OutputHYPO.innerText = "Please Enter a Valid Value";
  }
}