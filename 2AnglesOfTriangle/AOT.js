var InputAOT = document.querySelectorAll(".Input-QAHA");
var ClickAOT = document.querySelector("#Click-AOT");
var OutputAOT = document.querySelector(".Output-AOT");

ClickAOT.addEventListener("click", CheckTriangle);

function AllAngles(angle1, angle2, angle3) {
  var sum = angle1 + angle2 + angle3;
  return sum;
}

function CheckTriangle() {
  var Angle1 = Number(InputAOT[0].value);
  var Angle2 = Number(InputAOT[1].value);
  var Angle3 = Number(InputAOT[2].value);
 if(Angle1>0 && Angle2>0 && Angle3>0){
  var sum = AllAngles(Angle1, Angle2, Angle3);
  if (sum === 180) {
    console.log("This is a Triangle!");
    OutputAOT.innerText = "This is a Triangle!";
  } else {
    console.log("This is not a Triangle!");
    OutputAOT.innerText = "This is not a Triangle!";
  }
}
else{
  OutputAOT.innerText = "Please Enter a Valid Value!";
}
}
