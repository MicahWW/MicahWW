class certificationModel {
    name: string;
    acquiredDate: Date;
    expirationDate: Date | null;
    url: string;

    constructor(
        name: string,
        acquiredDate: Date,
        expirationDate: Date | null,
        url: string
    ) {
        this.name = name;
        this.acquiredDate = acquiredDate;
        this.expirationDate = expirationDate;
        this.url = url;
    }

    acquiredDateString() {
        return this.acquiredDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    expirationDateString() {
        if (this.expirationDate) {
            return this.expirationDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
            });
        }
        return "";
    }
}

export default certificationModel;