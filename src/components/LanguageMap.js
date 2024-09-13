// src/components/LanguageMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import textBubbleIcon from './language_icon.png'; 

const customIcon = new L.Icon({
  iconUrl: textBubbleIcon, 
  iconSize: [20, 20], 
  iconAnchor: [15, 30], 
  popupAnchor: [0, -30], 
  shadowUrl: null 
});

const LanguageMap = () => {
  const positions = [
    { name: 'Afrikaans', position: [-30.5595, 22.9375], label: 'Sparta' },
    { name: 'Albanian', position: [41.1533, 20.1683], label: 'Sparta' },
    { name: 'Amharic', position: [9.145, 40.489673], label: 'ስፓርታ' },
    { name: 'Arabic', position: [21.4225, 39.8262], label: 'سبارتا' },
    { name: 'Armenian', position: [40.0692, 45.0382], label: 'Սպարտա' },
    { name: 'Azerbaijani', position: [40.1431, 47.5769], label: 'Sparta' },
    { name: 'Basque', position: [43.1628, -1.5752], label: 'Esparta' },
    { name: 'Belarusian', position: [53.7098, 27.9534], label: 'Спарта' },
    { name: 'Bengali', position: [23.685], label: 'স্পার্টা' },
    { name: 'Bosnian', position: [44.1667, 17.5833], label: 'Sparta' },
    { name: 'Bulgarian', position: [42.7333, 25.4833], label: 'Спарта' },
    { name: 'Cebuano', position: [11.5500, 123.8333], label: 'Sparta' },
    { name: 'Chichewa', position: [-13.2543, 34.3015], label: 'Sparta' },
    { name: 'Chinese', position: [35.8617, 104.1954], label: '斯巴达' },
    { name: 'Corsican', position: [41.9355, 8.6416], label: 'Sparta' },
    { name: 'Croatian', position: [45.1, 15.2], label: 'Sparta' },
    { name: 'Czech', position: [49.8175, 15.4730], label: 'Sparta' },
    { name: 'Danish', position: [56.2639, 9.5018], label: 'Sparta' },
    { name: 'Dutch', position: [52.1326, 5.2913], label: 'Sparta' },
    { name: 'English', position: [51.509865, -0.118092], label: 'Sparta' },
    { name: 'Esperanto', position: [47.1625, 19.5033], label: 'Sparto' },
    { name: 'Estonian', position: [58.5953, 25.0136], label: 'Sparta' },
    { name: 'Filipino', position: [12.8797, 121.7740], label: 'Sparta' },
    { name: 'Finnish', position: [61.9241, 25.7482], label: 'Sparta' },
    { name: 'French', position: [46.6034, 1.8883], label: 'Sparte' },
    { name: 'Frisian', position: [53.0000, 6.0000], label: 'Sparta' },
    { name: 'Galician', position: [42.9333, -8.5833], label: 'Esparta' },
    { name: 'Georgian', position: [32.1656, -82.9001], label: 'სპარტა' },
    { name: 'German', position: [51.1657, 10.4515], label: 'Sparta' },
    { name: 'Gujarati', position: [22.2587, 71.1924], label: 'સ્પાર્ટા' },
    { name: 'Haitian Creole', position: [18.9712, -72.2852], label: 'Sparta' },
    { name: 'Hausa', position: [9.0820, 8.6753], label: 'Sparta' },
    { name: 'Hawaiian', position: [21.2936, -157.8580], label: 'Sparta' },
    { name: 'Hebrew', position: [31.0461, 34.8516], label: 'ספרטה' },
    { name: 'Hindi', position: [20.5937, 78.9629], label: 'स्पार्टा' },
    { name: 'Hmong', position: [19.9391, 102.6126], label: 'Sparta' },
    { name: 'Hungarian', position: [47.1625, 19.5033], label: 'Spárta' },
    { name: 'Icelandic', position: [64.9631, -19.0208], label: 'Sparta' },
    { name: 'Igbo', position: [8.6753, 7.9999], label: 'Sparta' },
    { name: 'Indonesian', position: [-0.7893, 113.9213], label: 'Sparta' },
    { name: 'Irish', position: [53.4129, -8.2439], label: 'Sparta' },
    { name: 'Italian', position: [41.8719, 12.5674], label: 'Sparta' },
    { name: 'Japanese', position: [36.2048, 138.2529], label: 'スパルタ' },
    { name: 'Javanese', position: [-7.9653, 112.6326], label: 'Sparta' },
    { name: 'Kannada', position: [15.3173, 75.7139], label: 'სპಾರ್ಟა' },
    { name: 'Kazakh', position: [48.0196, 66.9237], label: 'Спарта' },
    { name: 'Khmer', position: [12.5657, 104.9910], label: 'ស្ប៉ាតា' },
    { name: 'Korean', position: [35.9078, 127.7669], label: '스파르타' },
    { name: 'Kurdish', position: [37.8394, 41.0082], label: 'Sparta' },
    { name: 'Kyrgyz', position: [41.2044, 74.7661], label: 'Спарта' },
    { name: 'Lao', position: [19.8563, 102.4955], label: 'ສະປາຕ້າ' },
    { name: 'Latin', position: [41.9000, 12.5000], label: 'Sparta' },
    { name: 'Latvian', position: [56.8796, 24.6032], label: 'Sparta' },
    { name: 'Lithuanian', position: [55.1694, 23.8813], label: 'Sparta' },
    { name: 'Luxembourgish', position: [49.8153, 6.1296], label: 'Sparta' },
    { name: 'Macedonian', position: [41.6086, 21.7453], label: 'Спарта' },
    { name: 'Malagasy', position: [-18.7669, 46.8691], label: 'Sparta' },
    { name: 'Malay', position: [4.2105, 101.9758], label: 'Sparta' },
    { name: 'Malayalam', position: [10.8505, 76.2711], label: 'സ്പാർട്ട' },
    { name: 'Maltese', position: [35.9375, 14.3754], label: 'Sparta' },
    { name: 'Maori', position: [-40.9006, 174.8860], label: 'Sparta' },
    { name: 'Marathi', position: [19.0968, 84.8466], label: 'स्पार्टा' },
    { name: 'Mongolian', position: [46.8625, 103.8467], label: 'Спарта' },
    { name: 'Myanmar', position: [21.9162, 95.9550], label: 'Sparta' },
    { name: 'Nepali', position: [28.3949, 84.1240], label: 'स्पार्टा' },
    { name: 'Norwegian', position: [60.4720, 8.4689], label: 'Sparta' },
    { name: 'Pashto', position: [30.3753, 69.3451], label: 'سپارتا' },
    { name: 'Persian', position: [32.4279, 53.6880], label: 'اسپارت' },
    { name: 'Polish', position: [51.9194, 19.1451], label: 'Sparta' },
    { name: 'Portuguese', position: [-14.2350, -51.9253], label: 'Esparta' },
    { name: 'Romanian', position: [45.9432, 24.9668], label: 'Sparta' },
    { name: 'Russian', position: [61.5240, 105.3188], label: 'Спарта' },
    { name: 'Samoan', position: [-13.7590, -172.1046], label: 'Sparta' },
    { name: 'Scots Gaelic', position: [56.4907, -4.2026], label: 'Sparta' },
    { name: 'Serbian', position: [44.0165, 21.0059], label: 'Спарта' },
    { name: 'Sesotho', position: [-29.2337, 27.3854], label: 'Sparta' },
    { name: 'Shona', position: [-19.0154, 29.1549], label: 'Sparta' },
    { name: 'Sindhi', position: [27.7660, 69.5297], label: 'اسپارٽا' },
    { name: 'Sinhala', position: [7.8731, 80.7718], label: 'ස්පාටා' },
    { name: 'Slovak', position: [48.6690, 19.6990], label: 'Sparta' },
    { name: 'Slovenian', position: [46.1512, 14.9955], label: 'Šparta' },
    { name: 'Somali', position: [5.1521, 46.1996], label: 'Sparta' },
    { name: 'Spanish', position: [40.4637, -3.7492], label: 'Esparta' },
    { name: 'Sundanese', position: [-6.9034, 107.6186], label: 'Sparta' },
    { name: 'Swahili', position: [-1.2864, 36.8172], label: 'Sparta' },
    { name: 'Swedish', position: [60.1282, 18.6435], label: 'Sparta' },
    { name: 'Tajik', position: [38.8610, 71.2761], label: 'Спарта' },
    { name: 'Tamil', position: [10.8505, 76.2711], label: 'ஸ்பார்டா' },
    { name: 'Telugu', position: [15.9129, 79.7399], label: 'స్పార్టా' },
    { name: 'Thai', position: [15.8700, 100.9925], label: 'สปาร์ตา' },
    { name: 'Turkish', position: [38.9637, 35.2433], label: 'Sparta' },
    { name: 'Urdu', position: [30.3753, 69.3451], label: 'سپارٹا' },
    { name: 'Uzbek', position: [41.3775, 64.5853], label: 'Sparta' },
    { name: 'Vietnamese', position: [14.0583, 108.2772], label: 'Sparta' },
    { name: 'Welsh', position: [52.1307, -3.7837], label: 'Sparta' },
    { name: 'Xhosa', position: [-30.5595, 22.9375], label: 'Sparta' },
    { name: 'Yiddish', position: [31.0461, 34.8516], label: 'ספארטא' },
    { name: 'Yoruba', position: [9.0820, 8.6753], label: 'Sparta' },
    { name: 'Zulu', position: [-28.4793, 24.6727], label: 'Sparta' },
  ];



  return (
    <section>
      <h2>Map: How Countries Refer to Sparta</h2>
      <div className="map-container">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom={false}
          className="map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {positions.map((position, index) => {
            if (position.position && position.position.length === 2) {
              const [lat, lng] = position.position;
              return (
                <Marker
                  key={index}
                  position={[lat, lng]}
                  icon={customIcon} 
                >
                  <Popup>
                    <strong>{position.name}</strong>: {position.label}
                  </Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      </div>
    </section>
  );
};

export default LanguageMap;