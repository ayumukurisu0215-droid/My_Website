// src/app/projects/page.tsx
import { projects, type Project } from '@/data/projects';

export default function ProjectsPage() {
  // 不正データや重複を除去して、表示件数が意図せず増えないようにガード
  const uniqueProjects = projects
    .filter((p): p is Project => Boolean(p && p.id && p.title))
    .filter(
      (p, idx, arr) => arr.findIndex((item) => item.id === p.id) === idx
    );

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects 🚀</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {uniqueProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-100">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-2 space-y-3">
              <p className="text-sm font-semibold text-gray-700">Links</p>
              <ul className="space-y-2">
                {project.links.map((link) => (
                  <li key={`${project.id}-${link.url}`} className="text-sm">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col gap-1 text-gray-600 hover:text-blue-600"
                    >
                      <span className="font-medium underline">
                        {link.label}
                      </span>
                      <span className="text-xs text-gray-400 break-all">
                        {link.url}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}