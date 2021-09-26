var InputAOT = document.querySelectorAll("#Input-QAHA");
var ClickAOT = document.querySelector("#Click-AOT");
var OutputAOT = document.querySelector(".Output-AOT");

ClickAOT.addEventListener("click", CheckTriangle);

function AllAngles(angle1, angle2, angle3) {
  var sum = angle1 + angle2 + angle3;
  return sum;
}

function CheckTriangle() {
  var sum = AllAngles( Number(InputAOT[0].value), Number(InputAOT[1].value), Number(InputAOT[2].value) );
  if (sum === 180) {
    console.log("This is a Triangle!");
    OutputAOT.innerText = "This is a Triangle!";
  } else {
    console.log("This is not a Triangle!");
    OutputAOT.innerText = "This is not a Triangle!";
  }
}


