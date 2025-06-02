document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('category-filter');
    const search = document.getElementById('search-product');
    const products = document.querySelectorAll('.product-card');
    function update() {
        const cat = filter.value;
        const q = search.value.toLowerCase();
        products.forEach(card => {
            const matchCat = !cat || card.dataset.category === cat;
            const matchQ = card.querySelector('h3').textContent.toLowerCase().includes(q);
            card.style.display = (matchCat && matchQ) ? '' : 'none';
        });
    }
    filter.onchange = update;
    search.oninput = update;
});