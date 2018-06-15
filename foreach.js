
function getStocksSymbols(stocks) {
    let symbols = [];

    // en esta parte utilizamos la funcion flecha y el forEach directamente 
    // para asignar a el array symbols que guardara los datos solo de symbol
    // del array de objetos stocks. basicamente recorrera el array de objeto stocks
    // y tos los datos que se encuentran en symbol seran guardado en el array symbols


    //ejemplo con el forEach

    /*
    stocks.forEach(item => symbols.push(item.symbol));
    return symbols;
    */
    
    //ejemplo con el for normal

    for (let i = 0 ; i < stocks.lenght; i++){

        let item = stocks[i];

        symbols.push(item.symbol);
    }  

}


let stocks = [

    { symbol: 'Acciones Google', price: '240.22', volume: 234322 },
    { symbol: 'Acciones Facebook', price: '240.22', volume: 234322 },
    { symbol: 'Acciones Twitter', price: '240.22', volume: 234322 }

]

var symbols = getStocksSymbols(stocks)
console.log(symbols);