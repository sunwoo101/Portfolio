import Project from '../Components/Project';

import uniConnect from '../assets/uni-connect.vip.png';
import eggsterant_v3 from '../assets/eggsterant-v3.png';
import tradingIndicator from '../assets/trading-indicator.png';

const projects = [
    {
        name: 'Eggsterant Full-Stack Website',
        date: 'Aug 2024 — Sep 2024',
        description: 'Full-stack website with a landing page, authentication and user dashboard with payments, download, gift key redemption and hardware ID reset system.',
        link: 'https://www.eggsterant.net/',
        stack: [
            'C#', 'JavaScript', 'ASP.NET Core', 'EF Core', 'React', 'Tailwind', 'PostgreSQL'
        ],
    },
    {
        name: 'Uni Connect',
        date: 'Mar 2025 — May 2025',
        imageLink: uniConnect,
        description: 'An open-source, fully functional forum for students with a clean, user-friendly interface. Users can post text, images, videos, and events, as well as like, save posts, and edit their profiles.',
        source: 'https://github.com/sunwoo101/Uni-Connect',
        stack: [
            'ASP.NET Core', 'C#', 'JavaScript', 'Tailwind', 'HTML'
        ],
    },
    {
        name: 'Eggsterant V3',
        date: 'Aug 2024 — Sep 2024',
        imageLink: eggsterant_v3,
        description: 'A real-time input enhancement tool that automatically clicks characters detected by a color-outline recognition algorithm, used by over 1,000 customers.',
        link: 'https://www.eggsterant.net/',
        stack: [
            'C#', 'WinForms',
        ],
    },
    {
        name: 'Trading Indicator',
        date: 'Jul 2024 — Sep 2024',
        imageLink: tradingIndicator,
        description: 'An open-source TradingView indicator with over 80,000 views that identifies Smart Money Concept (SMC) levels and sends real-time webhook alerts when key price levels are reached.',
        link: 'https://www.tradingview.com/script/gqiG3j3a-SMC-Indicator-With-Webhook/',
        stack: [
            'Pine Script'
        ],
    },
    {
        name: 'Arch Linux Dotfiles',
        date: 'Jul 2025',
        source: 'https://github.com/sunwoo101/dotfiles',
        stack: [
            'Linux', 'CSS', 'Bash',
        ],
    },
    {
        name: 'Eggsterant Pro',
        date: 'Mar 2024 — Apr 2024',
        link: 'https://www.eggsterant.net/',
        stack: [
             'C#', 'WinForms',
        ],
    },

    {
        name: 'SSH Client',
        date: 'Oct 2020 — Sep 2021',
        source: 'https://github.com/sunwoo101/SSH-Client-V2',
        stack: [
            'Python',
        ],
    },
    {
        name: 'FX Journal',
        date: 'Oct 2023',
        source: 'https://github.com/sunwoo101/FxJournal',
        stack: [
            'C#', 'WinForms',
        ],
    },
    {
        name: 'Simple RPG',
        date: 'Jul 2024 - Aug 2024',
        source: 'https://github.com/sunwoo101/3D-Simple-RPG',
        stack: [
            'C#', 'Unity',
        ],
    },

];

function Projects() {
    return (
        <section aria-labelledby="projects-heading" aria-label="Project showcase section" id="projects" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 id="projects-heading" className="text-palette-text text-4xl mb-4 leading-none">Projects</h2>
                <ul aria-label="List of projects" className="flex flex-wrap gap-4 list-none p-0 m-0"> {
                    projects.map((project, index) => {
                        return (
                            <li key={index} className="min-w-full sm:w-auto">
                                <Project project={project} index={index} />
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </section>
    );
}

export default Projects;
