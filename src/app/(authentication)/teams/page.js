import Image from "next/image";
import Table from "@/components/table";

export default function Teams() {
  const teams = [
  {
    id: 1,
    name: "Anita Parmar",
    email: "anita@example.com",
    image: "/person.png",
    role: "Front End Developer",
    lastActivity: "3 May, 2023",
  },
  {
    id: 2,
    name: "Jitu Chauhan",
    email: "jituchauhan@example.com",
    image: "/person.png",
    role: "Project Director",
    lastActivity: "Today",
  },
  {
    id: 3,
    name: "Sandeep Chauhan",
    email: "sandeepchauhan@example.com",
    image: "/person.png",
    role: "Full- Stack Developer",
    lastActivity: "Yesterday",
  },
  {
    id: 4,
    name: "Amanda Darnell",
    email: "amandadarnell@example.com",
    image: "/person.png",
    role: "Account Manager",
    lastActivity: "3 May, 2023",
  },
];

const teamColumns = [
  {
    key: "name",
    label: "Name",

    render: (row) => (
      <div className="flex items-center gap-5">
        <Image
          src={row.image}
          alt={row.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover" />

        <div>
          <p className="font-medium text-gray-900"> {row.name} </p>
          <p className="text-gray-900"> {row.email} </p>
        </div>
      </div>
    ),
  },

  {
    key: "role",
    label: "Role",
  },

  {
    key: "lastActivity",
    label: "Last Activity",
  },

  {
    key: "actions",
    label: "",

    render: () => (
      <button className="text-gray-400 text-xl"> ⋮ </button>
    ),
  },
];
  return (
    <div className="p-8 flex flex 1">
      <Table title="Teams" columns={teamColumns} data={teams} /> 
    </div>
  );
}
