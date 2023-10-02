// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

var sendButton = document.querySelector('#send-button');
sendButton.addEventListener('click', function () {
    // Periksa apakah input pesan kosong
    var userMessageInput = document.querySelector('#UserMessage');
    var userMessageValue = userMessageInput.value.trim(); // Hilangkan spasi di awal dan akhir

    if (userMessageValue === '') {
        // Tampilkan pesan kesalahan jika input pesan kosong
        Swal.fire(
            'Error!',
            'Harap isi pesan Anda.',
            'error'
        );
    } else {
        // Jika input pesan tidak kosong, tampilkan pesan sukses
        Swal.fire(
            'Pesan Terkirim!',
            'Akan segera kami balas melalui email.',
            'success'
        );
    }
});
