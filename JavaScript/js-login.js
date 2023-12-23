const accounts = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.querySelector(`#${inputId} + .eye-icon`);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'gambar/eye-on.png';
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'gambar/eye-off.png';
    }
}

function checkCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Masukkan username dan password!');
        return;
    }

    const foundAccount = accounts.find(account => account.username === username && account.password === password);

    const message = document.getElementById('message');

    if (foundAccount) {
        message.style.color = 'green';
        message.innerHTML = 'Login Berhasil!';
    } else {
        message.style.color = 'red';
        message.innerHTML = 'Login Gagal. Username atau password tidak sesuai.';
    }
}
