let inputAll = document.querySelectorAll('.in');
let currencyIn = 'EUR'; // Başlanğıc valyuta EUR olaraq təyin edilir
let currencyOut = 'USD';
let leftText = document.querySelector('.leftText');
let rightText = document.querySelector('.rightText');
let exchangeRate;
let exchangeRateBack;
let sum = document.querySelector('.result');
let calculationResult;
let inputSum = document.querySelector('.inputSum');

function exchange(currencyIn, currencyOut) {
    fetch(`https://api.fastforex.io/fetch-multi?from=${currencyIn}&to=${currencyOut}&api_key=demo`)
    .then(result => result.json())
    .then(data => {
       exchangeRate = data[currencyOut];
       calculationResult = (inputSum.value) / exchangeRate; // Dəyişdirilmiş və mübadilə edilmiş məbləğin hesablanması
       sum.innerText = `${calculationResult.toFixed(2)}`;
       leftText.innerText = `1 ${currencyIn} = ${exchangeRate} ${currencyOut}`;
    })
    .catch((error) => {
        console.error(error);
        alert('Something went wrong');
    });

    fetch(`https://api.fastforex.io/fetch-multi?from=${currencyOut}&to=${currencyIn}&api_key=demo`)
    .then(result => result.json())
    .then(data => {
        exchangeRateBack = data[currencyIn];
        rightText.innerText = `1 ${currencyOut} = ${exchangeRateBack} ${currencyIn}`;
    })
    .catch((error) => {
        console.error(error);
        alert('Something went wrong');
    });
}

document.addEventListener("DOMContentLoaded", (e) => {
    exchange(currencyIn, currencyOut);
});

inputAll.forEach((option) => {
    option.addEventListener('click', (e) => {
        inputAll.forEach((option) => {
            option.style.color = '#C6C6C6';
            option.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyIn = e.target.innerText;
        exchange(currencyIn, currencyOut); 
    });
});

let outputAll = document.querySelectorAll('.output');

outputAll.forEach((output) => {
    output.addEventListener('click', (e) => {
        outputAll.forEach((output) => {
            output.style.color = '#C6C6C6';
            output.style.backgroundColor = '#FFFFFF';
        });
        e.target.style.color = '#FFFFFF';
        e.target.style.backgroundColor = '#833AE0'
        currencyOut = e.target.innerText;
        exchange(currencyIn, currencyOut);
    });
});

inputSum.addEventListener('keypress', (e) => { 
    if (e.key === 'Enter') {
        exchange(currencyIn, currencyOut)
    }
});
