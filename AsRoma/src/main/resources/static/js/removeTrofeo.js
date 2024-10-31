// DELETE ROW ON DEMAND
document.getElementById("removeTrofeo").addEventListener("click", function() {
    document.getElementById("rimuoviTrofeo").style.display = "block";
    document.getElementById("aggiungiTrofeo").style.display = "none";
});

function rimuoviTrofeoDaRiga(event) {
    event.preventDefault(); // Impedisce il submit del form

    const bookNumber = parseInt(document.getElementById("rigaTrofeo").value);

    const rows =document.getElementById('tabellaTrofei').querySelectorAll('tbody tr');

    if (bookNumber > 0 && bookNumber <= rows.length) {
        rows[bookNumber - 1].remove(); // Rimuove la riga corrispondente (indice base 0)
        document.getElementById("rimuoviTrofeo").style.display = "none"; // Nasconde il form
        document.getElementById("rimuoviDaRiga").reset(); // Resetta il campo del form
    } else {
        alert("Numero trofeo non valido!"); // Avviso per numero non valido
    }
}



document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row); // Elimina la riga
    });
});


function deleteRow(button) {
    const row = button.parentNode.parentNode; // Trova la riga corrente

    row.parentNode.removeChild(row);

}
