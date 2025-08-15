import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: "ci-cd" | "iac" | "observability";
  codeSnippet?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex flex-col gap-4">
      <header>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-1 opacity-80">{project.summary}</p>
      </header>
      {project.codeSnippet && (
        <pre className="overflow-auto rounded-xl bg-slate-100 dark:bg-slate-800 p-4 text-sm">
{project.codeSnippet}
        </pre>
      )}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="px-2 py-1 rounded-lg border text-xs opacity-80">{t}</span>
        ))}
      </div>
      <div className="mt-1 flex gap-3">
        {project.githubUrl && (
          <a className="px-3 py-1 rounded-xl border hover:border-primary-400" href={project.githubUrl} target="_blank">GitHub</a>
        )}
        {project.liveUrl && (
          <a className="px-3 py-1 rounded-xl border hover:border-primary-400" href={project.liveUrl} target="_blank">Demo</a>
        )}
        <Link className="px-3 py-1 rounded-xl border hover:border-primary-400" href={`/projects/${project.slug}`}>Detalles</Link>
      </div>
    </article>
  );
}
