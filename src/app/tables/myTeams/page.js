import Image from "next/image";
import Table from "@/components/table";

export default function MyTeams() {
  const teams = [
  {
    id: 1,
    name: "Anita Parmar",
    image: "/person.png",
    role: "Front End Developer",
    call:"/phone.svg",
    video:"video-call.svg"
  },
  {
    id: 2,
    name: "Jitu Chauhan",
    image: "/person.png",
    role: "Project Director",
    call:"/phone.svg",
    video:"video-call.svg"
  },
  {
    id: 3,
    name: "Sandeep Chauhan",
    image: "/person.png",
    role: "Full- Stack Developer",
    call:"/phone.svg",
    video:"video-call.svg"
  },
  {
    id: 4,
    name: "Amanda Darnell",
    image: "/person.png",
    role: "Account Manager",
    call:"/phone.svg",
    video:"video-call.svg"
  },
];

const teamColumns = [
  {
    key: "name",
    render:(row)=>(

            <div className="flex gap-4">
                <Image
                src={row.image}
                alt={row.name}
                height={40}
                width={40}
                className="border-2 border-gray-400 rounded-full h-10 w-10 p-1"
                />

                <div>
                    <p>{row.name}</p>
                    <p>{row.role}</p>
                </div>
                
            </div>
)
    },
  {
      key: "phone",
      render:(row)=>(
            <Image
            src={row.call}
            alt={row.name}
            height={30}
            width={30}
            className="flex h-5 w-5"
            />
        )
    },
    
    {
        key: "videocall",
        render:(row)=>(
            <Image
            src={row.video}
            alt={row.name}
            height={30}
            width={30}
            className="flex h-5 w-5"
            />
        )
    }
]

return(
    <div className="p-5">
        <Table title="My Team" showHeader={false} columns={teamColumns} data={teams}/>
    </div>
)

}