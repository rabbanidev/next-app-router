import "./globals.css";

export const metadata = {
  title: "Next App Router",
  description: "next app router explore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
