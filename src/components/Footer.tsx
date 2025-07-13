import styles from "@/styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* TODO: update where hosted once that happens */}
                This page was created with the use of <a href="https://nextjs.org/">Next.js</a> and <a
                href="https://react.dev/">React</a> with <a href="https://www.typescriptlang.org/">TypeScript</a> and
                hosted on TBD. To see the source code, visit the <a href="https://github.com/MicahWW/MicahWW">repo on
                GitHub</a>.
        </footer>
    );
}

export default Footer;