import { icon } from "@fortawesome/fontawesome-svg-core";

const hadFiles = import.meta.glob('../projects/had/*', { eager: true });
const sputifyFiles = import.meta.glob('../projects/sputify/*', { eager: true });
const ecohomeFiles = import.meta.glob('../projects/ecohome/*', { eager: true });
const miloFiles = import.meta.glob('../projects/milo/*', { eager: true });
const matbfFiles = import.meta.glob('../projects/matbf/*', { eager: true });
const europeFiles = import.meta.glob('../projects/4g/*', { eager: true });
const saladFiles = import.meta.glob('../projects/salad/*', { eager: true });
const hsclFiles = import.meta.glob('../projects/hscl/*', { eager: true });
const sweetFiles = import.meta.glob('../projects/sweet/*', { eager: true });
const rodinaFiles = import.meta.glob('../projects/rodina/*', { eager: true });
const solarsystemFiles = import.meta.glob('../projects/solarsystem/*', { eager: true });
const paFiles = import.meta.glob('../projects/pa/*', { eager: true });

const aboutFiles = import.meta.glob('../assets/about/*', { eager: true });

export const projects = [
    // hearts across dimensions
    {
        id: 'had',
        name: 'hearts across dimensions',
        description: 'visual novel / dating sim game',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz & Emmenbrücke',
                'Module MEN3 - Mentorate Semester 3'
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'coding',
            'game',
            'story'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Hearts across Dimesions is visual novel-style dating sim where players explore the stories of five unique characters.
                        It builds on the previous Mentorate Semester 2 project by Angelika Gort, where she created the character designs.
                        The Demo was developed by Angelika Gort and myself under the mentorship of Zoe Röllin as part of the Mentorate Semester 3.
                        Currently, the game features character introductions, with future expansions planned.
                        We will continue to develop the game in the Mentorate Semester 4 with a focus on expanding the storylines and character art.`
            },
            {
                type: 'heading',
                text: 'Play the Demo'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Play in Browser / Download',
                        action: 'https://jfladas.itch.io/hearts-across-dimensions',
                        icon: 'play',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Installation & Play Instructions'
            },
            {
                type: 'paragraph',
                text: `Note that the game is designed primarily for mobile/portrait layout but is also playable on desktop and landscape mode.`
            },
            {
                type: 'iconed',
                text: 'Web (Mobile/Desktop)',
                icon: 'globe'
            },
            {
                type: 'bullet',
                text: 'Play directly in the browser by clicking the <span class="snippet">Run Game</span> button on the itch.io page.'
            },
            {
                type: 'bullet',
                text: 'Some issues may occur depending on device or browser compatibility.'
            },
            {
                type: 'iconed',
                text: 'Android',
                icon: 'fa-brands fa-android'
            },
            {
                type: 'bullet',
                text: 'Download the Android build from the itch.io page.'
            },
            {
                type: 'bullet',
                text: 'Execute <span class="snippet">HaD.apk</span> to install and open the game.'
            },
            {
                type: 'bullet',
                text: 'The game will be accessible as an app on your device.'
            },
            {
                type: 'iconed',
                text: 'Windows',
                icon: 'fa-brands fa-windows'
            },
            {
                type: 'bullet',
                text: 'Download the Windows build from the itch.io page.'
            },
            {
                type: 'bullet',
                text: 'Execute <span class="snippet">HaD (Demo).exe</span> to launch the game.'
            },
            {
                type: 'subheading',
                text: 'Player Feedback'
            },
            {
                type: 'paragraph',
                text: 'We appreciate any feedback to improve the experience. Please fill out our survey after playing:'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Fill out the survey',
                        action: 'https://forms.gle/PsgVsrwjZVm16WpdA',
                        icon: 'arrow-right',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'subheading',
                text: 'Characters'
            },
            {
                type: 'paragraph',
                text: `The game features five characters with unique personalities and storylines. Players can choose which character to interact with, leading to different outcomes and dialogues.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/Characters.jpg'].default,
                        caption: 'Characters'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Story'
            },
            {
                type: 'paragraph',
                text: `A mysterious woman fails to protect her dimension from interdimensional beings. Before dying, she sends a blood-stained letter across dimensions to warn her successor.
                        The protagonist, unaware of their fate, starts a new job at a wedding planning company. Soon, strange events unfold, like an ever-changing building, a time loop, and a... horse?
                        An earthquake forces them into a bunker, where they meet some familiar faces. Their choice of whom to trust sets the stage for the next chapter.`
            },
            {
                type: 'subheading',
                text: 'Plans for MEN4'
            },
            {
                type: 'bullet',
                text: 'Drawing backgrounds'
            },
            {
                type: 'bullet',
                text: 'Characters with shading'
            },
            {
                type: 'bullet',
                text: 'Illustrations'
            },
            {
                type: 'bullet',
                text: 'Story of at least one character to the end'
            },
            {
                type: 'bullet',
                text: 'Minigame'
            },
            {
                type: 'bullet',
                text: 'Menu with chapter overview and gallery'
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/Screenshot_Ash.jpg'].default,
                        caption: 'Ash'
                    },
                    {
                        src: hadFiles['../projects/had/Screenshot_Scarlet.jpg'].default,
                        caption: 'Scarlet'
                    },
                    {
                        src: hadFiles['../projects/had/Screenshot_MrHorse.jpg'].default,
                        caption: 'Mr. Horse'
                    },
                    {
                        src: hadFiles['../projects/had/Screenshot_Aleph.jpg'].default,
                        caption: 'Aleph'
                    },
                    {
                        src: hadFiles['../projects/had/Screenshot_Ethan.jpg'].default,
                        caption: 'Ethan'
                    },
                    {
                        src: hadFiles['../projects/had/Screenshot_EndChoice.jpg'].default,
                        caption: 'End Choice'
                    }
                ]
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/had',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'itch.io Page',
                url: 'https://jfladas.itch.io/hearts-across-dimensions',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Player Survey',
                url: 'https://forms.gle/PsgVsrwjZVm16WpdA',
                icon: 'external-link-alt'
            },
            {
                text: 'Playthrough Video',
                url: 'https://youtu.be/HwepdSLpjcE',
                icon: 'fa-brands fa-youtube'
            }
        ],
        downloads: [
            {
                text: 'Presentation.ppsx',
                url: hadFiles['../projects/had/MEN3.ppsx'].default,
                icon: 'file-powerpoint'
            }
        ]
    },
    // spütify
    {
        id: 'sputify',
        name: 'spütify',
        description: 'music journey & visualisation website',
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                'Module STUWE1 - Studio Web & Mobile 1'
            ],
            url: 'https://www.hslu.ch/en/lucerne-school-of-design-film-and-art/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'coding',
            'design',
            'web',
            'ux',
        ],
        sections: [
            {
                type: 'quoted',
                text: `A web application that visualizes a user's Spotify music taste through an interactive time-travel experience. Developed using Spotify API and Google Gemini API by Laura Giaimo, Lisa Landolt, Lukas Bucher, and Marin Hirschi, the app allows users to explore their listening history dynamically. The project integrates real-time data visualization and interactive elements to create a personalized music journey.`
            },
            {
                type: 'heading',
                text: 'Screencast Desktop'
            },
            {
                type: 'video',
                video: sputifyFiles['../projects/sputify/Desktop.mp4'].default
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'subheading',
                text: 'Research Question'
            },
            {
                type: 'paragraph',
                text: 'How can visualizing music taste as an interactive timeline enhance the personal music experience?'
            },
            {
                type: 'subheading',
                text: 'Core Idea'
            },
            {
                type: 'paragraph',
                text: `The "Music Journey" is a scrollable timeline that records the user's music taste evolution. Users can navigate through different time periods, including:`
            },
            {
                type: 'bullet',
                text: 'Last 4 weeks'
            },
            {
                type: 'bullet',
                text: 'Last 6 months'
            },
            {
                type: 'bullet',
                text: 'Last year'
            },
            {
                type: 'bullet',
                text: 'Past three years (2023-2021)'
            },
            {
                type: 'paragraph',
                text: 'Each section dynamically visualizes:'
            },
            {
                type: 'bullet',
                text: 'Top Songs'
            },
            {
                type: 'bullet',
                text: 'Top Artists'
            },
            {
                type: 'bullet',
                text: 'Top Genres'
            },
            {
                type: 'paragraph',
                text: 'Additionally, users collect badges based on listening habits. At the end of the journey, they can generate and share personalized images summarizing their music history.'
            },
            {
                type: 'paragraph',
                text: 'The target audience is premium Spotify users of the younger generations, especially long-term Spotify users seeking an engaging retrospective of their music taste.'
            },
            {
                type: 'subheading',
                text: 'Team Responsibilities'
            },
            {
                type: 'iconed',
                text: 'Laura Giaimo',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'UX/UI Design'
            },
            {
                type: 'iconed',
                text: 'Lisa Landolt',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Frontend Development'
            },
            {
                type: 'bullet',
                text: 'Testing'
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Frontend Development'
            },
            {
                type: 'bullet',
                text: 'Backend Development'
            },
            {
                type: 'iconed',
                text: 'Marin Hirschi',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Frontend Development'
            },
            {
                type: 'bullet',
                text: 'Backend Development'
            },
            {
                type: 'subheading',
                text: 'Technologies'
            },
            {
                type: 'iconed',
                text: 'Frontend',
                icon: 'desktop'
            },
            {
                type: 'bullet',
                text: 'Vue.js for frontend development'
            },
            {
                type: 'bullet',
                text: 'D3.js for dynamic data visualization'
            },
            {
                type: 'bullet',
                text: 'GSAP for scroll animations'
            },
            {
                type: 'bullet',
                text: 'Lenis for smooth scroll experience'
            },
            {
                type: 'iconed',
                text: 'Backend',
                icon: 'server'
            },
            {
                type: 'bullet',
                text: 'Node.js for backend server'
            },
            {
                type: 'bullet',
                text: 'Express for backend routing'
            },
            {
                type: 'iconed',
                text: 'APIs',
                icon: 'cloud'
            },
            {
                type: 'bullet',
                text: 'Spotify API for user data retrieval'
            },
            {
                type: 'bullet',
                text: 'Spotify Web Playback SDK for music playback'
            },
            {
                type: 'bullet',
                text: 'Google Gemini API for missing track data'
            },
            {
                type: 'iconed',
                text: 'Design & Prototyping',
                icon: 'palette'
            },
            {
                type: 'bullet',
                text: 'Figma for design & prototyping'
            },
            {
                type: 'bullet',
                text: 'PowerPoint for design & prototyping'
            },
            {
                type: 'iconed',
                text: 'Testing',
                icon: 'vial'
            },
            {
                type: 'bullet',
                text: 'Vitest for unit testing'
            },
            {
                type: 'bullet',
                text: 'Cypress for end-to-end testing'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sputifyFiles['../projects/sputify/ProjectArchitecture.jpg'].default,
                        caption: 'Project Architecture'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'UX Testing Insights'
            },
            {
                type: 'bullet',
                text: 'Disclaimer: "For the best experience, ensure sound is turned on"'
            },
            {
                type: 'bullet',
                text: 'Bubble should start with lower intensity and no color'
            },
            {
                type: 'bullet',
                text: 'The first song should play immediately & display the currently playing song'
            },
            {
                type: 'bullet',
                text: 'Add a heading before the share section'
            },
            {
                type: 'bullet',
                text: 'Make the arrow down clickable or add a small text saying "please scroll"'
            },
            {
                type: 'bullet',
                text: 'Include expandable accordions for Top Artists to add variety to Top Songs'
            },
            {
                type: 'subheading',
                text: 'Challenges & Solutions'
            },
            {
                type: 'iconed',
                text: 'API Endpoints Shutdown',
                icon: 'ban'
            },
            {
                type: 'paragraph',
                text: `Many crucial Spotify API endpoints were shut down without notice while we were working on the project, requiring a new approach to data retrieval. 
                        We experimented with the Google Gemini API to gather missing track data and implemented an alternative solution for the wrapped data fetching.
                        This allowed us to continue and complete the project successfully, retaining the core functionality.`
            },
            {
                type: 'iconed',
                text: 'API Integration',
                icon: 'cogs'
            },
            {
                type: 'paragraph',
                text: `Integrating the Spotify API and Google Gemini API was challenging since it was the first time we worked with these technologies.
                        We overcame this by researching the APIs thoroughly, experimenting with different endpoints, and collaborating closely.
                        Through trial and error and the valuable support of our lecturers, we managed to implement the desired features.`
            },
            {
                type: 'iconed',
                text: 'Bubble Visualization',
                icon: 'splotch'
            },
            {
                type: 'paragraph',
                text: `Creating the bubble visualization was complex due to the dynamic data and the need for smooth transitions.
                        We solved this by experimenting a lot in D3.js with different bubble layouts and scales, adjusting the bubble size and color based on the data.
                        This resulted in an engaging and interactive visualization that represents the song's mood and energy.`
            },
            {
                type: 'iconed',
                text: 'Scroll Animation',
                icon: 'mouse-pointer'
            },
            {
                type: 'paragraph',
                text: `Implementing scroll functionalities was challenging due to the usage of different scroll libraries.
                        We solved this by using GSAP and Lenis to create a smooth and interactive scroll experience.
                        Testing and adjusting the scroll speed and animations helped us achieve the desired effect after several iterations.`
            },
            //TODO: add project diagram (process insights)
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sputifyFiles['../projects/sputify/Login.jpg'].default,
                        caption: 'Login Page Mobile'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Journey.jpg'].default,
                        caption: 'Music Journey'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopSongs.jpg'].default,
                        caption: 'Top Songs Section Mobile'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopArtists.jpg'].default,
                        caption: 'Top Artists Section'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Focus.jpg'].default,
                        caption: 'Focus  Mode Mobile'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Badges.jpg'].default,
                        caption: 'Badges Collection'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Menu.jpg'].default,
                        caption: 'Menu Mobile'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Share.jpg'].default,
                        caption: 'Share Page'
                    },
                ],
            },
            {
                type: 'heading',
                text: 'Screencast Mobile'
            },
            {
                type: 'video',
                video: sputifyFiles['../projects/sputify/Mobile.mp4'].default
            },
            {
                type: 'heading',
                text: 'Project Setup'
            },
            {
                type: 'iconed',
                text: 'Clone the project',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Clone the project repository into a local directory'
            },
            {
                type: 'iconed',
                text: 'Install dependencies',
                icon: '2'
            },
            {
                type: 'bullet',
                text: 'Run <span class="snippet hoverable tooltip copy" tooltip="copy">npm install</span> to install all necessary dependencies'
            },
            {
                type: 'iconed',
                text: 'Start the development server',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Run <span class="snippet hoverable tooltip copy" tooltip="copy">npm run dev</span> to start the development server with hot-reload'
            },
            {
                type: 'iconed',
                text: 'Access the application',
                icon: '4'
            },
            {
                type: 'bullet',
                text: 'Open <span class="snippet hoverable tooltip copy" tooltip="copy">http://localhost:5173/</span> in your browser to view the application'
            },
            {
                type: 'bullet',
                text: 'Log in with your registered Spotify account to start exploring your music journey'
            },
            {
                type: 'iconed',
                text: 'For testing, a manual registration of your Spotify email address is required.<br><a href="/about#contact" class="bold hoverable">Contact me</a> for access.',
                icon: 'exclamation-triangle'
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/iahirsch/sputify',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'Figma Prototype Desktop',
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=694%3A5979&node-id=694-7596&p=f&viewport=-336%2C352%2C0.08&t=icFqiCaQGxwdGQyL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=694%3A7596',
                icon: 'fa-brands fa-figma'
            },
            {
                text: 'Figma Prototype Mobile',
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=838%3A8681&node-id=838-9683&p=f&viewport=-781%2C374%2C0.08&t=I6fzqdYEK93WZXZn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=838%3A9683',
                icon: 'fa-brands fa-figma'
            }
        ],
        downloads: [
            {
                text: 'Documentation.pdf',
                url: sputifyFiles['../projects/sputify/Documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'ScreencastDesktop.mp4',
                url: sputifyFiles['../projects/sputify/Desktop.mp4'].default,
                icon: 'file-video'
            },
            {
                text: 'ScreencastMobile.mp4',
                url: sputifyFiles['../projects/sputify/Mobile.mp4'].default,
                icon: 'file-video'
            }
        ]
    },
    // ecohome
    {
        id: 'ecohome',
        name: 'ecohome',
        description: 'serious game about waste management',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'International Summer School on Designing Serious Games'
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'game'
        ],
        sections: [
            {
                type: 'quoted',
                text: `EcoHome is a strategic tabletop game centered around waste management and sustainability in modern Swiss households. 
                        Players take on different personas and must balance daily actions to reduce trash while maintaining or increasing their happiness score. 
                        The game spans one week, with each turn representing a day.Players receive immediate feedback on their choices, allowing them to adjust strategies.
                        As the final project of the International Summer School on Designing Serious Games this game was developed in a team of three with Lisa Landolt and Julian Schwarz.`
            },
            {
                type: 'heading',
                text: 'Gameplay Overview'
            },
            {
                type: 'subheading',
                text: 'Objective'
            },
            {
                type: 'iconed',
                text: 'Minimize Waste, Maximize Happiness',
                icon: 'smile'
            },
            {
                type: 'paragraph',
                text: `At the end of the week, the player with the least amount of trash bags wins.`
            },
            {
                type: 'subheading',
                text: 'Challenges'
            },
            {
                type: 'bullet',
                text: 'Managing resources efficiently.'
            },
            {
                type: 'bullet',
                text: 'Adapting to random events that affect daily life.'
            },
            {
                type: 'bullet',
                text: 'Making smart buying choices to minimize waste.'
            },
            {
                type: 'subheading',
                text: 'Player Actions'
            },
            {
                type: 'iconed',
                text: 'Grocery Shopping',
                icon: 'shopping-cart'
            },
            {
                type: 'paragraph',
                text: 'Buy food and reusable items to manage resources effectively and minimize waste.'
            },
            {
                type: 'iconed',
                text: 'Day Planning',
                icon: 'calendar-alt'
            },
            {
                type: 'paragraph',
                text: 'Allocate time for daily activities to balance tasks and optimize efficiency.'
            },
            {
                type: 'iconed',
                text: 'Cooking',
                icon: 'utensils'
            },
            {
                type: 'paragraph',
                text: 'Prepare meals without wasting ingredients to maintain a low waste footprint.'
            },
            {
                type: 'iconed',
                text: 'Cleaning',
                icon: 'broom'
            },
            {
                type: 'paragraph',
                text: 'Maintain living spaces and optimize waste disposal to keep the environment clean.'
            },
            {
                type: 'iconed',
                text: 'Recycling',
                icon: 'recycle'
            },
            {
                type: 'paragraph',
                text: 'Reduce waste by properly sorting trash and recycling materials.'
            },
            {
                type: 'subheading',
                text: 'Setting'
            },
            {
                type: 'paragraph',
                text: 'Modern Swiss households, featuring shared apartments, family homes, and single-person residences.'
            },
            {
                type: 'subheading',
                text: 'Technology'
            },
            {
                type: 'paragraph',
                text: 'The game relies on physical cards for actions, events, and resources, with minimal bookkeeping to easily keep track of scores and states.'
            },
            {
                type: 'heading',
                text: 'Game Rules'
            },
            {
                type: 'subheading',
                text: 'Setup'
            },
            {
                type: 'paragraph',
                text: 'Each player adopts a persona that determines their conditions and weekly schedule:'
            },
            {
                type: 'iconed',
                text: 'Single-person household',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Has 2 free time slots on weekdays and 5 on weekends'
            },
            {
                type: 'bullet',
                text: 'Generates 0 extra trash per day'
            },
            {
                type: 'iconed',
                text: 'Family household',
                icon: 'users'
            },
            {
                type: 'bullet',
                text: 'Has 4 free time slots on weekdays and 2 on weekends'
            },
            {
                type: 'bullet',
                text: 'Generates 1 extra trash per day'
            },
            {
                type: 'iconed',
                text: 'Shared flat',
                icon: 'house-chimney-window'
            },
            {
                type: 'bullet',
                text: 'Has 3 free time slots on weekdays and 3 on weekends'
            },
            {
                type: 'bullet',
                text: 'Generates 2 extra trash per day'
            },
            {
                type: 'paragraph',
                text: 'Players start with:'
            },
            {
                type: 'bullet',
                text: '5 Happiness'
            },
            {
                type: 'bullet',
                text: '5 Action Cards'
            },
            {
                type: 'bullet',
                text: '1 Reusable Shop Card'
            },
            {
                type: 'subheading',
                text: 'Daily Turn Sequence'
            },
            {
                type: 'iconed',
                text: 'Draw a Random Event Card',
                icon: '1'
            },
            {
                type: 'paragraph',
                text: 'This introduces new challenges or benefits.'
            },
            {
                type: 'iconed',
                text: 'Plan Your Day',
                icon: '2'
            },
            {
                type: 'paragraph',
                text: 'Players choose actions based on available time and resources.'
            },
            {
                type: 'iconed',
                text: 'Execute Actions',
                icon: '3'
            },
            {
                type: 'paragraph',
                text: 'Players may shop, use items, or carry out planned tasks.'
            },
            {
                type: 'iconed',
                text: 'Refill to 5 Action Cards',
                icon: '4'
            },
            {
                type: 'paragraph',
                text: 'Ensure players have balanced choices each turn.'
            },
            {
                type: 'subheading',
                text: 'Happiness Consequences'
            },
            {
                type: 'bullet',
                text: 'If Happiness falls below 3, the player cannot cook, clean, or recycle.'
            },
            {
                type: 'bullet',
                text: 'If Happiness reaches 0, the player automatically generates 2 trash bags per day.'
            },
            {
                type: 'bullet',
                text: 'Skipping meals results in -3 Happiness per day.'
            },
            {
                type: 'subheading',
                text: 'End of the Week'
            },
            {
                type: 'paragraph',
                text: `Unused fresh ingredients generate 1 trash bag. 
                        At the end of the week, the player with the least trash wins.
                        If there is a tie, the player with more Happiness wins.`
            },
            {
                type: 'heading',
                text: 'Process Insights'
            },
            {
                type: 'images',
                images: [
                    {
                        src: ecohomeFiles['../projects/ecohome/Conceptualizing.jpg'].default,
                        caption: 'Conceptualizing the Game'
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Testing.jpg'].default,
                        caption: 'Testing the Game'
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Playing.jpg'].default,
                        caption: 'Playing the Game'
                    },
                ]
            }
        ],
        links: [],
        downloads: [
            {
                text: 'Certificate.pdf',
                url: ecohomeFiles['../projects/ecohome/Certificate.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    //milo
    {
        id: 'milo',
        name: "milo's forest adventure",
        description: 'web-based scroll & click adventure',
        context:
        {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Module DEWEB - Development for Web & Mobile'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'solo',
            'coding',
            'design',
            'web',
            'game',
            'story'
        ],
        sections: [
            {
                type: 'quoted',
                text: `With Milo\'s Forest Adventure I aimed to combine web development, pixel art, and interactive storytelling 
                        in a cute scroll-and-click adventure game.By scrolling and clicking, players can explore the environment,
                        interact with Milo, and uncover secrets of the enchanting forest.`
            },
            {
                type: 'heading',
                text: 'Play the Game'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Play Demo',
                        action: 'https://milo.jfladas.com',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'Download',
                        action: miloFiles['../projects/milo/milo.zip'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: `Online demo lacks backend features like the leaderboard at the end. To play the game locally, follow the instructions below.`
            },
            {
                type: 'heading',
                text: 'Installation Instructions'
            },
            {
                type: 'subheading',
                text: 'Prerequisites'
            },
            {
                type: 'bullet',
                text: 'Node.js installed'
            },
            {
                type: 'bullet',
                text: 'Visual Studio Code installed'
            },
            {
                type: 'bullet',
                text: 'Live Server extension installed & activated in Visual Studio Code'
            },
            {
                type: 'subheading',
                text: 'Steps'
            },
            {
                type: 'iconed',
                text: 'Clone or download the project',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Clone the project repository into a local directory'
            },
            {
                type: 'bullet',
                text: 'Alternatively, download the project zip file and extract it into a local directory'
            },
            {
                type: 'iconed',
                text: 'Start the backend',
                icon: '2'
            },
            {
                type: 'bullet',
                text: 'Navigate to the <span class="snippet">/server</span> directory'
            },
            {
                type: 'bullet',
                text: `Start the Node.js server with the command
            <span class= "snippet hoverable tooltip copy" tooltip="copy" > node server.mjs</span>
                        in the terminal`
            },
            {
                type: 'iconed',
                text: 'Start the frontend',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Navigate to the <span class="snippet">/client</span> directory and open it in Visual Studio Code'
            },
            {
                type: 'bullet',
                text: 'Click on Go Live at the bottom right to start the Live Server'
            },
            {
                type: 'bullet',
                text: `The project should automatically open in the browser(if not, open
    < span class="snippet hoverable tooltip copy" tooltip = "copy" > http://127.0.0.1:5500/</span>
                        in the browser and adjust Live Server settings accordingly)`
            },
            {
                type: 'subheading',
                text: "Enjoy milo's forest adventure!"
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'subheading',
                text: 'Scenes'
            },
            {
                type: 'bullet',
                text: 'Intro Dialogue: Milo welcomes the player.'
            },
            {
                type: 'bullet',
                text: 'Day Scene: Navigate Milo through the forest during the day.'
            },
            {
                type: 'bullet',
                text: 'River Dialogue: Engage in a conversation with Milo by the Rami River.'
            },
            {
                type: 'bullet',
                text: 'Night Scene: Guide Milo through the forest at night.'
            },
            {
                type: 'bullet',
                text: 'Cliff Dialogue: A reflective conclusion at a cliff edge.'
            },
            {
                type: 'bullet',
                text: `End Screen: Displays the player's score and a leaderboard of the top 10 players.`
            },
            {
                type: 'subheading',
                text: 'Tools & Resources'
            },
            {
                type: 'bullet',
                text: 'Development: HTML, CSS, JavaScript, Node.js, Express, Visual Studio Code, Live Server, Chrome DevTools, GitHub'
            },
            {
                type: 'bullet',
                text: 'Graphics: Piskel, Adobe Firefly, PowerPoint, Photoshop, FontStruct'
            },
            {
                type: 'bullet',
                text: 'Audio: Suno, Freesound, Adobe Audition'
            },
            {
                type: 'bullet',
                text: 'AI Assistance: ChatGPT, Gemini'
            },
            {
                type: 'subheading',
                text: 'Development Process'
            },
            {
                type: 'bullet',
                text: 'Motivation: High motivation throughout the project drove significant investment of time and energy.'
            },
            {
                type: 'bullet',
                text: 'Challenges: Overcame moments of uncertainty with structured to-do lists, improving focus and task management.'
            },
            {
                type: 'bullet',
                text: 'Programming Techniques: Factory functions, dynamic HTML generation, POST requests, cookie implementation.'
            },
            {
                type: 'subheading',
                text: 'Key Features'
            },
            {
                type: 'bullet',
                text: 'Interactive scrolling and clicking mechanics for intuitive gameplay.'
            },
            {
                type: 'bullet',
                text: 'Dynamic score tracking with leaderboard functionality.'
            },
            {
                type: 'bullet',
                text: 'Charming pixel art and audio design enhance the immersive experience.'
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: miloFiles['../projects/milo/milo_forest.png'].default,
                        caption: 'Day Scene'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_river.png'].default,
                        caption: 'River Dialogue'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_night.png'].default,
                        caption: 'Night Scene'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_endscreen.png'].default,
                        caption: 'End Screen & Leaderboard'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/milo',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'itch.io Page',
                url: 'https://jfladas.itch.io/milos-forest-adventure',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Play Demo',
                url: 'https://milo.jfladas.com',
                icon: 'external-link-alt'
            },
            {
                text: 'Playthrough Video',
                url: 'https://youtu.be/_kuLURwhBGY',
                icon: 'fa-brands fa-youtube'
            }
        ],
        downloads: [
            {
                text: 'Milo.zip',
                url: miloFiles['../projects/milo/milo.zip'].default,
                icon: 'file-archive'
            },
            {
                text: 'Documentation.pdf',
                url: miloFiles['../projects/milo/milo_documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Presentation.pdf',
                url: miloFiles['../projects/milo/milo_presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // beautiful mathematics
    {
        id: 'matbf',
        name: 'beautiful mathematics',
        description: 'collection of mathematical explorations',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Module MATBF - Beautiful Mathematics'
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: `The Module explores the beauty of mathematics through generative art and algorithmic design, using p5.js, HTML, CSS, and JavaScript. 
                        This page showcases a collection of weekly tasks completed during weeks 1 to 6 of the module and an exam project. 
                        Each task implements mathematical and computational principles to create visually engaging patterns, simulations, and interactive experiences.`
            },
            {
                type: 'heading',
                text: 'View Collection'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Go to Page',
                        action: 'https://matbf.jfladas.com',
                        icon: 'arrow-right',
                        color: 'primary'
                    },
                    {
                        text: 'Documentation',
                        action: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'

                    }
                ]
            },
            {
                type: 'heading',
                text: 'Weekly Projects'
            },
            {
                type: 'iconed',
                text: 'W1 | Spiral',
                icon: 'spinner'
            },
            {
                type: 'paragraph',
                text: 'Spiral of circles increasing in size made by implementing Bresenham Midpoint Circle Algorithm'
            },
            {
                type: 'iconed',
                text: 'W2 | 3D Mesh',
                icon: 'circle-nodes'
            },
            {
                type: 'paragraph',
                text: 'Attempt at a 3D snail shape using WebGL'
            },
            {
                type: 'iconed',
                text: 'W3 | Matrix',
                icon: 'font'
            },
            {
                type: 'paragraph',
                text: 'Markov Chain with Japanese Hiragana'
            },
            {
                type: 'iconed',
                text: 'W4 | Life',
                icon: 'border-all'
            },
            {
                type: 'paragraph',
                text: "Interactive Conway's Game of Life with more States/Colors"
            },
            {
                type: 'iconed',
                text: 'W5 | Mountains',
                icon: 'mountain'
            },
            {
                type: 'paragraph',
                text: 'Layered mountain range made with 2D Fractal Noise and Smoothstep-Interpolation'
            },
            {
                type: 'iconed',
                text: 'W6 | Trees',
                icon: 'tree'
            },
            {
                type: 'paragraph',
                text: 'Different Trees using 2D L-Systems'
            },
            {
                type: 'iconed',
                text: 'EXAM | Breathing',
                icon: 'genderless'
            },
            {
                type: 'paragraph',
                text: 'Pulsating Circles for Mindful Breathing'
            },
            {
                type: 'heading',
                text: 'Key Learnings'
            },
            {
                type: 'bullet',
                text: 'Applying mathematical algorithms to creative coding.'
            },
            {
                type: 'bullet',
                text: 'Exploring generative art with p5.js and WebGL.'
            },
            {
                type: 'bullet',
                text: 'Enhancing interactivity through Markov Chains, Cellular Automata, and L-Systems.'
            },
            {
                type: 'bullet',
                text: 'Using fractal noise and procedural techniques for natural-looking landscapes.'
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: matbfFiles['../projects/matbf/W1.jpg'].default,
                        caption: 'W1 | Spiral'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W2.gif'].default,
                        caption: 'W2 | 3D Mesh'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W3.gif'].default,
                        caption: 'W3 | Matrix'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W4.gif'].default,
                        caption: 'W4 | Life'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W5.gif'].default,
                        caption: 'W5 | Mountains'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W6.jpg'].default,
                        caption: 'W6 | Trees'
                    },
                    {
                        src: matbfFiles['../projects/matbf/EXAM.gif'].default,
                        caption: 'EXAM | Breathing'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'Go to Page',
                url: 'https://matbf.jfladas.com',
                icon: 'external-link-alt'
            },
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/matbf',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'Beautiful Mathematics',
                url: 'https://learning.kahlina.ch/Beautiful%20Mathematics/beautiful_mathematics_start.html',
                icon: 'external-link-alt'
            }
        ],
        downloads: [
            {
                text: 'Documentation.pdf',
                url: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                icon: 'file-pdf'
            },
        ]
    },
    // connected europe
    {
        id: '4g',
        name: 'connected europe',
        description: 'data visualization poster of 4g network expansion',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Module STUIN - Studio Information Aesthetics & Engineering'
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'solo',
            'design'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Between 2012 and 2016, Europe experienced a rapid expansion of 4G mobile network coverage, marking a turning point in digital connectivity.
                        This data visualization project explores the speed and scale of 4G deployment across Europe, highlighting its impact on society.`
            },
            {
                type: 'heading',
                text: 'Poster'
            },
            {
                type: 'images',
                images: [
                    {
                        src: europeFiles['../projects/4g/ConnectedEurope.jpg'].default,
                        caption: 'Connected Europe'
                    }
                ],
            },
            {
                type: 'heading',
                text: 'Data Source & Analysis'
            },
            {
                type: 'paragraph',
                text: `The dataset from the United Nations Sustainable Development Goals (SDG) Data Portal provided a comprehensive overview of 4G network coverage across Europe.
                        It was analyzed using Microsoft Excel, applying filtering, pivot tables, and conditional formatting to extract key insights. The structured data allowed for comparisons across countries and time periods, revealing trends in connectivity expansion.`
            },
            {
                type: 'iconed',
                text: 'Dataset',
                icon: 'database'
            },
            {
                type: 'bullet',
                text: 'UN SDG Data Portal - Indicator 9.c.1 (Mobile Network Coverage)'
            },
            {
                type: 'iconed',
                text: 'Timeframe',
                icon: 'calendar-alt'
            },
            {
                type: 'bullet',
                text: '2012-2022'
            },
            {
                type: 'iconed',
                text: 'Countries',
                icon: 'globe-europe'
            },
            {
                type: 'bullet',
                text: '16 European countries divided into 4 regions of Europe'
            },
            {
                type: 'iconed',
                text: 'Focus Question',
                icon: 'question'
            },
            {
                type: 'bullet',
                text: 'How quickly was 4G technology adopted across Europe?'
            },
            {
                type: 'iconed',
                text: 'Software',
                icon: 'arrow-pointer'
            },
            {
                type: 'bullet',
                text: 'Microsoft Excel for data analysis'
            },
            {
                type: 'bullet',
                text: 'Adobe InDesign for layout and poster design'
            },
            {
                type: 'bullet',
                text: 'Adobe Illustrator for data visualization'
            },
            {
                type: 'heading',
                text: 'Sketches'
            },
            {
                type: 'paragraph',
                text: `The sketching process focuses on the three data dimensions:`
            },
            {
                type: 'iconed',
                text: 'Diagrammatical Dimensions',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Focuses on the basic diagram types and their application.'
            },
            {
                type: 'iconed',
                text: 'Visual Dimensions',
                icon: '2'
            },
            {
                type: 'bullet',
                text: 'Destinguishes between different content by using various design principles.'
            },
            {
                type: 'iconed',
                text: 'Structuring Dimensions',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Deals with the organization and arrangement of the objects in the space.'
            },
            {
                type: 'images',
                images: [
                    {
                        src: europeFiles['../projects/4g/Sketches1.jpg'].default,
                        caption: 'Sketch 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches2.jpg'].default,
                        caption: 'Diagrammatical Dimensions 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches3.jpg'].default,
                        caption: 'Sketch 2'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches4.jpg'].default,
                        caption: 'Diagrammatical Dimensions 2'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches5.jpg'].default,
                        caption: 'Diagrammatical, Visual & Structuring Dimensions 3'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches6.jpg'].default,
                        caption: 'Visual Dimensions 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches7.jpg'].default,
                        caption: 'Sketch 3'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches8.jpg'].default,
                        caption: 'Sketch 4'
                    }
                ],
            },
        ],
        links: [
            {
                text: 'UN SDG Goal 9',
                url: 'https://www.un.org/sustainabledevelopment/infrastructure-industrialization/',
                icon: 'external-link-alt'
            },
            {
                text: 'UN SDG Data Portal',
                url: 'https://unstats.un.org/sdgs/dataportal/database',
                icon: 'external-link-alt'
            }
        ],
        downloads: [
            {
                text: 'ConnectedEurope.pdf',
                url: europeFiles['../projects/4g/ConnectedEurope.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Sketches.pdf',
                url: europeFiles['../projects/4g/Sketches.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // salad ninja
    {
        id: 'salad',
        name: 'salad ninja',
        description: '2d animated video inspired by fruit ninja',
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                'Module ISA ANIM - Introduction to Animation'
            ],
            url: 'https://www.hslu.ch/en/lucerne-school-of-design-film-and-art/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Salad Ninja is a 2D animated video inspired by the popular mobile game Fruit Ninja.
                        The video shows the preparation of a salad by slicing various ingredients.
                        It uses a combination of stop motion and frame-by-frame paper animation and 
                        was developed in a team of two with Remo Hösli as part of the ISA Animation Introduction module.`
            },
            {
                type: 'heading',
                text: 'Video'
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/SaladNinja.mp4'].default
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'subheading',
                text: 'Concept & Execution'
            },
            {
                type: 'paragraph',
                text: `The animation follows the playful destruction of various ingredients, blending two animation techniques:
                        Stop motion for animating all of the ingredients spinning and being sliced.
                        Frame-by-frame paper animation for slices, splashes, visual effects like fire, and text.
                        The final animation was edited and enriched by sound in After Effects, combining both techniques seamlessly.`
            },
            {
                type: 'subheading',
                text: 'Process Insights'
            },
            {
                type: 'images',
                images: [
                    {
                        src: saladFiles['../projects/salad/Inspo.gif'].default,
                        caption: 'Inspiration: Fruit Ninja Game'
                    },
                    {
                        src: saladFiles['../projects/salad/Storyboard.jpg'].default,
                        caption: 'Storyboard'
                    },
                    {
                        src: saladFiles['../projects/salad/Setup.gif'].default,
                        caption: 'Stop Motion Animation'
                    },
                    {
                        src: saladFiles['../projects/salad/POC.gif'].default,
                        caption: 'Proof of Concept'
                    },
                    {
                        src: saladFiles['../projects/salad/Salad.jpg'].default,
                        caption: 'The Salad'
                    },
                ]
            },
            {
                type: 'subheading',
                text: 'Team Roles'
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Animation concept'
            },
            {
                type: 'bullet',
                text: 'On-paper animation'
            },
            {
                type: 'bullet',
                text: 'Stop motion animation'
            },
            {
                type: 'bullet',
                text: 'Sound design'
            },
            {
                type: 'bullet',
                text: 'Salad eating'
            },
            {
                type: 'iconed',
                text: 'Remo Hösli',
                icon: 'user-ninja'
            },
            {
                type: 'bullet',
                text: 'Animation concept'
            },
            {
                type: 'bullet',
                text: 'Stop motion animation'
            },
            {
                type: 'bullet',
                text: 'Editing in After Effects'
            },
            {
                type: 'bullet',
                text: 'Sound design'
            },
            {
                type: 'bullet',
                text: 'Salad eating'
            },
            {
                type: 'heading',
                text: 'Other Projects in the Module'
            },
            {
                type: 'paragraph',
                text: `Alongside Salad Ninja, we worked on additional animation exercises exploring different techniques and approaches.
                        Some examples:`
            },
            {
                type: 'subheading',
                text: 'Transition Animation'
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Stir.mp4'].default
            },
            {
                type: 'paragraph',
                text: `This exercise focused on creating a smooth transition between two objects.
                        The individual animation segments of all students were then combined into a single video, creating a seamless transition chain.
                        Here, only my part of the animation is shown, depicting the transition from a cup to a pencil.`
            },
            {
                type: 'subheading',
                text: 'Stop Motion Claymation'
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Frog.mp4'].default
            },
            {
                type: 'paragraph',
                text: `In this exercise, I tried out claymation using stop motion techniques together with Remo.
                        We created a short video with sound of a frog emerging and catching a fly.`
            }
        ],
        links: [],
        downloads: [
            {
                text: 'SaladNinja.mp4',
                url: saladFiles['../projects/salad/SaladNinja.mp4'].default,
                icon: 'file-video'
            },
            {
                text: 'Transition.mp4',
                url: saladFiles['../projects/salad/Stir.mp4'].default,
                icon: 'file-video'
            },
            {
                text: 'Claymation.mp4',
                url: saladFiles['../projects/salad/Frog.mp4'].default,
                icon: 'file-video'
            }
        ]
    },
    // ux hscl
    {
        id: 'hscl',
        name: 'ux hscl',
        description: `user experience design for school sports organization`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Module IUX - Introduction to User Experience'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'design',
            'ux',
        ],
        sections: [
            {
                type: 'quoted',
                text: `This UX redesign project focused on improving the usability of the HSCL website. 
                        Conducted through extensive user research, prototyping, and testing, the project aimed to optimize navigation, 
                        structure, and personalization for a better user experience. Created by Üx-Grüp (Yanis Deplazes, Jan Schwegler, 
                        Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) as part of the Introduction to UX module.`
            },
            {
                type: 'heading',
                text: 'Screencast'
            },
            {
                type: 'video',
                video: hsclFiles['../projects/hscl/IUX_Screencast.mov'].default
            },
            {
                type: 'heading',
                text: 'Project Overview'
            },
            {
                type: 'paragraph',
                text: `The goal of this project was to enhance the HSCL website by addressing key usability pain points. 
                       Through a structured UX design process, the team defined user needs, created prototypes, 
                       and refined them based on extensive user feedback.`
            },
            {
                type: 'heading',
                text: 'Research & Problem Identification'
            },
            {
                type: 'subheading',
                text: 'User Research Methods'
            },
            {
                type: 'bullet',
                text: 'User surveys'
            },
            {
                type: 'bullet',
                text: 'Empathy maps'
            },
            {
                type: 'bullet',
                text: 'Personas (primary, secondary, and negative personas)'
            },
            {
                type: 'bullet',
                text: 'Direct user testing'
            },
            {
                type: 'subheading',
                text: 'Key Issues Identified'
            },
            {
                type: 'bullet',
                text: 'Inefficient filtering options'
            },
            {
                type: 'bullet',
                text: 'Confusing registration process'
            },
            {
                type: 'bullet',
                text: 'Lack of a location-based training search'
            },
            {
                type: 'bullet',
                text: 'Content overload and poor structure'
            },
            {
                type: 'bullet',
                text: 'Absence of multilingual support'
            },
            {
                type: 'bullet',
                text: 'Navigation inefficiencies'
            },
            {
                type: 'heading',
                text: 'Solution Implementation'
            },
            {
                type: 'subheading',
                text: 'Prototyping Process'
            },
            {
                type: 'bullet',
                text: 'Created initial paper prototypes and tested them through hallway usability tests.'
            },
            {
                type: 'bullet',
                text: 'Developed digital prototypes in Figma, iterating based on feedback.'
            },
            {
                type: 'subheading',
                text: 'Tested Solutions & Enhancements'
            },
            {
                type: 'bullet',
                text: 'New search function with an integrated map view.'
            },
            {
                type: 'bullet',
                text: 'Streamlined filtering system, including location-based filtering.'
            },
            {
                type: 'bullet',
                text: 'Chronological event listing.'
            },
            {
                type: 'bullet',
                text: 'Improved homepage with direct access to key sections.'
            },
            {
                type: 'bullet',
                text: 'Clearer naming conventions for better navigation.'
            },
            {
                type: 'bullet',
                text: 'Optimized content layout for clarity.'
            },
            {
                type: 'bullet',
                text: 'Implementation of a language switcher.'
            },
            {
                type: 'bullet',
                text: 'Enhanced training information structure.'
            },
            {
                type: 'bullet',
                text: 'Personalized features such as account-based favorites.'
            },
            {
                type: 'heading',
                text: 'User Testing & Insights'
            },
            {
                type: 'paragraph',
                text: `Conducted two rounds of UX testing in real environments (HSLU campus hallways and higher semester students).`
            },
            {
                type: 'subheading',
                text: 'Key findings led to'
            },
            {
                type: 'bullet',
                text: 'Emphasizing tab-based navigation.'
            },
            {
                type: 'bullet',
                text: 'Redesigning the login process for better usability.'
            },
            {
                type: 'bullet',
                text: 'Relocating the favorites icon to improve visibility.'
            },
            {
                type: 'bullet',
                text: 'Adding a dark mode for a better user experience.'
            },
            {
                type: 'bullet',
                text: 'Refining the date selection process.'
            },
            {
                type: 'heading',
                text: 'Final Outcomes'
            },
            {
                type: 'paragraph',
                text: `The revised website prototype significantly improved user engagement and navigation efficiency. 
                       The project provided valuable insights into real-world UX research and iterative design. 
                       While a mobile app was suggested by users, it was deemed impractical within the given timeframe.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screens.png'].default,
                        caption: 'Final Website Screens'
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screenshots.png'].default,
                        caption: 'Final Prototype Screenshots'
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Figma_Design.png'].default,
                        caption: 'Figma Design'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'Behance Project',
                url: 'https://www.behance.net/gallery/194721225/HSCL-UX',
                icon: 'fa-brands fa-behance'
            },
            {
                text: 'Figma Prototype',
                url: 'https://www.figma.com/proto/ZQ7E5M9gXRIQyZ30bm113Q/HSCL?page-id=210%3A203&node-id=351-1042&p=f&viewport=151%2C580%2C0.11&t=rBFIgp854gtlzYAE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=351%3A1042',
                icon: 'fa-brands fa-figma'
            }
        ],
        downloads: [
            {
                text: 'Presentation.ppsx',
                url: hsclFiles['../projects/hscl/IUX_Presentation.ppsx'].default,
                icon: 'file-powerpoint'
            },
            {
                text: 'Documentation.pdf',
                url: hsclFiles['../projects/hscl/IUX_Documentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // sweet teeth
    {
        id: 'sweet',
        name: 'sweet teeth',
        description: `2d auto-runner game`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Module IGAME - Game Design & Engineering'
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'coding',
            'game',
        ],
        sections: [
            {
                type: 'quoted',
                text: `Sweet Teeth was the product of our first game module. Players control a mischievous bacterium,
                        that teleports automatically in intervals. The Goal is to rot as many teeth as possible while avoiding the evil oral hygiene products.
                        It was created during the IGAME module by Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher).`
            },
            {
                type: 'heading',
                text: 'Play the Game'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Play in Browser',
                        action: 'https://itch.io/embed-upload/9224978?color=FA98E0',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'Download',
                        action: '',
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: `The game can be played in the browser or downloaded for Windows. To play the game locally, 
                        download the zip file, extract it, and run <span class="snippet">IGAME_HDL.exe</span>.`
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'paragraph',
                text: `In Sweet Teeth players take on the role of an adventurous bacterium with a teleportation power, 
                        trying to rot as many teeth as possible. Set inside a mouth, 
                        the game challenges players to avoid obstacles and survive from a furious toothbrush chasing them.`
            },
            {
                type: 'subheading',
                text: 'Gameplay Mechanics'
            },
            {
                type: 'bullet',
                text: `Teleportation: This is the main mechanic our team was assigned to implement.
                        The bacterium automatically teleports every 1.5 seconds within a radius 
                        controlled by the player's mouse movement. Mastering this mechanic is key to survival and success.`
            },
            {
                type: 'bullet',
                text: 'Obstacles: Players must avoid deadly toothbrush, mouthwash, and toothpaste while navigating the rows of teeth.'
            },
            {
                type: 'bullet',
                text: `Power-Up: Collect enough candies to activate the "Super Rot" ability, 
                        instantly rotting all teeth within the teleportation radius for a limited time.`
            },
            {
                type: 'bullet',
                text: `Score System: Players earn points by rotting teeth and can track their score with the in-game counter.
                        Try setting a new high score!`
            },
            {
                type: 'bullet',
                text: 'Win Condition: The game concludes at the finish line, where players see their score and can restart the game.'
            },
            {
                type: 'subheading',
                text: 'Art Style'
            },
            {
                type: 'paragraph',
                text: `The game features a colorful comic-style aesthetic. The main character is a green bacterium, 
                        and the environment includes pink and blue vein textures as well as rows of teeth that turn black when decayed.`
            },
            {
                type: 'paragraph',
                text: `Enemies like toothpaste and mouthwash feature blue tones, contrasting against the colorful collectable candies.`
            },
            {
                type: 'paragraph',
                text: `All sprites were hand-drawn in Adobe Illustrator, emphasizing bold outlines and highlights.`
            },
            {
                type: 'subheading',
                text: 'Development Process'
            },
            {
                type: 'paragraph',
                text: `When developing the initial concept, the team brainstormed and prototyped the teleportation mechanic, 
                        focusing on simplicity and fun.`
            },
            {
                type: 'paragraph',
                text: `Regular testing and feedback refined the gameplay loop, balancing the difficulty and pacing of the game.
                        Iterative development allowed for continuous improvement and polish.`
            },
            {
                type: 'paragraph',
                text: `Custom sounds were added for teleportation, candy collection, and win/lose conditions.`
            },
            {
                type: 'subheading',
                text: 'Team Roles'
            },
            {
                type: 'iconed',
                text: 'Team HDL (all team members)',
                icon: 'users'
            },
            {
                type: 'bullet',
                text: 'Conceptualized the game idea and mechanics'
            },
            {
                type: 'bullet',
                text: 'Discussed and iterated on the game design and art style'
            },
            {
                type: 'bullet',
                text: 'Wrote DevDiary entries to document the development process'
            },
            {
                type: 'iconed',
                text: 'Designers (Chiara & Michelle)',
                icon: 'pen-nib'
            },
            {
                type: 'bullet',
                text: 'Established the art style and user interface design'
            },
            {
                type: 'bullet',
                text: 'Hand-drew all sprites and backgrounds'
            },
            {
                type: 'bullet',
                text: 'Designed the game\'s visual identity'
            },
            {
                type: 'iconed',
                text: 'Programmers (Lukas & Dario)',
                icon: 'code'
            },
            {
                type: 'bullet',
                text: 'Created an engaging level design'
            },
            {
                type: 'bullet',
                text: 'Developed the game mechanics and interactions'
            },
            {
                type: 'bullet',
                text: 'Implemented asset integration and sound effects'
            },
            {
                type: 'subheading',
                text: 'Challenges'
            },
            {
                type: 'bullet',
                text: 'Balancing teleportation mechanics to ensure intuitive and responsive gameplay.'
            },
            {
                type: 'bullet',
                text: 'Designing a visually cohesive world within strict sprite limitations (10 sprites, 3 animations per sprite).'
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_Start.png'].default,
                        caption: 'Start Screen'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_Super.png'].default,
                        caption: 'Super Rot Power-Up'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_Oops.png'].default,
                        caption: 'Game Over Screen'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_WellDone.png'].default,
                        caption: 'Win Screen'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/SweetTeeth',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'itch.io Page',
                url: 'https://jfladas.itch.io/sweet-teeth',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Gameplay Video',
                url: 'https://youtu.be/04TWBzgvl34',
                icon: 'fa-brands fa-youtube'
            },
            {
                text: 'Dev Blog Entries',
                url: 'https://blog.hslu.ch/games/?s=HDL+Week',
                icon: 'external-link-alt'
            }
        ],
        downloads: [
            {
                text: 'SweetTeeth.zip (Windows)',
                url: sweetFiles['../projects/sweet/SweetTeeth.zip'].default,
                icon: 'file-archive'
            },
            {
                text: 'Description.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_Description.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'ControlScheme.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_ControlScheme.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Presentation.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_Presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // the rodina
    {
        id: 'rodina',
        name: 'the rodina',
        description: `3d rendered video inspired by the rodina's visual style`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Module KIVIS - Kickstart Visual Design'
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'solo',
            'design',
            '3d',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: `In the Kickstart Visual Design course, we were taught design fundamentals and principles.
                        We learned about many influential designers and design studios, one of which we were tasked to focus on for a presentation and final project.
                        The final project I developed is inpired by the distinct visual style of the dutch design studio 'The Rodina'.

                        For animating and editing a scanned 3D modeling of my head I used Cinema 4D, video editing, sound design and color correction was done in Adobe Premiere Pro.
                        The project integrates feedback and experimentation to achieve a polished visual result.`
            },
            {
                type: 'heading',
                text: 'Video'
            },
            {
                type: 'video',
                video: rodinaFiles['../projects/rodina/The_Rodina.mp4'].default
            },
            {
                type: 'heading',
                text: 'Process'
            },
            {
                type: 'iconed',
                text: 'Conceptualization',
                icon: '1'
            },
            {
                type: 'paragraph',
                text: `The project was inspired primarily by two works of The Rodina. 
                        The idea was to scan my head and design a piece that reflects their aesthetic style, 
                        incorporating vibrant visuals and motion.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/inspiration1.jpg'].default,
                        caption: 'Inspiration 1: You and Me'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/inspiration2.jpg'].default,
                        caption: 'Inspiration 2: Sweet Datapoint'
                    }
                ]
            },
            {
                type: 'iconed',
                text: 'Initial 3D Scan',
                icon: '2'
            },
            {
                type: 'paragraph',
                text: `A 3D scan of my head was taken as the base, using the mobile app Polycam. 
                        This raw scan was refined in Cinema4D, including modifications such as 
                        distorting the eye area for an abstract effect.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/scans.gif'].default,
                        caption: 'Raw Scan & Edit'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/scan_c4d.jpg'].default,
                        caption: 'Scan in Cinema4D'
                    }
                ]
            },
            {
                type: 'iconed',
                text: 'Visual Variations',
                icon: '3'
            },
            {
                type: 'paragraph',
                text: `I experimented with static poster designs and animated video concepts. 
                        In the end, I settled on the latter for a more dynamic presentation.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/variant1.jpg'].default,
                        caption: 'Poster Variant 1'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/variant2.jpg'].default,
                        caption: 'Poster Variant 2'
                    }
                ]
            },
            {
                type: 'iconed',
                text: 'Feedback',
                icon: '4'
            },
            {
                type: 'paragraph',
                text: `Some feedback I got in the first round was, that the colors were too bright, and the head rotation too fast.`
            },
            {
                type: 'subheading',
                text: 'First Version'
            },
            {
                type: 'video',
                video: rodinaFiles['../projects/rodina/rodina_v1.mp4'].default
            },
            {
                type: 'iconed',
                text: 'Experimentation',
                icon: '5'
            },
            {
                type: 'bullet',
                text: 'Adjusted colors for better balance & refined animation to slow down the rotation'
            },
            {
                type: 'bullet',
                text: 'Played with object placement, shadows and text design'
            },
            {
                type: 'bullet',
                text: 'Integrated audio to enhance the final video'
            },
            {
                type: 'bullet',
                text: 'A total of 8 iterations resulted in the final video.'
            },
            {
                type: 'iconed',
                text: 'Final Result',
                icon: '6'
            },
            {
                type: 'paragraph',
                text: `The final animation combines the best elements of previous iterations, 
                        blending balanced colors, smooth animations, and thoughtful object placement. 
                        It reflects The Rodina's essence while incorporating unique personal elements.`
            },
            {
                type: 'heading',
                text: 'Presentation'
            },
            {
                type: 'paragraph',
                text: `Prior to the final project, a short presentation was held to introduce The Rodina and their work. 
                        It can be found under the downloads section.`
            },
            {
                type: 'heading',
                text: 'Further Work'
            },
            {
                type: 'paragraph',
                text: `Throughout the Kickstart Visual Design module, we did various other exercises and projects.
                        With these, we explored typography, color theory, and visual hierarchy, among other topics.
                        A documentation of the module with my work can be found under the downloads section.`
            }
        ],
        links: [
            {
                text: 'The Rodina',
                url: 'https://www.therodina.com/',
                icon: 'external-link-alt'
            }
        ],
        downloads: [
            {
                text: 'The_Rodina.mp4',
                url: rodinaFiles['../projects/rodina/The_Rodina.mp4'].default,
                icon: 'file-video'
            },
            {
                text: 'The_Rodina_Presentation.ppsx',
                url: rodinaFiles['../projects/rodina/The_Rodina_Presentation.ppsx'].default,
                icon: 'file-powerpoint'
            },
            {
                text: 'KIVIS_Documentation.ppsx',
                url: rodinaFiles['../projects/rodina/KIVIS_Documentation.ppsx'].default,
                icon: 'file-powerpoint'
            }
        ]
    },
    // solarsystem
    {
        id: 'solarsystem',
        name: 'solarsystem',
        description: `3d rendered asteroid video`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Module 4DAUT - Cinema 4D Authoring'
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            '3d',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: `This was my first encounter with 3D design and rendering. 
                        As a final project we were tasked to create a video, applying everything we learned within the course.
                        We decided to animate an asteroid soaring past the planets of our solar system, 
                        ending in a dramatic collision with Earth. It was created using Cinema 4D with Chaos Corona.
                        The project was executed as a team effort between myself and Silvan Parodi.`
            },
            {
                type: 'heading',
                text: 'Video'
            },
            {
                type: 'video',
                video: solarsystemFiles['../projects/solarsystem/solarsystemc4d.mp4'].default
            },
            {
                type: 'heading',
                text: 'Other Renders'
            },
            {
                type: 'paragraph',
                text: 'Through the C4D Authoring module, some renders were created as part of the learning process. Here are a few examples:'
            },
            {
                type: 'subheading',
                text: 'Homework 1: Chaos'
            },
            {
                type: 'bullet',
                text: 'A chaotic yet aesthetic assembly of shapes and objects'
            },
            {
                type: 'bullet',
                text: 'render emphasizes randomness and texture experimentation'
            },
            {
                type: 'subheading',
                text: 'Homework 2: Vodka Bottle'
            },
            {
                type: 'bullet',
                text: 'Three variants of vodka bottles with unique, self-designed labels'
            },
            {
                type: 'bullet',
                text: 'Bottle and glass 3D assets imported from Cinema 4D library'
            },
            {
                type: 'bullet',
                text: 'Composition & ice cubes and lime created from scratch'
            },
            {
                type: 'heading',
                text: 'Pictures'
            },
            {
                type: 'images',
                images: [
                    {
                        src: solarsystemFiles['../projects/solarsystem/1_chaos.jpg'].default,
                        caption: 'Chaos'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_classic.jpg'].default,
                        caption: 'Label: Classic'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_classic.jpg'].default,
                        caption: 'Vodka Bottle: Classic'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_limemint.jpg'].default,
                        caption: 'Label: Lime Mint'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_limemint.jpg'].default,
                        caption: 'Vodka Bottle: Lime Mint'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_strawberry.jpg'].default,
                        caption: 'Label: Strawberry'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_strawberry.jpg'].default,
                        caption: 'Vodka Bottle: Strawberry'
                    },
                ],
            },
        ],
        links: [],
        downloads: [
            {
                text: 'Solarsystem.mp4',
                url: solarsystemFiles['../projects/solarsystem/solarsystemc4d.mp4'].default,
                icon: 'file-video'
            },
            {
                text: 'Chaos.jpg',
                url: solarsystemFiles['../projects/solarsystem/1_chaos.jpg'].default,
                icon: 'file-image'
            },
            {
                text: 'Vodka_Classic.jpg',
                url: solarsystemFiles['../projects/solarsystem/2_vodka_classic.jpg'].default,
                icon: 'file-image'
            },
            {
                text: 'Vodka_LimeMint.jpg',
                url: solarsystemFiles['../projects/solarsystem/2_vodka_limemint.jpg'].default,
                icon: 'file-image'
            },
            {
                text: 'Vodka_Strawberry.jpg',
                url: solarsystemFiles['../projects/solarsystem/2_vodka_strawberry.jpg'].default,
                icon: 'file-image'
            }
        ]
    },
    // google chrome extension
    {
        id: 'pa',
        name: 'google chrome extension',
        description: 'internal organization structure & employee information',
        context: {
            lines: [
                '2022 @ Suva, Lucerne',
                'QV PA - final practical project of software developer apprenticeship'
            ],
            url: 'https://www.suva.ch/',
            icon: 'briefcase',
            tooltip: 'work'
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        links: [],
        downloads: [
            {
                text: 'Documentation.pdf',
                url: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Documentation_Redacted.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Presentation.pdf',
                url: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Presentation.ppsx',
                url: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Presentation.ppsx'].default,
                icon: 'file-powerpoint'
            },
        ],
        sections: [
            {
                type: 'quoted',
                text: `This project aimed to explore the potential of browser-based solutions for internal organizational tools 
                        by creating a functional Chrome extension. It represents Suva's SAFe team structures and offers easy access 
                        to hierarchical data, catering to both administrative and operational needs.`
            },
            {
                type: 'heading',
                text: 'Pictures'
            },
            {
                type: 'images',
                images: [
                    {
                        src: paFiles['../projects/pa/pa_big_picture.png'].default,
                        caption: 'Project Structure (Big Picture)'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_home.png'].default,
                        caption: 'Main Page with additional Info-Apps'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe.png'].default,
                        caption: 'Hierarchical & Detail View'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_options.png'].default,
                        caption: 'Options Page'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_dark.png'].default,
                        caption: 'Dark Mode'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe_dark.png'].default,
                        caption: 'Hierarchical & Detail View in Dark Mode'
                    }
                ],
            },
            {
                type: 'heading',
                text: 'Project Description'
            },
            {
                type: 'subheading',
                text: 'Objectives'
            },
            {
                type: 'bullet',
                text: 'Develop a modular framework for the Chrome extension'
            },
            {
                type: 'bullet',
                text: 'Create a main page listing available modules ("Info-Apps")'
            },
            {
                type: 'bullet',
                text: 'Implement the "Suva SAFe" app as the first module'
            },
            {
                type: 'bullet',
                text: 'Provide hierarchical navigation within the "Suva SAFe" app'
            },
            {
                type: 'bullet',
                text: 'Add user personalization options such as dark/light themes'
            },
            {
                type: 'subheading',
                text: 'Features'
            },
            {
                type: 'iconed',
                text: 'Main Page',
                icon: 'home'
            },
            {
                type: 'bullet',
                text: 'Lists available modules, starting with the "Suva SAFe" Info-App'
            },
            {
                type: 'iconed',
                text: 'Hierarchical View',
                icon: 'sitemap'
            },
            {
                type: 'bullet',
                text: 'Displays SAFe ARTs (Agile Release Trains), Products, Teams, and individual team members in a collapsible tree format'
            },
            {
                type: 'iconed',
                text: 'Detail View',
                icon: 'magnifying-glass'
            },
            {
                type: 'bullet',
                text: 'Provides role-specific information, such as emails, phone numbers, and descriptions, with interactive links for actionable insights'
            },
            {
                type: 'iconed',
                text: 'Customization',
                icon: 'paint-brush'
            },
            {
                type: 'bullet',
                text: 'Allows users to toggle between dark and light modes'
            },
            {
                type: 'subheading',
                text: 'Methodology'
            },
            {
                type: 'paragraph',
                text: 'The project followed the IPERKA method (Inform, Plan, Decide, Execute, Control, Evaluate):'
            },
            {
                type: 'iconed',
                text: 'Inform',
                icon: 'i'
            },
            {
                type: 'bullet',
                text: 'Research on Chrome Extension API and RESTful data integration'
            },
            {
                type: 'iconed',
                text: 'Plan',
                icon: 'p'
            },
            {
                type: 'bullet',
                text: 'Define milestones and use user stories to prioritize functionalities'
            },
            {
                type: 'iconed',
                text: 'Decide',
                icon: 'e'
            },
            {
                type: 'bullet',
                text: 'Evaluate and finalize the requirements for the application to meet project goals'
            },
            {
                type: 'iconed',
                text: 'Execute',
                icon: 'r'
            },
            {
                type: 'bullet',
                text: 'Implement features iteratively, focusing on modularity and user experience'
            },
            {
                type: 'iconed',
                text: 'Control',
                icon: 'k'
            },
            {
                type: 'bullet',
                text: 'Test against user story acceptance criteria'
            },
            {
                type: 'iconed',
                text: 'Evaluate',
                icon: 'a'
            },
            {
                type: 'bullet',
                text: 'Document outcomes and lessons learned'
            },
            {
                type: 'subheading',
                text: 'Key Achievements'
            },
            {
                type: 'bullet',
                text: 'Successfully integrated REST APIs to fetch organizational data'
            },
            {
                type: 'bullet',
                text: 'Combined two different REST APIs to ensure complete employee data coverage'
            },
            {
                type: 'bullet',
                text: 'Built a dynamic, hierarchical structure that supports effortless navigation'
            },
            {
                type: 'bullet',
                text: 'Implemented a user-friendly interface with a focus on simplicity and adaptability'
            },
            {
                type: 'bullet',
                text: 'Delivered thorough documentation covering installation, testing, and technical details'
            },
            {
                type: 'subheading',
                text: 'Conclusion'
            },
            {
                type: 'paragraph',
                text: 'This project showcases the viability of browser extensions as an internal organizational tool, providing a scalable and accessible platform for team and member information. It also serves as a foundation for future modules and functionalities.'
            }
        ]
    }
]

