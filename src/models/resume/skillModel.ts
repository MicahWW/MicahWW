class skill {
    name: string;
    type: "programming" | "other";

    constructor(name: string, type: "programming" | "other") {
        this.name = name;
        this.type = type;
    }
}
export default skill;