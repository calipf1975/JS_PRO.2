// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//   ];
  
//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button class="btn">Buy</button></div>`;
//   };
  
//   const renderGoodsList = (list) => {
//   document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
//   }
// //   Метод map-возвращает новый массив, 
// //   а метод join служит для объединения элементов массива в строку через указанный разделитель.
// //   Сокращаем код-за счет промежуточной переменной.
  
//   renderGoodsList(goods);
class GoodsItem {
  constructor(title, price, img){
    this.title = title;
    this.price = price;
    this.img = img;
  }
  
  render() {
    return `<div class="goods-item"><img class="img" src="${this.img}"><h3>${this.title}</h3><p>${this.price}</p><button class="btn">Buy</button></div>`;
  }
  
}

class GoodsList {
  constructor(){
    this.goods = [];
  }
  
  fetchGoods(){
    this.goods = [
      { title: 'Shirt', price: 150, img:"img/Shirt.webp"},
      { title: 'Socks', price: 50, img:"img/Socks.webp" },
      { title: 'Jacket', price: 350, img:"img/Jacket.webp" },
      { title: 'Shoes', price: 250, img:"img/Shoes.webp" },
    ];
  }
  
  render(){
    let listHtml="";
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.img);
      listHtml += goodItem.render();
    })
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

class BasketItem{
  constructor(){
  }
  render(){
    return `<div></div>`;
  }
}
class BasketList{
  constructor(){
    this.goods = [];
  }
  fetchGoods(){
    this.goods = [];
  }
  render(){
    let listHtml="";
    this.goods.forEach(good => {
      const basketItem = new BasketItem(good.title, good.price);
      listHtml += basketItem.render();
    })
    document.querySelector('.').innerHTML = listHtml;
  }
}
const basketlist = new BasketList();
basketlist.fetchGoods();
basketlist.render();