import skill from "@/models/resume/skillModel";
import Image from "next/image";
import gStyles from "@/styles/global.module.css";

type skillProps = {
    skill: skill;
}

const Skill = ({ skill }: skillProps) => {
    const imageStyle = {
        width: "1rem",
        height: "1rem",
        marginRight: "0.15rem",
    };

    return (
        <li>{skill.icon && <Image className={gStyles.hiddenInPrint} src={`/images/icons/${skill.icon}`} alt={skill.name} width={16} height={16} style={imageStyle} />} {skill.name}</li>
    );
}

export default Skill;
