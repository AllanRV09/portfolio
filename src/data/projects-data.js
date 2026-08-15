import racsaProjectImage640 from "../assets/images/projects/racsa-elearning-platform-640.webp"
import racsaProjectImage960 from "../assets/images/projects/racsa-elearning-platform-960.webp"

export const PROJECTS = [
    {
        title: "Self-Managed E-Learning Platform",
        description: "Full-stack development of a self-managed e-learning platform for RACSA using Blazor, .NET Core 9, SQL Server and Tailwind CSS, including database modeling, backend APIs and frontend interfaces. Implemented authentication and authorization flows with role-based access control, email verification and credential recovery, alongside user, course and enrollment management, reporting and audit modules. The platform was later adopted as the technological foundation for a solution launched to the Costa Rican market.",
        image: racsaProjectImage640,
        imageSrcSet: `${racsaProjectImage640} 640w, ${racsaProjectImage960} 960w`,
        link: null
    },
]

export const PROJECTS_DATA = { index: "05", label: "Projects", title: "My work" }
