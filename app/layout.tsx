import "./globals.css";
import "@/node_modules/react-modal-video/scss/modal-video.scss";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import ScrollToTopButton from "./components/ScrollToTopButton";
export const metadata = {
  title: "create next app",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="z-40 relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
