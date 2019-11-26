//javascript code
var getal = ["1", "2", "3", "4", "5"];
var text = "";
var i;
for (i = 0; i < getal.length; i++) {
  text += getal[i] + "<br>";
}
document.getElementById("getal").innerHTML = text;