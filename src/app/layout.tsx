import Footer from "../components/footer";
import "./globals.css";
import Navbar from "../components/navbar";
import { CartProvider } from "../context/cartcontext";
import { WishlistProvider } from "../context/wishlistcontext";
import { ClerkProvider } from "@clerk/nextjs";  // Import ClerkProvider

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
