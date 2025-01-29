import type { Metadata } from "next";
import "./globals.css";

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
