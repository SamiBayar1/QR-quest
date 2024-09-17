import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
    const [qrValue, setQrValue] = useState('');

    useEffect(() => {
        setQrValue('https://github.com/SamiBayar1/QR-quest'); // Google.fi linkki
    }, []);

    return (
        <div>
            <h1>QR-koodigeneraattori</h1>
            <QRCodeCanvas value={qrValue} />
        </div>
    );
};

export default QRCodeGenerator;
