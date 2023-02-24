import PIXInfo from ".";

describe("the PIXInfo object.", () => {
    it("Should generate the correctly serialized version.", () => {
        const pixInfo = new PIXInfo("00", "01");

        expect(pixInfo.toString()).toBe("000201");
    });

    it("Should strip the data property when its length is bigger than the maxLength property.", () => {
        const pixInfo = new PIXInfo("02", "abcda", 4);
        expect(pixInfo.data).toBe("abcd");

        pixInfo.data = "test";

        expect(pixInfo.data).toBe("test");
    });
})
