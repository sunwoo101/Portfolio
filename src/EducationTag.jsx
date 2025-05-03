function EducationTag({education}) {
    return (
        <span className="text-palette-text bg-palette-primary px-2 py-1 border border-palette-accent rounded-[6px] w-full hover:-translate-y-1 transition duration-200 ease-in-out select-none">
            <strong>{education.degree}</strong><br />
            {education.uni}<br />
            {education.graduation}
        </span>
    );
}

export default EducationTag;