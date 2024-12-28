import { icon, text } from "@fortawesome/fontawesome-svg-core"

export const projects = [
    {
        id: 'milo',
        name: "milo's forest adventure",
        description: 'web-based scroll & click game',
        context: [
            '2024 @ HSLU, Rotkreuz',
            'Module DEWEB - Web Development'
        ],
        categories: [
            'solo',
            'coding',
            'design',
            'web',
            'game',
            'story'
        ],
        images: [],
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
                        action: '',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'download zip',
                        action: 'milo.zip',
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
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
                url: 'https://jfladas.github.io/milo/client/',
                icon: 'external-link-alt',
                text: 'Demo'
            }
        ],
        downloads: [
            {
                text: 'milo.zip',
                url: '../src/projects/milo/milo.zip',
                icon: 'file-archive'
            }
        ]
    },
    {
        id: 'pa',
        name: 'developing a google chrome extension',
        description: 'Chrome extension for Suva team management',
        context: [
            '2022 @ Suva, Lucerne',
            'QV PA - final practical project of software developer apprenticeship'
        ],
        categories: [
            'solo',
            'coding',
            'design',
            'web'
        ],
        images: [],
        sections: [
            {
                type: 'quoted',
                text: `This project aimed to explore the potential of browser-based solutions for internal organizational tools 
                        by creating a functional Chrome extension. It represents Suva's SAFe team structures and offers easy access 
                        to hierarchical data, catering to both administrative and operational needs.`
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
                text: 'Lists available modules, starting with the "Suva SAFe" Info-App.'
            },
            {
                type: 'iconed',
                text: 'Hierarchical View',
                icon: 'sitemap'
            },
            {
                type: 'bullet',
                text: 'Displays SAFe ARTs (Agile Release Trains), Products, Teams, and individual team members in a collapsible tree format.'
            },
            {
                type: 'iconed',
                text: 'Detail View',
                icon: 'magnifying-glass'
            },
            {
                type: 'bullet',
                text: 'Provides role-specific information, such as emails, phone numbers, and descriptions, with interactive links for actionable insights.'
            },
            {
                type: 'iconed',
                text: 'Customization',
                icon: 'paint-brush'
            },
            {
                type: 'bullet',
                text: 'Allows users to toggle between dark and light modes.'
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
                text: 'Inform: Research on Chrome Extension API and RESTful data integration.',
                icon: 'i'
            },
            {
                type: 'iconed',
                text: 'Plan: Define milestones and use user stories to prioritize functionalities.',
                icon: 'p'
            },
            {
                type: 'iconed',
                text: 'Decide: Evaluate and finalize the requirements for the application to meet project goals.',
                icon: 'e'
            },
            {
                type: 'iconed',
                text: 'Execute: Implement features iteratively, focusing on modularity and user experience.',
                icon: 'r'
            },
            {
                type: 'iconed',
                text: 'Control: Test against user story acceptance criteria.',
                icon: 'k'
            },
            {
                type: 'iconed',
                text: 'Evaluate: Document outcomes and lessons learned.',
                icon: 'a'
            },
            {
                type: 'subheading',
                text: 'Key Achievements'
            },
            {
                type: 'bullet',
                text: 'Successfully integrated REST APIs to fetch organizational data.'
            },
            {
                type: 'bullet',
                text: 'Built a dynamic, hierarchical structure that supports effortless navigation.'
            },
            {
                type: 'bullet',
                text: 'Implemented a user-friendly interface with a focus on simplicity and adaptability.'
            },
            {
                type: 'bullet',
                text: 'Delivered thorough documentation covering installation, testing, and technical details.'
            },
            {
                type: 'subheading',
                text: 'Challenges and Solutions'
            },
            {
                type: 'bullet',
                text: 'Data Integration: Combined two different REST APIs to ensure complete employee data coverage.'
            },
            {
                type: 'bullet',
                text: 'Design Consistency: Aligned the UI with Suva\'s existing visual standards.'
            },
            {
                type: 'subheading',
                text: 'Conclusion'
            },
            {
                type: 'paragraph',
                text: 'This project showcases the viability of browser extensions as an internal organizational tool, providing a scalable and accessible platform for team and member information. It also serves as a foundation for future modules and functionalities.'
            },
            {
                type: 'heading',
                text: 'Read the Documentation'
            },
            {
                type: 'images',
                images: [
                    {
                        src: '/src/projects/pa/BUL_PA_Chrome_Extension_Documentation.pdf',
                        alt: 'Documentation.pdf'
                    },
                    {
                        src: '/src/projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf',
                        alt: 'Presentation.pdf'
                    }
                ]
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Documentation.pdf',
                        action: '/src/projects/pa/BUL_PA_Chrome_Extension_Documentation.pdf',
                        icon: 'file-pdf',
                        color: 'primary'
                    },
                    {
                        text: 'Presentation.pdf',
                        action: '/src/projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf',
                        icon: 'file-pdf',
                        color: 'secondary'
                    }
                ]
            }
        ],
        links: [],
        downloads: [
            {
                text: 'Documentation.pdf',
                url: '../src/projects/pa/BUL_PA_Chrome_Extension_Documentation.pdf',
                icon: 'file-pdf'
            },
            {
                text: 'Presentation.pdf',
                url: '../src/projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf',
                icon: 'file-pdf'
            }
        ]
    },
    // Add more projects here
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
    '3d': 'cube',
    'video': 'video',
}