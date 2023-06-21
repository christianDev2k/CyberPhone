// Navbar onclick
const navLinks = document.querySelectorAll('#collapsibleNavBar .nav-link');
navLinks.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        document.querySelector('#collapsibleNavBar .nav-link.active').classList.remove('active');
        navItem.classList.add('active');
    });
});

// Feature Products
const products__list = [
    {
        'product-path': './image/product1.png',
        'product-name': 'CyberBeats',
    },
    {
        'product-path': './image/product2.png',
        'product-name': 'CyberPhone',
    },
    {
        'product-path': './image/product3.png',
        'product-name': 'CyberTablet',
    },
    {
        'product-path': './image/product4.png',
        'product-name': 'CyberWatch',
    },
    {
        'product-path': './image/product5.png',
        'product-name': 'CyberGlass',
    },
    {
        'product-path': './image/product6.png',
        'product-name': 'CyberGadget',
    },
];

const featureProducts = document.querySelector('#featured__products');
const htmlProduct = products__list.map((product) => {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <img class="card-img-top" src="${product['product-path']}" alt="Title">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h4 class="card-title">${product['product-name']}</h4>
                        <p class="price">$99.99</p>
                    </div>
                    <p class="card__categories">Accessories</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="card__star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <button class="btn btn--card">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
});
featureProducts.innerHTML = htmlProduct.join('');

// Toggle dark mode
const darkModeToggle = document.querySelector('.darkmode-setting');
const toggleIcon = document.querySelector('.darkmode-setting .icon__content');
const onDark = darkModeToggle.querySelector('#toggle');

toggleIcon.onclick = () => {
    if (darkModeToggle.classList.contains('open')) {
        darkModeToggle.classList.remove('open');
    } else {
        darkModeToggle.classList.add('open');
    }
};

onDark.onchange = () => {
    document.body.classList.toggle('darkMode');
    document.querySelector('footer .angle-up-light').classList.toggle('active');
    document.querySelector('footer .angle-up-dark').classList.toggle('active');
};
