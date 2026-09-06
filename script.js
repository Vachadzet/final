document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav-menu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  async function fetchProducts() {
    const productContainer = document.getElementById('product-list');
    
    const productData = [
      { name: "თანამედროვე დივანი", desc: "კომფორტული და დახვეწილი დიზაინის დივანი მისაღები ოთახისთვის." },
      { name: "ხის სავარძელი", desc: "ბუნებრივი ხისგან დამზადებული რბილი და მოსახერხებელი სავარძელი." },
      { name: "რბილი სკამი", desc: "თანამედროვე და დახვეწილი სტილის სკამი მისაღები და სასადილო კუთხისთვის." },
      { name: "ჟურნალების მაგიდა", desc: "მინიმალისტური მაგიდა მისაღები ოთახის ინტერიერისთვის." },
      { name: "ორადგილიანი საწოლი", desc: "ორთოპედიული და კომფორტული საწოლი საძინებლისთვის." },
      { name: "დეკორატიული თარო", desc: "ტევადი და დახვეწილი თარო წიგნებისა და დეკორისთვის." }
    ];

    const productImages = [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=500&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80'
    ];

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
      await response.json(); 

      productContainer.innerHTML = '';

      productData.forEach((info, index) => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');
        
        const imageUrl = productImages[index % productImages.length];

        productCard.innerHTML = `
          <img src="${imageUrl}" alt="${info.name}" loading="lazy">
          <div class="product-info">
            <h3>${info.name}</h3>
            <p>${info.desc}</p>
            <button class="btn">ყიდვა</button>
          </div>
        `;
        productContainer.appendChild(productCard);
      });
    } catch (error) {
      console.error('შეცდომა მონაცემების წამოღებისას:', error);
      productContainer.innerHTML = '<p>მონაცემების ჩატვირთვა ვერ მოხერხდა.</p>';
    }
  }

  fetchProducts();

  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookie');

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });

});