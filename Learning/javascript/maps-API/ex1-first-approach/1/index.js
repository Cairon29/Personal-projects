const CONFIGURATION = {
  "locations": [
  ],
  "mapOptions": {"center": {"lat":38.0,"lng":-100.0}, "fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17,"mapId":""},
  "mapsApiKey": "AIzaSyD1iYyQFIqUNywqDSRl1DTAZXT7ZH2D6-s",
  "capabilities": {"input":true,"autocomplete":false,"directions":false,"distanceMatrix":false,"details":false,"actions":false}
};


document.addEventListener('DOMContentLoaded', async () => {
  await customElements.whenDefined('gmpx-store-locator');
  const locator = document.querySelector('gmpx-store-locator');
  locator.configureFromQuickBuilder(CONFIGURATION);
});