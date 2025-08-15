export default function Skills() {
  const skills = [
    { name: "Docker", desc: "Contenerización y multi-stage builds" },
    { name: "Kubernetes", desc: "Despliegues, Services, Ingress, Helm (básico/medio)" },
    { name: "AWS", desc: "EC2, S3, IAM, CloudWatch, VPC" },
    { name: "Terraform", desc: "Módulos, workspaces, backends remotos" },
    { name: "CI/CD", desc: "Jenkins, GitHub Actions, pruebas y despliegues" },
    { name: "Observabilidad", desc: "Grafana, alertas y tableros" },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <div key={s.name} className="card">
          <h3 className="text-xl font-semibold">{s.name}</h3>
          <p className="mt-2 opacity-80">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}
