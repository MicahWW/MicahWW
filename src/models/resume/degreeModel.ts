class degreeModel {
    graduatedDate: Date;
    schoolName: string;
    schoolLocation: string;
    degreeName: string;
    extraInfo: { [key: string]: string };

    constructor(
        graduatedDate: Date,
        schoolName: string,
        schoolLocation: string,
        degreeName: string,
        extraInfo: { [key: string]: string }
    ) {
        this.graduatedDate = graduatedDate;
        this.schoolName = schoolName;
        this.schoolLocation = schoolLocation;
        this.degreeName = degreeName;
        this.extraInfo = extraInfo;
    }

    graduatedDateString() {
        return this.graduatedDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }
}

export default degreeModel;