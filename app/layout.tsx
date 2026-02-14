import './globals.css';

export const metadata = {
  title: 'Clawgress — Agentic Firewalling',
  description: 'Enterprise‑grade open source firewalling for autonomous agents.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
