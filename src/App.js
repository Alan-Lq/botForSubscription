import {useEffect, useState, useRef} from 'react';
import Client from "@seithq/ncalayer";
import './App.css';

function App() {
    const clientRef = useRef(null);

    useEffect(() => {
        const ws = new WebSocket("wss://127.0.0.1:13579/");

        clientRef.current = new Client(ws);
    }, []);

    const handleButtonClick = () => {
        clientRef.current.browseKeyStore("PKCS12", "P12", "", (data) => {
            if (data.isOk()) {
                console.log('KeyStore browse success:', data);
            } else {
                console.error('KeyStore browse error:', data);
            }
        });
    }


    return (
        <div className="container">
            <button onClick={handleButtonClick} className="button">Ready?</button>
        </div>
    );
}

export default App;
