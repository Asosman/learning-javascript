
class elementAttribute{
  constructor(attrName, attrValue){
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component{
  constructor(hookId){
      this.hookId = hookId;
  }
  createElement(tag, cssClass,attribute){
    const rootElement = document.createElement(tag);

    if(cssClass){
      rootElement.className = cssClass;
    }
    if(attribute || attribute > 0 ){
      for(const attr of attribute){
        rootElement.setAttribute(attr.name,attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
   
}
class shoppingCart extends Component{
  constructor(){
    super('app');
  }
  render(){
    const cardList = this.createElement('ul','productList',[new elementAttribute('id','product')]);
    console.log(cardList);
  } 

}

class shop extends Component {
  constructor(userName,id,){
      super('product');
      this.itName =userName;
      this.id = id; 
    };
  render(){
  const cart = new shoppingCart();
  cart.render();
  const card = this.createElement('li','product',[new elementAttribute('id', 'prod')]); 
  card.innerHTML = this.itName
  console.log(this.itName, this.id,card);
}
}

 const shopping = new shop('uche','21');
 shopping.render();
 