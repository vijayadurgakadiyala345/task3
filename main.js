function celciusToFahrenheit(degree) {
    displayResult.innerHTML = `${(degree * 1.8 + 32).toFixed(2)}F`;
}

function FahrenheitToCelcius(degree) {
    displayResult.innerHTML = `${(((degree - 32) * 5) / 9).toFixed(2)}C`;
}