export default function Page() {
  const skills = [
    {
      title: "Frontend Development",
      icon: (
       <svg
  className="w-8 h-8 text-yellow-500"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M16 18l6-6-6-6" />
  <path d="M8 6l-6 6 6 6" />
</svg>

      ),
      items: [
        { name: "React & Next.js", level: "95%", color: "bg-blue-500" },
        { name: "TypeScript", level: "90%", color: "bg-blue-500" },
        { name: "Tailwind CSS", level: "95%", color: "bg-blue-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: (
        <svg
  className="w-8 h-8 text-yellow-400"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="4" width="18" height="6" rx="1" ry="1" />
  <rect x="3" y="14" width="18" height="6" rx="1" ry="1" />
  <line x1="6" y1="4" x2="6" y2="20" />
</svg>

      ),
      items: [
        { name: "Node.js", level: "90%", color: "bg-green-500" },
        { name: "Django", level: "60%", color: "bg-green-500" },
        { name: "RESTful APIs", level: "95%", color: "bg-green-500" },
      ],
    },
    {
      title: "Databases & ORM",
      icon: (
       <svg
  className="w-8 h-8 text-purple-500"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
  <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
</svg>

      ),
      items: [
        {
          name: "Database Design ",
          level: "90%",
          color: "bg-purple-500",
        },
        { name: "Prisma ORM", level: "80%", color: "bg-purple-500" },
        { name: "Supabase", level: "85%", color: "bg-purple-500" },
        { name: "MongoDB", level: "75%", color: "bg-purple-500" },
      ],
    },
    {
      title: "Authentication & Security",
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM12 21c-4.97-1.5-8-6.13-8-10V6.5l8-3.5 8 3.5V11c0 3.87-3.03 8.5-8 10z" />
        </svg>
      ),
      items: [
        { name: "Google Auth", level: "88%", color: "bg-red-500" },
        { name: "JWT", level: "82%", color: "bg-red-500" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white mt-0 px-4" id="skills">
      <div className="max-w-4xl ml-12 mb-12">
        <h2 className="text-4xl sm:text-4xl font-bold text-purple-500">Technical Skills</h2>
      </div>
       <p className="text-gray-400 text-base md:text-lg">
    Technologies and tools I use to build modern web applications.
  </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
        {skills.map((category) => (
          <div
            key={category.title}
            className="bg-black shadow-purple-500 p-6 rounded-lg shadow-lg flex flex-col items-center h-full"
          >
            <div className="flex items-center mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
            </div>
            <div className="w-full space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span>{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color}`}
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
