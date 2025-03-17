import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hilios Clone',
  description: 'A modern clone of the Hilios project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Navbar />
        <main className="min-h-screen py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 