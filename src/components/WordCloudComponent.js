
import React from 'react';
import WordCloud from 'react-wordcloud';
import '../WordCloudComponent.css';  


const words = [
  { text: 'Afrikaans Sparta', value: 1000 },
  { text: 'Albanian Sparta', value: 1000 },
  { text: 'Amharic ስፓርታ', value: 1000 },
  { text: 'Arabic سبارتا', value: 1000 },
  { text: 'Armenian Սպարտա', value: 1000 },
  { text: 'Azerbaijani Sparta', value: 1000 },
  { text: 'Basque Esparta', value: 1000 },
  { text: 'Belarusian Спарта', value: 1000 },
  { text: 'Bengali স্পার্টা', value: 1000 },
  { text: 'Bosnian Sparta', value: 1000 },
  { text: 'Bulgarian Спарта', value: 1000 },
  { text: 'Cebuano Sparta', value: 1000 },
  { text: 'Chichewa Sparta', value: 1000 },
  { text: 'Chinese 斯巴達', value: 1000 },
  { text: 'Corsican Sparta', value: 1000 },
  { text: 'Croatian Sparta', value: 1000 },
  { text: 'Czech Sparta', value: 1000 },
  { text: 'Danish Sparta', value: 1000 },
  { text: 'Dutch Sparta', value: 1000 },
  { text: 'English Sparta', value: 1000 },
  { text: 'Esperanto Sparto', value: 1000 },
  { text: 'Estonian Sparta', value: 1000 },
  { text: 'Filipino Sparta', value: 1000 },
  { text: 'Finnish Sparta', value: 1000 },
  { text: 'French Sparte', value: 1000 },
  { text: 'Frisian Sparta', value: 1000 },
  { text: 'Galician Esparta', value: 1000 },
  { text: 'Georgian სპარტა', value: 1000 },
  { text: 'German Sparta', value: 1000 },
  { text: 'Gujarati સ્પર્ટા', value: 1000 },
  { text: 'Haitian Creole Sparta', value: 1000 },
  { text: 'Hausa Sparta', value: 1000 },
  { text: 'Hawaiian Sparta', value: 1000 },
  { text: 'Hebrew ספרטה', value: 1000 },
  { text: 'Hindi स्पार्टा', value: 1000 },
  { text: 'Hmong Sparta', value: 1000 },
  { text: 'Hungarian Spárta', value: 1000 },
  { text: 'Icelandic Sparta', value: 1000 },
  { text: 'Igbo Sparta', value: 1000 },
  { text: 'Indonesian Sparta', value: 1000 },
  { text: 'Irish Sparta', value: 1000 },
  { text: 'Italian Sparta', value: 1000 },
  { text: 'Japanese スパルタ', value: 1000 },
  { text: 'Javanese Sparta', value: 1000 },
  { text: 'Kannada ಸ್ಪಾರ್ಟಾ', value: 1000 },
  { text: 'Kazakh Спарта', value: 1000 },
  { text: 'Khmer ស្ប៉ាតា', value: 1000 },
  { text: 'Korean 스파르타', value: 1000 },
  { text: 'Kurdish Sparta', value: 1000 },
  { text: 'Kyrgyz Спарта', value: 1000 },
  { text: 'Lao ສະປາຕ້າ', value: 1000 },
  { text: 'Latin Sparta', value: 1000 },
  { text: 'Latvian Sparta', value: 1000 },
  { text: 'Lithuanian Sparta', value: 1000 },
  { text: 'Luxembourgish Sparta', value: 1000 },
  { text: 'Macedonian Спарта', value: 1000 },
  { text: 'Malagasy Sparta', value: 1000 },
  { text: 'Malay Sparta', value: 1000 },
  { text: 'Malayalam സ്‌പാർട്ട', value: 1000 },
  { text: 'Maltese Sparta', value: 1000 },
  { text: 'Maori Sparta', value: 1000 },
  { text: 'Marathi स्पार्टा', value: 1000 },
  { text: 'Mongolian Спарта', value: 1000 },
  { text: 'Myanmar Sparta', value: 1000 },
  { text: 'Nepali स्पार्टा', value: 1000 },
  { text: 'Norwegian Sparta', value: 1000 },
  { text: 'Pashto سپارتا', value: 1000 },
  { text: 'Persian اسپارت', value: 1000 },
  { text: 'Polish Sparta', value: 1000 },
  { text: 'Portuguese Esparta', value: 1000 },
  { text: 'Romanian Sparta', value: 1000 },
  { text: 'Russian Спарта', value: 1000 },
  { text: 'Samoan Sparta', value: 1000 },
  { text: 'Scots Gaelic Sparta', value: 1000 },
  { text: 'Serbian Спарта', value: 1000 },
  { text: 'Sesotho Sparta', value: 1000 },
  { text: 'Shona Sparta', value: 1000 },
  { text: 'Sindhi اسپارٽا', value: 1000 },
  { text: 'Sinhala ස්පාටා', value: 1000 },
  { text: 'Slovak Sparta', value: 1000 },
  { text: 'Slovenian Šparta', value: 1000 },
  { text: 'Somali Sparta', value: 1000 },
  { text: 'Spanish Esparta', value: 1000 },
  { text: 'Sundanese Sparta', value: 1000 },
  { text: 'Swahili Sparta', value: 1000 },
  { text: 'Swedish Sparta', value: 1000 },
  { text: 'Tajik Спарта', value: 1000 },
  { text: 'Tamil ஸ்பார்டா', value: 1000 },
  { text: 'Telugu స్పార్టా', value: 1000 },
  { text: 'Thai สปาร์ตา', value: 1000 },
  { text: 'Turkish Sparta', value: 1000 },
  { text: 'Urdu سپارٹا', value: 1000 },
  { text: 'Uzbek Sparta', value: 1000 },
  { text: 'Vietnamese Sparta', value: 1000 },
  { text: 'Welsh Sparta', value: 1000 },
  { text: 'Xhosa Sparta', value: 1000 },
  { text: 'Yiddish  ספּאַרטאַ', value: 1000 },
  { text: 'Yoruba Sparta', value: 1000 },
  { text: 'Zulu Sparta', value: 1000 }
];

// Options for WordCloud
const options = {
  fontSize: (word) => Math.log(word.value) * 10,
  rotations: 0,
  rotationAngles: [0],
  padding: 2,
  colors: ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#FF4500'],
  scale: 'sqrt', 
  spiral: 'archimedean', 
};

const WordCloudComponent = () => {
  return (
    <div className="wordcloud-container">
      <WordCloud words={words} options={options} />
    </div>
  );
};

export default WordCloudComponent;