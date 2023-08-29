// scripts.js

function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    if (unit === "celsius") {
        const fahrenheit = (temperature * 9/5) + 32;
        document.getElementById("resultTemperature").textContent = `${temperature}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        document.getElementById("resultTemperature").textContent = `${temperature}°F is ${celsius.toFixed(2)}°C`;
    }
}

function calculateAge() {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const currentDate = new Date();
    const ageMilliseconds = currentDate - birthDate;
    const ageYears = ageMilliseconds / (365 * 24 * 60 * 60 * 1000);

    document.getElementById("resultAge").textContent = `Your age is approximately ${ageYears.toFixed(2)} years.`;
}
