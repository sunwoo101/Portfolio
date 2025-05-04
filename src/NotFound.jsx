import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-palette-background">
            <h1 className="text-palette-text text-6xl font-bold mb-4">404</h1>
            <p className="text-palette-text text-xl mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="text-palette-text p-4 bg-palette-primary hover:bg-palette-secondary/50 border border-palette-secondary shadow-md shadow-palette-border-glow/60 rounded-[6px] transition duration-200 ease-in-out select-none leading-none"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;