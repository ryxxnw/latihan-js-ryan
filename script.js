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
    var p = document.getElementById("hasil").value;
    var q = eval(p);
    document.getElementById("hasil").value = q;
}