import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const WithLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] max-w-7xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default WithLayout;
