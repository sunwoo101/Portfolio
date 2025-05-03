function Footer() {
    return (
        <footer className="flex justify-center items-center">
            <div className="w-max flex fixed bottom-10 justify-center items-center gap-4 bg-white/5 border-palette-secondary backdrop-blur-sm shadow-md shadow-palette-border-glow/60 border p-4 rounded-[10px] leading-none z-50">
                <a aria-label="LinkedIn profile" className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://linkedin.com/in/sunwoo101" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin text-palette-text text-3xl"></i>
                </a>
                <a aria-label="GitHub profile" className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://github.com/sunwoo101" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github text-palette-text text-3xl"></i>
                </a>
                <a aria-label="Email address" className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="mailto:sun.kim101@outlook.com">
                    <i className="fas fa-envelope text-palette-text text-3xl"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;