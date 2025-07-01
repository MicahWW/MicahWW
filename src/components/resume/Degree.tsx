import degreeModel from '@/models/resume/degreeModel';
import styles from "@/styles/resume.module.css";

type degreeProps = {
    degree: degreeModel;
}

const Degree = ({ degree }: degreeProps) => {
    return (
        <div>
            <div className={styles.itemHeader}>{degree.degreeName}</div>
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

export default Degree;