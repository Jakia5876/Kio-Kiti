// Cart Management
let cart = JSON.parse(localStorage.getItem('kio-cart')) || [];

function updateCartUI() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);
}

function addToCart(product) {
    const existing = cart.find(item => item.name === product.name && item.variant === product.variant);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function saveCart() {
    localStorage.setItem('kio-cart', JSON.stringify(cart));
}

// Search Logic
function setupSearch() {
    const searchBtn = document.querySelector('[aria-label="Search"]');
    if (!searchBtn) return;

    // Create search overlay if it doesn't exist
    if (!document.getElementById('search-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <button class="close-search">Close</button>
            <div class="search-container">
                <input type="text" class="search-input-large" placeholder="Search our collections..." autofocus>
                <div class="trending-searches">
                    <h4>Trending Discoveries</h4>
                    <div class="search-suggestions">
                        <a href="shop.html?category=heritage">Heritage Lounger</a>
                        <a href="shop.html?category=dogs">Leather Collars</a>
                        <a href="shop.html?category=fish">Bio-Active Tonic</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const closeBtn = overlay.querySelector('.close-search');
        const input = overlay.querySelector('input');

        searchBtn.addEventListener('click', () => overlay.classList.add('active'));
        closeBtn.addEventListener('click', () => overlay.classList.remove('active'));

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') overlay.classList.remove('active');
        });
    }
}

// Simple Toast Notification
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast animate-fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    setupSearch();

    // Add to cart buttons (home & shop) - Handle dynamically added buttons too
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            e.preventDefault();
            const card = e.target.closest('.product-card');
            const product = {
                name: card.querySelector('.product-title').textContent,
                price: card.querySelector('.price').textContent,
                variant: 'Standard'
            };
            addToCart(product);
        }
    });

    // Product page logic
    const subOptions = document.querySelectorAll('.sub-option');
    if (subOptions.length > 0) {
        subOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                subOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                if (opt.querySelector('input')) opt.querySelector('input').checked = true;
            });
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.section, .hero, .heritage-section, .concierge-spotlight');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // Shop Filtering (Simplistic demo)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category && window.location.pathname.includes('shop.html')) {
        const title = category.charAt(0).toUpperCase() + category.slice(1);
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) sectionTitle.textContent = `${title} Collection`;

        // In a real app, we would fetch and filter here.
        console.log(`Filtering shop for: ${category}`);
    }
});
