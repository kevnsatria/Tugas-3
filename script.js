const weatherData = {
    time: ["2025-04-29", "2025-04-30", "2025-05-01"],
    temperatureMax: [30.7, 32.0, 29.7],
    temperatureMin: [18.8, 18.1, 19.4],
    precipitationSum: [0.00, 0.00, 2.40]
};

const tableBody = document.getElementById('weatherTable');
weatherData.time.forEach((date, index) => {
    const row = `<tr>
        <td>${date}</td>
        <td>${weatherData.temperatureMax[index]}</td>
        <td>${weatherData.temperatureMin[index]}</td>
        <td>${weatherData.precipitationSum[index]}</td>
    </tr>`;
    tableBody.innerHTML += row;
});