import skill from "@/models/resume/skillModel";

type skillProps = {
    skill: skill;
}

const Skill = ({ skill }: skillProps) => {
    return (
        <li>{skill.name}</li>
    );
}

export default Skill;