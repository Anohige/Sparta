// src/App.js
import React from 'react';
import WordCloudComponent from './components/WordCloudComponent';
import LanguageMap from './components/LanguageMap';
import SpartaMap from './components/SpartaMap';
import './styles.css'; 

function App() {
  return (
    <div className="App spartan-background">
      <h1>Sparta in different Languages</h1>
      <WordCloudComponent />
      <LanguageMap />s
      <SpartaMap />
    </div>
  );
}

export default App;  