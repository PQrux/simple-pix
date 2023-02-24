import PIXContainer from ".";
import PIXInfo from "../pix_info";

describe("the PIXContainer object", () => {

    it("Should sort its children in ascendent order before serialization", () => {
        const container = new PIXContainer("26");

        const children = [
            new PIXInfo("00", "01", 2),
            new PIXInfo("01", "abcd", 4),
            new PIXInfo("02", "20.00", 10),
        ];

        for(const child of children) container.addChild(child);

        
        const serialized = container.toString();
        let currentI = 4;
        
        children
            .sort((a,b) => parseInt(a.id) - parseInt(b.id))
            .map(child => child.toString())
            .forEach(item => {
                const end = currentI + item.length;
                const val = serialized.substring(currentI, end);
                expect(val).toBe(item);
                currentI = end;
            });
    });

    it("Should serialize with or without leading info.", () => {
        const container = new PIXContainer("26");
        container.addChild(new PIXInfo("00", "01", 2));
        
        expect(container.toString(true).substring(0,2)).toBe("00");
        expect(container.toString().substring(0,2)).toBe("26");
    });

    it("Should add child with its ID as key.", () => {
        const container = new PIXContainer("26");
        container.addChild(new PIXInfo("00", "01", 2));
        expect(container.children).toHaveProperty("00");
    });

});