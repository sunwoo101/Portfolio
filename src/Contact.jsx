function Contact() {
    return (
        <section id="contact" className="w-full flex flex-col justify-center items-center mb-36 leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 className="text-palette-text text-4xl mb-4 leading-none">Contact</h2>
                <div className="bg-palette-secondary/20 border border-palette-text/50 shadow-md shadow-palette-border-glow/60 rounded-[10px] w-full flex flex-col justify-center items-center py-5 px-5">
                    <div className="flex flex-col w-full gap-4">
                        <p className="text-palette-text text-center text-sm leading-relaxed">
                            I'm available for full-time roles in Sydney, Australia, freelance work, or simply to connect.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-envelope text-palette-text" />
                                <a href="mailto:sun.kim101@outlook.com" className="text-palette-text hover:underline">sun.kim101@outlook.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fab fa-linkedin text-palette-text" />
                                <a href="https://linkedin.com/in/sunwoo101" target="_blank" className="text-palette-text hover:underline">linkedin.com/in/sunwoo101</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fab fa-github text-palette-text" />
                                <a href="https://github.com/sunwoo101" target="_blank" className="text-palette-text hover:underline">github.com/sunwoo101</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;