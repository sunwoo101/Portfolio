function Intro() {
    return (
        <section id="intro" className="w-full h-screen bg-[url(./src/assets/background.jpeg)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-center mx-auto px-4 py-12">
                <div className="w-full flex-1 flex flex-col justify-center items-center">
                    <h1 className='w-full text-palette-text text-4xl sm:text-7xl'>Sun Woo Kim</h1>
                    <h2 className='w-full text-palette-text text-2xl sm:text-4xl mt-4'>Software Engineer</h2>
                </div>

                <div className="w-full flex justify-center items-center gap-4">
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://linkedin.com/in/sunwoo101" target="_blank">
                        <i className="fab fa-linkedin text-white text-3xl"></i>
                    </a>
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="https://github.com/sunwoo101" target="_blank">
                        <i className="fab fa-github text-white text-3xl"></i>
                    </a>
                    <a className="hover:-translate-y-1 transition duration-200 ease-in-out select-none" href="mailto:you@example.com">
                        <i className="fas fa-envelope text-white text-3xl"></i>
                    </a>
                </div>
            </div>
        </section >
    );
}

export default Intro;