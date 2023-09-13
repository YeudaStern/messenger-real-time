import './globals.css'
import AuthContext from './components/context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './components/context/ToasterContext'
import { ThemeProvider } from './components/theme-provider'

export const metadata = {
  title: 'Messenger',
  description: 'Messenger Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <AuthContext>
            <ToasterContext />
            <ActiveStatus />
            {children}
          </AuthContext>
        </ThemeProvider>
      </body>
    </html>
  )
}