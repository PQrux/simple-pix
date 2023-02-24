# simple-pix

The simplest way to generate your pix QR Codes!

1. Install
```
npm i @pqrux/simple-pix
```

2. Import
```typescript
import MakePIX from '@pqrux/simple-pix';
```
3. Generate!
```typescript
MakePIX({
    pixKey: 'your pix key',
    merchantName: 'your full name',
    merchantCity: 'your city',
    uniquePayment: false, //optional
    categoryCode: '0000' //optional
    currencyCode: '999' //optional
    value: 30.4, //optional
    countryCode: 'BR' //optional
    postalCode: '06624444', //optional
    txID: '***' //optional
}, {
    generateBase64: true //optional
})
.then(({
    brCode, //string
    base64QRCode //string?
}) => {
...
})
```