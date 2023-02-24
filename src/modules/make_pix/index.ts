import PIXGenerator from "../../models/pix_generator";
import QRCode from "qrcode";

export interface MakePIXProps{
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
}

export interface MakePIXOptions{
    generateBase64?: boolean;
}

export interface MakePIXResult{
    brCode: string;
    base64QRCode?: string;
}


export default async function MakePIX(props: MakePIXProps, options?: MakePIXOptions): Promise<MakePIXResult>{
    let base64QRCode;

    const gen = new PIXGenerator();
    gen.setPayloadFormatIndicator();
    if(props.uniquePayment) gen.setPointOfInitiationMethod();
    gen.setMerchantAccountInformation(props.pixKey);
    gen.setMerchantCategoryCode(props.categoryCode);
    gen.setTransactionCurrency(props.currencyCode);
    if(props.value) gen.setValue(props.value);
    gen.setCountryCode(props.countryCode);
    gen.setMerchantName(props.merchantName);
    gen.setMerchantCity(props.merchantCity);
    if(props.postalCode) gen.setPostalCode(props.postalCode);
    gen.setAdditionalDataFieldTemplate(props.txID);

    const brCode = gen.generateBRCode();

    if(options?.generateBase64){
        base64QRCode = await QRCode.toDataURL(brCode);
    }

    return {
        brCode,
        base64QRCode,
    }
}