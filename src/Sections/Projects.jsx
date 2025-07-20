import Project from '../Components/Project';

import uniConnect from '../assets/uni-connect.vip.png';
import eggsterant from '../assets/eggsterant.png';
import tradingIndicator from '../assets/trading-indicator.png';

const projects = [
    {
        name: 'Uni Connect',
        date: 'Mar 2025 — May 2025',
        imageLink: uniConnect,
        description: 'An open-source, fully functional forum for students with a clean, user-friendly interface. Users can post text, images, videos, and events, as well as like, save posts, and edit their profiles.',
        link: 'https://uni-connect.vip/',
        source: 'https://github.com/sunwoo101/Uni-Connect',
        stack: [
            'ASP.NET Core', 'C#', 'JavaScript', 'Tailwind', 'HTML'
        ],
    },
    {
        name: 'Eggsterant V3',
        date: 'Aug 2024 — Sep 2024',
        imageLink: eggsterant,
        description: 'A subscription-based game assist tool that automatically clicks characters detected by a color-outline recognition algorithm, used by over 1,000 customers.',
        link: 'https://www.eggsterant.net/',
        stack: [
            'WinForms', 'C#', 'C++',
        ],
    },
    {
        name: 'Trading Indicator',
        date: 'Jul 2024 — Sep 2024',
        imageLink: tradingIndicator,
        description: 'An open-source TradingView indicator with over 80,000 views that identifies Smart Money Concept (SMC) levels and sends real-time webhook alerts when key price levels are reached.',
        link: 'https://www.tradingview.com/script/gqiG3j3a-SMC-Indicator-With-Webhook/',
        source: 'https://www.tradingview.com/script/gqiG3j3a-SMC-Indicator-With-Webhook/',
        stack: [
            'Pine Script'
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
