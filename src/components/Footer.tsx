import styles from "@/styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
                This page was created with the use of <a target="_blank" href="https://nextjs.org/">Next.js</a> and <a target="_blank"
                href="https://react.dev/">React</a> with <a target="_blank" href="https://www.typescriptlang.org/">TypeScript</a> and
                hosted on Azure using <a target="_blank" href="https://azure.microsoft.com/en-us/products/app-service">Azure App Service</a>. To see the source code, visit the <a target="_blank" href="https://github.com/MicahWW/MicahWW">repo on
                GitHub</a>.
        </footer>
    );
}

export default Footer;