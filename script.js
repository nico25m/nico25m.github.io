
//METEO
const apiKey = 'ae700b609b8848b0360dad334b69f0cf';
const city = 'Milano';

async function fetchMeteo() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=it`);
    if (!response.ok) throw new Error('Errore nel recupero dati');
    const data = await response.json();

    const temp = data.main.temp;
    const descrizione = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById('temperatura').innerHTML = `
      A ${city} ci sono ${temp}°C con ${descrizione}.
      <br/>
      <img src="${iconUrl}" alt="${descrizione}" />
    `;
  } catch (error) {
    document.getElementById('temperatura').textContent = 'Impossibile caricare il meteo.';
    console.error(error);
  }
}

fetchMeteo();


//MAPPA
 const map = L.map('map').setView([45.4642, 9.1900], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([45.4642, 9.1900])
      .addTo(map)
      .bindPopup('Milano')
      .openPopup();


  //MENU HAMBURGER  
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggle = toggle.contains(event.target);
  if (!isClickInsideSidebar && !isClickOnToggle) {
    sidebar.classList.remove('show');
  }
});
  
document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
});