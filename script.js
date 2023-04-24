// menghapus semua
function clearScreen() {
    document.getElementById("hasil").value = "";
}
   
// menampilkan angka atau value
function display(value) {
    document.getElementById("hasil").value += value;
}

// hasilnya
function calculate() {
    let p = document.getElementById("hasil").value;
    let q = eval(p);
    if (q == undefined) {
        document.getElementById("hasil").value = ""
    } else {
        document.getElementById("hasil").value = q;
    }
}

// Jika dienter hasil yang ada di inputNama akan ditaro di Child table nama
// Table namanya input tr yang isinya td inputNama
const tableNama = document.querySelector('.table-nama');
const enterNama = document.getElementById('enterNama');
let inputNama = document.getElementById('inputNama');

enterNama.addEventListener('click', function() {
    if (inputNama.value == "" ) {
        alert('masukkan sebuah nama dulu dong');
    } else {
        let parrentTrBaru = document.createElement('tr');
        let tdBaru = document.createElement('td');
        let teksTdBaru = document.createTextNode(inputNama.value);
        
        tdBaru.appendChild(teksTdBaru);
        parrentTrBaru.appendChild(tdBaru);
        tableNama.appendChild(parrentTrBaru);
    };
});