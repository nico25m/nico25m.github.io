const apiKey = 'ae700b609b8848b0360papà334b69f0cf';
const city = 'Milan';  

async function fetchMeteo() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=it`);
    if (!response.ok) throw new Error('Errore nel recupero dati');
    const data = await response.json();

    const temp = data.main.temp;
    const descrizione = data.weather[0].description;

    document.getElementById('temperatura').textContent = `A ${city} ci sono ${temp}°C con ${descrizione}.`;
  } catch (error) {
    document.getElementById('temperatura').textContent = 'Impossibile caricare il meteo.';
    console.error(error);
  }
}

// Chiamare la funzione al caricamento della pagina
fetchMeteo();
