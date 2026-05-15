import projectModel from "@/models/resume/projectModel";
import gStyles from "@/styles/global.module.css";
import styles from "@/styles/project.module.css";

type ProjectProps = {
    project: projectModel;
};

const Project = ({ project }: ProjectProps) => {
    return (
        <div className={gStyles.itemContainer}>
            <span className={gStyles.itemHeader}>{project.title}</span>
            {project.doneFor ? <span> - {project.doneFor}</span> : null}
            <div>{project.description}</div>
            <div className={styles.extraPoints}>
                {project.extraPoints && Object.keys(project.extraPoints).length > 0 && Object.keys(project.extraPoints).map((key) => (
                    <div key={key}>
                        <div className={styles.extraPointTitle}>{key}</div>
                        <ul>
                            {project.extraPoints![key].map((point) => (
                                <li key={`${key}-${point}`}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;