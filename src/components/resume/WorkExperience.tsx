import workExperienceModel from '@/models/resume/workExperienceModel';
import styles from '@/styles/workExperience.module.css';
import gStyles from '@/styles/global.module.css';

type workExperienceProps = {
    workExperience: workExperienceModel;
}

const WorkExperience = ({ workExperience }: workExperienceProps) => {
    return (
        <div className={gStyles.itemContainer}>
            <span className={gStyles.itemHeader}>{workExperience.jobTitle} - {workExperience.companyName}</span>
            <span className={styles.date}>{workExperience.startDateString()} - {workExperience.endDateString()}</span>
            <div>Quick description:</div>
            <ul>
                {workExperience.descriptionPoints.map((point, index) => (
                    <li key={`point-${index}`}>{point}</li>
                ))}
            </ul>
            {(workExperience.description !== null) ? <details><summary>Full description:</summary><p className={styles.detailsText}>{workExperience.description}</p></details> : null }

        </div>
    );
}

export default WorkExperience;