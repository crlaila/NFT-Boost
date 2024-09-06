import "./globals.css";

export const metadata = {
  title: "NFT Boost",
  description: "Adentre no mundo dos NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
