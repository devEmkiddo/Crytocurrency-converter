const rates = {
    USDT: 1.0,
    BUSD: 1.0,
    BTC: 0.000033,
    BNB: 0.0045,
    ETH: 0.00060,
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.0,
    NGN: 1180
}

function convert(){
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const results = document.getElementById('results');
    const amount = document.getElementById('amount').value; 

    //for the coversion 
    const basicConversion = rates[toCurrency] / rates[fromCurrency];
    const value = amount * basicConversion;

    results.innerHTML = `${amount} ${fromCurrency} is equal to ${value} ${toCurrency}`;

    if(amount< 0){
        alert('Input must be greater than 0');
        amount = 0;
    }
}