export const metadata = {
  title: "RCIC Practice OS",
  description: "RCIC Practice OS dev environment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
