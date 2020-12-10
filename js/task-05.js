const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(arr, prop) {
    const resultArr = [];

    // for(const item of arr) {

    //     if(item[prop] === undefined) {
    //         continue;
    //     }
    //     resultArr.push(item[prop]);
    // }

    for(let i = 0; i < arr.length; i += 1) {
        if(!arr[i][prop]) {
            continue;
        }
        resultArr.push(arr[i][prop]);
    }
    return resultArr;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []