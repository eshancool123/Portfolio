import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eshan Senadhi - Software Engineer | Portfolio",
  description: "IT Undergraduate at University of Moratuwa, passionate about full-stack development, AI/ML, and solving real-world problems with technology.",
  keywords: "Eshan Senadhi, Software Engineer, Full Stack Developer, React, Next.js, Node.js, Portfolio, University of Moratuwa",
  author: "Eshan Senadhi",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Eshan Senadhi - Software Engineer Portfolio",
    description: "IT Undergraduate at University of Moratuwa, passionate about full-stack development and innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}