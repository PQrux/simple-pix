import lengther from "../../utils/lengther";
import PIXInfo from "../pix_info";

export default class PIXContainer{

    public id;
    public children: {[id: string]: PIXInfo | PIXContainer } = {};


    constructor(id: string){
        this.id = id;
    }

    addChild(child: PIXInfo | PIXContainer){
        this.children[child.id] = child;
    }

    toString(withoutLeadingInfo = false){
        const serialized: string = Object.keys(this.children)
            .sort((a,b) => parseInt(a) - parseInt(b))
            .map(id => this.children[id].toString())
            .join("");

        if(!withoutLeadingInfo){
            return `${this.id}${lengther(serialized)}${serialized}`;
        }
        return serialized;
    }
}
