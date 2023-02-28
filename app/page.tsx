import { Inter } from 'next/font/google'
import RootLayout from './layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main>
        <h1 className="container font-sans text-5xl text-blue-50">Welcome</h1>
      </main>
    </RootLayout>
  )
}
