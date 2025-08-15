import projects from "@/data/projects";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string }}) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return (
      <div className="card">
        <p>Proyecto no encontrado.</p>
        <Link href="/projects" className="underline mt-4 inline-block">Volver</Link>
      </div>
    );
  }
  return (
    <section className="space-y-6">
      <div className="card">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 opacity-80">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(t => <span key={t} className="px-2 py-1 rounded-lg border text-xs opacity-80">{t}</span>)}
        </div>
      </div>
      {project.codeSnippet && (
        <div className="card">
          <h2 className="text-lg font-semibold mb-2">Ejemplo de pipeline / IaC</h2>
          <pre className="overflow-auto rounded-xl bg-slate-100 dark:bg-slate-800 p-4 text-sm">
{project.codeSnippet}
          </pre>
        </div>
      )}
      <div className="card">
        <h2 className="text-lg font-semibold mb-2">Enlaces</h2>
        <div className="flex gap-3">
          {project.githubUrl && <a className="px-3 py-1 rounded-xl border hover:border-primary-400" href={project.githubUrl} target="_blank">GitHub</a>}
          {project.liveUrl && <a className="px-3 py-1 rounded-xl border hover:border-primary-400" href={project.liveUrl} target="_blank">Demo</a>}
          <Link className="px-3 py-1 rounded-xl border hover:border-primary-400" href="/projects">Volver a proyectos</Link>
        </div>
      </div>
    </section>
  );
}
