import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-10">
      <div className="card">
        <h1 className="text-3xl md:text-4xl font-bold">Hola, soy Dennys Cedeño — DevOps Engineer</h1>
        <p className="mt-4 text-lg leading-relaxed">
          Diseño y automatizo plataformas en la nube con <strong>CI/CD</strong>, contenedores y <strong>Infraestructura como Código</strong>.
          Experiencia en <strong>Azure</strong> y <strong>AWS</strong> para clientes como Kaplan, Slingshot y Giving Gap a través de Singularity Box LLC.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="px-4 py-2 rounded-xl bg-primary-400/20 text-primary-500 border border-primary-400 hover:bg-primary-400/30">
            Ver proyectos
          </Link>
          <a href="https://github.com/dennys9415" className="px-4 py-2 rounded-xl border hover:border-primary-400" target="_blank">Github</a>
          <a href="https://linkedin.com/in/dcedenor" className="px-4 py-2 rounded-xl border hover:border-primary-400" target="_blank">LinkedIn</a>
          <a href="https://thesingularitybox.com/" className="px-4 py-2 rounded-xl border hover:border-primary-400" target="_blank">Singularity Box LLC</a>
          <a href="https://www.credly.com/users/dennys-cedeno/badges#credly" className="px-4 py-2 rounded-xl border hover:border-primary-400" target="_blank">Badges</a>
          <a href="mailto:dennys9415@gmail.com" className="px-4 py-2 rounded-xl border hover:border-primary-400">Contactar</a>
        </div>
      </div>
      <Skills />
    </section>
  );
}
