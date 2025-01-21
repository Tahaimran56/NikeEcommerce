import Footer from "../components/footer";
import "./globals.css";
import Navbar from "../components/navbar";
import { CartProvider } from "../context/cartcontext";
import { WishlistProvider } from "../context/wishlistcontext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            {children}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
