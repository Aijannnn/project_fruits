document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    const products = {
      apple: {
        name: 'Apple',
        image: 'apple.jpg',
        description: 'Свежие местные яблоки',
        price: '30 сом каждое'
      },
      banana: {
        name: 'Banana',
        image: 'banana.jpg',
        description: 'Бананы с Эквадора',
        price: '40 сом за банан'
      },
      orange: {
        name: 'Orange',
        image: 'orange.jpg',
        description: 'Кислые апельсины',
        price: '50 сом каждый'
      },
      grape: {
        name: 'Grape',
        image: 'grapes.jpg',
        description: 'Винный виноград',
        price: '100 сом кисть винограда'
      }
    };
  
    if (productId && products[productId]) {
      const product = products[productId];
      document.getElementById('product-title').textContent = product.name;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('product-price').textContent = product.price;
    }
  
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
      addToCartButton.addEventListener('click', function() {
        alert('Product added to cart!');
      });
    }
  });
  