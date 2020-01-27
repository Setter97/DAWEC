var horari = ["9:00", "10:00"];

function creaTaula() {
    var table = document.createElement('table');

    for (var i = 0; i < 2; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < 2; j++) {
            var td1 = document.createElement('td');
            var text1 = document.createTextNode(horari[i]);

            td1.appendChild(text1);
            tr.appendChild(td1);

        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
