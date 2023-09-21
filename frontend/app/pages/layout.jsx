import Footer from '@/Components/Footer'
import Headers from '@/Components/Headers'


export default function RootLayout({ children }) {
    return (
        <>
            <Headers />
            {children}
            <Footer />
        </>
    )
}