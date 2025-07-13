import certificationModel from "@/models/resume/certificationModel";

type certificationProps = {
    cert: certificationModel;
}

const Certification = ({ cert }: certificationProps) => {
    return (
        <a href={cert.url} target="_blank">{cert.name} | {cert.acquiredDateString()}{cert.expirationDate === null ? "" : " - "}{cert.expirationDateString()}</a>
    );
}

export default Certification;