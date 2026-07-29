import ActivityFeed from "@/app/tables/ActivityFeed/page";
import MyTeams from "@/app/tables/myTeams/page";
import ProjectContributions from "@/app/tables/ProjectContributions/page";

export default function Profile() {
  return (
    <div className="bg-gray-200 flex flex-col flex-1 p-5">

      <h1 className="text-gray-800 font-bold p-5 text-2xl">Overview</h1>
      <hr className="p-2 outline-gray-900"/>

      <div className="bg-white p-5 flex flex-col flex-1 rounded">
        <h1>About Me</h1>
        <p>BIO</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse
          var ius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <p>POSITION</p>
        <p>Theme designer at Bootstrap.</p>
   
    <div className="flex gap-20">
    <div>
        <p>PHONE</p>
        <p>+91 XXXXX XXXXX</p>
    </div>
    <div>
        <p>Email</p>
        <p>popaya@gmail.com</p>
    </div>
    </div>
      </div>
      
      <ProjectContributions />
      <MyTeams />
      <ActivityFeed />
    </div>
  );
}
