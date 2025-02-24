// Animasi scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validasi form kontak
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah terkirim!');
    this.reset();
});