document.getElementById("change_temp").addEventListener("click", convert);
function convert(){
    let celcius = parseFloat(document.getElementById("tempC").value);
    let result = 9*celcius/5+32;
    document.getElementById("result").innerHTML = "Gia tri do F la: " + result;
}