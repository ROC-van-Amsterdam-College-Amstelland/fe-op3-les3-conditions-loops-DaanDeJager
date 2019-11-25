//javascript code
function check() {
    var saldo = document.getElementById("saldo").value;

    if(saldo<25) {
        document.getElementById("tekst").innerHTML = "Sorry, je hebt te weinig saldo!";
    } else {
        document.getElementById("tekst").innerHTML = "Uw Geld Komt Eruit"
    }
}