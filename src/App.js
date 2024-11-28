import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

function App() {

  const [link, setLink] = useState('');
  const [directLink, setDirectLink] = useState('');

  useEffect(() => {

    const useDirect = true;
    const directUrl = 'https://1514fbe6f4a0cee9d3b0bb34b1a46989.serveo.net/codigo_fonte';
    const fileUrl = 'https://1514fbe6f4a0cee9d3b0bb34b1a46989.serveo.net/codigo_fonte';

    const fetchLink = async () => {
      if (useDirect) {
        setDirectLink(directUrl);
      } else {
        try {
          const response = await fetch(fileUrl);
          if (response.ok) {
            const linkText = await response.text();
            setLink(linkText);
          } else {
            console.error('Erro ao carregar a URL.');
          }
        } catch (error) {
          console.error('Erro de rede:', error);
        }
      }
    };

    fetchLink();
  }, []);

  useEffect(() => {
    if (directLink != '') {
      window.location.href = directLink;
    }
    else if (link) {
      window.location.href = link;
    }
  }, [directLink, link]);

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