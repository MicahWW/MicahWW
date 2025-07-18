import Navbar from "@/components/Navbar";
import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Micah Warren",
  description: "Some info about me, Micah Warren.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={ubuntu.className}>
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <Navbar />
                <div id="page-wrapper">
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
