import "./globals.css";

export const metadata = {
  title: "HSTECH",
  description: "Fabricación de piezas maquinadas CNC en Querétaro y CDMX",
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
