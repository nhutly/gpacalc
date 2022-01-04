function calculateGPA() {
    var sumCredit = 0;
    var sumGrade = 0;
    var table = document.getElementById("table");
    var rowLength = table.rows.length;

    for (var i = 1; i < rowLength; i++) {
        sumCredit = sumCredit + table.rows[i].cells[1];

    }
    console.log(table.rows[i].cells[1]);

    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + sumCredit;

}