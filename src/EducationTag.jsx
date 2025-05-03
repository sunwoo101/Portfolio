function EducationTag({ education }) {
    return (
        <div aria-label={`${education.degree} from ${education.uni}, completed ${education.graduation}`} className="flex flex-col gap-1 text-palette-text bg-palette-primary shadow-md shadow-palette-border-glow/60 p-2 border border-palette-secondary rounded-[6px] w-full hover:-translate-y-1 transition duration-200 ease-in-out select-none leading-none">
            <p className="font-semibold leading-none">{education.degree}</p>
            <p className="text-sm leading-none">{education.uni}</p>
            <p className="text-sm leading-none">{education.graduation}</p>
        </div>
    );
}

export default EducationTag;