import "./globals.css";
import localFont from "next/font/local";
import { ScrollProvider } from "./components/Providers/ScrollProvider";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
});

export const metadata = {
  title: "Akash Singh Gusain | Backend Engineer",
  description:
    "A premium developer portfolio showcasing backend engineering, microservices, and cloud-native systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
