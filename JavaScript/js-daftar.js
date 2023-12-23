function aturNilaiAwal() {
    var inputNomorHP = document.getElementById('nomorHP');
    if (!inputNomorHP.value.includes("  +62 │")) {
        inputNomorHP.value = "  +62 │ ";
    }
}

function hapusTeksAwal() {
    var inputNomorHP = document.getElementById('nomorHP');
    if (inputNomorHP.value == "  +62 │ ") {
        inputNomorHP.value = "  +62 │";
    }
}

let dropdownTanggal = document.getElementById("tanggal");

for (let tanggal = 1; tanggal <= 31; tanggal++) {
    let option = document.createElement("option");
    option.value = tanggal;
    option.text = tanggal;
    dropdownTanggal.add(option);
}

let dropdownBulan = document.getElementById("bulan");
let bulanArray = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

for (let i = 0; i < bulanArray.length; i++) {
    let option = document.createElement("option");
    option.value = i + 1;
    option.text = bulanArray[i];
    dropdownBulan.add(option);
}

let dropdownTahun = document.getElementById("tahun");
let tahunSekarang = new Date().getFullYear();

for (let tahun = 1900; tahun <= tahunSekarang; tahun++) {
    let option = document.createElement("option");
    option.value = tahun;
    option.text = tahun;
    dropdownTahun.add(option);
}

function togglePassword(inputId) {
    var input = document.getElementById(inputId);
    var eyeIcon = document.querySelector('#' + inputId + ' + .eye-icon');
    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.src = 'gambar/eye-on.png';
    } else {
        input.type = 'password';
        eyeIcon.src = 'gambar/eye-off.png';
    }
}

function checkPasswordMatch() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('passwordMatchMessage');

    if (password !== '' && confirmPassword !== '') {
        if (password === confirmPassword) {
            message.style.color = 'green';  
            message.innerHTML = 'Password Match!';
        } else {
            message.style.color = 'red';
            message.innerHTML = 'Password does not match!';
        }
    } else {
        message.innerHTML = '';  
    }
}


document.getElementById('password').addEventListener('input', checkPasswordMatch);
document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);