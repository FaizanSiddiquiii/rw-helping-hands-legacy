import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;