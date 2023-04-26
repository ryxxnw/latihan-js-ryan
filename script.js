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

const injectDeleteFunction = () => {
    //Jika x span diclick maka parent tr nya hilang
    const silang = document.querySelectorAll('.silang');

    /* for(let i = 0; i < silang.length; i++) {
        silang[i].addEventListener('click', function (e) {
            e.target.parentElement.parentElement.style.display = 'none'
        });
    }; */

    silang.forEach(function(tiapSilang) {
        tiapSilang.addEventListener('click', function(e) {
            e.target.parentElement.parentElement.style.display = 'none'
        })
    })
}

injectDeleteFunction()

enterNama.addEventListener('click', function() {
    if (inputNama.value == "" ) {
        alert('masukkan sebuah nama dulu dong');
    } else {
        let sp = document.createElement('span');
        let teksX = document.createTextNode('x');
        sp.appendChild(teksX); 
        

        let parrentTrBaru = document.createElement('tr');
        let tdBaru = document.createElement('td');
        let teksTdBaru = document.createTextNode(inputNama.value);
        
        tdBaru.appendChild(teksTdBaru);
        tdBaru.appendChild(sp);
        parrentTrBaru.appendChild(tdBaru);
        tableNama.appendChild(parrentTrBaru);
        sp.classList.add('silang');
        injectDeleteFunction()
    };
});

