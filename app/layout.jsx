import "@styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@components/Footer";
import AuthProvider from "@components/AuthProvider";

export const metadata = {
  title: "prompt",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gradient-to-r from-blue-950 to-gray-600 p-5">
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow pb-16">
              {" "}
              {/* pb-16 is padding-bottom: 4rem */}
              <Nav />
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
};

export default RootLayout;
