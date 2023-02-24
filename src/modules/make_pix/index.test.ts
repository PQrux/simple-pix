import MakePIX, { MakePIXOptions, MakePIXProps } from ".";

describe("MakePIX function", () => {
    const mockPIX = (props?: Partial<MakePIXProps>, options?: Partial<MakePIXOptions>) => MakePIX({
        uniquePayment: true,
        pixKey: "13378735783",
        value: 13,
        merchantName: "Pedro Almiranda",
        merchantCity: "Belo Horizonte",
        ...props,
    }, options);
    
    it("should generate only the BRCode without option.", async () => {
        const result = await mockPIX();
        expect(result.base64QRCode).toBeUndefined();
        expect(result.brCode).toBeDefined();
    });
    
    it("should generate only the BRCode without option.", async () => {
        const result = await mockPIX({}, {generateBase64: true});
        expect(result.base64QRCode).toBeDefined();
        expect(result.brCode).toBeDefined();
    });
});