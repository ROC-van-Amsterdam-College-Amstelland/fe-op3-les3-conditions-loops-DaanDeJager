//javascript code
calculate = function()
{
    var getal1 = document.getElementById('a1').value;
    var getal2 = document.getElementById('a2').value; 
    document.getElementById('a3').value = parseInt(getal1)*parseInt(getal2);
     
   }
   calculate2 = function()
{
    var gedeeldGetal1 = document.getElementById('a11').value;
    var gedeeldGetal2 = document.getElementById('a22').value; 
    document.getElementById('a33').value = parseInt(gedeeldGetal1)/parseInt(gedeeldGetal2);
   }