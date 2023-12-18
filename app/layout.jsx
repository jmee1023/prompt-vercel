import "@styles/globals.css"
import Nav from "@/components/Nav"
import Footer from "@components/Footer"

export const metadata = {
    title: "prompt",
    description: "Discover and share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout