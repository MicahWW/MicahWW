/**
 * Represents a certification with its name, acquisition date, optional expiration date, and a reference URL.
 *
 * @param name - The name or title of the certification.
 * @param acquiredDate - The date the certification was obtained.
 * @param expirationDate - (Optional) The date the certification expires, or null if it does not expire.
 * @param url - A URL to the issued certification or relevant credential information.
 */
export class certificationModel {
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

/**
 * Represents a college degree with school information, degree name, graduation date, and extra details.
 *
 * @param graduatedDate - The date the degree was conferred.
 * @param schoolName - The name of the institution.
 * @param schoolLocation - The location of the institution.
 * @param degreeName - The name of the degree earned.
 * @param extraInfo - Additional key-value pairs for supplemental degree information (e.g. senior design project).
 */
export class degreeModel {
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

/**
 * Represents a project with a title, description, target audience, and additional key-value points.
 *
 * @param title - The name or title of the project.
 * @param description - A description of the project's purpose and how it was accomplished.
 * @param doneFor - (Optional) The entity, client, or audience for whom the project was completed.
 * @param extraPoints - (Optional) Additional details or highlights about the project, represented as key-value pairs.
 */
export class projectModel {

    title: string;
    description: string;
    doneFor?: string;
    extraPoints?: { [key: string]: string[] };

    constructor(title: string, description: string, doneFor?: string, extraPoints?: { [key: string]: string[] }) {
        this.title = title;
        this.description = description;
        this.doneFor = doneFor;
        this.extraPoints = extraPoints;
    }
}


/**
 * Represents a skill with a name, category type, and optional icon.
 *
 * @param name - The display name of the skill.
 * @param type - The category or type grouping for the skill.
 * @param icon - (Optional) An icon identifier or path representing the skill visually (located in /public/images/icons/).
 */
export class skillModel {
    name: string;
    type: string;
    icon?: string;

    constructor(name: string, type: string, icon?: string) {
        this.name = name;
        this.type = type;
        this.icon = icon;
    }
}

/**
 * Represents a work experience entry with company details, job title, dates, and description points.
 *
 * @param companyName - The name of the employer.
 * @param jobTitle - The title held during the position.
 * @param startDate - The date the position began.
 * @param endDate - The date the position ended, or null if currently employed.
 * @param descriptionPoints - A list of bullet-point accomplishments or responsibilities.
 * @param description - (Optional) A narrative summary of the role, or null if not provided.
 * @param location - The geographic location of the position.
 */
export class workExperienceModel {
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
