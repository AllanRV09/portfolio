import { ExperienceItem } from "../components/ExperienceItem";
import { SectionTitle } from "../components/SectionTitle";

// Tu misión (si decides aceptarla):
//    1. Crea un array de objetos llamado EXPERIENCES. 
//    Cada objeto debe tener: year, title, description y un
//       array de tags.
//    2. Crea un componente ExperienceItem que reciba un objeto de esa lista.
//    3. Usa el componente Tag que ya creaste dentro de ExperienceItem.

const EXPERIENCES = [
    {
        year: "2025 — PRESENT",
        title: "Full-Stack Developer – Professional Internship • RACSA",
        description: "Full-stack development of a self-managed e-learning platform using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database design, backend and frontend. Implementation of a user, course and enrollment management system with role-based access control. Development of an administrative reporting module and audit system. Design and implementation of a complete authentication flow with email verification and credential recovery. The project was adopted as the technological base for a solution launched to the Costa Rican market.",
        tags: [
            "Blazor",
            ".Net Core",
            "Tailwind CSS",
        ]
    },
]

export function Experience() {
    return (
        <section className="mb-16">
            <SectionTitle>EXPERIENCE</SectionTitle>

            {
                EXPERIENCES.map((experience) => (
                    <ExperienceItem
                        key={experience.title}
                        experience={experience}
                    />
                ))
            }
        </section>
    )
}