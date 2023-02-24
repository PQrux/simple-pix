# simple-pix

The simplest way to generate your pix QR Codes!

1. Install
```
npm i @pqrux/simple-pix
```

2. Import
```
import MakePIX from '@pqrux/simple-pix';
```
3. Generate!
```
MakePIX({
    uniquePayment?: boolean;
    pixKey: string;
    GUI?: string;
    categoryCode?: string;
    currencyCode?: string;
    value?: number;
    countryCode?: string;
    merchantName: string;
    merchantCity: string;
    postalCode?: string;
    txID?: string;
}, {
    generateBase64?: boolean;
})
.then(({
    brCode, //string
    base64QRCode //string?
}) => {
...
})
```