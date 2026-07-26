import Card from "@/components/card";
import Header from "@/components/Layouts/Header";
import Sidebar from "@/components/Layouts/Sidebar";
import Chart from "@/components/chart";
import ActiveProjects from "./(authentication)/activeProjects/page";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full absolute  ">
    <Sidebar/>

    <div className="flex-1 min-w-0 bg-gray-100">
    <Header/>
    <div className="flex gap-20 justify-between pt-6 pl-6 pr-6">
    <Card heading={"Project"} Num={"32"} task={"27 Completed"} image={"/project.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Active Task"} Num={"57"} task={"24 Completed"} image={"/task.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Teams"} Num={"6"} task={"Working"} image={"/team.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Productivity"} Num={"79%"} task={"Increasing Day by Day"} image={"/productivity.svg"}  hg={"50"} wd={"50"} />
    <Card heading={"Reviews"} Num={"32"} task={"Patner Reviews"} image={"/review.svg"}  hg={"50"} wd={"50"} />
    </div>
    <ActiveProjects/>
    <Chart />
    </div>

    </div>
  );
}
