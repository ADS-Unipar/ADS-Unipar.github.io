const btnLocalizacao = document.getElementById('btnLocalizacao');
const divMapa = document.getElementById('mapa');
let mapa;
let marcador;

btnLocalizacao.addEventListener('click', () => {
    if (navigator.geolocation) {
        divMapa.innerHTML = "Obtendo sua localização...";
        navigator.geolocation.getCurrentPosition(sucesso, erro);
    } else {
        alert("Geolocalização não é suportada por este navegador.");
    }
});

function erro() {
    divMapa.innerHTML = "Não foi possível obter sua localização.";
}

// Função de sucesso da Geolocalização
function sucesso(posicao) {
    const latitude = posicao.coords.latitude;
    const longitude = posicao.coords.longitude;
    inicializarMapa(latitude, longitude);
}

// Função para inicializar e exibir o mapa
function inicializarMapa(latitude, longitude) {
    if (!mapa) {
        mapa = L.map('mapa').setView([latitude, longitude], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapa);
    } else {
        mapa.setView([latitude, longitude], 15);
    }
    
    // Adiciona o marcador
    if (marcador) marcador.setLatLng([latitude, longitude]);
    else marcador = L.marker([latitude, longitude]).addTo(mapa);
    
    marcador.bindPopup("<b>Você está aqui!</b>").openPopup();
}