import MakePIX from "@pqrux/simple-pix";

const queryString = window.location.search;
if(queryString){
    document.getElementById('form').style.display = 'none';
    const params = new URLSearchParams(queryString);
    const json = Object.assign({}, ...[...params.entries()].map(([key, value]) => ({[key]: value})));
    MakePIX({
        ...json,
        value: parseFloat(json.value)
    }, {generateBase64: true})
    .then((result) => {
        (<HTMLInputElement>document.getElementById('brcode')).value = result.brCode;
        document.getElementById('qrcode').setAttribute('src', result.base64QRCode);
        document.getElementById('result').style.display = 'block';
    })
    .catch((err) => document.getElementById('error').innerHTML = String(err));
}