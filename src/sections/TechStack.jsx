import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiBlazor, SiDotnet, SiMongodb } from "react-icons/si";
import { DiMsqlServer, DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

export function TechStack() {
    return (
        <section className="mb-30">
            <h2 className="mb-4 py-5 font-bold tracking-wider">MY STACK</h2>

            <div>
                <h3 className="mb-2 text-xl font-semibold">FRONTEND</h3>

                <div className="mb-8 flex flex-wrap gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <IoLogoJavascript className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">JavaScript</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <FaReact className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">React</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <RiTailwindCssFill className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Tailwind CSS</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <RiNextjsFill className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Next.js</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <TbBrandFramerMotion className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Framer Motion</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <SiBlazor className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Blazor</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-2 text-xl font-semibold">BACKEND</h3>

                <div className="mb-8 flex flex-wrap gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <SiDotnet className="w-10 h-10 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">.Net Core</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <FaNodeJs className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Node.js</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-2 text-xl font-semibold">DATABASE</h3>

                <div className="mb-8 flex flex-wrap gap-6">
                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <DiMsqlServer className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">SQL Server</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <DiPostgresql className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">PostgreSQL</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <SiMongodb className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">MongoDB</span>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <GrMysql className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">MySQL</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-2 text-xl font-semibold">TOOLS</h3>

                <div className="flex flex-wrap gap-2 items-center">
                        <p>
                            <FaGitAlt className="w-8 h-8 hover:text-accent transition-colors" />
                        </p>
                        <span className="text-lg font-light">Git</span>
                    </div>
            </div>
        </section>
    )
}