const apiKey = '8ytNvULlYCSE0zwF';
const lat = 45.4642;  // Milano
const lon = 9.19;

async function fetchMeteoMeteoblue() {
  try {
    const url = `https://my.meteoblue.com/packages/simple-marine/v1?lat=${lat}&lon=${lon}&apikey=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Errore nel recupero dati');
    const data = await response.json();

    // esempio: stampa temperatura (adatta in base alla risposta)
    console.log(data);

    document.getElementById('temperatura').textContent = `Temperatura: ${data.temperature} °C`;
  } catch (error) {
    document.getElementById('temperatura').textContent = 'Impossibile caricare il meteo.';
    console.error(error);
  }
}

fetchMeteoMeteoblue();
