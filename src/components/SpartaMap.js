// src/components/SpartaMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const redDotIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const SpartaMap = () => {
  const spartas = [
    { name: 'Sparta, Tennessee, US', position: [35.9463, -85.4870], link: 'https://en.wikipedia.org/wiki/Sparta,_Tennessee' },
    { name: 'Sparta, North Carolina, US', position: [36.3552, -81.2066], link: 'https://en.wikipedia.org/wiki/Sparta,_North_Carolina' },
    { name: 'Spartanburg, South Carolina, US', position: [34.9440, -81.9550], link: 'https://en.wikipedia.org/wiki/Spartanburg,_South_Carolina' },
    { name: 'Sparta, Ossining, NY, US', position: [41.1625, -73.8553], link: 'https://en.wikipedia.org/wiki/Sparta,_New_York' },
    { name: 'Sparta, Wisconsin, US', position: [43.9447, -90.8123], link: 'https://en.wikipedia.org/wiki/Sparta,_Wisconsin' },
    { name: 'Sparta, Michigan, US', position: [42.9777, -85.6650], link: 'https://en.wikipedia.org/wiki/Sparta,_Michigan' },
    { name: 'Sparta, Caroline County, VA, US', position: [38.0371, -77.3114], link: 'https://en.wikipedia.org/wiki/Sparta,_Virginia' },
    { name: 'Sparta, Livingston County, NY, US', position: [42.7916, -77.9390], link: 'https://en.wikipedia.org/wiki/Sparta,_New_York' },
    { name: 'Sparta, Indiana, US', position: [38.2028, -85.2478], link: 'https://en.wikipedia.org/wiki/Sparta_Township,_Dearborn_County,_Indiana' },
    { name: 'Sparta, Illinois, US', position: [38.2200, -89.7160], link: 'https://en.wikipedia.org/wiki/Sparta,_Illinois' },
    { name: 'Sparta, Georgia, US', position: [33.1460, -82.9051], link: 'https://en.wikipedia.org/wiki/Sparta,_Georgia' },
    { name: 'Sparta, Ohio, US', position: [40.4950, -82.8733], link: 'https://en.wikipedia.org/wiki/Sparta,_Ohio' },
    { name: 'Sparta, Missouri, US', position: [37.3883, -93.4294], link: 'https://en.wikipedia.org/wiki/Sparta,_Missouri' },
    { name: 'Sparta, New Jersey, US', position: [41.0334, -74.6354], link: 'https://en.wikipedia.org/wiki/Sparta_Township,_New_Jersey' },
    { name: 'Sparta, Kentucky, US', position: [38.7891, -84.7311], link: 'https://en.wikipedia.org/wiki/Sparta,_Kentucky' },
    { name: 'Sparta, Ontario, Canada', position: [42.8667, -81.5000], link: 'https://en.wikipedia.org/wiki/Sparta,_Ontario' },
    { name: 'Sparta, Mpumalanga, South Africa', position: [-25.5300, 30.9260], link: 'https://en.wikipedia.org/wiki/Mpumalanga' }, // No specific page for Sparta
    { name: 'Spartà, Sicilia, Italy', position: [37.4050, 15.0900], link: 'https://it.wikipedia.org/wiki/Spart%C3%A0' }, // Italian Wikipedia
    { name: 'Nova Sparta, Ukraine', position: [48.2580, 30.1900], link: 'https://en.wikipedia.org/wiki/Nova_Sparta' },
    { name: 'Sparta, Russia', position: [56.1631, 69.2230], link: 'https://en.wikipedia.org/wiki/Sparta' }, // General Sparta, no specific location in Russia
    { name: 'Nueva Esparta, El Salvador', position: [13.7880, -89.0870], link: 'https://en.wikipedia.org/wiki/Nueva_Esparta,_El_Salvador' },
    { name: 'Esparta, Honduras', position: [13.2048, -86.2788], link: 'https://en.wikipedia.org/wiki/Esparta,_Honduras' },
    { name: 'Sparta, Oregon, US', position: [44.0656, -121.1051], link: 'https://en.wikipedia.org/wiki/Sparta,_Oregon' },
    { name: 'Isparta, Turkey', position: [37.7656, 30.5567], link: 'https://en.wikipedia.org/wiki/Isparta' },
    { name: 'Neuva Esparta, Venezuela', position: [11.3298, -63.4676], link: 'https://en.wikipedia.org/wiki/Nueva_Esparta' },
    { name: 'Sparta, Chickasaw County, Mississippi, US', position: [33.7151, -88.9881], link: 'https://en.wikipedia.org/wiki/Sparta,_Mississippi' },
    { name: 'Sparta, Pennsylvania, US', position: [40.5770, -80.1020], link: 'https://en.wikipedia.org/wiki/Sparta_Township,_Crawford_County,_Pennsylvania' }
  ];

  return (
    <section>
      <h2>Map: Other Places Named Sparta</h2>
      <div className="map-container">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="leaflet-map"
          style={{ height: '100%', width: '100%' }}
          maxBounds={[
            [90, -180],
            [-90, 180]
          ]}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={false}
          minZoom={2}
          maxZoom={10}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {spartas.map((sparta, index) => (
            <Marker
              key={index}
              position={sparta.position}
              icon={redDotIcon}
            >
              <Popup>
                <a href={sparta.link} target="_blank" rel="noopener noreferrer">
                  {sparta.name}
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default SpartaMap;