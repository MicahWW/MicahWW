import styles from '@/styles/linkableHeader.module.css';
import { LinkIcon } from "@primer/octicons-react";

type linkableHeaderProps = {
    id: string;
    title: string;
}

const LinkableHeader = ({id,  title }: linkableHeaderProps) => {
    return (
        <a href={`#${id}`} className={styles.linkableHeader}>
            <div className={styles.linkIcon}><LinkIcon fill="#fff" size={16} /></div>
            <span>{title}</span>
        </a>
    );
}

export default LinkableHeader;