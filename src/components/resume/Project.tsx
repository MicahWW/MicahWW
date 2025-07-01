import projectModel from "@/models/resume/projectModel";
import styles from "@/styles/resume.module.css";

type ProjectProps = {
    project: projectModel;
};

const Project = ({ project }: ProjectProps) => {
    return (
        <div>
            <span className={styles.itemHeader}>{project.title}</span>
            {project.doneFor ? <span> - {project.doneFor}</span> : null}
            <div>{project.description}</div>
            {project.extraPoints && Object.keys(project.extraPoints).length > 0 && (
                <ul>
                    {Object.keys(project.extraPoints).map((key) => (
                        <li key={key}>{key}:
                            <ul>
                                {project.extraPoints![key].map((point) => (
                                    <li key={`${key}-${point}`}>{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>)}
        </div>
    );
}

export default Project;