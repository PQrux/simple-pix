import crc16 from "../../utils/crc16";
import PIXContainer from "../pix_container";
import PIXInfo from "../pix_info";

export default class PIXGenerator{
    
    public mainContainer = new PIXContainer("");


    protected insertCRC16(text: string){
        text = `${text}6304`;
        const code = crc16(text);
        return `${text}${code.toUpperCase()}`;
    }

    generateBRCode(){
        let payload = this.mainContainer.toString(true);
        payload = this.insertCRC16(payload);
        return payload;
    }

    setPayloadFormatIndicator(){
        this.mainContainer.addChild(new PIXInfo("00", "01", 2));
    }

    setPointOfInitiationMethod(value = "12"){
        this.mainContainer.addChild(new PIXInfo("01", value, 2));
    }

    setMerchantAccountInformation(pixKey: string, GUI = "BR.GOV.BCB.PIX"){
        const mai = new PIXContainer("26");
        mai.addChild(new PIXInfo("00", GUI));
        mai.addChild(new PIXInfo("01", pixKey));

        this.mainContainer.addChild(mai);
    }

    setMerchantCategoryCode(code = "0000"){
        this.mainContainer.addChild(new PIXInfo("52", code, 4));
    }

    setTransactionCurrency(code = "986"){
        this.mainContainer.addChild(new PIXInfo("53", code, 3));
    }

    setValue(value: number){
        this.mainContainer.addChild(new PIXInfo("54", value.toFixed(2), 13));
    }

    setCountryCode(code = "BR"){
        this.mainContainer.addChild(new PIXInfo("58", code, 2));
    }

    setMerchantName(name: string){
        this.mainContainer.addChild(new PIXInfo("59", name, 25));
    }

    setMerchantCity(city: string){
        this.mainContainer.addChild(new PIXInfo("60", city, 15));
    }

    setPostalCode(postal: string){
        this.mainContainer.addChild(new PIXInfo("61", postal, 99));
    }

    setAdditionalDataFieldTemplate(txID = "***"){
        const adft = new PIXContainer("62");
        adft.addChild(new PIXInfo("05", txID, 25));
        this.mainContainer.addChild(adft);
    }

}