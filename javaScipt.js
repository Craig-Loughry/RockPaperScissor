function randomNum1() {
  var x = Math.floor(Math.random() * 3) + 1
  var y = Math.floor(Math.random() * 3) + 1
  var rock = "🪨"
  var paper = "📄"
  var scissor = "✂️"

if ((x == 1) && (y == 1)) {
  document.getElementById('selection1').innerHTML = (rock + "<br>Player 1: Rock for the Draw")
  document.getElementById('selection2').innerHTML = (rock + "<br>Player 2: Rock for the Draw")
  }
else if ((x == 2) && (y == 2)) {
    document.getElementById('selection1').innerHTML = (paper + "<br>Player 1: Paper for the Draw")
    document.getElementById('selection2').innerHTML = (paper + "<br>Player 2: Paper for the Draw")
}
else if ((x == 3) && (y == 3)) {
  document.getElementById('selection1').innerHTML = (scissor + "<br>Player 1: Scissor for the Draw")
  document.getElementById('selection2').innerHTML = (scissor + "<br>Player 2: Scissor for the Draw")
}
else if ((x == 1) && (y == 3)) {
  document.getElementById('selection1').innerHTML = (rock + "<br>Player 1: Rock for the Win")
  document.getElementById('selection2').innerHTML = (scissor + "<br>Player 2: Scissor for the Loss")
}
else if ((x == 2) && (y == 3)) {
  document.getElementById('selection1').innerHTML = (paper + "<br>Player 1: Paper for the Loss")
  document.getElementById('selection2').innerHTML = (scissor + "<br>Player 2: Scissor for the Win")
}
else if ((x == 3) && (y == 1)) {
  document.getElementById('selection1').innerHTML = (scissor + "<br>Player 1: Scissor for the Loss")
  document.getElementById('selection2').innerHTML = (rock + "<br>Player 2: Rock for the Win")
}
else if ((x == 3) && (y == 2)) {
  document.getElementById('selection1').innerHTML = (scissor + "<br>Player 1: Scissor for the Win")
  document.getElementById('selection2').innerHTML = (paper + "<br>Player 2: Paper for the Loss")
}
}