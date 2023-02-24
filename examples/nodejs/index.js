const MakePIX = require('@pqrux/simple-pix').default;

MakePIX({
    merchantCity: 'TEST',
    merchantName: 'TEST',
    pixKey: '14215851033'
})
.then((result) => {
    console.log('BRCode: ', result.brCode);
})
.catch(console.error);