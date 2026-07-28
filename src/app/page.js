import Card from "@/components/card";
import Header from "@/components/Layouts/Header";
import Sidebar from "@/components/Layouts/Sidebar";
import Chart from "@/components/chart";
import ActiveProjects from "./(authentication)/activeProjects/page";
import Teams from "./(authentication)/teams/page";
import Projects from "./tables/ProjectContributions/page";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full absolute">
    <Sidebar className="fixed"/>

    <div className="flex-1 min-w-0 bg-gray-100 pl-64">
    <Header/>
    <div className="flex gap-8 justify-between pt-6 pl-6 pr-6">
    <Card heading={"Project"} Num={"32"} task={"27 Completed"} image={"/project.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Active Task"} Num={"57"} task={"24 Completed"} image={"/task.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Teams"} Num={"6"} task={"Working"} image={"/team.svg"}  hg={"50"} wd={"50"} />
    {/* <Card heading={"Product"} Num={"79%"} task={`Increasing Day by Day`} image={"/productivity.svg"}  hg={"60"} wd={"60"} /> */}
    <Card heading={"Reviews"} Num={"32"} task={"Patner Reviews"} image={"/review.svg"}  hg={"50"} wd={"50"} />
    </div>
    <ActiveProjects/  >

    <div className="flex flex-1 min-w-0">
    <Chart/>
    <Teams/>
    </div>
    <Projects/>

    </div>

    </div>
  );
}
