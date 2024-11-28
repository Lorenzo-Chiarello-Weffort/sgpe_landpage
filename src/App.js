import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

function App() {

  const [link, setLink] = useState('');
  // const prefix = 'https://';

  useEffect(() => {

    const fileUrl = 'https://pub.microbin.eu/raw/bat-swan-tiger';

    const fetchLink = async () => {
      try {
        const response = await fetch(fileUrl);
        if (response.ok) {
          console.log("response ok");
          const linkText = await response.text();
          setLink(linkText);
        } else {
          console.error('Erro ao carregar a URL.');
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      }
    };

    fetchLink();
  }, []);

  useEffect(() => {
    if (link) {
      // window.location.href = prefix + link;
      console.log(link);
    } else {
      console.error("Link não encontrado.");
    }
  }, [link]);

  return (
    <div className="App">
      <div className="loading-container">
        <p>Carregando...</p>
        <FaSpinner className="spinner" size={40} style={{ animation: 'spin 2s linear infinite' }} />
      </div>
    </div>
  );
}

export default App;