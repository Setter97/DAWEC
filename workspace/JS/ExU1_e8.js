var correcte = false;
while (!correcte) {
    resposta = prompt("Un joc molt conegut es el de.... Super (M?) (B?)");
    if (!resposta.includes("Mario") && !resposta.includes("Bros")) {
        alert("Error torna a intentar-ho");
    } else if (resposta.includes("Mario") && !resposta.includes("Bros")) {
        alert("Et falta el cognom");
    } else if (!resposta.includes("Mario") && resposta.includes("Bros")) {
        alert("Et falta el nom");
    } else if (resposta.includes("Mario") && resposta.includes("Bros")) {
        correcte = true;
    }
}
//Joel Serrano