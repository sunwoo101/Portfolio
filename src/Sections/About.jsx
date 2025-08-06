import SkillTag from "../Components/SkillTag";
import EducationTag from "../Components/EducationTag";

const skills = [
    'C#', 'JavaScript', 'Python', 'ASP.NET Core', 'EF Core', 'React', 'Tailwind', 'PostgreSQL', 'WinForms', 'Linux', 'NeoVim', 'CSS', 'HTML', 'Pine Script'
];

const education = [
    {
        degree: 'Bachelor of Information Technology (Enterprise Software Development)',
        uni: 'UTS',
        graduation: 'Jul 2025 — Dec 2027 • Expected',
    },
    {
        degree: 'Diploma of Information Technology',
        uni: 'UTS College',
        graduation: 'Mar 2025 — May 2025 • Withdrawn (Transfer to UTS)',
    },
    {
        degree: 'Certificate IV in Information Technology (Gaming Development)',
        uni: 'TAFE NSW',
        graduation: 'Feb 2024 — Jun 2024',
    },
];

function About() {
    return (
        <section aria-labelledby="about-heading" id="about" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 id="about-heading" className="text-palette-text text-4xl mb-4 leading-none">About</h2>
                <div className="bg-palette-secondary/20 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5 gap-10">
                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Intro</h3>
                        <p className="text-palette-text leading-relaxed">I am a software engineer in Sydney, Australia. I specialize in .NET and React, and enjoy developing side projects for fun and learning.</p>
                    </div>

                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Skills</h3>
                        <ul aria-label="Technology stack" className="flex flex-wrap gap-2 list-none p-0 m-0"> {
                            skills.map((skill, index) => {
                                return (
                                    <li key={index}>
                                        <SkillTag text={skill} />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>

                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Education</h3>
                        <ul className="flex flex-wrap gap-2 list-none p-0 m-0"> {
                            education.map((education, index) => {
                                return (
                                    <li key={index} className="min-w-full">
                                        <EducationTag education={education} />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
