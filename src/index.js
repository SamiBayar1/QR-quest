import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'; // Varmista, että tämä tiedosto on olemassa tai poista tämä rivi, jos ei ole.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
