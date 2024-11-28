import React, { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import './App.css';

function App() {

  // Link
  const link = "https://www.google.com";

  useEffect(() => {
    window.location.href = link;
  }, []);

  return (
    <div className="App">
      <div className="loading-container">
        <p>Carregado...</p>
        <FaSpinner className="spinner" size={40} style={{ animation: 'spin 2s linear infinite' }} />
      </div>
    </div>
  );
}

export default App;