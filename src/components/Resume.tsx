import gStyles from '@/styles/global.module.css';
import pStyles from "@/styles/project.module.css";
import weStyles from '@/styles/workExperience.module.css';
import Image from "next/image";
import { certificationModel, degreeModel, projectModel, skillModel, workExperienceModel } from "@/models/resume";

type certificationProps = {
    cert: certificationModel;
}

export const Certification = ({ cert }: certificationProps) => {
    return (
        <a href={cert.url} target="_blank">{cert.name} | {cert.acquiredDateString()}{cert.expirationDate === null ? "" : " - "}{cert.expirationDateString()}</a>
    );
}

type degreeProps = {
    degree: degreeModel;
}

export const Degree = ({ degree }: degreeProps) => {
    return (
        <div className={gStyles.itemContainer}>
            <div className={gStyles.itemHeader}>{degree.degreeName}</div>
            <ul>
                <li>{degree.schoolName}, {degree.schoolLocation}</li>
                <li>Graduated {degree.graduatedDateString()}</li>
                {Object.entries(degree.extraInfo).map(([key, value]) => (
                    <li key={`title-${key}`}>{key}
                        <ul>
                            <li key={`value-${key}`}>{value}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}


type ProjectProps = {
    project: projectModel;
};

export const Project = ({ project }: ProjectProps) => {
    return (
        <div className={gStyles.itemContainer}>
            <span className={gStyles.itemHeader}>{project.title}</span>
            {project.doneFor ? <span> - {project.doneFor}</span> : null}
            <div>{project.description}</div>
            <div className={pStyles.extraPoints}>
                {project.extraPoints && Object.keys(project.extraPoints).length > 0 && Object.keys(project.extraPoints).map((key) => (
                    <div key={key}>
                        <div className={pStyles.extraPointTitle}>{key}</div>
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

type skillProps = {
    skill: skillModel;
}

export const Skill = ({ skill }: skillProps) => {
    const imageStyle = {
        width: "1rem",
        height: "1rem",
        marginRight: "0.15rem",
    };

    return (
        <li>{skill.icon && <Image className={gStyles.hiddenInPrint} src={`/images/icons/${skill.icon}`} alt={skill.name} width={16} height={16} style={imageStyle} />} {skill.name}</li>
    );
}

type workExperienceProps = {
    workExperience: workExperienceModel;
}

export const WorkExperience = ({ workExperience }: workExperienceProps) => {
    return (
        <div className={gStyles.itemContainer}>
            <span className={gStyles.itemHeader}>{workExperience.jobTitle} - {workExperience.companyName}</span>
            <span className={weStyles.date}>{workExperience.startDateString()} - {workExperience.endDateString()}</span>
            <div className={gStyles.hiddenInPrint}>Quick description:</div>
            <ul>
                {workExperience.descriptionPoints.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                ))}
            </ul>
            {(workExperience.description !== null) ? <details className={gStyles.hiddenInPrint}><summary>Full description:</summary><p className={weStyles.detailsText}>{workExperience.description}</p></details> : null }

        </div>
    );
}