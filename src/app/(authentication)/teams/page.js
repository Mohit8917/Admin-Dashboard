import Image from "next/image";
import Table from "@/components/table";

export default function Teams() {
  const teams = [
  {
    id: 1,
    name: "Anita Parmar",
    email: "anita@example.com",
    image: "/anita.jpg",
    role: "Front End Developer",
    lastActivity: "3 May, 2023",
  },
  {
    id: 2,
    name: "Jitu Chauhan",
    email: "jituchauhan@example.com",
    image: "/jitu.jpg",
    role: "Project Director",
    lastActivity: "Today",
  },
  {
    id: 3,
    name: "Sandeep Chauhan",
    email: "sandeepchauhan@example.com",
    image: "/sandeep.jpg",
    role: "Full- Stack Developer",
    lastActivity: "Yesterday",
  },
  {
    id: 4,
    name: "Amanda Darnell",
    email: "amandadarnell@example.com",
    image: "/amanda.jpg",
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

        {/* Profile Image */}
        <Image
          src={row.image}
          alt={row.name}
          width={50}
          height={50}
          className="h-12 w-12 rounded-full object-cover"
        />

        {/* Name and Email */}
        <div>
          <p className="font-medium text-gray-900">
            {row.name}
          </p>

          <p className="text-gray-900">
            {row.email}
          </p>
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
      <button className="text-gray-400 text-xl">
        ⋮
      </button>
    ),
  },
];
  return (
    <div className="p-8">
      <Table
        title="Active Projects"
        columns={teamColumns}
        data={teams}
      />
    </div>
  );
}
