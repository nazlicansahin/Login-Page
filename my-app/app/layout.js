import { AuthProvider } from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Product Management',
  description: 'Product Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>      <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  )
}
