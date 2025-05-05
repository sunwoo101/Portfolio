import Job from "../Components/Job";

const jobs = [
    {
        name: 'Eggsterant',
        position: 'Software Engineer',
        location: 'Remote',
        date: 'Jan 2023 — Mar 2025',
        description: 'Developed multiple subscription-based game assist tools, including Eggsterant V3, and private software leveraging Arduino to inject hardware-level input.',
        stack: [
            'WinForms', 'C#', 'C++', 'JavaScript', 'Arduino',
        ],
        link: 'https://www.eggsterant.net/',
    },
    {
        name: 'TIDE Solution',
        position: 'IT Support Intern',
        location: 'Dubai, UAE',
        date: 'Sep 2024 — Dec 2024',
        description: 'Developed the company website using Wix and custom HTML, built internal software tools with features like one-click network drive access, and set up and maintained attendance machines across multiple project sites.',
        stack: [
            'WinForms', 'C#', 'HTML',
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
                            <li key={index} role="listitem" className="w-full sm:w-auto">
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