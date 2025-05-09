import backgroundImage from './assets/background.png';

function Home() {
    return (
        <section id="home" style={{ backgroundImage: `url(${backgroundImage})` }} className="relative w-full h-screen bg-cover bg-center bg-no-repeat">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-12 flex flex-col items-center gap-4">
                <p className="text-palette-text text-xl sm:text-3xl leading-none">
                    <i className="fas fa-thumbtack text-palette-text text-xl"></i> Sydney, Australia
                </p>
                <h1 className="text-palette-text text-4xl sm:text-5xl leading-none">Sun Woo Kim</h1>
                <h2 className="text-palette-text text-2xl sm:text-3xl leading-none">Full-Stack Software Engineer</h2>
            </div>

            <div className="absolute top-[calc(50%+8rem)] left-1/2 transform -translate-x-1/2">
                <a href="#about" className="flex flex-col items-center">
                    <h3 className="text-palette-text text-2xl mb-1">Scroll</h3>
                    <i className="fa-solid fa-angles-down text-white text-3xl"></i>
                </a>
            </div>
        </section>
    );
}

export default Home;