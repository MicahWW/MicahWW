/**
 * Represents a project with a title, description, target audience, and additional key-value points.
 *
 * @param title - The name or title of the project.
 * @param description - A description of the project's purpose and how it was accomplished.
 * @param doneFor - (Optional) The entity, client, or audience for whom the project was completed.
 * @param extraPoints - (Optional) Additional details or highlights about the project, represented as key-value pairs.
 */
class projectModel {

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

export default projectModel;