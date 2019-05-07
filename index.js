const width = 400;
const height = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

const map = document.getElementById('map');
const distancia = document.getElementById('distance');
let clicks = 0;

map.addEventListener('click', (e) => {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    distancia.innerHTML = `<h1>${distanceHint}</h1>`;

    if (distance < 20 ) {
        alert(`Encontraste el tesoro en ${clicks} clicks!`);
        location.reload();
    }
})