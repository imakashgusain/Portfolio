import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ScrollProvider } from "./components/Providers/ScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-slate-950 text-slate-100`}
      >
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
