import { permanentRedirect } from 'next/navigation'

export default async function GitHubPathRedirect({ params }: { params: Promise<{ path: string[] }> }) {
    const { path } = await params;
    permanentRedirect(`https://github.com/MicahWW/${path.join('/')}`);
}