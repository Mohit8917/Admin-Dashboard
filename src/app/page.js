import Card from "@/components/card";
import Header from "@/components/Layouts/Header";
import Sidebar from "@/components/Layouts/Sidebar";

export default function Home() {
  return (
  
    <div className="flex min-h-screen w-full">
    <Sidebar/>

    <div className="flex-1 min-w-0">
    <Header/>
    </div>
      
    </div>
  );
}
