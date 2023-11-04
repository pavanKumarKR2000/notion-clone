import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The notion alternative",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logo-light.svg",
        href: "/logo-light.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-key"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

/** -------------------- some note on next.js ------------------------------ */
/** every folder inside the app folder is a router */
/** every routing folder can have page,layout,loading,error pages*/
/** to not to be a route inside the app folder put _ ,ex:_components */
/** to label the routes wrap the folder in parentesis (about)/about/page.tsx */
/** put all images and favicons in public folder */
/** by default all components inside the app folder is server component */
