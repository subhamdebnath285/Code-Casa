function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const result = document.getElementById("result");

    if (fromUnit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        result.textContent = `${temperatureInput} °C is ${fahrenheit.toFixed(2)} °F`;
    } else {
        const celsius = (temperatureInput - 32) * 5/9;
        result.textContent = `${temperatureInput} °F is ${celsius.toFixed(2)} °C`;
    }
}
