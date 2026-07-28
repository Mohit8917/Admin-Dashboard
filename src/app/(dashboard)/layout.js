import Sidebar from "@/components/Layouts/Sidebar";
import Header from "@/components/Layouts/Header";

export default function DashboardLayout({ children }) {
  return (
    <div>
    {/* // <div className="flex min-h-screen">
    //   <Sidebar />

    //   <div className="flex-1 pl-64 bg-gray-100">
    //     <Header /> */}

        <main>{children}</main>
    </div>
  );
}