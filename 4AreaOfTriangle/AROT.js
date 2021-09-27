var InputAROT = document.querySelectorAll(".Input-QAHA");
var CalculateAROT = document.querySelector(".Click-QAHA");
var outputAROT = document.querySelector("#Output-AROT");

CalculateAROT.addEventListener("click", calculateArea);

function calculateArea() {
  var Base = InputAROT[0].value;
  var Height = InputAROT[1].value;
  if(Base>0 && Height>0){
    var AROT=( Base*Height);
    var result=AROT/2;
    outputAROT.innerText = "Area of a triangle is " +result;
  }else{
    outputAROT.innerText = "Please Enter a Valid Value";
  }
  }
