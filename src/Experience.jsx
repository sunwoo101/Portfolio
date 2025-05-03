import Job from "./Job";

const jobs = [
    {
        name: 'Eggsterant',
        date: '01/23 - 03/25',
        location: 'Remote',
        description: 'Developed multiple subscription-based Windows tools, including Eggsterant V3, and private software leveraging Arduino to inject hardware-level input.',
        stack: [
            'WinForms', 'C#', 'C++', 'JavaScript', 'Arduino'
        ],
        link: 'https://www.eggsterant.net/',
    },
    {
        name: 'TIDE Solution',
        date: '09/24 - 12/24',
        location: 'Dubai, UAE',
        description: 'Developed the company website using Wix and custom HTML, built internal software tools with features like one-click network drive access, and set up and maintained attendance machines across multiple project sites.',
        stack: [
            'WinForms', 'C#', 'HTML',
        ],
        link: 'https://www.tidesolution.com/',
    },
];

function Experience() {
    return (
        <section id="experience" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 className="text-palette-text text-4xl mb-4 leading-none">Experience</h2>
                <div className="flex flex-wrap gap-4"> {
                    jobs.map((job, index) => {
                        return <Job key={index} job={job} />
                    })
                }
                </div>
            </div>
        </section>
    );
}

export default Experience;