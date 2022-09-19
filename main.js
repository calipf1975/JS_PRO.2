const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button class="btn">Buy</button></div>`;
  };
  
  const renderGoodsList = (list) => {
  document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join('');
  }
//   Метод map-возвращает новый массив, 
//   а метод join служит для объединения элементов массива в строку через указанный разделитель.
//   Сокращаем код-за счет промежуточной переменной.
  
  renderGoodsList(goods);