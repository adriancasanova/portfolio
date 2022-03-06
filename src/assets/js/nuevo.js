let number = document.getElementById("number");
let contar = 0;
setInterval(() => {
if (contar == 65) {
    clearInterval();

}else {
    contar += 1;
    number.innerHTML = contar + "%";

}


}, 30);