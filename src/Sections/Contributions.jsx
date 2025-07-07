import Contribution from '../Components/Contribution';

const contributions = [
    {
        name: 'nwg-dock-hyprland',
        description: 'An open-source, fully functional forum for students with a clean, user-friendly interface. Users can post text, images, videos, and events, as well as like, save posts, and edit their profiles.',
        link: 'https://nwg-piotr.github.io/nwg-shell/',
        source: 'https://github.com/nwg-piotr/nwg-dock-hyprland',
        stack: [
            'Go'
        ],
    },
];

function Contributions() {
    return (
        <section aria-labelledby="contributions-heading" aria-label="Contributions to public repositories section" id="contributions" className="w-full flex flex-col justify-center items-center leading-none">
            <div className="mx-6 sm:w-xl mt-10 sm:mt-30">
                <h2 id="contributions-heading" className="text-palette-text text-4xl mb-4 leading-none">Contributions</h2>
                <ul aria-label="List of contributions" className="flex flex-wrap gap-4 list-none p-0 m-0"> {
                    contributions.map((contribution, index) => {
                        return (
                            <li key={index} className="w-full sm:w-auto">
                                <Contribution contribution={contribution} index={index} />
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </section>
    );
}

export default Contributions;