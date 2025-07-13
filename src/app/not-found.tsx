import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist. Why not go take a look at the <Link href={"/"}>home page</Link> with my resume on it!</p>
        </div>
    );
}