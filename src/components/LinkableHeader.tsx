import styles from '@/styles/linkableHeader.module.css';

type linkableHeaderProps = {
    id: string;
    title: string;
}

const LinkableHeader = ({id,  title }: linkableHeaderProps) => {
    return (
        <a href={`#${id}`} className={styles.linkableHeader}>
            <div className={styles.linkIcon}>🔗</div>
            <span>{title}</span>
        </a>
    );
}

export default LinkableHeader;