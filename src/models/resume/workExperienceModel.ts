class workExperienceModel {
    companyName: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date | null;
    descriptionPoints: string[];
    description: string | null;
    location: string;

    constructor(
        companyName: string,
        jobTitle: string,
        startDate: Date,
        endDate: Date | null,
        descriptionPoints: string[],
        description: string | null,
        location: string
    ) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.startDate = startDate;
        this.endDate = endDate;
        this.descriptionPoints = descriptionPoints;
        this.description = description;
        this.location = location;
    }

    startDateString() {
        return this.startDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
        });
    }

    endDateString() {
        return this.endDate
            ? this.endDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric"
            })
            : "Present";
    }
}

export default workExperienceModel;