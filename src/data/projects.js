const miloFiles = import.meta.glob('../projects/milo/*', { eager: true });
const rodinaFiles = import.meta.glob('../projects/rodina/*', { eager: true });
const solarsystemFiles = import.meta.glob('../projects/solarsystem/*', { eager: true });
const paFiles = import.meta.glob('../projects/pa/*', { eager: true });

const aboutFiles = import.meta.glob('../assets/about/*', { eager: true });

export const projects = [
    // men3
    // spütify
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
                text: `Milo\'s Forest Adventure is an interactive storybook or scroll-and-click adventure
                        in which the player accompanies a friendly and curious fox named Milo on his journey through the forest.
                        The player controls Milo by scrolling and can explore the environment and interact with Milo by clicking.`
            },
            {
                type: 'heading',
                text: 'Play the Game'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'play demo',
                        action: 'https://milo.jfladas.com',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'download zip',
                        action: miloFiles['../projects/milo/milo.zip'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: `Online demo lacks backend features like the leaderboard at the end. To play the game locally, download the zip file and follow the instructions below.`
            },
            {
                type: 'heading',
                text: 'Instructions to Start the Project'
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
                text: 'Navigate to the /server directory'
            },
            {
                type: 'bullet',
                text: 'Start the Node.js server with the command node server.mjs in the terminal'
            },
            {
                type: 'iconed',
                text: 'Start the frontend',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Navigate to the /client directory and open it in Visual Studio Code'
            },
            {
                type: 'bullet',
                text: 'Click on Go Live at the bottom right to start the Live Server'
            },
            {
                type: 'bullet',
                text: 'The project should automatically open in the browser (if not, open http://127.0.0.1:5500/ in the browser and adjust Live Server settings accordingly)'
            },
            {
                type: 'subheading',
                text: "Enjoy milo's forest adventure!"
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/jfladas/milo',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            },
            {
                name: 'itch.io',
                url: 'https://jfladas.itch.io/milos-forest-adventure',
                icon: 'fa-brands fa-itch-io',
                text: 'itch.io Page'
            },
            {
                name: 'demo',
                url: 'https://milo.jfladas.com',
                icon: 'external-link-alt',
                text: 'Demo'
            }
        ],
        downloads: [
            {
                text: 'milo.zip',
                url: miloFiles['../projects/milo/milo.zip'].default,
                icon: 'file-archive'
            }
        ]
    },
    // matbf
    // comgi
    // stuin
    // stupro?
    // animation
    // spark?
    // ux
    // game
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
                name: 'the rodina',
                url: 'https://www.therodina.com/',
                icon: 'external-link-alt',
                text: 'The Rodina'
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
    {
        id: 'pa',
        name: 'developing a google chrome extension',
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
    },
    /* {
        id: 'mock1',
        name: 'Mock Project 1',
        description: 'This is a mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK101 - Introduction to Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
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
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a simple web application to demonstrate basic web development skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject1',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    },
    {
        id: 'mock2',
        name: 'Mock Project 2',
        description: 'Another mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK102 - Advanced Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'design',
            '3d'
        ],
        sections: [
            {
                type: 'quoted',
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a 3D model to demonstrate advanced design skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject2',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    },
    {
        id: 'mock1',
        name: 'Mock Project 1',
        description: 'This is a mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK101 - Introduction to Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
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
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a simple web application to demonstrate basic web development skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject1',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    },
    {
        id: 'mock2',
        name: 'Mock Project 2',
        description: 'Another mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK102 - Advanced Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'design',
            '3d'
        ],
        sections: [
            {
                type: 'quoted',
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a 3D model to demonstrate advanced design skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject2',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    },
    {
        id: 'mock1',
        name: 'Mock Project 1',
        description: 'This is a mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK101 - Introduction to Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
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
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a simple web application to demonstrate basic web development skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject1',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    },
    {
        id: 'mock2',
        name: 'Mock Project 2',
        description: 'Another mock project for testing purposes.',
        context: {
            lines: [
                '2023 @ Mock University',
                'Module MOCK102 - Advanced Mocking'
            ],
            url: 'https://www.mockuniversity.com/',
            icon: 'graduation-cap',
            tooltip: 'school'
        },
        categories: [
            'team',
            'design',
            '3d'
        ],
        sections: [
            {
                type: 'quoted',
                text: 'This mock project is designed to test the integration of new projects into the portfolio.'
            },
            {
                type: 'heading',
                text: 'Overview'
            },
            {
                type: 'paragraph',
                text: 'The project involves creating a 3D model to demonstrate advanced design skills.'
            }
        ],
        links: [
            {
                name: 'github',
                url: 'https://github.com/mockuser/mockproject2',
                icon: 'fa-brands fa-github-alt',
                text: 'GitHub Repository'
            }
        ],
        downloads: []
    } */
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
                    color: 'primary'
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
            type: 'paragraph',
            text: `Beyond my passion for technology and design, music plays a big role in my life. I play the saxophone in the local orchestra '<a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>', which has been an amazing way to connect with others and immerse myself in the joy of creating music. My love for music doesn't stop there. I'm also a fan of K-pop and enjoy attending concerts whenever I can.`
        },
        {
            type: 'paragraph',
            text: `Learning Japanese has been another fulfilling journey, deepening my interest in East Asian culture. Through self-study, school courses, and visiting different parts of Japan, I have developed quite an appreciation of its many facets and it has become my favorite travel destination.`
        }
    ],
    links: [
        {
            name: 'github',
            url: 'https://github.com/jfladas/',
            icon: 'fa-brands fa-github-alt',
            text: 'GitHub'
        },
        {
            name: 'itch.io',
            url: 'https://jfladas.itch.io/',
            icon: 'fa-brands fa-itch-io',
            text: 'Itch.io'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/lukas-bucher-0926bb282/',
            icon: 'fa-brands fa-linkedin',
            text: 'LinkedIn'
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/jfla.das/',
            icon: 'fa-brands fa-instagram',
            text: 'Instagram'
        },
        {
            name: 'youtube',
            url: 'https://youtube.com/@jfladas/',
            icon: 'fa-brands fa-youtube',
            text: 'YouTube'
        }
    ],
    downloads: [
        {
            text: 'Resume',
            url: aboutFiles['../assets/about/Resume.pdf'].default,
            icon: 'circle-arrow-down'
        }
    ]
};