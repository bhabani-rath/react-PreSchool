import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import WhatsAppWidget from "@/components/common/WhatsAppWidget";
import BackToTop from "@/components/common/BackToTop";
import { StructuredDataScript } from "@/config/seoConfig.jsx";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <StructuredDataScript />

      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
    </div>
  );
};

export default RootLayout;