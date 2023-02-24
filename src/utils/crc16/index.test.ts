import crc16 from ".";

describe("crc16 function", () => {
    it("should generate the correct crc16 code", () => {
        const str = "123456789";
        const check = "29b1";
        expect(crc16(str)).toBe(check);
    })
});