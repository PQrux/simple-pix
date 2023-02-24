import lengther from "."

describe("lengther function", () => {
    it("should return the length of the string with one leading zero in case of lengths bellow to 10.", () => {
        const result1 = lengther("abc");
        const result2 = lengther("123456789101112");

        expect(result1[0]).toBe("0");
        expect(result2[0]).toBe("1");
    })
})