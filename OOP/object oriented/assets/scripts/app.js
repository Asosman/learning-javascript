//product itself!!
class Product {
  // title ='DEFAULT';
  // imgUrl;
  // price;
  // description;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imgUrl = image;
    this.price = price;
    this.description = desc;
  }
}

//Shopping Cart class
class ElementAttribute {
  constructor(attrName, attrValue) {
    (this.name = attrName), (this.value = attrValue);
  }
}

// console.log(new ElementAttribute());

class Component {
  constructor(hookId, shouldRender = true) {
    this.hookId = hookId;
    if(shouldRender == true){
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClass, attribute) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (attribute && attribute.length > 0) {
      for (const attr of attribute) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  item = [];
  // logic for getting the some of all the items added to cart
  set cartItems(value) {
    this.item = value;
    this.cartTotal.innerHTML = `<h2>Total: \$${this.totalAmaout.toFixed(
      2
    )}</h2>`;
  }

  get totalAmaout() {
    const sum = this.item.reduce((prev, curItem) => {
      return prev + curItem.price;
    }, 0);

    return sum;
  }

  addProduct(product) {
    const updatedItem = [...this.item];
    updatedItem.push(product);

    this.cartItems = updatedItem;
  }
  constructor(hookId) {
    super(hookId ,false);
      this.orderProduct = ()=>{
        console.log('Ordering.....');
        console.log(this.item);
      };
      this.render();
  }



  render() {
    const cartEl = this.createRootElement("session", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Add to Cart</button>
    `;
    const orderButton = cartEl.querySelector('button');
    orderButton.addEventListener('click', this.orderProduct); 
    this.cartTotal = cartEl.querySelector("h2");
    return cartEl;
  }
}

//product item class

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log(this.product)
    App.addProducttoCart(this.product);
  }

  render() {
    //creating lists of item product!!!

    const product = this.createRootElement("li", "product-item");

    product.innerHTML = `
                <div>
                    <img src="${this.product.imgUrl}" alt="${this.product.description}">
                </div>
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
               `;
    const addToCartBtn = product.querySelector("button");
    addToCartBtn.addEventListener("click", this.addToCart.bind(this));
    return product;
  }
}

class ProductList extends Component {
  #product = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.#fetchProduct();
  }
  #fetchProduct() {
    this.#product = [
      new Product(
        "A pillow!!",
        "assets/scripts/pic.png",
        "a very soft pillow",
        19.2
      ),
      new Product(
        "a Carpet",
        "assets/scripts/pic.png",
        "Everlasting, it lasts for ever as long as you can use",
        16.2
      ),
      new Product(
        "A carpet!!",
        "assets/scripts/pic.png",
        "a very smooth carpet for every home",
        44.5
      ),
    ];
    this.renderProductItem();
  }
  renderProductItem() {
    for (const prod of this.#product) {
      //instantiate products from productItem class
      const productItem = new ProductItem(prod, "product-list");
      //calling of render mettod from the object
    }
  }
  render() {
    const prodList = this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "product-list"),
    ]);
    // prodList.setAttribute("class", "product-list");

    //creating the product list form the product item class;
    if(this.#product && this.#product.length > 0){
      this.renderProductItem();
    }
  }
}

//created our shop class to render our product!!!!
//to initialize our shop application !!!

class Shop extends Component {
  constructor() {
    super();
  }
  render() {
    //instantiating our  shop cart
    this.cart = new ShoppingCart("app");
    //calling remder method!!!!

    //Getting lists of Our Products
    //instantiating it to create object out of it
   const list =  new ProductList("app");
    //calling render method
    //appending to the renderHook to render
    // renderHook.append(cartEl);
  }
}

//using static method and properties to link our classes
class App {
  static cart;

  static init() {
    const shopEl = new Shop();
    this.cart = shopEl.cart;
  }

  static addProducttoCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
