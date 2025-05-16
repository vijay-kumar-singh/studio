import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/providers';
import { ThemeProvider } from 'next-themes';
import CookieConsentClient from '@/components/cookie-consent-client';


const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Portfolio Pro - Build Your Professional Resume and Portfolio',
  description: 'Create and showcase your professional portfolio and resume with Portfolio Pro. Utilize AI tools to improve your resume.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <Footer />
            </div>
            <CookieConsentClient />
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
};
