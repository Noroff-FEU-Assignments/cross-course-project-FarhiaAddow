const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value;
});

/*nav */
const menuBtn = document.querySelector('.menu-btn');
const navbarLinks = document.querySelector('.navbar-links');

menuBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});

const baseUrl = "https://www.edle.tech/wp-json/wc/store/products/";
const movieContainer = document.querySelector(".movies");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getMovie(url) {
  // Concatenate the URL
  const newUrl = url + id;

  try {
    // Fetch the movie data
    const response = await fetch(baseUrl);
    const movies = await response.json();

    movies.forEach(function(movie){
          // Update the movie container with the data
    movieContainer.innerHTML += `
    <div class="movie"><h4>${movie.name}</h4>
      <img src="${movie.images[0].thumbnail}">
      <p>kr ${movie.prices.price} ,-</p>
      ${movie.description}
    </div>
  `;

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => {
        addToCart(movie);
      });
      movieContainer.appendChild(addToCartButton);
    });
  } catch (error) {
    console.error(error);
  }
}

function addToCart(item) {
  const cartItems = document.querySelector('#cart-items');
  cartItems.innerHTML += `
    <div class="cart-item">
      <h4>${item.name}</h4>
      <p>Price: ${item.prices.price}</p>
    </div>
  `;
}

getMovie(baseUrl);
