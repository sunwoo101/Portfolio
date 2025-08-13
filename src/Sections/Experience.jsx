import Job from "../Components/Job";

const jobs = [
    {
        name: 'Eggsterant',
        position: 'Full-Stack Software Engineer',
        location: 'Sydney, Australia (Remote)',
        date: 'Jun 2022 — Present',
        description: 'Built a full-stack platform with React and ASP.NET Core for 1,500+ users, featuring secure auth, license management, and obfuscated executables. Developed WinForms input tools, managed CI/CD on a VPS, and led remote support to improve onboarding and operations.',
        stack: [
            'C#', 'Python', 'JavaScript', 'ASP.NET Core', 'EF Core', 'PostgreSQL', 'WinForms', 'React', 'Tailwind',
        ],
        link: 'https://www.eggsterant.net/',
    },
    {
        name: 'TIDE Solution',
        position: 'IT Support Intern',
        location: 'Dubai, UAE',
        date: 'Sep 2024 — Dec 2024',
        description: 'IT Support Intern assisting 30+ staff with tech issues, automating setup tasks via a C# WinForms tool, and redesigning the company website with Wix and custom HTML. Maintained attendance systems and supported internal operations.',
        stack: [
            'C#', 'WinForms', 'HTML',
        ],
        link: 'https://www.tidesolution.com/',
    },
];

function Experience() {
    return (
        <section aria-labelledby="experience-heading" aria-label="Work experience" id="experience" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 id="experience-heading" className="text-palette-text text-4xl mb-4 leading-none">Experience</h2>
                <ul aria-label="List of work experience" className="flex flex-wrap gap-4 list-none p-0 m-0"> {
                    jobs.map((job, index) => {
                        return (
                            <li key={index} role="listitem" className="min-w-full sm:w-auto">
                                <Job job={job} index={index} />
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </section>
    );
}

export default Experience;
