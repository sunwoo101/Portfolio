import SkillTag from "./SkillTag";
import EducationTag from "./EducationTag";

const skills = [
    'React', 'Tailwind', 'ASP.NET Core', 'WinForms', 'Python', 'C#', 'C++', 'JavaScript', 'CSS', 'HTML', 'Pine Script'
];

const education = [
    {
        degree: 'Diploma of Information Technology',
        uni: 'UTS College',
        graduation: '03/25 - 12/25',
    },
    {
        degree: 'Certificate IV in Information Technology',
        uni: 'TAFE NSW',
        graduation: '02/24 - 06/24',
    },
];

function About() {
    return (
        <section id="about" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 className="text-palette-text text-4xl mb-4 leading-none">About</h2>
                <div className="bg-palette-secondary/20 border border-palette-text/50 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5 gap-10">
                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Me</h3>
                        <p className="text-palette-text">I'm Sun, a software engineer based in Sydney, Australia, with a strong ability to quickly adapt to new programming languages and frameworks.</p>
                    </div>

                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Skills</h3>
                        <div className="flex flex-wrap gap-2"> {
                            skills.map((skill, index) => {
                                return <SkillTag key={index} text={skill} />
                            })
                        }
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-palette-text text-2xl mb-2 leading-none">Education</h3>
                        <div className="flex flex-wrap gap-2"> {
                            education.map((education, index) => {
                                return <EducationTag key={index} education={education} />
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;