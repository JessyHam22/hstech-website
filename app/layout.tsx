import "./globals.css";

export const metadata = {
  title: "HSTECH",
  description: "Manufactura de precisión",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
