import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export const metadata = {
  title: "Proyectos | DevOps Portfolio",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <div className="card">
        <h1 className="text-3xl font-bold">Proyectos</h1>
        <p className="mt-2 opacity-80">
          Selección de trabajos con pipelines CI/CD, Infraestructura como Código y prácticas de observabilidad.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
