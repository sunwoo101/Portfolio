function EducationTag({ education }) {
    return (
        <div className="flex flex-col gap-1 text-palette-text bg-palette-primary shadow-md shadow-palette-border-glow/60 px-2 py-2 border border-palette-secondary rounded-[6px] w-full hover:-translate-y-1 transition duration-200 ease-in-out select-none">
            <span>
                <strong>{education.degree}</strong>
            </span>
            <span>
                {education.uni}
            </span>
            <span>
                {education.graduation}
            </span>
        </div>
    );
}

export default EducationTag;