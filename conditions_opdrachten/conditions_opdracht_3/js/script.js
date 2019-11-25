//javascript code
function check() {
    var saldo = document.getElementById("saldo").value;

    if(saldo==500) {
        document.getElementById("tekst").innerHTML = "Uw salaris is gestort";
    } else if(saldo>=500) {
        document.getElementById("tekst").innerHTML = "Uw heeft een bonus gekregen   "
    }
    else{
        document.getElementById1("tekst").innerHTML = "Uw salaris is niet gestort"
    }
}