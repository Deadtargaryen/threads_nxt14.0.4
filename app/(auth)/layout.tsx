import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
    title: 'Threads',
    description: 'Threads next14 v1.00 application'
}

export default function RootLayout({ 
    children
 } : {
    children: React.ReactNode
}) {
    return (
    <ClerkProvider>

    </ClerkProvider>
    )
}