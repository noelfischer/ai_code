'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material';
import ResponsiveAppBar from './nav/ResponsiveAppBar';
import { usePathname } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })


type Metadata = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  url: string;
  robots: string;
};

export const metadata: Metadata = {
  title: 'AIExpert - Instant Code Reviews with AI',
  description: 'Get instant code reviews with AI Expert. Improve code quality and efficiency with automated code suggestions and bug detection.',
  keywords: 'AI Expert, code reviews, AI code analysis, bug detection, code quality improvement',
  author: "AIEX",
  url: "https://ai-code-review.web.app",
  robots: 'follow, index',
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#ad71f7',
    },
    primary: {
      main: '#fff',
    },
    action: {
      selected: '#08081f',
      disabled: '#08081f',
      disabledBackground: '#08081f',
    },
    background: {
      default: '#08081f',
      paper: '#161b22',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "Mona Sans,Mona Sans Header Fallback,Helvetica,Segoe UI",
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "Mona Sans,Mona Sans Header Fallback,Helvetica,Segoe UI",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingInline: 30,
          paddingBlock: 10,
          fontFamily: "Mona Sans,Mona Sans Header Fallback,Helvetica,Segoe UI",
          fontWeight: 700,
          fontSize: 20,
          textTransform: 'none',
          marginInline: 5,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingInline: 15,
          paddingBlock: 5,
        },
      },
    },
  },
})

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph and Twitter Card meta tags for social sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <link rel="canonical" href={metadata.url + pathName} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            {!pathName.startsWith("/signup") ? <ResponsiveAppBar /> : <></>}
            {children}
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
