import Table from "@/components/table";
import Image from "next/image";
export default function ProjectContributions(){
    const projects=[
        {
            id:1,
            name:"Slack Figma Design UI",
            desc:"Project description and details about...",
            image:"/slake.jpg",
        },
        {
            id:2,
            name:"3D Character Modeling",
            desc:"Project description and details about...",
            image:"/3d-modeling.jpg",
        },
        {
            id:3,
            name:"Dropbox Design System",
            desc:"Project description and details about...",
            image:"/dropbox.png",
        },
        {
            id:4,
            name:"Webapp Design System",
            desc:"Project description and details about...",
            image:"/webapp.png",
        },
        {
            id:5,
            name:"GitHub Event Design",
            desc:"Project description and details about...",
            image:"/github.png",
        }
    ];

    const projectColumns=[
        {
            key:"logo",
            // label:"Project Contributions",
            render:(row)=>(
                <div className="flex gap-4">
                    <Image 
                    src={row.image}
                    alt={row.name}
                    height={30}
                    width={30}
                    className=" h-10 w-10 border-1 border-gray-300 p-1 rounded-sm"/>
                <div>
                    <p>{row.name}</p>
                    <p>{row.desc}</p>
                </div>
                </div>
            )
        },
        {
            key:"actions",
            // label:"",
            render:()=>(
                <button className="text-xl text-slate-400">:</button>
            )
        }
    ]

    return(
        <div className="p-8 flex flex-1">
            <Table title="Projects Contributions" showHeader={false} columns={projectColumns} data={projects}/>
        </div>
    )
}