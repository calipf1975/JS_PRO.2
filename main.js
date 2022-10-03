// const goods = [
//     { product_name: 'Shirt', price: 150 },
//     { product_name: 'Socks', price: 50 },
//     { product_name: 'Jacket', price: 350 },
//     { product_name: 'Shoes', price: 250 },
//   ];
  
//   const renderGoodsItem = (product_name, price) => {
//     return `<div class="goods-item"><h3>${product_name}</h3><p>${price}</p><button class="btn">Buy</button></div>`;
//   };
  
//   const renderGoodsList = (list) => {
//   document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.product_name, item.price)).join('');
//   }
// //   Метод map-возвращает новый массив, 
// //   а метод join служит для объединения элементов массива в строку через указанный разделитель.
// //   Сокращаем код-за счет промежуточной переменной.
  
//   renderGoodsList(goods);
const API_URL ='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url){
    return new Promise((resolve, reject) =>{
      var xhr;
        if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      resolve(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
  });
  

}
class GoodsItem {
  constructor(product_name, price){
    this.product_name = product_name;
    this.price = price;
  }
  
  render() {
    return `<div class="goods-item"><img class="img" src=""><h3>${this.product_name}</h3><p>${this.price}</p><button class="btn">Buy</button></div>`;
  }
  
}

class GoodsList {
  constructor(){
    this.goods = [];
    this.filteredGoods = [];
  }
  
  fetchGoods(){
    // this.goods = [
    //   { product_name: 'Shirt', price: 150, img:"img/Shirt.webp"},
    //   { product_name: 'Socks', price: 50, img:"img/Socks.webp" },
    //   { product_name: 'Jacket', price: 350, img:"img/Jacket.webp" },
    //   { product_name: 'Shoes', price: 250, img:"img/Shoes.webp" },
    // ];
    makeGETRequest(`${API_URL}/catalogData.json`).then(goods => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      let allSum=list.priceGoodsSum();
      console.log(allSum);
      this.render();
      
    })
  }
  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good =>regexp.test(good.product_name));
    this.render();
  }

  
  render(){
    let listHtml="";
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    })
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  priceGoodsSum(){
    let sum = 0;
    this.goods.forEach (good => { 
        sum += good.price;
    });
    return sum;
}


}
const searchButton = document.querySelector ('.search-button');
const searchImput = document.querySelector ('.goods-search');


const list = new GoodsList();
// list.fetchGoods(()=>{
//   list.render();
//   let allSum=list.priceGoodsSum();
//   console.log(allSum);
// });
list.fetchGoods();
searchButton.addEventListener('click',(e)=>{
  const value = searchImput.value;
  list.filterGoods(value);
})
  let text= document.getElementById('text');
  text2=text.textContent;
  text1 = text.textContent.replace(/\B'|'\B/g, '"');
  text3= text.textContent.replace(/'/g, '"');


function PasteText_1() {
  document.getElementById('textarea').value = text2;
};
  function PasteText_2() {
  document.getElementById('textarea').value = text3;
};
  function PasteText_3() {
  document.getElementById('textarea').value = text1;
};
  function PasteText_4() {
  document.getElementById('textarea').value = "";
};



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

  // Добавление товара в корзину
  addToBasket() {
 
   
}
 // Удаление товара из корзины 
 deleteFromBasket() {

}
 // Считаем стоимость товаров в корзине
 calcAllGoods() {

}
  render(){
    let listHtml="";
    this.goods.forEach(good => {
      const basketItem = new BasketItem(good.product_name, good.price);
      listHtml += basketItem.render();
    })
    document.querySelector('.').innerHTML = listHtml;
  }
}
// const basketlist = new BasketList();
// basketlist.fetchGoods();
// basketlist.render();
