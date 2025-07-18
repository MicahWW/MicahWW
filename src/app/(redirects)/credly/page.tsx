import { permanentRedirect } from 'next/navigation'

export default function CredlyRedirect() {
    permanentRedirect("https://www.credly.com/users/micah-warren");
}