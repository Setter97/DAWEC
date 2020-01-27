var edat = parseInt(prompt("Introdueix l'edat"));
if (edat <= 12) {
    alert("Nen");
} else if (edat > 12 && edat <= 26) {
    alert("Jove");
} else if (edat > 26 && edat <= 60) {
    alert("Adult");
} else {
    alert("Jubilat")
}
//Joel Serrano 