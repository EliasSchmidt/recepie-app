import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recepies",
  description: "Share your recepies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="p-4">
            <h1 className="text-start">Recipes</h1>
            <Link href={`/new`}>+</Link>
            
          </div>
          <hr />
        </div>
        <div className="p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
