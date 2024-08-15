import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { P } from "shadcn-typography";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octroi de mer à la Réunion",
  description: "Calculer vos taxes d'octroi de mer externe à la Réunion",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⛴️</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={jost.className}>
        {children}
        <footer className={"container py-12 text-center"}>
          <P className={"font-semibold"}>{new Date().getFullYear()} - Octroi de mer à la Réunion</P>
        </footer>
      </body>
    </html>
  );
}
