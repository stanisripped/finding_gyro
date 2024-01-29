var map = L.map('map').setView([35.6764, 139.6500], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var gyroIcon = L.icon({
    iconUrl: 'images/red-icon.png',
    shadowUrl: 'images/gyro.png',
    iconSize:     [50, 50], // size of the icon
    shadowSize:   [25, 25], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([35.6764, 139.6500], {icon: gyroIcon}).addTo(map);
var circle = L.circle([35.6764, 139.6500], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var coordinates = document.getElementById('coordinates');
var submit = document.getElementById('submit');

function moveMap(){
    console.log(coordinates.value);
    const watchID = navigator.geolocation.watchPosition((position) => {
console.log(position.coords.latitude, position.coords.longitude),
    map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude))
});
}

submit.addEventListener("click", moveMap);