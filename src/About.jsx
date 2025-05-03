import SkillTag from "./SkillTag";
import EducationTag from "./EducationTag";

const skills = [
    'React', 'Tailwind', 'ASP.NET Core', 'WinForms', 'C#', 'JavaScript', 'CSS', 'HTML'
];

const education = [
    {
        degree: 'Diploma of Information Technology',
        uni: 'UTS College',
        graduation: 'Dec 2025',
    },
    {
        degree: 'Certificate IV in Information Technology',
        uni: 'TAFE NSW',
        graduation: 'Jun 2024',
    },
];

function About() {
    return (
        <section id="about" className="w-full flex flex-col justify-center items-center mb-10">
            <div className="mx-10 sm:mx-0 sm:w-xl mt-10 sm:mt-35">
                <h2 className='text-palette-text text-4xl mb-2 leading-none'>About</h2>
                <div className="bg-palette-secondary/20 border border-palette-text rounded-[10px] w-full flex flex-col justify-center items-center pb-10">
                    <div className="mt-10 w-full px-10">
                        <h3 className='text-palette-text text-2xl mb-2 leading-none'>About Me</h3>
                        <p className="text-palette-text leading-none">I'm Sun Woo Kim, a software engineer from Sydney, Australia.</p>
                    </div>

                    <div className="mt-10 w-full px-10">
                        <h3 className='text-palette-text text-2xl mb-2 leading-none'>Skills</h3>
                        <div className="flex flex-wrap gap-2"> {
                            skills.map((skill, index) => {
                                return <SkillTag key={index} text={skill} />
                            })
                        }
                        </div>
                    </div>

                    <div className="mt-10 w-full px-10">
                        <h3 className='text-palette-text text-2xl mb-2 leading-none'>Education</h3>
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