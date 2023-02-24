import PIXGenerator from ".";
import crc16 from "../../utils/crc16";


describe("the PIXGenerator object", () => {
    
    const generate = () => {
        const gen = new PIXGenerator();
        gen.setPayloadFormatIndicator();
        gen.setMerchantAccountInformation("13378735783");
        gen.setMerchantCategoryCode();
        gen.setTransactionCurrency();
        gen.setCountryCode();
        gen.setMerchantName("Arnaldo Dagoberto Silveira");
        gen.setMerchantCity("Cidade Cidade");
        gen.setAdditionalDataFieldTemplate();

        return gen;
    }

    it("should genearate the brcode code with the correct 4 digit CRC16 code.", () => {
        const generator = generate();

        const cpCode = generator.generateBRCode();

        const content = cpCode.substring(0, cpCode.length - 4);
        const crc16code = cpCode.substring(cpCode.length - 4, cpCode.length);
        const newCRC16code = crc16(content).toUpperCase();

        expect(crc16code).toBe(newCRC16code);
        expect(crc16code).toHaveLength(4);
    });
})