import bunatetu from "../../../public/bunatetu.jpg";
import reactEcom from "../../../public/ecommerce.jpg";
import studentcms from "../../../public/download.jpg";
import career_ai from "../../../public/career_ai";
import Image from "next/image";
export default function Page() {
  const projects = [
    {
      title: "CareerAI",
      description: "An AI-driven web application that recommends personalized career paths based on users’ skills, interests, and goals, helping them explore suitable professions and plan their growth effectively.",
      image:career_ai, // Replace with your image path
      performance: { performance: 100, accessibility: 100, seo: 90 },
      tech: [
        "**Frontend:** Next.js",
        "**Backend:** Next.js API Routes",
        "**Database:** Supabase (PostgreSQL)",
        "**ORM:** Prisma ORM",
        "**Authentication:** Next",
        "**AI-integration:** gemini-2.5",

      ],
      github: "https://github.com/Sam44556/AI-Powered-Career-Path-web", 
      live: "https://ai-powered-career-path-web.vercel.app/",
    },
    {
      title: "E-commerce ",
      description: "A high-performance Progressive Web App with offline capabilities.",
      image:reactEcom, 
      performance: { performance: 98, accessibility: 100, seo: 50 },
      tech: [
        "**Frontend:** React, Progressive Web App features",
        "**Backend:** Node.js, RESTful APIs",
        "**Database:** MongoDB",
        "**Authentication:** Google Authentication",
      ],
      github: "https://github.com/Sam44556/ecommerce", // 👈 Add GitHub link
      live: "",
    },
    {
      title: " Chat App",
      description: " my summer internship capstone project, I worked as a Backend Developer on a real-time chat application that enables users to communicate through individual and group chats, send text messages and files, and update their profiles.", 
      image: bunatetu, // Replace with your image path
       performance: { performance: 90, accessibility: 90, seo: 70 },
      tech: [
        "**My Role:** Backend Developer",
        "**Framework:** Next.js",
        "**ORM:** Prisma ORM",
        "**Database:** Supabase",
        "**Authentication:** JWT (JSON Web Tokens) & Bcrypt",
        "**API:** Middleware for authentication and validation",
      ],
      github: "https://github.com/Afomiya21-negash/chat-app", // 👈 Add GitHub link
      live: "https://chat-app-b12t.vercel.app/",
    },
     {
  title: "Student-Course-Management-System",
  description: "A backend API project built to manage courses, enrollments, assignments, and grading with secure role-based authentication for admins, instructors, and students.",
  image: studentcms, // Replace with your image path
  performance: { performance: 80, accessibility: 80 },
  tech: [
    "**My Role:** Backend Developer",
    "**Framework:** Django REST Framework",
    "**Database:** PostgreSQL",
    "**ORM:** Django ORM",
    "**Authentication:** JWT (JSON Web Tokens)",
    "**Features:** Role-based access, Course & Enrollment Management, Assignment Submission & Grading",
  ],
  github: "https://github.com/Sam44556/Student-Course-Management-System",
  live: "",
}

  ];

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8" id="projects">
      <div className="max-w-7xl mx-auto  mb-12">
        <h2 className="text-3xl md:text-4xl ml-12 font-bold text-purple-500"> Projects</h2>
      </div>
      <p className="text-gray-400 text-base md:text-lg">
    Some of my recent projects demonstrating my work and experience.
  </p>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black rounded-2xl p-8 border-2 border-purple-500 shadow-purple-500/50 shadow-xl hover:shadow-purple-500/70 transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Column */}
              <div className="flex justify-center items-center">
                 <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-xl shadow-lg"
                width={600}
                height={400}
              />
              </div>

              {/* Description Column */}
              <div className="flex flex-col justify-center md:order-2">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                {project.performance && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Performance Metrics</h4>
                    <div className="flex justify-between md:justify-start md:gap-8 text-center">
                      <div>
                        <span className="block text-2xl font-bold text-green-400">
                          {project.performance.performance}
                        </span>
                        <span className="text-sm text-gray-400">Performance</span>
                      </div>
                      <div>
                        <span className="block text-2xl font-bold text-green-400">
                          {project.performance.accessibility}
                        </span>
                        <span className="text-sm text-gray-400">Accessibility</span>
                      </div>
                      <div>
                        <span className="block text-2xl font-bold text-green-400">
                          {project.performance.seo}
                        </span>
                        <span className="text-sm text-gray-400">SEO</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.tech && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Technical Implementation</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {project.tech.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                 {/* Links */}
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 border border-purple-500 rounded-lg hover:bg-purple-600 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
