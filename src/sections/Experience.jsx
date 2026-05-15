import { SectionTitle } from "../components/SectionTitle";
import { Tag } from "../components/Tag";

export function Experience() {
    return (
        <section className="mb-16">
            <SectionTitle>EXPERIENCE</SectionTitle>

            <header className="mt-4 text-xs font-semibold text-surface/60">
                2025 — PRESENT
            </header>

            <div className="mt-4">
                <h3 className="text-m font-medium">
                    Full-Stack Developer – Professional Internship • RACSA
                </h3>

                <p className="mt-4 text-sm font-light tracking-wide leading-6">
                    Full-stack development of a self-managed e-learning platform using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database design, backend and frontend. Implementation of a user, course and enrollment management system with role-based access control. Development of an administrative reporting module and audit system. Design and implementation of a complete authentication flow with email verification and credential recovery. The project was adopted as the technological base for a solution launched to the Costa Rican market.
                </p>

                <ul className="mt-4 flex flex-wrap text-xs font-medium leading-5">
                    <Tag>Blazor</Tag>
                    <Tag>.Net Core</Tag>
                    <Tag>Tailwind CSS</Tag>
                </ul>
            </div>
        </section>
    )
}