// Ambil referensi elemen tombol
const allProductsBtn = document.getElementById('allProductsBtn');
const vpsBtn = document.getElementById('vpsBtn');
const panelBtn = document.getElementById('panelBtn');

// Ambil referensi produk
const products = document.querySelectorAll('.product');

// Fungsi untuk menampilkan produk berdasarkan kategori
function filterProducts(filter) {
    products.forEach(product => {
        if (filter === 'all') {
            product.style.display = 'inline-block';  // Tampilkan semua produk
        } else if (product.classList.contains(filter)) {
            product.style.display = 'inline-block';  // Tampilkan produk sesuai filter
        } else {
            product.style.display = 'none';  // Sembunyikan produk yang tidak sesuai filter
        }
    });
}

// Event listener untuk tombol "Semua Produk"
allProductsBtn.addEventListener('click', () => {
    filterProducts('all');
});

// Event listener untuk tombol "Produk VPS"
vpsBtn.addEventListener('click', () => {
    filterProducts('vps');
});

// Event listener untuk tombol "Produk Panel"
panelBtn.addEventListener('click', () => {
    filterProducts('panel');
});

// Default filter saat halaman pertama kali dimuat (tampilkan semua produk)
window.onload = () => {
    filterProducts('all');
};
