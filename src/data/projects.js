import { icon, text } from "@fortawesome/fontawesome-svg-core"

export const projects = [
    {
        id: 'milo',
        name: "milo's forest adventure",
        description: 'web-based scroll & click game',
        context: ['2024 @ HSLU Module DEWEB'],
        categories: [
            'solo',
            'web',
            'game',
            'story'
        ],
        images: [],
        sections: [
            {
                type: 'paragraph',
                text: `Milo\'s Forest Adventure is an interactive storybook or scroll-and-click adventure
                        in which the player accompanies a friendly and curious fox named Milo on his journey through the forest.
                        The player controls Milo by scrolling and can explore the environment and interact with Milo by clicking.`
            },
            {
                type: 'heading',
                text: 'Hi there!'
            },
            {
                type: 'quoted',
                text: ` I'm currently studying Digital Ideation at the 
                        Lucerne University of Applied Sciences and Arts.
                        I love exploring all of the possibilities of how
                        technology and creativity can be combined.
                        My focus mainly lies in web development, but other aspects I can explore with my studies also intrigue me,
                        ranging from game design & development to digital art.
                        After I've attained my bachelor of science, I aim to work in the field of
                        frontend development, creating unique and interactive user experiences.
                        But who knows what the future may hold?`
            },
            {
                type: 'heading',
                text: 'Intrigued?'
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
                icon: 'fa-solid fa-external-link-alt',
                text: 'Demo'
            }
        ],
        downloads: [
            {
                name: 'milo.zip',
                url: 'https://jfladas.github.io/milo/client/',
                icon: 'fa-solid fa-circle-arrow-down',
                text: 'Download ZIP'
            }
        ]
    },
    {
        id: 'project2',
        name: 'Project Two',
        description: 'Description for project two.',
        categories: [
            'solo',
            'team',
            'web',
            'game',
            'ux',
            'design',
            'story',
            '3d',
            'video'
        ],
        images: [],
        text: `
            <p>Project Two is a project that is so cool, it needs no description.</p>
            <h2>Features</h2>
            <p>Project Two has cool features.</p>
        `,
        links: [],
        downloads: []
    },
    // Add more projects here
]

export const categories = {
    'solo': 'user',
    'team': 'users',
    'web': 'globe',
    'game': 'gamepad',
    'ux': 'circle-user',
    'design': 'pen-nib',
    'story': 'scroll',
    '3d': 'cube',
    'video': 'video',
}

// Get the keys (left side names)
//const categoryKeys = Object.keys(categories);
//console.log(categoryKeys);
// Output: ['solo', 'team', 'web', 'game', 'ux', 'design', 'story', '3d', 'video']

// Get key-value pairs (left side names and right side icons)
//const categoryEntries = Object.entries(categories);
//console.log(categoryEntries);
// Output: [['solo', 'user'], ['team', 'users'], ['web', 'globe'], ['game', 'gamepad'], ['ux', 'circle-user'], ['design', 'pen-nib'], ['story', 'scroll'], ['3d', 'cube'], ['video', 'video']]