function Intro() {
    return (
        <section id="intro" className="w-full h-screen bg-[url(./src/assets/background.jpeg)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-center mx-auto px-4 py-12">
                <div className="w-full flex-1 flex flex-col justify-center items-center">
                    <h1 className='w-full text-palette-text text-7xl'>Full-Stack Engineer</h1>
                    <h2 className='w-full text-palette-text text-4xl mt-4'>Sun Woo Kim</h2>
                </div>

                <a className="w-full flex flex-col items-center mt-8" href="#about-me">
                <h3 className='text-palette-text text-2xl mb-1'>See More</h3>
                <i className="fa-solid fa-angles-down text-white text-3xl"></i>
                </a>
            </div>
        </section >
    );
}

export default Intro;