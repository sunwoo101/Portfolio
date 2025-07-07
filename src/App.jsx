import NavBar from './NavBar';
import Home from './Home';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Footer';
import Contributions from './Sections/Contributions';
import ThemePicker from './ThemePicker';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <About />
                            <Experience />
                            <Projects />
                            <Contributions />
                            <Contact />
                        </>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
