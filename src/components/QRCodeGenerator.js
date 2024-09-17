import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
    const [qrValue, setQrValue] = useState('');

    useEffect(() => {
        const newQrValue = 'https://samibayar1.github.io/QR-quest/'; // Varmista, että tämä URL on oikein
        setQrValue(newQrValue);
    }, []);

    return (
        <div>
            <h1>QR-koodigeneraattori</h1>
            {qrValue ? (
                <QRCodeCanvas value={qrValue} />
            ) : (
                <p>QR-koodia ei voida luoda, koska arvo puuttuu.</p>
            )}
        </div>
    );
};

export default QRCodeGenerator;
