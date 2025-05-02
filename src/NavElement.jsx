function NavElement({ text = 'Default', link = '' }) {
    return (
        <a
            href={link}
            className="
                text-palette-text
                mx-4
                hover:cursor-pointer
                transition-[text-shadow] duration-200
                hover:text-shadow-lg
                hover:text-shadow-palette-text/50
            "
        >
            {text}
        </a>
    );
}

export default NavElement;