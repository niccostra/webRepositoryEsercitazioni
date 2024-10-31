console.log('HELLO JS');

document.getElementById("addTrofeo").addEventListener("click", function() {
    document.getElementById("aggiungiTrofeo").style.display = "block";
    document.getElementById("rimuoviTrofeo").style.display = "none";
});

document.getElementById("nuovoTrofeo").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("Trofeo").value;
    const year = document.getElementById("Anno").value;
    const publisher = document.getElementById("Capitano").value;

    const tableBody = document.getElementById("tabellaTrofei").getElementsByTagName('tbody')[0];

    addNewRow(tableBody, title, year, publisher);

    document.getElementById("aggiungiTrofeo").style.display = "none";
    document.getElementById("nuovoTrofeo").reset();
});

function addNewRow(tableBody, Trofeo, Anno, Capitano) {
    const newRow = tableBody.insertRow();

    const TrofeoCell = newRow.insertCell(0);
    const AnnoCell = newRow.insertCell(1);
    const CapitanoCell = newRow.insertCell(2);
    const deleteButtonCell = newRow.insertCell(3);

    TrofeoCell.textContent = Trofeo;
    AnnoCell.innerHTML = Anno;
    CapitanoCell.textContent = Capitano;

    deleteButtonCell.innerHTML = `<button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button>`;

    deleteButtonCell.querySelector('.deleteButton').addEventListener('click', function() {
        newRow.remove();
    });

    console.log('Added new row with addNewRow function');
}
