import Contribution from '../Components/Contribution';

const contributions = [
    {
        name: 'nwg-dock-hyprland',
        description: 'GTK3-based dock for Hyprland',
        link: 'https://nwg-piotr.github.io/nwg-shell/',
        source: 'https://github.com/nwg-piotr/nwg-dock-hyprland',
        stack: [
            'Go', 'CSS'
        ],
    },
    {
        name: 'nwg-drawer',
        description: 'Application drawer for wlroots-based Wayland compositors ',
        link: 'https://nwg-piotr.github.io/nwg-shell/',
        source: 'https://github.com/nwg-piotr/nwg-drawer',
        stack: [
            'Go', 'CSS'
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
                            <li key={index} className="min-w-full sm:w-auto">
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
