var edat = parseInt(prompt("Introdueix l'edat"));
switch (true) {
    case (edat <= 12):
        alert("Nen");
        break;
    case (edat > 12 && edat <= 26):
        alert("Jove");
        break;
    case (edat > 26 && edat <= 60):
        alert("Adult");
        break;
    default:
        alert("Jubilat");
}
//Joel Serrano