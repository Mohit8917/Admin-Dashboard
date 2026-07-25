import Image from "next/image";
import Table from "@/components/table";

export default function ActiveProjects(){
    
const projects = [
{
    id: 1,
    project: "Dropbox Design System",
    image: "/dropbox.png",
    hours: 34,
    priority: "Medium",
    progress: 15,
},
{
    id: 2,
    project: "Slack Team UI Design",
    image: "/slake.jpg",
    hours: 47,
    priority: "High",
    progress: 35,
},
{
    id: 3,
    project: "GitHub Satellite",
    image: "/github.png",
    hours: 120,
    priority: "Low",
    progress: 75,
},
{
    id: 4,
    project: "3D Character Modeling",
    image: "/3d-modeling.jpg",
    hours: 89,
    priority: "Medium",
    progress: 63,
},
{
    id: 5,
    project: "Webapp Design System",
    image: "/webapp.png",
    hours: 108,
    priority: "Track",
    progress: 100,
},
{
    id: 6,
    project: "GitHub Event Design",
    image: "/github.png",
    hours: 120,
    priority: "Low",
    progress: 75,
},
];

 const columns = [
        {
            key: "project",
            label: "Project Name",
            render: (row) => (
                <div className="flex items-center gap-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200">
          <Image
            src={row.image}
            alt={`${row.project} logo`}
            width={30}
            height={30}
            />
        </div>

        <span className="font-medium text-gray-900">
          {row.project}
        </span>
      </div>
    ),
},
{
    key: "hours",
    label: "Hours",
},
{
    key: "priority",
    label: "Priority",
},

{
  key: "progress",
  label: "Progress",

  render: (row) => (
    <div className="flex items-center gap-4">

      {/* Percentage */}
      <span className="w-10">
        {row.progress}%
      </span>

      {/* Progress Bar */}
      <div className="h-1.5 w-28 rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-violet-600"
          style={{
            width: `${row.progress}%`,
          }}
        />

      </div>

    </div>
  ),
}

];

return (
    <div className="p-8">
      <Table title="Active Projects" columns={columns} data={projects} footerText="View Projects" />
    </div>
  );
}