export const categories = {
    'solo': 'user',
    'team': 'users',
    'coding': 'code',
    'design': 'pen-nib',
    'web': 'globe',
    'game': 'gamepad',
    'ux': 'circle-user',
    'story': 'scroll',
    '3d': 'dice-d6',
    'video': 'video'
};

export const aboutContent = {
    title: "Lukas Bucher",
    sections: [
        {
            type: 'heading',
            text: 'Hi there!'
        },
        {
            type: 'quoted',
            text: `I'm currently studying <a href="https://www.hslu.ch/en/lucerne-school-of-information-technology/degree-programs/bachelor/digital-ideation/" class="bold hoverable" target="_blank">Digital Ideation</a> at the Lucerne University of Applied Sciences and Arts, an interdisciplinary program combining design and computer science to create digital solutions. I love exploring all of the possibilities of how technology and creativity can be combined. My focus mainly lies in web development, but other aspects I can explore with my studies also intrigue me, ranging from game design & development to digital art. After I've attained my bachelor of science, I aim to work in the field of frontend web development, creating unique and interactive user experiences. But who knows what the future may hold?`
        },
        {
            type: 'heading',
            text: 'Explore my work! Get in touch!'
        },
        {
            type: 'buttons',
            buttons: [
                {
                    text: 'My Projects',
                    action: 'projects',
                    icon: 'rocket',
                    color: 'primary',
                    same: true
                },
                {
                    text: 'E-Mail',
                    action: 'mailto:lukas.bucherr@gmail.com',
                    icon: 'paper-plane',
                    color: 'secondary'
                }
            ]
        },
        {
            type: 'heading',
            text: 'More about me...'
        },
        {
            type: 'subheading',
            text: 'Music'
        },
        {
            type: 'paragraph',
            text: `Beyond my passion for technology and design, music plays a big role in my life. I play the saxophone in the local orchestra '<a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>', which has been an amazing way to connect with others and immerse myself in the joy of creating music. My love for music doesn't stop there. I'm also a fan of K-pop and enjoy attending concerts whenever I can.`
        },
        {
            type: 'paragraph',
            text: 'Favorite K-pop concerts attended:'
        },
        {
            type: 'iconed',
            text: 'Billlie @ Munich 2024',
            icon: 'spa'
        },
        {
            type: 'iconed',
            text: 'aespa @ Paris 2023',
            icon: 'fire-flame-curved'
        },
        {
            type: 'iconed',
            text: 'NCT @ Incheon 2023',
            icon: 'globe'
        },
        {
            type: 'iconed',
            text: 'Music Bank @ Paris 2023',
            icon: 'music'
        },
        {
            type: 'iconed',
            text: 'MCND @ Lausanne 2022',
            icon: 'bolt'
        },
        {
            type: 'subheading',
            text: 'Japan'
        },
        {
            type: 'paragraph',
            text: `Learning Japanese has been another fulfilling journey, deepening my interest in East Asian culture. Through self-study, school courses, and visiting different parts of Japan, I have developed quite an appreciation of its many facets and it has become my favorite travel destination.`
        },
        {
            type: 'images',
            images: [
                {
                    src: aboutFiles['../assets/about/Slide3.jpg'].default,
                    caption: 'Japan 2023'
                },
                {
                    src: aboutFiles['../assets/about/Slide4.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide5.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide6.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide7.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide8.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide9.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide10.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide11.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide12.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide13.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide14.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide15.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide16.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide17.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide18.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide19.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide20.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide21.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide22.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/Slide23.jpg'].default
                }
            ]
        }
    ],
    links: [
        {
            text: 'GitHub',
            url: 'https://github.com/jfladas/',
            icon: 'fa-brands fa-github-alt'
        },
        {
            text: 'itch.io',
            url: 'https://jfladas.itch.io/',
            icon: 'fa-brands fa-itch-io'
        },
        {
            text: 'LinkedIn',
            url: 'https://www.linkedin.com/in/lukas-bucher-0926bb282/',
            icon: 'fa-brands fa-linkedin'
        },
        {
            text: 'Instagram',
            url: 'https://www.instagram.com/jfla.das/',
            icon: 'fa-brands fa-instagram'
        },
        {
            text: 'YouTube',
            url: 'https://youtube.com/@jfladas/',
            icon: 'fa-brands fa-youtube'
        },
        {
            text: 'Spotify',
            url: 'https://open.spotify.com/user/rn16ees9l59zxvg9zzptiuwb7?si=86fff52ccafd4d0d',
            icon: 'fa-brands fa-spotify'
        },
        {
            text: 'Duolingo',
            url: 'https://www.duolingo.com/profile/jfladas',
            icon: 'feather'
        }

    ],
    downloads: [
        /* {
            text: 'Resume',
            url: aboutFiles['../assets/about/Resume.pdf'].default,
            icon: 'circle-arrow-down'
        } */
    ]
};