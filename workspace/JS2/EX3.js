var num = prompt("Introdueix un numero");
var res = num;
for (var i = num-1; i > 0; i=i-1) {
    res = res * i;
}
alert(res);