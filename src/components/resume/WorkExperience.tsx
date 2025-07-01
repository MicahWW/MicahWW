import workExperienceModel from '@/models/resume/workExperienceModel';
import styles from "@/styles/resume.module.css";

type workExperienceProps = {
    workExperience: workExperienceModel;
}

const WorkExperience = ({ workExperience }: workExperienceProps) => {
    return (
        <div>
            <span className={styles.itemHeader}>{workExperience.jobTitle} - {workExperience.companyName}</span>
            <span> {workExperience.startDateString()} - {workExperience.endDateString()}</span>
            <div>Quick description:</div>
            <ul>
                {workExperience.descriptionPoints.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                ))}
            </ul>
            {(workExperience.description !== null) ?  <><div>Full description:</div><ul><li>{workExperience.description}</li></ul></>  : null }

        </div>
    );
}

export default WorkExperience;