import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

function App() {

  const [link, setLink] = useState('');
  const [directLink, setDirectLink] = useState('');

  useEffect(() => {

    const useDirect = true;
    const directUrl = 'https://b5af7c229057a111bcc84f979eea0d0b.serveo.net/codigo_fonte';
    const fileUrl = 'https://gist.githubusercontent.com/Lorenzo-Chiarello-Weffort/1fd5eb4e4a76a3b18101b78c94f5040b/raw/d494cc60ad18fe074169854e85c6cd4158cb600e/redirect_url.txt';

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
    if (directLink !== '') {
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