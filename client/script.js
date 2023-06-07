
const nikon = document.getElementById('nikon')
const sony = document.getElementById('sony')
const canon = document.getElementById('canon')

const currentBrand = {}


const brandCards = async (brand) => {
      brand.forEach(product => {
        const { image, brandName, model, price } = product;
    
        const card = document.createElement('div')
    
        const imageElement = document.createElement('img');
        imageElement.src = `${currentBrand.data.brandLogo}`;
        card.appendChild(imageElement)
    
        const brandNameElement = document.createElement('h3');
        brandNameElement.textContent = `${currentBrand.data.brand}`;
        card.appendChild(brandNameElement);
    
        const modelElement = document.createElement('p');
        modelElement.textContent = `Model: ${model}`;
        card.appendChild(modelElement)
    
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: ${price}`;
        card.appendChild(priceElement)
    
        const addToCartButton = document.createElement('button')
        addToCartButton.textContent = 'Add to Cart';
    
        addToCartButton.addEventListener('click', () => {
          // Logic to add the product to the cart
        })
    
        card.appendChild(addToCartButton);
    
        // Append the card to the desired place
      })
}

    

nikon.addEventListener('click', async () => {
      brandNikon = await axios.get('http://localhost:3001/api/nikon')
      currentBrand = brandNikon
})

// create a function - brandCards
// when clicked put in the nikonBrand
// Once brand is clicked - model, price, imgage, brandName

// create a function = productCards to bring in the products
// when clicked put in the individual product
// this will contain product details

brandCards = (brand) => {
      Build the cards here
      forEach(brand) {
      Image,
      brandName,
      Model,
      Price,
      addToCart
      }
      }
      
      productCards = (product) => {
      Build cards here
      (Remove the brand card)
      Image,
      brandName,
      Model,
      Price,
      Features…..
      }


sony.addEventListener('click', async () => {
      brandSony = await axios.get('http://localhost:3001/sony')
      currentBrand = brandSony
})




canon.addEventListener('click', async () => {
      brandCanon = await axios.get('http://localhost:3001/canon')
      currentBrand = brandCanon
})


