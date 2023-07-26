import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <section className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-2">
          <Sidebar />
        </div>
        <main className="col-span-1 lg:col-span-10 p-2">{children}</main>
      </section>
    </>
  );
};

export default DashboardLayout;
