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
        <body className="bg-gradient-to-r from-gray-800 to-gray-600 p-5">
            <main>
                <Nav />
                {children}
            </main>
            <Footer/>
        </body>
        
    </html>
  )
}

export default RootLayout