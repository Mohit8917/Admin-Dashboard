import Table from "@/components/table"
import Image from "next/image"

export default function ActivityFeed(){
    const teams=[
    {
        id: 1,
        name: "Anita Parmar",
        image: "/person.png",
        desc: "Just create a new Project in Dashui...",
  },
    {
        id: 2,
        name: "Anita Parmar",
        image: "/person.png",
        desc:"Comment on Bootstrap Tutorial Says Hi, I m irene..."
  },
    {
        id: 3,
        name: "Anita Parmar",
        image: "/person.png",
        desc:"Just share your article on Social Media.."
  },
]
  
  const teamColumns = [
    {
      key: "name",
      render:(row)=>{
        return(

            <div className="flex gap-4">
                  <Image
                  src={row.image}
                  alt={row.name}
                  height={40}
                  width={40}
                  className="h-10 w-10 p-1 border-1 border-gray-400 rounded-full"
                  />
  
                  <div>
                      <p>{row.name}</p>
                      <p>{row.desc}</p>
                  </div>
                  
              </div>
    )
      }
    },
]

return(
    <div className="p-5">
        <Table title="Activity Feed" showHeader={false} columns={teamColumns} data={teams}/>
    </div>
)
}