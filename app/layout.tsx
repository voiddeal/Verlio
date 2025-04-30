import type { Metadata } from "next"
import AppProviders from "@/providers/AppProviders"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Verlio",
  description: "Restaurant",
}

export default function RootLayout({
  children,
  header,
  footer,
  bottomNavbar,
}: Readonly<{
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  bottomNavbar: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden relative">
        <AppProviders>
          <div className="absolute size-full bg-[url('/food-pattern-light.jpg')] bg-repeat bg-contain bg-center opacity-[0.45%] -z-20"></div>
          {header}
          {children}
          {footer}
          {bottomNavbar}
          <Analytics />
        </AppProviders>
      </body>
    </html>
  )
}
