// Project and about page content for both languages.
// Text that differs between English and German is written as { en: '...', de: '...' };
// everything else is shared. useContent() picks the current language.
import { releaseFile } from './releases.js';

const blobFiles = import.meta.glob('../projects/blob/*', { eager: true });
const hadFiles = import.meta.glob('../projects/had/*', { eager: true });
const artdFiles = import.meta.glob('../projects/artd/*', { eager: true });
const apo11oFiles = import.meta.glob('../projects/apo11o/*', { eager: true });
const qrFiles = import.meta.glob('../projects/qr/*', { eager: true });
const sweetFiles = import.meta.glob('../projects/sweet/*', { eager: true });
const sputifyFiles = import.meta.glob('../projects/sputify/*', { eager: true });
const ecohomeFiles = import.meta.glob('../projects/ecohome/*', { eager: true });
const miloFiles = import.meta.glob('../projects/milo/*', { eager: true });
const matbfFiles = import.meta.glob('../projects/matbf/*', { eager: true });
const europeFiles = import.meta.glob('../projects/4g/*', { eager: true });
const saladFiles = import.meta.glob('../projects/salad/*', { eager: true });
const hsclFiles = import.meta.glob('../projects/hscl/*', { eager: true });
const sweetteethFiles = import.meta.glob('../projects/sweetteeth/*', { eager: true });
const rodinaFiles = import.meta.glob('../projects/rodina/*', { eager: true });
const solarsystemFiles = import.meta.glob('../projects/solarsystem/*', { eager: true });
const paFiles = import.meta.glob('../projects/pa/*', { eager: true });

const aboutFiles = import.meta.glob('../assets/about/*', { eager: true });

export const projects = [
    // amorphous blob
    {
        id: 'blob',
        cover: blobFiles['../projects/blob/cover.jpg']?.default,
        name: 'amorphous blob',
        description: { en: 'a desktop presence as self-reflection', de: 'eine Desktop-Präsenz als Selbstreflexion' },
        context: {
            lines: [
                '2026 @ HSLU, Rotkreuz',
                { en: 'Bachelor Thesis & Project', de: 'Bachelorarbeit' }
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'solo',
            'coding',
            'design',
            'web',
            'ux'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Amorphous Blob is a digital desktop presence designed as a living self-image for emotional self-reflection. It lives at the edge of the desktop, reacts to interaction, and offers a Micro Journal for thoughts, moods, and short reflections. With it, I explore how the desktop can be more than a workspace: a digital living space with room for emotional self-awareness.`,
                    de: `Amorphous Blob ist eine digitale Desktop-Präsenz als lebendiges Selbstabbild zur emotionalen Selbstreflexion. Der Blob lebt am Rand des Desktops, reagiert auf Interaktion und bietet mit dem Micro Journal einen Raum für Gedanken, Stimmungen und kurze Reflexionen. Damit untersuche ich, wie der Desktop mehr als eine Arbeitsfläche sein kann: ein digitaler Lebensraum, in dem emotionale Selbstwahrnehmung Platz findet.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Download the App', de: 'Lade die App herunter' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Microsoft Store',
                        action: 'https://apps.microsoft.com/detail/9NVDFMX3WKDR',
                        icon: 'fa-brands fa-microsoft',
                        color: 'secondary'
                    },
                    {
                        text: 'MacOS (arm64)',
                        action: releaseFile('Amorphous.Blob.dmg'),
                        icon: 'fa-brands fa-apple',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'iconed',
                text: {
                    en: 'The macOS app is signed and notarized by Apple (<a href="https://www.virustotal.com/gui/file/5c9e51ed96d06b687490a847378e8201b5f06a285446fbec87a08ad5447d8d28" class="bold hoverable" target="_blank">view safety scan</a>), the Windows version comes from the Microsoft Store.',
                    de: 'Die macOS-App ist von Apple signiert und notariell beglaubigt (<a href="https://www.virustotal.com/gui/file/5c9e51ed96d06b687490a847378e8201b5f06a285446fbec87a08ad5447d8d28" class="bold hoverable" target="_blank">Sicherheits-Scan ansehen</a>), die Windows-Version gibt es im Microsoft Store.'
                },
                icon: 'certificate'
            },
            {
                type: 'video',
                video: blobFiles['../projects/blob/demo.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The desktop is built for work: windows, deadlines, notifications. It leaves little room for how we feel. Amorphous Blob adds a calm, personal presence to it. It is not a tool, a pet or a chatbot, but an abstract self-image that reacts without judging.',
                    de: 'Der Desktop ist für die Arbeit gemacht: Fenster, Deadlines, Benachrichtigungen. Für Gefühle bleibt kaum Platz. Amorphous Blob ergänzt ihn um eine ruhige, persönliche Präsenz. Er ist kein Werkzeug, kein Haustier und kein Chatbot, sondern ein abstraktes Selbstabbild, das reagiert, ohne zu bewerten.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'How It Works', de: 'So funktioniert es' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'In the onboarding, sliders and traits describe your personality and shape the blob\'s color, movement, expressiveness and symmetry',
                    de: 'Im Onboarding beschreiben Regler und Eigenschaften deine Persönlichkeit und prägen Farbe, Bewegung, Ausdruck und Symmetrie des Blobs'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'It sits at the bottom of the screen, follows your cursor with its eyes and can be grabbed, thrown, pinned or sent to sleep',
                    de: 'Er sitzt am unteren Bildschirmrand, folgt dem Cursor mit seinen Augen und lässt sich packen, werfen, anpinnen oder schlafen legen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'In the Micro Journal, short entries combine an emotion, a prompt and text, and the blob\'s face and colors change while you type',
                    de: 'Im Micro Journal verbinden kurze Einträge eine Emotion, einen Impuls und Text, und Gesicht und Farben des Blobs verändern sich beim Schreiben'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Everything stays on your device, and secret entries are encrypted behind a PIN',
                    de: 'Alles bleibt auf deinem Gerät, und geheime Einträge sind mit einer PIN verschlüsselt'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'As my practical bachelor project, Amorphous Blob grew over six iterative sprints from ideation and physics prototypes to a released app, building on my written thesis on virtual companions. It was mentored by Gabriele Fackler (concept & UX) and Benji Oser (technology).',
                    de: 'Als meine praktische Bachelorarbeit entstand Amorphous Blob in sechs iterativen Sprints, von der Ideenfindung und Physik-Prototypen bis zur veröffentlichten App, aufbauend auf meiner schriftlichen Thesis zu virtuellen Begleitern. Betreut wurde das Projekt von Gabriele Fackler (Konzept & UX) und Benji Oser (Technik).'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Five people from the target group tested the prototype through free interaction, interviews and the AttrakDiff questionnaire. It landed in the "desired" range, with an attractiveness score of 2.6 on a scale from -3 to 3. Testers called it smooth, quirky and personal, and several wanted to keep using it.',
                    de: 'Fünf Personen aus der Zielgruppe testeten den Prototyp mit freier Interaktion, Interviews und dem AttrakDiff-Fragebogen. Er landete im Bereich "begehrt", mit einer Attraktivität von 2.6 auf einer Skala von -3 bis 3. Die Testpersonen beschrieben ihn als flüssig, schrullig und persönlich, und mehrere wollten ihn weiter nutzen.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: { en: 'Vue 3 and Vite inside Electron', de: 'Vue 3 und Vite in Electron' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Matter.js for the physics, Flubber for morphing the face',
                    de: 'Matter.js für die Physik, Flubber für das Morphing des Gesichts'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Released on the Microsoft Store and as a notarized macOS app',
                    de: 'Veröffentlicht im Microsoft Store und als notarisierte macOS-App'
                }
            },
            {
                type: 'heading',
                text: { en: 'The App', de: 'Die App' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: blobFiles['../projects/blob/desktop.jpg'].default,
                        caption: { en: 'The Blob on the Desktop', de: 'Der Blob auf dem Desktop' }
                    },
                    {
                        src: blobFiles['../projects/blob/onboarding.jpg'].default,
                        caption: 'Onboarding'
                    },
                    {
                        src: blobFiles['../projects/blob/journal.jpg'].default,
                        caption: 'Micro Journal'
                    },
                    {
                        src: blobFiles['../projects/blob/journal-list.jpg'].default,
                        caption: { en: 'Journal Entries', de: 'Journal-Einträge' }
                    },
                    {
                        src: blobFiles['../projects/blob/exhibition.jpg'].default,
                        caption: { en: 'Exhibition', de: 'Ausstellung' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: blobFiles['../projects/blob/ideation.jpg'].default,
                        caption: { en: 'Ideation', de: 'Ideenfindung' }
                    },
                    {
                        src: blobFiles['../projects/blob/concept-1.jpg'].default,
                        caption: { en: 'Concept 1', de: 'Konzept 1' }
                    },
                    {
                        src: blobFiles['../projects/blob/concept-2.jpg'].default,
                        caption: { en: 'Concept 2', de: 'Konzept 2' }
                    },
                    {
                        src: blobFiles['../projects/blob/concept-3.jpg'].default,
                        caption: { en: 'Concept 3', de: 'Konzept 3' }
                    },
                    {
                        src: blobFiles['../projects/blob/onboarding-sketch.jpg'].default,
                        caption: { en: 'Onboarding Sketch', de: 'Onboarding-Skizze' }
                    },
                    {
                        src: blobFiles['../projects/blob/states.jpg'].default,
                        caption: { en: 'States', de: 'Zustände' }
                    },
                    {
                        src: blobFiles['../projects/blob/attrakdiff.png'].default,
                        caption: { en: 'AttrakDiff Result', de: 'AttrakDiff-Ergebnis' }
                    }
                ]
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/bachelor',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'Microsoft Store',
                url: 'https://apps.microsoft.com/detail/9NVDFMX3WKDR',
                icon: 'fa-brands fa-microsoft'
            },
            {
                text: { en: 'Project Video', de: 'Projektvideo' },
                url: 'https://youtu.be/5lft64c_r9c',
                icon: 'fa-brands fa-youtube'
            },
            {
                text: { en: 'HSLU DFK Catalog', de: 'HSLU DFK Katalog' },
                url: 'https://hub.hslu.ch/design-film-kunst/katalog/amorphous-blob/',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'Security Scan macOS App', de: 'Sicherheits-Scan macOS App' },
                url: 'https://www.virustotal.com/gui/file/5c9e51ed96d06b687490a847378e8201b5f06a285446fbec87a08ad5447d8d28',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: 'MacOS App (arm64)',
                url: releaseFile('Amorphous.Blob.dmg'),
                icon: 'fa-brands fa-apple'
            },
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: blobFiles['../projects/blob/Documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('BLOB.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'Pitch_Presentation.ppsx', de: 'Pitch-Präsentation.ppsx' },
                url: releaseFile('PITCH.ppsx'),
                icon: 'file-powerpoint'
            }
        ]
    },
    // hearts across dimensions
    {
        id: 'had',
        cover: hadFiles['../projects/had/cover.jpg']?.default,
        name: 'hearts across dimensions',
        description: 'visual novel / dating sim game',
        context: {
            lines: [
                '2024 - 2026 @ HSLU, Rotkreuz & Emmenbrücke',
                {
                    en: 'Modules MEN3/4/5 (Mentorate Semester 3, 4 & 5)',
                    de: 'Module MEN3/4/5 - Mentorat Semester 3, 4 & 5'
                }
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
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
                text: {
                    en: `Hearts across Dimensions is a visual novel dating sim with five love interests.
                        It builds on the previous Mentorate Semester 2 project by Angelika Gort, where she created the character designs.
                        The first demo was developed by Angelika Gort and Lukas Bucher under the mentorship of Zoe Röllin as part of the Mentorate Semester 3.
                        An Alpha version was then released in MEN4, where we continued to work on the game with the help of Zoe Röllin.
                        In MEN5, we expanded the playable content with new routes (Scarlet Moon and Mr. Horse), new illustrations, and updated backgrounds.`,
                    de: `Hearts across Dimensions ist eine Visual-Novel-Dating-Sim mit fünf Love Interests.
                        Das Spiel baut auf dem vorherigen Mentoratsprojekt Semester 2 von Angelika Gort auf, in dem sie die Charakterdesigns erstellt hat.
                        Die erste Demo wurde von Angelika Gort und Lukas Bucher unter der Betreuung von Zoe Röllin im Rahmen des Mentorats Semester 3 entwickelt.
                        In MEN4 wurde eine Alpha-Version veröffentlicht, in der wir das Spiel mit Unterstützung von Zoe Röllin weiterentwickelt haben.
                        In MEN5 haben wir den spielbaren Content mit neuen Routen (Scarlet Moon und Mr. Horse), neuen Illustrationen und aktualisierten Hintergründen erweitert.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Play the Alpha Version', de: 'Spiele die Alpha-Version' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Play or Download', de: 'Spielen oder Herunterladen' },
                        action: 'https://jfladas.itch.io/hearts-across-dimensions',
                        icon: 'play',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Play directly in the browser on itch.io, or download the Android or Windows build there. The game is designed for mobile in portrait mode, but also works on desktop and in landscape mode.',
                    de: 'Spiele direkt im Browser auf itch.io oder lade dort die Android- oder Windows-Version herunter. Das Spiel ist für Mobile im Hochformat gestaltet, funktioniert aber auch auf dem Desktop und im Querformat.'
                }
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `A mysterious woman fails to protect her dimension from interdimensional beings and, before dying, sends a blood-stained letter across dimensions. Meanwhile, you start a new job at a wedding planning company, where strange things begin to happen: an ever-changing building, a time loop, and a... horse? An earthquake forces you into a bunker with some familiar faces, and whom you trust decides how your story unfolds.`,
                    de: `Eine mysteriöse Frau scheitert daran, ihre Dimension vor interdimensionalen Wesen zu schützen, und schickt vor ihrem Tod einen blutbefleckten Brief durch die Dimensionen. Währenddessen beginnst du einen neuen Job bei einer Hochzeitsplanungsfirma, wo seltsame Dinge geschehen: ein sich ständig veränderndes Gebäude, eine Zeitschleife und ein ... Pferd? Ein Erdbeben zwingt dich in einen Bunker mit bekannten Gesichtern, und wem du vertraust, bestimmt den Verlauf deiner Geschichte.`
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Each of the five characters has their own personality and route, so your choices lead to different dialogues and outcomes.',
                    de: 'Jeder der fünf Charaktere hat eine eigene Persönlichkeit und Route, sodass deine Entscheidungen zu unterschiedlichen Dialogen und Enden führen.'
                }
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/Characters.jpg'].default,
                        caption: { en: 'Characters', de: 'Charaktere' }
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Team'
            },
            {
                type: 'iconed',
                text: 'Angelika Gort',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Art'
            },
            {
                type: 'bullet',
                text: { en: 'Character design', de: 'Charakterdesign' }
            },
            {
                type: 'bullet',
                text: 'Story'
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Programming', de: 'Programmierung' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Story',
                    de: 'Story'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Each mentorate semester added a playable step: the first demo in MEN3, the alpha in MEN4 and two new routes in MEN5. Next up are finishing the Mr. Horse route, adding the routes of Ash and Ethan, polishing illustrations, backgrounds and sprites, and updating the UI with fitting music and sound effects.',
                    de: 'Jedes Mentoratssemester brachte einen spielbaren Schritt: die erste Demo in MEN3, die Alpha in MEN4 und zwei neue Routen in MEN5. Als Nächstes stehen an: die Mr.-Horse-Route fertigstellen, die Routen von Ash und Ethan hinzufügen, Illustrationen, Hintergründe und Sprites finalisieren sowie das UI mit passender Musik und Soundeffekten aktualisieren.'
                }
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'subheading',
                text: 'MEN5'
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot_Horse.png'].default,
                        caption: 'Mr. Horse'
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot_Scarlet.png'].default,
                        caption: 'Scarlet'
                    },
                    {
                        src: hadFiles['../projects/had/IllustrationH2.png'].default,
                        caption: 'Illustration Mr. Horse'
                    },
                    {
                        src: hadFiles['../projects/had/IllustrationS2.png'].default,
                        caption: 'Illustration Scarlet'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'MEN4'
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot1.jpg'].default,
                        caption: { en: 'Dialogue', de: 'Dialog' }
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot2.jpg'].default,
                        caption: { en: 'Choice', de: 'Entscheidung' }
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot3.jpg'].default,
                        caption: { en: 'Start Screen', de: 'Startbildschirm' }
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot4.jpg'].default,
                        caption: 'Illustration Aleph'
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot5.jpg'].default,
                        caption: { en: 'Menu', de: 'Menü' }
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot6.jpg'].default,
                        caption: 'Log'
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot7.jpg'].default,
                        caption: { en: 'Gallery', de: 'Galerie' }
                    },
                    {
                        src: hadFiles['../projects/had/HaD_Screenshot8.jpg'].default,
                        caption: { en: 'Minigame', de: 'Minispiel' }
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'MEN3'
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
                        caption: { en: 'Choice', de: 'Entscheidung' }
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
                text: { en: 'itch.io Page', de: 'itch.io Seite' },
                url: 'https://jfladas.itch.io/hearts-across-dimensions',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Demo Playthrough Video',
                url: 'https://youtu.be/HwepdSLpjcE',
                icon: 'fa-brands fa-youtube'
            },
            {
                text: 'Mr. Horse Sneak Peek (Ch. 13)',
                url: 'https://youtu.be/BE8KeC9lxp4?si=fmQz8nVdiz7C7HEE',
                icon: 'fa-brands fa-youtube'
            }
        ],
        downloads: [
            {
                text: { en: 'Presentation_MEN3.ppsx', de: 'Präsentation_MEN3.ppsx' },
                url: releaseFile('MEN3.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'Presentation_MEN4.ppsx', de: 'Präsentation_MEN4.ppsx' },
                url: releaseFile('MEN4.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'Presentation_MEN5.ppsx', de: 'Präsentation_MEN5.ppsx' },
                url: releaseFile('MEN5.ppsx'),
                icon: 'file-powerpoint'
            }
        ]
    },
    // ar tower defense
    {
        id: 'artd',
        cover: artdFiles['../projects/artd/cover.jpg']?.default,
        name: 'ar tower defense',
        description: {
            en: 'marker-based augmented reality mobile game',
            de: 'marker-basiertes augmented-reality mobile game'
        },
        context: {
            lines: [
                '2025 - 2026 @ HSLU, Rotkreuz',
                {
                    en: 'Module WEBXR (Intro to Immersive Browser Experiences)',
                    de: 'Modul WEBXR (Intro to Immersive Browser Experiences)'
                }
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'solo',
            'coding',
            'web',
            'game',
            '3d'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `AR Tower Defense is a marker-based AR game where you defend your base by physically moving printed tower markers on your table.
                        It was developed as part of the WebXR module at HSLU, where I explored immersive browser experiences for the first time using A-Frame and MindAR. The game features 10 waves of enemies and an upgrade system to enhance your defenses.`,
                    de: `AR Tower Defense ist ein marker-basiertes AR-Game, in dem du deine Basis verteidigst, indem du gedruckte Tower-Marker physisch auf dem Tisch bewegst.
                        Entwickelt im Rahmen des WebXR-Moduls an der HSLU, in dem ich mit A-Frame und MindAR zum ersten Mal immersive Browser-Experiences umgesetzt habe. Das Spiel bietet 10 Wellen an Gegnern sowie ein Upgrade-System, um deine Verteidigung zu verbessern.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Play the Game', de: 'Spiel starten' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Play', de: 'Spielen' },
                        action: 'https://webxr.jfladas.com/',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: { en: 'Download Markers', de: 'Marker herunterladen' },
                        action: artdFiles['../projects/artd/markers.pdf'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: {
                    en: 'To play, you need the AR markers: download the PDF, print it and cut the markers out.',
                    de: 'Zum Spielen brauchst du die AR-Marker: Lade das PDF herunter, drucke es aus und schneide die Marker aus.'
                }
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'How to Play', de: 'So wird gespielt' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Place the printed markers on a flat surface',
                    de: 'Platziere die ausgedruckten Marker auf einer flachen Oberfläche'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Enemies move towards your base, and towers automatically attack enemies within range',
                    de: 'Gegner bewegen sich auf deine Basis zu, und Türme greifen Gegner in Reichweite automatisch an'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Move the tower markers on your table and buy upgrades with the energy you earn from defeated enemies',
                    de: 'Verschiebe die Tower-Marker auf dem Tisch und kaufe Upgrades mit der Energie, die du durch besiegte Gegner erhältst'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Energy and upgrades are saved automatically, so reloading the page restores your progress',
                    de: 'Energie und Upgrades werden automatisch gespeichert, ein Neuladen der Seite stellt deinen Fortschritt wieder her'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'I planned the game step by step, starting from a minimal fallback prototype with one base marker, one tower marker and simple enemies moving towards the base. From there, I added more towers, enemy waves, energy for defeated enemies and upgrades between rounds.',
                    de: 'Ich habe das Spiel Schritt für Schritt geplant, ausgehend von einem minimalen Fallback-Prototyp mit einem Basis-Marker, einem Tower-Marker und einfachen Gegnern, die sich auf die Basis zubewegen. Darauf aufbauend kamen weitere Türme, Gegnerwellen, Energie für besiegte Gegner und Upgrades zwischen den Runden dazu.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A-Frame with MindAR for image tracking in the browser',
                    de: 'A-Frame mit MindAR für Image Tracking im Browser'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Game logic in TypeScript, menus and interface in HTML and CSS',
                    de: 'Spiellogik in TypeScript, Menüs und Interface in HTML und CSS'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Vite and ngrok for testing on phones, hosted on GitHub Pages',
                    de: 'Vite und ngrok zum Testen auf dem Smartphone, gehostet auf GitHub Pages'
                }
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: artdFiles['../projects/artd/Gameplay.jpg'].default,
                        caption: 'Gameplay'
                    },
                    {
                        src: artdFiles['../projects/artd/Upgrades.jpg'].default,
                        caption: 'Upgrades'
                    },
                    {
                        src: artdFiles['../projects/artd/Info.jpg'].default,
                        caption: 'Info'
                    },
                    {
                        src: artdFiles['../projects/artd/markers.jpg'].default,
                        caption: { en: 'AR Markers', de: 'AR-Marker' }
                    }
                ]
            }
        ],
        links: [
            {
                text: { en: 'GitHub Repository', de: 'GitHub-Repository' },
                url: 'https://github.com/jfladas/webxr',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'itch.io Page', de: 'itch.io Seite' },
                url: 'https://jfladas.itch.io/artd',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: { en: 'Play Game', de: 'Spiel starten' },
                url: 'https://webxr.jfladas.com/',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Markers.pdf', de: 'Marker.pdf' },
                url: artdFiles['../projects/artd/markers.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'OnePager.pdf',
                url: artdFiles['../projects/artd/OnePager.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // apo11o
    {
        id: 'apo11o',
        cover: apo11oFiles['../projects/apo11o/cover.jpg']?.default,
        name: 'apo11o',
        description: {
            en: 'web experience based on apollo 11 mission',
            de: 'web-experience basierend auf der apollo-11-mission'
        },
        context: {
            lines: [
                '2025 @ HSLU, Rotkreuz',
                {
                    en: 'Module DIPRO (Digital Project), Supercluster !Daten (Spiel) & Zeit',
                    de: 'Modul DIPRO (Digital Project), Supercluster !Daten (Spiel) & Zeit'
                }
            ],
            url: 'https://www.hslu.ch/it',
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Apo11o is a web-based command module interface that lets you relive the Apollo 11 mission. Key sections are replayed with real audio and data from NASA, enhanced with additional effects and interaction possibilities.`,
                    de: `Apo11o ist eine webbasierte Experience im Stil eines Kommandomodul-Interfaces, in der du die Apollo-11-Mission nacherleben kannst. Zentrale Abschnitte werden mit originalen Audios und Daten der NASA rekonstruiert und durch zusätzliche Effekte sowie Interaktionsmöglichkeiten erweitert.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Try It Out', de: 'Ausprobieren' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Project Website', de: 'Projekt-Website' },
                        action: 'https://apo11o.jfladas.com',
                        icon: 'arrow-right',
                        color: 'primary'
                    },
                    {
                        text: '',
                        action: 'https://apo11o.jfladas.com/play',
                        icon: 'rocket',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'video',
                video: apo11oFiles['../projects/apo11o/Screencast.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'How can the technical and human sides of an Apollo mission be experienced visually and interactively? Apo11o answers with a command module interface: a control panel, a window view and a timeline lead through the key moments of the mission days, in sync with the original mission audio. Events can be skipped, and a small rocket minigame adds a playful extra.',
                    de: 'Wie lassen sich die technischen und menschlichen Seiten einer Apollo-Mission visuell und interaktiv erfahrbar machen? Apo11o antwortet mit einem Kommandomodul-Interface: Ein Control Panel, ein Fensterblick und eine Timeline führen durch die zentralen Momente der Missionstage, synchron zu den originalen Missionsaudios. Ereignisse lassen sich überspringen, und ein kleines Raketen-Minigame sorgt für einen spielerischen Zusatz.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'I developed the project solo over five sprints: from open-ended research into the Apollo Flight Journals and NASA data, through collecting interface ideas and a first layout prototype, to integrating the real mission events and audio with synchronization, controls and visuals. A tandem partner joined for reviews and retros. The full process is documented in the sprint documentation.',
                    de: 'Ich habe das Projekt allein über fünf Sprints entwickelt: von offener Recherche in den Apollo Flight Journals und NASA-Daten über das Sammeln von Interface-Ideen und einen ersten Layout-Prototyp bis zur Integration der realen Missions-Events und Audios mit Synchronisation, Controls und Visuals. Für Reviews und Retros arbeitete ich mit einem Tandem. Der ganze Prozess ist in der Sprint-Dokumentation festgehalten.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: { en: 'Vanilla HTML, CSS and JavaScript', de: 'Vanilla HTML, CSS und JavaScript' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Original mission audio and data from NASA and the Apollo Flight Journals',
                    de: 'Originale Missionsaudios und Daten der NASA und der Apollo Flight Journals'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Published via GitHub Pages', de: 'Über GitHub Pages veröffentlicht' }
            }
        ],
        links: [
            {
                text: { en: 'Project Website', de: 'Projekt-Website' },
                url: 'https://apo11o.jfladas.com',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'GitHub Repository', de: 'GitHub-Repository' },
                url: 'https://github.com/jfladas/apo11o',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'Miro Board',
                url: 'https://miro.com/app/board/uXjVJA4NGBs=/?share_link_id=129935269332',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'Rocket Minigame', de: 'Raketen-Minigame' },
                url: 'https://apo11o.jfladas.com/play',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('APO11O.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'PJM_Report.pdf', de: 'PJM-Bericht.pdf' },
                url: apo11oFiles['../projects/apo11o/DIPRO_LukasBucher_PJMBericht.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Sprint_Documentation.pdf', de: 'Sprint_Dokumentation.pdf' },
                url: apo11oFiles['../projects/apo11o/DIPRO_LukasBucher_Sprintdokus.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // quick response
    {
        id: 'qr',
        cover: qrFiles['../projects/qr/cover.jpg']?.default,
        name: 'quick response',
        description: { en: 'mobile interaction installation', de: 'interaktive mobile-installation' },
        context: {
            lines: [
                '2025 @ HSLU, Emmenbrücke',
                { en: '+Colabor Module Creative Coding', de: '+Colabor Modul Creative Coding' },
            ],
            url: {
                en: 'https://www.hslu.ch/en/lucerne-school-of-design-film-and-art/',
                de: 'https://www.hslu.ch/de-ch/design-film-kunst/'
            },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'Hochschule' }
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Quick Response is a playful mobile installation made up of 16 small interactive experiments, each accessible via a QR code. The project explores how minimal visuals and personal interaction can create unique micro-experiences using smartphone sensors like mic, camera, and motion.`,
                    de: `Quick Response ist eine spielerische mobile Installation, bestehend aus 16 kleinen interaktiven Experimenten, die jeweils über einen QR-Code aufrufbar sind. Das Projekt erforscht, wie minimale visuelle Mittel und persönliche Interaktionen mit Smartphone-Sensoren wie Mikrofon, Kamera und Bewegungssensoren zu einzigartigen Mikro-Erlebnissen werden können.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Try It Yourself', de: 'Jetzt ausprobieren' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'QR',
                        action: 'https://colabor.jfladas.com/qr/',
                        icon: 'qrcode',
                        color: 'primary'
                    },
                    {
                        text: { en: 'Documentation Website', de: 'Dokumentations-Website' },
                        action: 'https://colabor.jfladas.com/sprint3/',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The title refers both to the QR code and to the instant reaction we expect from digital media. Some experiments respond immediately to touch, movement or sound, others delay their feedback or resist interaction altogether, like a ten-minute timer that barely reacts. Together they invite reflection on attention, patience and control.',
                    de: 'Der Titel verweist sowohl auf den QR-Code als auch auf die sofortige Reaktion, die wir von digitalen Medien erwarten. Manche Experimente reagieren unmittelbar auf Berührung, Bewegung oder Ton, andere verzögern ihr Feedback oder verweigern sich der Interaktion ganz, etwa ein Zehn-Minuten-Timer, der kaum reagiert. Zusammen laden sie dazu ein, über Aufmerksamkeit, Geduld und Kontrolle nachzudenken.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'How It Works', de: 'So funktioniert es' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The 16 QR codes are arranged into one larger animated image, and scanning any part of it starts the journey',
                    de: 'Die 16 QR-Codes sind zu einem grösseren animierten Gesamtbild angeordnet, und das Scannen eines beliebigen Teils startet die Reise'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Each experiment uses one input: microphone, camera, motion, touch, multitouch or simply waiting',
                    de: 'Jedes Experiment nutzt einen Input: Mikrofon, Kamera, Bewegung, Berührung, Multitouch oder einfach Warten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'An overview page tracks progress across all interactions, and a secret 16th page can be unlocked',
                    de: 'Eine Übersichtsseite zeigt den Fortschritt über alle Interaktionen, und eine geheime 16. Seite lässt sich freischalten'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Context', de: 'Kontext' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Quick Response was the final sprint of the +Colabor Creative Coding module and builds on the two before it: the black-and-white pixel and moiré visuals come from re-coding a work by Anton Bruhin in Sprint 1, the playful browser interactions from the "Take a Break" browser extensions in Sprint 2.',
                    de: 'Quick Response war der letzte Sprint des +Colabor-Moduls Creative Coding und baut auf den beiden vorherigen auf: Die schwarz-weissen Pixel- und Moiré-Visuals stammen aus dem Re-Coding eines Werks von Anton Bruhin in Sprint 1, die spielerischen Browser-Interaktionen aus den "Take a Break"-Browser-Extensions in Sprint 2.'
                }
            },
            {
                type: 'heading',
                text: { en: 'Experiments', de: 'Experimente' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: qrFiles['../projects/qr/Sprint3_Ripples.jpg'].default,
                        caption: 'Ripples'
                    },
                    {
                        src: qrFiles['../projects/qr/Sprint3_BallPit.jpg'].default,
                        caption: 'Ball Pit'
                    },
                    {
                        src: qrFiles['../projects/qr/Sprint3_DrawnOut.jpg'].default,
                        caption: 'Drawn Out'
                    },
                    {
                        src: qrFiles['../projects/qr/Sprint3_Billboard.jpg'].default,
                        caption: 'Billboard'
                    },
                    {
                        src: qrFiles['../projects/qr/Sprint3_Selfie.jpg'].default,
                        caption: 'Selfie'
                    },
                    {
                        src: qrFiles['../projects/qr/Sprint3_Clock.jpg'].default,
                        caption: 'Clock'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Earlier Sprints', de: 'Frühere Sprints' }
            },
            {
                type: 'subheading',
                text: 'Sprint 1: Re-Code Re-Think'
            },
            {
                type: 'images',
                images: [
                    {
                        src: qrFiles['../projects/qr/Sprint1.jpg'].default,
                        caption: { en: 'Moiré Patterns', de: 'Moiré-Muster' }
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Sprint 2: Take a Break'
            },
            {
                type: 'video',
                video: qrFiles['../projects/qr/Sprint2_Break.mp4'].default
            },
            {
                type: 'images',
                images: [
                    {
                        src: qrFiles['../projects/qr/Sprint2_Heatmap.png'].default,
                        caption: 'Heatmap Browser Extension'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Best Of Video', de: 'Best-Of-Video' }
            },
            {
                type: 'video',
                video: qrFiles['../projects/qr/bestof.mp4'].default
            }
        ],
        links: [
            {
                text: 'Website',
                url: 'https://colabor.jfladas.com/qr/',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'GitHub Repository', de: 'GitHub-Repository' },
                url: 'https://github.com/jfladas/colabor',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'Documentation Website', de: 'Dokumentations-Website' },
                url: 'https://colabor.jfladas.com/',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Process_Documentation.pdf', de: 'Prozessdokumentation.pdf' },
                url: qrFiles['../projects/qr/ProcessDocumentation_CCC.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // sweet
    {
        id: 'sweet',
        cover: sweetFiles['../projects/sweet/cover.jpg']?.default,
        name: 'sweet',
        description: { en: 'web event platform for digital ideation', de: 'web-eventplattform für digital ideation' },
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                { en: 'Module STUW2 (Studio UX & Web 2)', de: 'Modul STUW2 - Studio UX & Web 2' }
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
                text: {
                    en: `Sweet is a web application that brings together Digital Ideation students across Emmenbrücke and Rotkreuz. The platform provides a space to coordinate, share, and discover upcoming events.`,
                    de: `Sweet ist eine Webanwendung, die Digital Ideation Studierende aus Emmenbrücke und Rotkreuz zusammenbringt. Die Plattform bietet Raum zur Koordination, zum Teilen und Entdecken von anstehenden Events.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Try the Prototype', de: 'Prototyp ausprobieren' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'View Figma Prototype', de: 'Figma-Prototyp ansehen' },
                        action: 'https://www.figma.com/proto/H39FzuTJQZOMxcQzrEDcp0/UX-Web-Styleguide?node-id=0-1&t=4RZi44A5r09E112U-1',
                        icon: 'fa-brands fa-figma',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'iconed',
                text: {
                    en: 'The original website is offline due to hosting limitations, but the Figma prototype gives an overview of the design and functionality.',
                    de: 'Die originale Website ist wegen Hosting-Limitationen offline, aber der Figma-Prototyp gibt einen Überblick über Design und Funktionalität.'
                },
                icon: 'triangle-exclamation'
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Digital Ideation is split across two campuses, which makes coordinating events hard. New students struggle with local transit, travel times vary a lot, and since nobody sees who is traveling where, chances to meet, ride together or bike instead are missed. Even staff often drive alone when transporting equipment. Sweet brings this together on one platform where events can be coordinated, shared and discovered.',
                    de: 'Digital Ideation ist auf zwei Standorte verteilt, was die Koordination von Events erschwert. Neue Studierende haben Mühe mit dem lokalen ÖV, die Reisezeiten unterscheiden sich stark, und weil niemand sieht, wer wann wohin reist, gehen Gelegenheiten für Begegnungen, gemeinsame Fahrten oder das Velo verloren. Selbst Dozierende fahren oft allein mit dem Auto, wenn sie Ausrüstung transportieren. Sweet bringt das auf einer Plattform zusammen, auf der Events koordiniert, geteilt und entdeckt werden können.'
                }
            },
            {
                type: 'subheading',
                text: 'Team'
            },
            {
                type: 'iconed',
                text: 'Dario Stocker',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'UX research', de: 'UX Research' }
            },
            {
                type: 'bullet',
                text: { en: 'Product owner', de: 'Product Owner' }
            },
            {
                type: 'iconed',
                text: 'Michelle Studtmann',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'UI design', de: 'UI-Design' }
            },
            {
                type: 'iconed',
                text: 'Laura Giaimo',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'UI design', de: 'UI-Design' }
            },
            {
                type: 'iconed',
                text: 'Dominika Degtyareva',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Branding'
            },
            {
                type: 'iconed',
                text: 'Lisa Landolt',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend development', de: 'Frontend-Entwicklung' }
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend development', de: 'Frontend-Entwicklung' }
            },
            {
                type: 'iconed',
                text: 'Arwen Bättig',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Backend development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'bullet',
                text: { en: 'Scrum master', de: 'Scrum Master' }
            },
            {
                type: 'iconed',
                text: 'Jennifer Beeler',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Backend development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'We worked with Scrum in four weekly sprints: setup and ideation, development and design, paper prototyping and user testing, and a final sprint for feedback, documentation and the presentation. Daily stand-ups and bi-weekly retrospectives kept the team of eight in sync.',
                    de: 'Wir arbeiteten mit Scrum in vier wöchentlichen Sprints: Setup und Ideenfindung, Entwicklung und Design, Papier-Prototyping und User-Tests sowie ein letzter Sprint für Feedback, Dokumentation und Präsentation. Tägliche Stand-ups und zweiwöchentliche Retrospektiven hielten das achtköpfige Team auf Kurs.'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'My focus was the frontend, which was my first time working with Angular. I also helped set up the technical foundation and build the first paper prototype.',
                    de: 'Mein Fokus lag auf dem Frontend, wobei ich zum ersten Mal mit Angular arbeitete. Zudem half ich beim technischen Setup und beim ersten Papier-Prototyp.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Angular frontend in an Nx monorepo, hosted on GitHub Pages',
                    de: 'Angular-Frontend in einem Nx-Monorepo, gehostet auf GitHub Pages'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Node.js and NestJS backend with PostgreSQL on Heroku',
                    de: 'Node.js- und NestJS-Backend mit PostgreSQL auf Heroku'
                }
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/uxweb2',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'Figma Prototype', de: 'Figma-Prototyp' },
                url: 'https://www.figma.com/proto/H39FzuTJQZOMxcQzrEDcp0/UX-Web-Styleguide?node-id=0-1&t=4RZi44A5r09E112U-1',
                icon: 'fa-brands fa-figma'
            },
            {
                text: 'Miro Board',
                url: 'https://miro.com/app/board/uXjVIZlez1M=/',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('sweet.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: 'Reflexion.pdf',
                url: sweetFiles['../projects/sweet/Reflexion.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // spütify
    {
        id: 'sputify',
        cover: sputifyFiles['../projects/sputify/cover.jpg']?.default,
        name: 'spütify',
        description: { en: 'music journey & visualisation website', de: 'webseite zur interaktiven musikvisualisierung' },
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                { en: 'Module STUW1 (Studio Web & Mobile 1)', de: 'Modul STUW1 - Studio Web & Mobile 1' }
            ],
            url: {
                en: 'https://www.hslu.ch/en/lucerne-school-of-design-film-and-art/',
                de: 'https://www.hslu.ch/de-ch/design-film-kunst/'
            },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
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
                text: {
                    en: `Spütify is a web application that visualizes a user's Spotify music taste through an interactive time-travel experience. Developed using Spotify API and Google Gemini API by Laura Giaimo, Lisa Landolt, Lukas Bucher, and Marin Hirschi, the app allows users to explore their listening history dynamically. The project integrates real-time data visualization and interactive elements to create a personalized music journey.`,
                    de: `Spütify ist eine Webanwendung, die den Musikgeschmack eines Benutzers durch eine interaktive Zeitreise visualisiert. Entwickelt mit der Spotify API und der Google Gemini API von Laura Giaimo, Lisa Landolt, Lukas Bucher und Marin Hirschi, ermöglicht die App den Benutzern, die Veränderung ihres Musikgeschmacks über die Jahre dynamisch zu erkunden. Das Projekt integriert Echtzeit-Datenvisualisierung und interaktive Elemente, um eine personalisierte Musikreise zu schaffen.`
                }
            },
            {
                type: 'heading',
                text: 'Screencast'
            },
            {
                type: 'video',
                video: sputifyFiles['../projects/sputify/Desktop.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'How can visualizing music taste as an interactive timeline deepen the personal music experience? The "Music Journey" is a scrollable timeline from the last four weeks back to 2021. Each period shows top songs, artists and genres as an animated bubble visualization while the songs play.',
                    de: 'Wie kann die Visualisierung des Musikgeschmacks als interaktive Zeitreise das persönliche Musikerlebnis vertiefen? Die "Musikreise" ist eine scrollbare Zeitleiste von den letzten vier Wochen bis zurück ins Jahr 2021. Jeder Zeitraum zeigt Top-Songs, -Künstler und -Genres als animierte Blasenvisualisierung, während die Songs abgespielt werden.'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Along the way, users collect badges based on their listening habits and end with a shareable image of their music history. The target group is younger, long-time Spotify Premium users.',
                    de: 'Unterwegs sammeln Benutzer Abzeichen basierend auf ihren Hörgewohnheiten und erhalten am Ende ein teilbares Bild ihrer Musikgeschichte. Die Zielgruppe sind jüngere, langjährige Spotify-Premium-Nutzer.'
                }
            },
            {
                type: 'subheading',
                text: 'Team'
            },
            {
                type: 'iconed',
                text: 'Laura Giaimo',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'UX/UI design', de: 'UX/UI-Design' }
            },
            {
                type: 'iconed',
                text: 'Lisa Landolt',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend development', de: 'Frontend-Entwicklung' }
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
                text: { en: 'Frontend', de: 'Frontend-' }
            },
            {
                type: 'bullet',
                text: { en: 'Backend development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'iconed',
                text: 'Marin Hirschi',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend', de: 'Frontend-' }
            },
            {
                type: 'bullet',
                text: { en: 'Backend development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Vue.js frontend with D3.js for the bubble visualization and GSAP & Lenis for scrolling',
                    de: 'Vue.js-Frontend mit D3.js für die Blasenvisualisierung und GSAP & Lenis für das Scrollen'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Node.js & Express backend', de: 'Node.js- & Express-Backend' }
            },
            {
                type: 'bullet',
                text: 'Spotify Web API & Web Playback SDK, Google Gemini API'
            },
            {
                type: 'bullet',
                text: { en: 'Figma for design, Vitest & Cypress for testing', de: 'Figma für das Design, Vitest & Cypress für Tests' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: sputifyFiles['../projects/sputify/ProjectArchitecture.jpg'].default,
                        caption: { en: 'Project Architecture', de: 'Projektarchitektur' }
                    }
                ]
            },
            {
                type: 'subheading',
                text: { en: 'Challenges', de: 'Herausforderungen' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Midway through the project, Spotify shut down several API endpoints we relied on without notice. We used the Google Gemini API to fill in the missing track data and rebuilt how the yearly data is fetched, keeping the core experience intact.',
                    de: 'Mitten im Projekt schaltete Spotify ohne Vorankündigung mehrere API-Endpunkte ab, auf die wir angewiesen waren. Mit der Google Gemini API ergänzten wir die fehlenden Track-Daten und bauten das Abrufen der Jahresdaten neu auf, sodass das Kernerlebnis erhalten blieb.'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The bubble visualization took many iterations in D3.js until size, color and transitions reflected each song's mood and energy smoothly. User tests then shaped the details, such as starting the bubble without color and playing the first song right away.`,
                    de: 'Die Blasenvisualisierung brauchte viele Iterationen in D3.js, bis Grösse, Farbe und Übergänge die Stimmung und Energie jedes Songs flüssig wiedergaben. Nutzertests prägten danach die Details, etwa dass die Blase farblos startet und der erste Song sofort abgespielt wird.'
                }
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sputifyFiles['../projects/sputify/Login.jpg'].default,
                        caption: { en: 'Login Page Mobile', de: 'Login-Seite Mobil' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Journey.jpg'].default,
                        caption: { en: 'Music Journey', de: 'Musikreise' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopSongs.jpg'].default,
                        caption: { en: 'Top Songs Section Mobile', de: 'Top-Songs-Bereich Mobil' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopArtists.jpg'].default,
                        caption: { en: 'Top Artists Section', de: 'Top-Künstler-Bereich' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Focus.jpg'].default,
                        caption: { en: 'Focus Mode Mobile', de: 'Fokus-Modus Mobil' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Badges.jpg'].default,
                        caption: { en: 'Badges Collection', de: 'Abzeichensammlung' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Menu.jpg'].default,
                        caption: { en: 'Menu Mobile', de: 'Menü Mobil' }
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Share.jpg'].default,
                        caption: { en: 'Share Page', de: 'Teilen-Seite' }
                    },
                ],
            },
            {
                type: 'heading',
                text: { en: 'Screencast Mobile', de: 'Screencast Mobil' }
            },
            {
                type: 'video',
                video: sputifyFiles['../projects/sputify/Mobile.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'presentation',
                src: sputifyFiles['../projects/sputify/Presentation.pdf'].default
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/iahirsch/sputify',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'Figma Prototype Desktop', de: 'Figma Prototyp Desktop' },
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=694%3A5979&node-id=694-7596&p=f&viewport=-336%2C352%2C0.08&t=icFqiCaQGxwdGQyL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=694%3A7596',
                icon: 'fa-brands fa-figma'
            },
            {
                text: { en: 'Figma Prototype Mobile', de: 'Figma Prototyp Mobil' },
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=838%3A8681&node-id=838-9683&p=f&viewport=-781%2C374%2C0.08&t=I6fzqdYEK93WZXZn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=838%3A9683',
                icon: 'fa-brands fa-figma'
            }
        ],
        downloads: [
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: sputifyFiles['../projects/sputify/Documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.pdf', de: 'Präsentation.pdf' },
                url: sputifyFiles['../projects/sputify/Presentation.pdf'].default,
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
        cover: ecohomeFiles['../projects/ecohome/cover.jpg']?.default,
        name: 'ecohome',
        description: { en: 'serious game about waste management', de: 'serious game über nachhaltigkeit und abfall' },
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'International Summer School on Designing Serious Games'
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'team',
            'game'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `EcoHome is a strategic tabletop game centered around waste management and sustainability in modern Swiss households. Players take on different personas and must balance daily actions to reduce trash while maintaining or increasing their happiness score. The game spans one week, with each turn representing a day. Players receive immediate feedback on their choices, allowing them to adjust strategies. As the final project of the International Summer School on Designing Serious Games, this game was developed in a team of three with Lisa Landolt and Julian Schwarz.`,
                    de: `EcoHome ist ein strategisches Brettspiel, das sich auf Abfall und Nachhaltigkeit in modernen Schweizer Haushalten konzentriert. Die Spieler übernehmen verschiedene Rollen und müssen tägliche Aktionen ausbalancieren, um Müll zu reduzieren und gleichzeitig ihre Zufriedenheit beizubehalten oder zu erhöhen. Das Spiel erstreckt sich über eine Woche, wobei jeder Zug einen Tag darstellt. Die Spieler erhalten sofortiges Feedback zu ihren Entscheidungen, was ihnen ermöglicht, ihre Strategien anzupassen. Als Abschlussprojekt der International Summer School on Designing Serious Games wurde dieses Spiel in einem Team von drei Personen mit Lisa Landolt und Julian Schwarz entwickelt.`
                }
            },
            {
                type: 'heading',
                text: { en: 'The Prototype', de: 'Der Prototyp' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: ecohomeFiles['../projects/ecohome/Conceptualizing.jpg'].default,
                        caption: { en: 'Conceptualizing the Game', de: 'Konzeptualisierung des Spiels' }
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Testing.jpg'].default,
                        caption: { en: 'Testing the Game', de: 'Testen des Spiels' }
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Playing.jpg'].default,
                        caption: { en: 'Playing the Game', de: 'Spielen des Spiels' }
                    }
                ]
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Download Game Rules', de: 'Spielregeln herunterladen' },
                        action: ecohomeFiles['../projects/ecohome/EcoHome_Spielregeln.pdf'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Household waste is shaped by many small everyday decisions. EcoHome turns them into a week of play: whoever ends the week with the fewest trash bags wins, but cutting waste at any cost makes players unhappy, and unhappy players lose options. The game is played with physical cards for actions, events and resources and needs only minimal bookkeeping.',
                    de: 'Haushaltsmüll entsteht durch viele kleine Alltagsentscheidungen. EcoHome macht daraus eine Spielwoche: Wer am Ende die wenigsten Müllsäcke hat, gewinnt, doch wer um jeden Preis Müll spart, wird unglücklich, und unglückliche Spieler verlieren Möglichkeiten. Gespielt wird mit physischen Karten für Aktionen, Ereignisse und Ressourcen und mit minimalem Buchhaltungsaufwand.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'How to Play', de: 'So wird gespielt' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Each player is a single person, a family or a shared flat, with different free time and extra trash per day',
                    de: 'Jeder Spieler ist ein Einpersonenhaushalt, eine Familie oder eine WG, mit unterschiedlich viel freier Zeit und zusätzlichem Müll pro Tag'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Every day starts with a random event card, then players plan their free time slots',
                    de: 'Jeder Tag beginnt mit einer Ereigniskarte, danach planen die Spieler ihre freien Zeitfenster'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Action cards cover shopping, cooking, cleaning and recycling, with reusable items to save waste',
                    de: 'Aktionskarten decken Einkaufen, Kochen, Putzen und Recycling ab, mit wiederverwendbaren Gegenständen gegen Müll'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'With low happiness, players can no longer cook, clean or recycle, and at zero they produce extra trash every day',
                    de: 'Bei wenig Glück können Spieler nicht mehr kochen, putzen oder recyceln, und bei null erzeugen sie jeden Tag zusätzlichen Müll'
                }
            }
        ],
        links: [],
        downloads: [
            {
                text: { en: 'Game_Rules.pdf', de: 'Spielregeln.pdf' },
                url: ecohomeFiles['../projects/ecohome/EcoHome_Spielregeln.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Certificate.pdf', de: 'Zertifikat.pdf' },
                url: ecohomeFiles['../projects/ecohome/Certificate.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // milo's forest adventure
    {
        id: 'milo',
        cover: miloFiles['../projects/milo/cover.jpg']?.default,
        name: "milo’s forest adventure",
        description: { en: 'web-based scroll & click adventure', de: 'web-basiertes scroll- und klick-abenteuer' },
        context:
        {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                { en: 'Module DEWEB (Development for Web & Mobile)', de: 'Modul DEWEB - Development for Web & Mobile' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
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
                text: {
                    en: `Milo's Forest Adventure is a cute scroll-and-click adventure game that combines web development, pixel art, and interactive storytelling. By scrolling and clicking, players can explore the environment, interact with Milo, and uncover secrets of the enchanting forest. The game was developed as part of the Development for Web & Mobile module, where we were tasked with creating a web-based interactive picture book using HTML, CSS, and JavaScript.`,
                    de: `Milo's Forest Adventure ist ein niedliches Scroll- und Klick-Abenteuerspiel, das Webentwicklung, Pixelart und interaktive Erzählungen kombiniert. Durch Scrollen und Klicken können die Spieler die Umgebung erkunden, mit Milo interagieren und Geheimnisse des verzauberten Waldes entdecken. Das Spiel wurde im Rahmen des Moduls Development for Web & Mobile entwickelt, wo wir die Aufgabe hatten, ein webbasiertes interaktives Bilderbuch mit HTML, CSS und JavaScript zu erstellen.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Play the Game', de: 'Spiel spielen' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Play', de: 'Spielen' },
                        action: 'https://milo.jfladas.com',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: { en: 'Download Project', de: 'Projekt herunterladen' },
                        action: releaseFile('milo.zip'),
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The online demo runs without the backend, so the leaderboard at the end is missing. To play the full version locally (Node.js required):',
                    de: 'Die Online-Demo läuft ohne Backend, deshalb fehlt die Bestenliste am Ende. Um die volle Version lokal zu spielen (Node.js erforderlich):'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Download and unzip the project, or clone the repository',
                    de: 'Das Projekt herunterladen und entpacken oder das Repository klonen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'In the <span class="snippet">/server</span> folder, run <span class="snippet hoverable tooltip copy" tooltip="copy">node server.mjs</span>',
                    de: 'Im Ordner <span class="snippet">/server</span> den Befehl <span class="snippet hoverable tooltip copy" tooltip="copy">node server.mjs</span> ausführen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Open the <span class="snippet">/client</span> folder with a local web server, e.g. Live Server in Visual Studio Code',
                    de: 'Den Ordner <span class="snippet">/client</span> mit einem lokalen Webserver öffnen, z.B. Live Server in Visual Studio Code'
                }
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'How to Play', de: 'So wird gespielt' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The adventure has five scenes: Milo\'s welcome, the forest by day, a conversation by the Rami River, the forest at night and a reflective ending at a cliff edge. An end screen shows your score and a leaderboard of the top 10 players.',
                    de: 'Das Abenteuer hat fünf Szenen: Milos Begrüssung, den Wald am Tag, ein Gespräch am Rami-Fluss, den Wald in der Nacht und einen nachdenklichen Abschluss an einer Klippe. Ein Endbildschirm zeigt deine Punktzahl und eine Bestenliste der Top 10 Spieler.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'HTML, CSS and JavaScript with factory functions and HTML generated through JavaScript',
                    de: 'HTML, CSS und JavaScript mit Factory Functions und per JavaScript erzeugtem HTML'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Node.js and Express backend that stores player data as JSON, with the player ID kept in a cookie',
                    de: 'Node.js- und Express-Backend, das die Spielerdaten als JSON speichert, mit der Spieler-ID in einem Cookie'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Graphics in Piskel, Photoshop and PowerPoint, a custom font made with FontStruct, audio from Suno and Freesound edited in Adobe Audition',
                    de: 'Grafiken mit Piskel, Photoshop und PowerPoint, eine eigene Schrift mit FontStruct, Audio von Suno und Freesound, bearbeitet in Adobe Audition'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'AI assistance from ChatGPT, Gemini, Adobe Firefly and Suno',
                    de: 'KI-Unterstützung durch ChatGPT, Gemini, Adobe Firefly und Suno'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'I enjoyed the project from start to finish and put a lot of time and energy into it. At times I got lost in details or wasn\'t sure what to tackle next, so towards the end a to-do list helped me keep track.',
                    de: 'Das Projekt hat mir von Anfang bis Ende Freude gemacht, und ich habe viel Zeit und Energie hineingesteckt. Manchmal habe ich mich in Details verloren oder wusste nicht, was als Nächstes dran ist, darum half mir gegen Ende eine To-do-Liste, den Überblick zu behalten.'
                }
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
                        caption: { en: 'Day Scene', de: 'Tag-Szene' }
                    },
                    {
                        src: miloFiles['../projects/milo/milo_river.png'].default,
                        caption: { en: 'River Dialogue', de: 'Fluss-Dialog' }
                    },
                    {
                        src: miloFiles['../projects/milo/milo_night.png'].default,
                        caption: { en: 'Night Scene', de: 'Nacht-Szene' }
                    },
                    {
                        src: miloFiles['../projects/milo/milo_endscreen.png'].default,
                        caption: { en: 'End Screen & Leaderboard', de: 'Endbildschirm & Bestenliste' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'presentation',
                src: miloFiles['../projects/milo/milo_presentation.pdf'].default
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/milo',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'itch.io Page', de: 'itch.io Seite' },
                url: 'https://jfladas.itch.io/milos-forest-adventure',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: { en: 'Play Demo', de: 'Demo spielen' },
                url: 'https://milo.jfladas.com',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'Playthrough Video', de: 'Playthrough-Video' },
                url: 'https://youtu.be/_kuLURwhBGY',
                icon: 'fa-brands fa-youtube'
            }
        ],
        downloads: [
            {
                text: 'Milo.zip',
                url: releaseFile('milo.zip'),
                icon: 'file-archive'
            },
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: miloFiles['../projects/milo/milo_documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.pdf', de: 'Präsentation.pdf' },
                url: miloFiles['../projects/milo/milo_presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // beautiful mathematics
    {
        id: 'matbf',
        cover: matbfFiles['../projects/matbf/cover.jpg']?.default,
        name: 'beautiful mathematics',
        description: { en: 'collection of mathematical explorations', de: 'sammlung mathematischer erkundungen' },
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                { en: 'Module MATBF (Beautiful Mathematics)', de: 'Modul MATBF - Beautiful Mathematics' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Beautiful Mathematics explores the beauty of mathematics through generative art and algorithmic design, using p5.js, HTML, CSS, and JavaScript. This page showcases a collection of weekly tasks completed during weeks 1 to 6 of the module and an exam project. Each task implements mathematical and computational principles to create visually engaging patterns, simulations, and interactive experiences.`,
                    de: `Beautiful Mathematics erforscht die Schönheit der Mathematik durch generative Kunst und algorithmisches Design unter Verwendung von p5.js, HTML, CSS und JavaScript. Diese Seite zeigt eine Sammlung wöchentlicher Aufgaben, die während der Wochen 1 bis 6 des Moduls und eines Prüfungsprojekts abgeschlossen wurden. Jede Aufgabe implementiert mathematische und rechnerische Prinzipien, um visuell ansprechende Muster, Simulationen und interaktive Erlebnisse zu schaffen.`
                }
            },
            {
                type: 'heading',
                text: { en: 'View the Collection', de: 'Sammlung ansehen' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Go to Page', de: 'Zur Seite' },
                        action: 'https://matbf.jfladas.com',
                        icon: 'arrow-right',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Weekly Tasks', de: 'Wöchentliche Aufgaben' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'W1 | Spiral – circles growing in a spiral, drawn with the Bresenham midpoint circle algorithm',
                    de: 'W1 | Spirale – wachsende Kreise in einer Spirale, gezeichnet mit dem Bresenham-Mittelpunkt-Kreisalgorithmus'
                }
            },
            {
                type: 'bullet',
                text: { en: 'W2 | 3D Mesh – an attempt at a 3D snail shape in WebGL', de: 'W2 | 3D Mesh – Versuch einer 3D-Schneckenform in WebGL' }
            },
            {
                type: 'bullet',
                text: { en: 'W3 | Matrix – a Markov chain with Japanese hiragana', de: 'W3 | Matrix – eine Markov-Kette mit japanischen Hiragana' }
            },
            {
                type: 'bullet',
                text: {
                    en: `W4 | Life – an interactive Conway's Game of Life with more states and colors`,
                    de: `W4 | Leben – ein interaktives Conway's Game of Life mit mehr Zuständen und Farben`
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'W5 | Mountains – a layered mountain range from 2D fractal noise and smoothstep interpolation',
                    de: 'W5 | Berge – eine geschichtete Bergkette aus 2D-Fraktalrauschen und Smoothstep-Interpolation'
                }
            },
            {
                type: 'bullet',
                text: { en: 'W6 | Trees – different trees grown with 2D L-systems', de: 'W6 | Bäume – verschiedene Bäume aus 2D-L-Systemen' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'EXAM | Breathing – pulsating circles for mindful breathing',
                    de: 'PRÜFUNG | Atmung – pulsierende Kreise für achtsames Atmen'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Outcome', de: 'Ergebnis' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Over the six weeks, I learned to apply mathematical algorithms to creative coding with p5.js and WebGL: Markov chains, cellular automata and L-systems for generative behavior, and fractal noise and procedural techniques for natural-looking landscapes.',
                    de: 'Über die sechs Wochen lernte ich, mathematische Algorithmen mit p5.js und WebGL auf kreatives Programmieren anzuwenden: Markov-Ketten, zelluläre Automaten und L-Systeme für generatives Verhalten sowie Fraktalrauschen und prozedurale Techniken für natürlich wirkende Landschaften.'
                }
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
                        caption: { en: 'W1 | Spiral', de: 'W1 | Spirale' }
                    },
                    {
                        src: matbfFiles['../projects/matbf/W2.gif'].default,
                        caption: 'W2 | 3D Mesh'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W3.webp'].default,
                        caption: 'W3 | Matrix'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W4.webp'].default,
                        caption: { en: 'W4 | Life', de: 'W4 | Leben' }
                    },
                    {
                        src: matbfFiles['../projects/matbf/W5.webp'].default,
                        caption: { en: 'W5 | Mountains', de: 'W5 | Berge' }
                    },
                    {
                        src: matbfFiles['../projects/matbf/W6.jpg'].default,
                        caption: { en: 'W6 | Trees', de: 'W6 | Bäume' }
                    },
                    {
                        src: matbfFiles['../projects/matbf/EXAM.gif'].default,
                        caption: { en: 'EXAM | Breathing', de: 'PRÜFUNG | Atmung' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Weekly Documentation', de: 'Wöchentliche Dokumentation' }
            },
            {
                type: 'presentation',
                src: matbfFiles['../projects/matbf/MATBF.pdf'].default
            }
        ],
        links: [
            {
                text: 'Website',
                url: 'https://matbf.jfladas.com',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/matbf',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: 'Beautiful Mathematics',
                url: 'https://learning.kahlina.ch/Beautiful%20Mathematics/beautiful_mathematics_start.html',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // connected europe
    {
        id: '4g',
        cover: europeFiles['../projects/4g/cover.jpg']?.default,
        name: 'connected europe',
        description: {
            en: 'data visualization poster of 4g network expansion',
            de: 'plakat zur datenvisualisierung von 4g-netz-erweiterung'
        },
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                {
                    en: 'Module STUIN (Studio Information Aesthetics & Engineering)',
                    de: 'Modul STUIN - Studio Information Aesthetics & Engineering'
                }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'solo',
            'design'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Connected Europe is a data visualization project exploring the rapid expansion of 4G mobile network coverage across Europe between 2012 and 2016, a turning point in digital connectivity. It highlights the speed and scale of the 4G deployment and its impact on society.`,
                    de: `Connected Europe ist ein Datenvisualisierungsprojekt über die rasante Ausweitung der 4G-Mobilfunknetzabdeckung in Europa zwischen 2012 und 2016, einen Wendepunkt in der digitalen Konnektivität. Es zeigt die Geschwindigkeit und das Ausmass der 4G-Einführung und hebt deren Auswirkungen auf die Gesellschaft hervor.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Poster', de: 'Plakat' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: europeFiles['../projects/4g/ConnectedEurope.jpg'].default,
                        caption: 'Connected Europe'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Research', de: 'Recherche' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'How quickly was 4G technology adopted across Europe? To answer this, I used indicator 9.c.1 (mobile network coverage) from the United Nations Sustainable Development Goals (SDG) Data Portal, covering 2012 to 2022 for 16 European countries grouped into four regions.',
                    de: 'Wie schnell wurde die 4G-Technologie in Europa eingeführt? Um das zu beantworten, nutzte ich den Indikator 9.c.1 (Mobilfunknetzabdeckung) aus dem Datenportal der Vereinten Nationen für nachhaltige Entwicklungsziele (SDG), mit Daten von 2012 bis 2022 zu 16 europäischen Ländern in vier Regionen.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Filtering, pivot tables and conditional formatting in Excel revealed the trends across countries and time periods. The sketches then explored three dimensions of the visualization:',
                    de: 'Filter, Pivot-Tabellen und bedingte Formatierung in Excel zeigten die Trends über Länder und Zeiträume hinweg. Die Skizzen untersuchten danach drei Dimensionen der Visualisierung:'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Diagrammatical: the basic diagram types and how to apply them',
                    de: 'Diagrammatisch: die grundlegenden Diagrammtypen und ihre Anwendung'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Visual: design principles that set different content apart',
                    de: 'Visuell: Designprinzipien, die verschiedene Inhalte unterscheiden'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Structuring: how the elements are organized and arranged in space',
                    de: 'Strukturierend: wie die Elemente im Raum organisiert und angeordnet sind'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: { en: 'Microsoft Excel for the data analysis', de: 'Microsoft Excel für die Datenanalyse' }
            },
            {
                type: 'bullet',
                text: { en: 'Adobe Illustrator for the data visualization', de: 'Adobe Illustrator für die Datenvisualisierung' }
            },
            {
                type: 'bullet',
                text: { en: 'Adobe InDesign for the layout and poster design', de: 'Adobe InDesign für Layout und Plakatdesign' }
            },
            {
                type: 'heading',
                text: { en: 'Sketches', de: 'Skizzen' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: europeFiles['../projects/4g/Sketches1.jpg'].default,
                        caption: { en: 'Sketch 1', de: 'Skizze 1' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches2.jpg'].default,
                        caption: { en: 'Diagrammatical Dimensions 1', de: 'Diagrammatische Dimensionen 1' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches3.jpg'].default,
                        caption: { en: 'Sketch 2', de: 'Skizze 2' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches4.jpg'].default,
                        caption: { en: 'Diagrammatical Dimensions 2', de: 'Diagrammatische Dimensionen 2' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches5.jpg'].default,
                        caption: {
                            en: 'Diagrammatical, Visual & Structuring Dimensions 3',
                            de: 'Diagrammatische, visuelle & strukturierende Dimensionen 3'
                        }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches6.jpg'].default,
                        caption: { en: 'Visual Dimensions 1', de: 'Visuelle Dimensionen 1' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches7.jpg'].default,
                        caption: { en: 'Sketch 3', de: 'Skizze 3' }
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches8.jpg'].default,
                        caption: { en: 'Sketch 4', de: 'Skizze 4' }
                    }
                ]
            }
        ],
        links: [
            {
                text: { en: 'UN SDG Goal 9', de: 'UN SDG Ziel 9' },
                url: 'https://www.un.org/sustainabledevelopment/infrastructure-industrialization/',
                icon: 'arrow-up-right-from-square'
            },
            {
                text: { en: 'UN SDG Data Portal', de: 'UN SDG Datenportal' },
                url: 'https://unstats.un.org/sdgs/dataportal/database',
                icon: 'arrow-up-right-from-square'
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
        cover: saladFiles['../projects/salad/cover.jpg']?.default,
        name: 'salad ninja',
        description: {
            en: '2d animated video inspired by fruit ninja',
            de: '2D-animiertes video inspiriert von fruit ninja'
        },
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                {
                    en: 'Module ISA ANIM (Introduction to Animation)',
                    de: 'Modul ISA ANIM - Einführung in die Animation'
                }
            ],
            url: {
                en: 'https://www.hslu.ch/en/lucerne-school-of-design-film-and-art/',
                de: 'https://www.hslu.ch/de-ch/design-film-kunst/'
            },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'team',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Salad Ninja is a 2D animated video inspired by the popular mobile game Fruit Ninja. The video shows the preparation of a salad by slicing various ingredients. It uses a combination of stop motion and frame-by-frame paper animation and was developed in a team of two with Remo Hösli as part of the ISA Animation Introduction module.`,
                    de: `Salad Ninja ist ein 2D-animiertes Video, inspiriert vom beliebten Mobile Game Fruit Ninja. Das Video zeigt die Zubereitung eines Salats durch das Schneiden verschiedener Zutaten. Es kombiniert Stop-Motion und frame-by-frame Papieranimation und wurde in einem Zweierteam mit Remo Hösli im Rahmen des ISA Animations-Einführungsmoduls entwickelt.`
                }
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
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The animation follows the playful destruction of the ingredients, blending two techniques: stop motion brings the real ingredients to life as they spin and get sliced, while frame-by-frame paper animation adds the slices, splashes, effects like fire, and the text.',
                    de: 'Die Animation zeigt die spielerische Zerstörung der Zutaten und verbindet zwei Techniken: Stop-Motion erweckt die echten Zutaten zum Leben, während sie sich drehen und geschnitten werden, und frame-by-frame Papieranimation ergänzt Scheiben, Spritzer, Effekte wie Feuer und den Text.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Starting from a storyboard and a proof of concept, we shot the stop motion scenes and drew the paper animation frame by frame. In After Effects, both techniques were then combined, edited and set to sound.',
                    de: 'Ausgehend von einem Storyboard und einem Proof of Concept drehten wir die Stop-Motion-Szenen und zeichneten die Papieranimation Bild für Bild. In After Effects wurden beide Techniken anschliessend kombiniert, geschnitten und vertont.'
                }
            },
            {
                type: 'subheading',
                text: 'Team'
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Animation concept', de: 'Animationskonzept' }
            },
            {
                type: 'bullet',
                text: { en: 'On-paper animation', de: 'Papieranimation' }
            },
            {
                type: 'bullet',
                text: { en: 'Stop motion animation', de: 'Stop-Motion-Animation' }
            },
            {
                type: 'bullet',
                text: { en: 'Sound design', de: 'Sounddesign' }
            },
            {
                type: 'bullet',
                text: { en: 'Salad eating', de: 'Salat essen' }
            },
            {
                type: 'iconed',
                text: 'Remo Hösli',
                icon: 'user-ninja'
            },
            {
                type: 'bullet',
                text: { en: 'Animation concept', de: 'Animationskonzept' }
            },
            {
                type: 'bullet',
                text: { en: 'Stop motion animation', de: 'Stop-Motion-Animation' }
            },
            {
                type: 'bullet',
                text: { en: 'Editing in After Effects', de: 'Schnitt in After Effects' }
            },
            {
                type: 'bullet',
                text: { en: 'Sound design', de: 'Sounddesign' }
            },
            {
                type: 'bullet',
                text: { en: 'Salad eating', de: 'Salat essen' }
            },
            {
                type: 'heading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: saladFiles['../projects/salad/Inspo.webp'].default,
                        caption: 'Inspiration: Fruit Ninja Game'
                    },
                    {
                        src: saladFiles['../projects/salad/Storyboard.jpg'].default,
                        caption: 'Storyboard'
                    },
                    {
                        src: saladFiles['../projects/salad/Setup.webp'].default,
                        caption: { en: 'Stop Motion Animation', de: 'Stop-Motion-Animation' }
                    },
                    {
                        src: saladFiles['../projects/salad/POC.webp'].default,
                        caption: 'Proof of Concept'
                    },
                    {
                        src: saladFiles['../projects/salad/Salad.jpg'].default,
                        caption: { en: 'The Salad', de: 'Der Salat' }
                    },
                ]
            },
            {
                type: 'heading',
                text: { en: 'Other Projects in the Module', de: 'Weitere Projekte im Modul' }
            },
            {
                type: 'subheading',
                text: { en: 'Transition Animation', de: 'Übergangsanimation' }
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Stir.mp4'].default
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Each student animated a smooth transition between two objects, and all segments were combined into one continuous chain. Shown here is my part, from a cup to a pencil.',
                    de: 'Alle Studierenden animierten einen nahtlosen Übergang zwischen zwei Objekten, und alle Segmente wurden zu einer durchgehenden Kette kombiniert. Hier ist mein Teil zu sehen, von einer Tasse zu einem Bleistift.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Stop Motion Claymation', de: 'Stop-Motion-Claymation' }
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Frog.mp4'].default
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Together with Remo, I tried out claymation: a short stop motion video with sound of a frog emerging and catching a fly.',
                    de: 'Zusammen mit Remo habe ich Claymation ausprobiert: ein kurzes Stop-Motion-Video mit Sound, in dem ein Frosch auftaucht und eine Fliege fängt.'
                }
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
        cover: hsclFiles['../projects/hscl/cover.jpg']?.default,
        name: 'ux hscl',
        description: {
            en: `user experience design for school sports organization`,
            de: `user experience design für eine schulische sportorganisation`
        },
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                { en: 'Module IUX (Introduction to User Experience)', de: 'Modul IUX - Einführung in User Experience' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'team',
            'design',
            'ux',
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `UX HSCL is a UX redesign project focused on improving the usability of the HSCL website. Conducted through extensive user research, prototyping, and testing, the project aimed to optimize navigation, structure, and personalization for a better user experience. Created by Üx-Grüp (Yanis Deplazes, Jan Schwegler, Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) as part of the Introduction to UX module.`,
                    de: `UX HSCL ist ein UX-Redesign-Projekt zur Verbesserung der Benutzerfreundlichkeit der HSCL-Website. Durch umfangreiche Nutzerforschung, Prototyping und Tests zielte das Projekt darauf ab, Navigation, Struktur und Personalisierung für ein besseres Benutzererlebnis zu optimieren. Erstellt von Üx-Grüp (Yanis Deplazes, Jan Schwegler, Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) im Rahmen des Moduls Einführung in User Experience.`
                }
            },
            {
                type: 'heading',
                text: 'Screencast'
            },
            {
                type: 'video',
                video: hsclFiles['../projects/hscl/IUX_Screencast.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Research', de: 'Recherche' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'User surveys, empathy maps and personas (primary, secondary and negative) helped us define the main pain points of the existing website: inefficient filters, a confusing registration, no location-based training search, overloaded and poorly structured content, missing multilingual support and inefficient navigation.',
                    de: 'Nutzerumfragen, Empathy Maps und Personas (primär, sekundär und negativ) halfen uns, die wichtigsten Probleme der bestehenden Website zu definieren: ineffiziente Filter, eine verwirrende Registrierung, keine standortbasierte Trainingssuche, überladene und schlecht strukturierte Inhalte, fehlende Mehrsprachigkeit und eine ineffiziente Navigation.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'We started with paper prototypes and hallway usability tests on the HSLU campus, then built digital prototypes in Figma. Two rounds of user testing, in the hallways and with higher-semester students, refined them further: tab-based navigation became more prominent, the login was redesigned, the favorites icon moved to a more visible place, a dark mode was added and the date selection was simplified.',
                    de: 'Wir starteten mit Papierprototypen und Hallway-Usability-Tests auf dem HSLU-Campus und bauten danach digitale Prototypen in Figma. Zwei Runden Nutzertests, in den Fluren und mit Studierenden höherer Semester, verfeinerten sie weiter: Die tab-basierte Navigation wurde stärker betont, das Login neu gestaltet, das Favoriten-Icon sichtbarer platziert, ein Dark Mode ergänzt und die Datumsauswahl vereinfacht.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Outcome', de: 'Ergebnis' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A new search with an integrated map view and location-based filters',
                    de: 'Eine neue Suche mit integrierter Kartenansicht und standortbasierten Filtern'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A homepage with direct access to key sections and a chronological event list',
                    de: 'Eine Startseite mit direktem Zugang zu wichtigen Bereichen und einer chronologischen Eventliste'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Clearer naming, layout and training information',
                    de: 'Klarere Benennungen, Layouts und Trainingsinformationen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A language switcher and account-based favorites',
                    de: 'Ein Sprachumschalter und kontobasierte Favoriten'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Users also suggested a mobile app, which did not fit into the timeframe of the project.',
                    de: 'Nutzer wünschten sich auch eine mobile App, die jedoch nicht in den Zeitrahmen des Projekts passte.'
                }
            },
            {
                type: 'heading',
                text: 'Design'
            },
            {
                type: 'images',
                images: [
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screens.png'].default,
                        caption: { en: 'Final Website Screens', de: 'Finale Website-Screens' }
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screenshots.png'].default,
                        caption: { en: 'Final Prototype Screenshots', de: 'Finale Prototyp-Screenshots' }
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Figma_Design.png'].default,
                        caption: { en: 'Figma Design', de: 'Figma-Design' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: hsclFiles['../projects/hscl/IUX_Ideas_Prototype.png'].default,
                        caption: { en: 'Ideation & Paper Prototypes', de: 'Ideenfindung & Papierprototypen' }
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Figma_Prototype.png'].default,
                        caption: { en: 'Figma Prototype', de: 'Figma-Prototyp' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'presentation',
                src: 'https://1drv.ms/p/c/8266699022344100/IQQAQTQikGlmIICCdgYBAAAAAYSwqXeYVx_lQUASqC_-YeI?em=2&wdAr=1.7777777777777777&wdEaaCheck=1'
            }
        ],
        links: [
            {
                text: { en: 'Behance Project', de: 'Behance Projekt' },
                url: 'https://www.behance.net/gallery/194721225/HSCL-UX',
                icon: 'fa-brands fa-behance'
            },
            {
                text: { en: 'Figma Prototype', de: 'Figma Prototyp' },
                url: 'https://www.figma.com/proto/ZQ7E5M9gXRIQyZ30bm113Q/HSCL?page-id=210%3A203&node-id=351-1042&p=f&viewport=151%2C580%2C0.11&t=rBFIgp854gtlzYAE-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=351%3A1042',
                icon: 'fa-brands fa-figma'
            }
        ],
        downloads: [
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('IUX_Presentation.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: hsclFiles['../projects/hscl/IUX_Documentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // sweet teeth
    {
        id: 'sweetteeth',
        cover: sweetteethFiles['../projects/sweetteeth/cover.jpg']?.default,
        name: 'sweet teeth',
        description: `2d auto-runner game`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                { en: 'Module IGAME (Game Design & Engineering)', de: 'Modul IGAME - Game Design & Engineering' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'team',
            'coding',
            'game',
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Sweet Teeth is a game in which players control a mischievous bacterium that teleports automatically in intervals. The goal is to rot as many teeth as possible while avoiding the evil oral hygiene products. It was our first game, created during the IGAME module by Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher).`,
                    de: `Sweet Teeth ist ein Spiel, in dem die Spieler ein schelmisches Karies-Bakterium steuern, das sich automatisch in Intervallen teleportiert. Das Ziel ist es, so viele Zähne wie möglich zu verrotten und dabei den bösen Mundhygieneprodukten auszuweichen. Es war unser erstes Spiel und entstand während des IGAME-Moduls im Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher).`
                }
            },
            {
                type: 'heading',
                text: { en: 'Play the Game', de: 'Spiel spielen' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Play or Download', de: 'Spielen oder Herunterladen' },
                        action: 'https://jfladas.itch.io/sweet-teeth',
                        icon: 'play',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'How to Play', de: 'So wird gespielt' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The bacterium teleports every 1.5 seconds, within a radius you steer with the mouse, the mechanic our team was assigned',
                    de: 'Das Bakterium teleportiert sich alle 1,5 Sekunden innerhalb eines Radius, den du mit der Maus steuerst, die Mechanik, die unserem Team zugeteilt wurde'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Avoid the toothbrush, mouthwash and toothpaste while rotting teeth for points',
                    de: 'Weiche Zahnbürste, Mundwasser und Zahnpasta aus und verrotte Zähne für Punkte'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Enough candies unlock "Super Rot", which instantly rots all teeth within the radius for a limited time',
                    de: 'Genügend Süssigkeiten schalten "Super Rot" frei, das für kurze Zeit alle Zähne im Radius sofort verrotten lässt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'At the finish line you see your score and can try for a new high score',
                    de: 'An der Ziellinie siehst du deine Punktzahl und kannst einen neuen Highscore versuchen'
                }
            },
            {
                type: 'subheading',
                text: 'Team'
            },
            {
                type: 'iconed',
                text: 'Chiara Tremml',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Art'
            },
            {
                type: 'bullet',
                text: { en: 'UI design', de: 'UI-Design' }
            },
            {
                type: 'iconed',
                text: 'Michelle Studtmann',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Art'
            },
            {
                type: 'bullet',
                text: { en: 'UI design', de: 'UI-Design' }
            },
            {
                type: 'iconed',
                text: 'Dario Stocker',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Programming', de: 'Programmierung' }
            },
            {
                type: 'bullet',
                text: { en: 'Level design', de: 'Leveldesign' }
            },
            {
                type: 'bullet',
                text: { en: 'Sound design', de: 'Sounddesign' }
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Programming', de: 'Programmierung' }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'In three weeks, we went from a brainstorm on our assigned verb "teleport" to a finished game on itch.io. After a first Unity prototype of the mouse-controlled teleportation, we chose a candy-land world with a cavity as the hero and refined difficulty and pacing through regular playtests. All sprites were hand-drawn in Adobe Illustrator in a colorful comic style, and we made our own start and teleport sounds. Each week, we documented our progress in the dev blog.',
                    de: 'In drei Wochen kamen wir von einem Brainstorming zum zugeteilten Verb "teleportieren" zu einem fertigen Spiel auf itch.io. Nach einem ersten Unity-Prototyp der mausgesteuerten Teleportation entschieden wir uns für eine Candyland-Welt mit Karies als Hauptfigur und verfeinerten Schwierigkeit und Tempo durch regelmässige Playtests. Alle Sprites wurden von Hand in Adobe Illustrator in einem farbenfrohen Comic-Stil gezeichnet, und Start- und Teleport-Sound haben wir selbst erstellt. Jede Woche dokumentierten wir unseren Fortschritt im Dev-Blog.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Challenges', de: 'Herausforderungen' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Balancing the teleportation so it feels intuitive and responsive',
                    de: 'Die Teleportation so ausbalancieren, dass sie sich intuitiv und reaktionsschnell anfühlt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Designing a cohesive world within strict limits of 10 sprites with 3 animations each',
                    de: 'Eine stimmige Welt mit den strengen Vorgaben von 10 Sprites mit je 3 Animationen gestalten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Bringing four different ways of working together, which made agreeing on ideas hard at first',
                    de: 'Vier unterschiedliche Arbeitsweisen zusammenbringen, was die Einigung auf Ideen anfangs schwierig machte'
                }
            },
            {
                type: 'heading',
                text: 'Screenshots'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sweetteethFiles['../projects/sweetteeth/SweetTeeth_Start.png'].default,
                        caption: { en: 'Start Screen', de: 'Startbildschirm' }
                    },
                    {
                        src: sweetteethFiles['../projects/sweetteeth/SweetTeeth_Super.png'].default,
                        caption: 'Super Rot Power-Up'
                    },
                    {
                        src: sweetteethFiles['../projects/sweetteeth/SweetTeeth_Oops.png'].default,
                        caption: { en: 'Game Over Screen', de: 'Game-Over-Bildschirm' }
                    },
                    {
                        src: sweetteethFiles['../projects/sweetteeth/SweetTeeth_WellDone.png'].default,
                        caption: { en: 'Win Screen', de: 'Gewonnen-Bildschirm' }
                    }
                ]
            }
        ],
        links: [
            {
                text: 'GitHub Repository',
                url: 'https://github.com/jfladas/SweetTeeth',
                icon: 'fa-brands fa-github-alt'
            },
            {
                text: { en: 'itch.io Page', de: 'itch.io Seite' },
                url: 'https://jfladas.itch.io/sweet-teeth',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Gameplay Video',
                url: 'https://youtu.be/04TWBzgvl34',
                icon: 'fa-brands fa-youtube'
            },
            {
                text: { en: 'Dev Blog Entries', de: 'Dev Blog Einträge' },
                url: 'https://blog.hslu.ch/games/?s=HDL+Week',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: { en: 'Description.pdf', de: 'Beschreibung.pdf' },
                url: sweetteethFiles['../projects/sweetteeth/SweetTeeth_Description.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'ControlScheme.pdf', de: 'Steuerungsschema.pdf' },
                url: sweetteethFiles['../projects/sweetteeth/SweetTeeth_ControlScheme.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.pdf', de: 'Präsentation.pdf' },
                url: sweetteethFiles['../projects/sweetteeth/SweetTeeth_Presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // the rodina
    {
        id: 'rodina',
        cover: rodinaFiles['../projects/rodina/cover.jpg']?.default,
        name: 'the rodina',
        description: {
            en: `3d rendered video inspired by the rodina's visual style`,
            de: `3d gerendertes video visuell inspiriert von the rodina`
        },
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                { en: 'Module KIVIS (Kickstart Visual Design)', de: 'Modul KIVIS - Kickstart Visual Design' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/design-film-kunst/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
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
                text: {
                    en: `The Rodina is a short 3D animation inspired by the distinct visual style of the Dutch design studio 'The Rodina'. It was my final project in the Kickstart Visual Design course, where we learned design fundamentals and principles and got to know many influential designers and design studios. For animating and editing a scanned 3D model of my head I used Cinema 4D; video editing, sound design and color correction were done in Adobe Premiere Pro. The project integrates feedback and experimentation to achieve a polished visual result.`,
                    de: `The Rodina ist eine kurze 3D-Animation, inspiriert vom unverwechselbaren visuellen Stil des niederländischen Designstudios 'The Rodina'. Sie war mein Abschlussprojekt im Modul Kickstart Visual Design, in dem wir die Grundlagen und Prinzipien des Designs sowie viele einflussreiche Designer:innen und Designstudios kennenlernten. Für die Animation und Bearbeitung eines gescannten 3D-Modells meines Kopfes habe ich Cinema 4D verwendet, die Videobearbeitung, das Sounddesign und die Farbkorrektur wurden in Adobe Premiere Pro durchgeführt. Das Projekt integriert Feedback und Experimente, um ein poliertes visuelles Ergebnis zu erzielen.`
                }
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
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Idea', de: 'Idee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The project was inspired mainly by two works of The Rodina. The idea was to scan my head and turn it into a piece that reflects their aesthetic, with vibrant visuals and motion.',
                    de: 'Das Projekt wurde hauptsächlich von zwei Werken von The Rodina inspiriert. Die Idee war, meinen Kopf zu scannen und daraus ein Stück zu gestalten, das ihren ästhetischen Stil mit lebendigen Visuals und Bewegung widerspiegelt.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Scanned my head with the mobile app Polycam and refined the scan in Cinema 4D, distorting the eye area for an abstract effect',
                    de: 'Meinen Kopf mit der mobilen App Polycam gescannt und den Scan in Cinema 4D verfeinert, mit verzerrtem Augenbereich für einen abstrakten Effekt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Tried both static posters and animated video concepts, then chose animation for a more dynamic result',
                    de: 'Statische Poster und animierte Videokonzepte ausprobiert und mich für die Animation entschieden, für ein dynamischeres Ergebnis'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Feedback on the first version: colors too bright, head rotation too fast',
                    de: 'Feedback zur ersten Version: Farben zu hell, Kopfrotation zu schnell'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Over 8 iterations, balanced the colors, slowed the rotation, played with object placement, shadows and text design, and added audio',
                    de: 'In 8 Iterationen Farben ausbalanciert, Rotation verlangsamt, mit Objektplatzierung, Schatten und Textdesign gespielt und Audio ergänzt'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Outcome', de: 'Ergebnis' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The final animation combines the best elements of the iterations and reflects The Rodina's essence while adding personal elements. Before the project, I introduced the studio in a short presentation, and an interactive documentation of all my work in the module, covering topics like typography, color theory and visual hierarchy, is available in the downloads.`,
                    de: 'Die finale Animation vereint die besten Elemente der Iterationen und spiegelt das Wesen von The Rodina wider, ergänzt um persönliche Elemente. Vor dem Projekt habe ich das Studio in einer kurzen Präsentation vorgestellt, und eine interaktive Dokumentation all meiner Arbeiten im Modul, unter anderem zu Typografie, Farbtheorie und visueller Hierarchie, findet sich bei den Downloads.'
                }
            },
            {
                type: 'heading',
                text: { en: 'Process', de: 'Prozess' }
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
                    },
                    {
                        src: rodinaFiles['../projects/rodina/scans.webp'].default,
                        caption: { en: 'Raw Scan & Edit', de: 'Rohscan & Bearbeitung' }
                    },
                    {
                        src: rodinaFiles['../projects/rodina/scan_c4d.jpg'].default,
                        caption: 'Scan in Cinema 4D'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/variant1.jpg'].default,
                        caption: { en: 'Poster Variant 1', de: 'Poster Variante 1' }
                    },
                    {
                        src: rodinaFiles['../projects/rodina/variant2.jpg'].default,
                        caption: { en: 'Poster Variant 2', de: 'Poster Variante 2' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'First Version', de: 'Erste Version' }
            },
            {
                type: 'video',
                video: rodinaFiles['../projects/rodina/rodina_v1.mp4'].default
            }
        ],
        links: [
            {
                text: 'The Rodina',
                url: 'https://www.therodina.com/',
                icon: 'arrow-up-right-from-square'
            }
        ],
        downloads: [
            {
                text: 'TheRodina.mp4',
                url: rodinaFiles['../projects/rodina/The_Rodina.mp4'].default,
                icon: 'file-video'
            },
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('The_Rodina_Presentation.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'Documentation.ppsx', de: 'Dokumentation.ppsx' },
                url: releaseFile('KIVIS_Documentation.ppsx'),
                icon: 'file-powerpoint'
            }
        ]
    },
    // solarsystem
    {
        id: 'solarsystem',
        cover: solarsystemFiles['../projects/solarsystem/cover.jpg']?.default,
        name: 'solarsystem',
        description: { en: `3d rendered asteroid video`, de: `3d gerendertes video eines asteroiden` },
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                { en: 'Module 4DAUT (Cinema 4D Authoring)', de: 'Modul 4DAUT - Cinema 4D Authoring' }
            ],
            url: { en: 'https://www.hslu.ch/it', de: 'https://www.hslu.ch/de-ch/informatik/' },
            icon: 'graduation-cap',
            tooltip: { en: 'school', de: 'schule' }
        },
        categories: [
            'team',
            '3d',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `Solarsystem is a 3D animation of an asteroid soaring past the planets of our solar system, ending in a dramatic collision with Earth. It was the final project of my first course in 3D design and rendering, where we applied everything we had learned in one video. It was created using Cinema 4D with Chaos Corona as a team effort between myself and Silvan Parodi.`,
                    de: `Solarsystem ist eine 3D-Animation eines Asteroiden, der an den Planeten unseres Sonnensystems vorbeifliegt und in einer dramatischen Kollision mit der Erde endet. Sie war das Abschlussprojekt meines ersten Kurses in 3D-Design und Rendering, in dem wir alles Gelernte in einem Video anwenden sollten. Sie entstand mit Cinema 4D und Chaos Corona als Teamarbeit zwischen mir und Silvan Parodi.`
                }
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
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: { en: 'Cinema 4D for the scene and animation', de: 'Cinema 4D für Szene und Animation' }
            },
            {
                type: 'bullet',
                text: { en: 'Chaos Corona as render engine', de: 'Chaos Corona als Render-Engine' }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Before the final video, homework renders in the C4D Authoring module were part of the learning process: a chaotic yet aesthetic assembly of shapes and objects that experiments with randomness and textures, and three vodka bottles with self-designed labels. The bottle and glass come from the Cinema 4D library, while the composition, ice cubes and lime were made from scratch.',
                    de: 'Vor dem Abschlussvideo gehörten Hausaufgaben-Renderings im Modul C4D Authoring zum Lernprozess: eine chaotische, aber ästhetische Anordnung von Formen und Objekten, die mit Zufall und Texturen experimentiert, und drei Wodkaflaschen mit selbst gestalteten Etiketten. Flasche und Glas stammen aus der Cinema 4D-Bibliothek, Komposition, Eiswürfel und Limette sind selbst erstellt.'
                }
            },
            {
                type: 'heading',
                text: { en: 'Other Renders from the Module', de: 'Weitere Renderings aus dem Modul' }
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
                        caption: { en: 'Label: Classic', de: 'Etikett: Klassisch' }
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_classic.jpg'].default,
                        caption: { en: 'Vodka Bottle: Classic', de: 'Wodkaflasche: Klassisch' }
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_limemint.jpg'].default,
                        caption: { en: 'Label: Lime Mint', de: 'Etikett: Limette Minze' }
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_limemint.jpg'].default,
                        caption: { en: 'Vodka Bottle: Lime Mint', de: 'Wodkaflasche: Limette Minze' }
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_strawberry.jpg'].default,
                        caption: { en: 'Label: Strawberry', de: 'Etikett: Erdbeere' }
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_strawberry.jpg'].default,
                        caption: { en: 'Vodka Bottle: Strawberry', de: 'Wodkaflasche: Erdbeere' }
                    }
                ]
            }
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
        cover: paFiles['../projects/pa/cover.jpg']?.default,
        name: 'google chrome extension',
        description: {
            en: 'internal organization information tool for suva',
            de: 'internes organisation information tool für die suva'
        },
        context: {
            lines: [
                { en: '2022 @ Suva, Lucerne', de: '2022 @ Suva, Luzern' },
                {
                    en: 'QV PA (final practical project of software developer apprenticeship)',
                    de: 'QV PA - Abschlussprojekt der Informatiker-Lehre'
                }
            ],
            url: 'https://www.suva.ch/',
            icon: 'briefcase',
            tooltip: { en: 'work', de: 'arbeit' }
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `The Google Chrome Extension is a functional browser tool exploring the potential of browser-based solutions for internal organizational tools. It represents Suva's SAFe team structures and offers easy access to hierarchical data, catering to both administrative and operational needs.`,
                    de: `Die Google Chrome Extension ist ein funktionales Browser-Tool, das das Potenzial von browserbasierten Lösungen für interne Organisationstools erkundet. Sie repräsentiert die SAFe-Teamstrukturen von Suva und bietet einfachen Zugang zu hierarchischen Daten, die sowohl administrative als auch operative Bedürfnisse abdecken.`
                }
            },
            {
                type: 'heading',
                text: { en: 'The Extension', de: 'Die Extension' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: paFiles['../projects/pa/pa_gui_home.png'].default,
                        caption: { en: 'Main Page', de: 'Hauptseite' }
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe.png'].default,
                        caption: { en: 'Hierarchical & Detail View', de: 'Hierarchische & Detailansicht' }
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_options.png'].default,
                        caption: { en: 'Options Page', de: 'Optionsseite' }
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_dark.png'].default,
                        caption: { en: 'Dark Mode', de: 'Dunkelmodus' }
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe_dark.png'].default,
                        caption: { en: 'Hierarchical & Detail View, Dark Mode', de: 'Hierarchische & Detailansicht, Dunkelmodus' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'About the Project', de: 'Über das Projekt' }
            },
            {
                type: 'subheading',
                text: { en: 'How It Works', de: 'So funktioniert es' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A main page lists the available modules ("Info-Apps"), built on a modular framework so more can be added',
                    de: 'Eine Hauptseite listet die verfügbaren Module ("Info-Apps") auf, aufgebaut auf einem modularen Framework, damit weitere dazukommen können'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The first module, "Suva SAFe", shows ARTs (Agile Release Trains), products, teams and team members in a collapsible tree',
                    de: 'Das erste Modul, "Suva SAFe", zeigt ARTs (Agile Release Trains), Produkte, Teams und Teammitglieder in einem aufklappbaren Baum'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A detail view shows role-specific information such as emails, phone numbers and descriptions, with interactive links',
                    de: 'Eine Detailansicht zeigt rollenbezogene Informationen wie E-Mails, Telefonnummern und Beschreibungen, mit interaktiven Links'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Users can switch between dark and light mode',
                    de: 'Benutzer können zwischen Dunkel- und Hellmodus wechseln'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'As the final practical project of my software developer apprenticeship, the extension was built in 80 hours over ten working days, following the IPERKA method (inform, plan, decide, execute, control, evaluate). User stories set the priorities, and their acceptance criteria were the basis for testing. The project closed with a documentation covering installation, testing and technical details.',
                    de: 'Als Abschlussprojekt meiner Informatiker-Lehre entstand die Extension in 80 Stunden über zehn Arbeitstage nach der IPERKA-Methode (Informieren, Planen, Entscheiden, Realisieren, Kontrollieren, Auswerten). User Stories legten die Prioritäten fest, und ihre Akzeptanzkriterien bildeten die Grundlage für die Tests. Abgeschlossen wurde das Projekt mit einer Dokumentation zu Installation, Tests und technischen Details.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tech', de: 'Technik' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'JavaScript, HTML and CSS with the Chrome Extension API',
                    de: 'JavaScript, HTML und CSS mit der Chrome Extension API'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Two REST APIs, for SAFe data and the company organization, combined for complete employee data',
                    de: 'Zwei REST-APIs, für SAFe-Daten und die Betriebsorganisation, kombiniert für vollständige Mitarbeiterdaten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Personal settings stored with chrome.storage.sync',
                    de: 'Persönliche Einstellungen gespeichert mit chrome.storage.sync'
                }
            },
            {
                type: 'images',
                images: [
                    {
                        src: paFiles['../projects/pa/pa_big_picture.png'].default,
                        caption: { en: 'Project Structure', de: 'Projektstruktur' }
                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'presentation',
                src: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf'].default
            }
        ],
        links: [],
        downloads: [
            {
                text: { en: 'Documentation.pdf', de: 'Dokumentation.pdf' },
                url: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Documentation_Redacted.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.pdf', de: 'Präsentation.pdf' },
                url: paFiles['../projects/pa/BUL_PA_Chrome_Extension_Presentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: { en: 'Presentation.ppsx', de: 'Präsentation.ppsx' },
                url: releaseFile('BUL_PA_Chrome_Extension_Presentation.ppsx'),
                icon: 'file-powerpoint'
            }
        ]
    }
];

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
            text: { en: 'Hi there!', de: 'Hey!' }
        },
        {
            type: 'quoted',
            text: {
                en: `I'm a Digital Solutions Engineer with a bachelor's degree in <a href="https://www.hslu.ch/en/lucerne-school-of-information-technology/degree-programs/bachelor/digital-ideation/" class="bold hoverable" target="_blank">Digital Ideation</a> from the Lucerne University of Applied Sciences and Arts, an interdisciplinary program combining design and computer science, ranging from game design & development to media arts. My focus mainly lies in web development, though I love exploring wherever technology and creativity intersect. This portfolio collects projects mostly from my time as a student, so feel free to look around!`,
                de: `Ich bin Digital Solutions Engineer und habe <a href="https://www.hslu.ch/de-ch/informatik/studium/bachelor/digital-ideation/" class="bold hoverable" target="_blank">Digital Ideation</a> an der Hochschule Luzern studiert, ein interdisziplinäres Studium, das Design und Informatik vereint, von Game Design & Development bis hin zu Media Arts. Mein Fokus liegt hauptsächlich in der Webentwicklung, wobei ich es liebe zu erkunden, wo Technologie und Kreativität aufeinandertreffen. In diesem Portfolio findest du Projekte, die grösstenteils während meines Studiums entstanden sind. Schau dich gerne um!`
            }
        },
        {
            type: 'heading',
            text: { en: 'Explore my work! Get in touch!', de: 'Entdecke meine Arbeit! Kontaktiere mich!' }
        },
        {
            type: 'buttons',
            buttons: [
                {
                    text: { en: 'My Projects', de: 'Meine Projekte' },
                    action: 'projects',
                    icon: 'rocket',
                    color: 'primary',
                    same: true
                },
                {
                    text: 'E-Mail',
                    action: 'mailto:lukas@jfladas.com',
                    icon: 'paper-plane',
                    color: 'secondary'
                }
            ]
        },
        {
            type: 'heading',
            text: { en: 'More about me...', de: 'Mehr über mich...' },
            collapsible: true,
            group: 'more-about-me'
        },
        {
            type: 'subheading',
            text: { en: 'Music', de: 'Musik' },
            group: 'more-about-me'
        },
        {
            type: 'paragraph',
            text: {
                en: `Beyond my passion for technology and design, music plays a big role in my life. I play the saxophone in the local orchestra <a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>, which has been an amazing way to connect with others and immerse myself in the joy of creating music. My love for music doesn't stop there. I'm also a fan of K-pop and enjoy attending concerts whenever I can.`,
                de: `Neben meiner Leidenschaft für Technologie und Design spielt Musik eine grosse Rolle in meinem Leben. Ich spiele Saxophon im lokalen <a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>, was eine tolle Möglichkeit ist, mit anderen in Kontakt zu treten und die Freude am Musizieren zu erleben. Meine Liebe zur Musik hört hier nicht auf. Ich bin auch ein Fan von K-Pop und besuche gerne Konzerte, wann immer ich kann.`
            },
            group: 'more-about-me'
        },
        {
            type: 'paragraph',
            text: { en: 'Favorite K-pop concerts attended:', de: 'Lieblings-K-Pop-Konzerte, die ich besucht habe:' },
            group: 'more-about-me'
        },
        {
            type: 'iconed',
            text: { en: 'Billlie @ Munich 2024', de: 'Billlie @ München 2024' },
            icon: 'spa',
            group: 'more-about-me'
        },
        {
            type: 'iconed',
            text: 'aespa @ Paris 2023',
            icon: 'fire-flame-curved',
            group: 'more-about-me'
        },
        {
            type: 'iconed',
            text: 'NCT @ Incheon 2023',
            icon: 'globe',
            group: 'more-about-me'
        },
        {
            type: 'iconed',
            text: 'Music Bank @ Paris 2023',
            icon: 'music',
            group: 'more-about-me'
        },
        {
            type: 'iconed',
            text: 'MCND @ Lausanne 2022',
            icon: 'bolt',
            group: 'more-about-me'
        },
        {
            type: 'subheading',
            text: 'Japan',
            group: 'more-about-me'
        },
        {
            type: 'paragraph',
            text: {
                en: `Learning Japanese has been another fulfilling journey, deepening my interest in East Asian culture. Through self-study, school courses, and visiting different parts of Japan, I have developed quite an appreciation of its many facets and it has become my favorite travel destination.`,
                de: `Japanisch zu lernen ist eine weitere Beschäftigung, die mein Interesse an der ostasiatischen Kultur vertieft hat. Durch Selbststudium, Schulkurse und Besuche in verschiedenen Teilen Japans habe ich eine grosse Wertschätzung für seine vielen Facetten entwickelt, und es ist zu meinem Lieblingsreiseziel geworden.`
            },
            group: 'more-about-me'
        },
        {
            type: 'images',
            group: 'more-about-me',
            images: [
                {
                    src: aboutFiles['../assets/about/jpn0.jpg'].default,
                    caption: 'Japan'
                },
                {
                    src: aboutFiles['../assets/about/jpn1.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn2.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn3.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn4.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn5.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn6.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn7.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn8.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn9.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn10.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn11.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn12.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn13.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn14.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn15.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn16.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn17.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn18.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn19.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn20.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn21.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn22.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn23.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn24.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn25.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn26.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn27.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn28.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn29.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn30.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn31.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn32.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn33.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn34.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn35.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn36.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn37.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn38.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn39.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn40.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn41.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn42.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn43.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn44.jpg'].default
                },
                {
                    src: aboutFiles['../assets/about/jpn45.jpg'].default
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
            text: 'Spotify',
            url: 'https://open.spotify.com/user/rn16ees9l59zxvg9zzptiuwb7?si=86fff52ccafd4d0d',
            icon: 'fa-brands fa-spotify'
        },
        {
            text: 'Duolingo',
            url: 'https://www.duolingo.com/profile/jfladas',
            icon: 'fa-brands fa-duolingo'
        }
    ],
    downloads: [
        {
            text: 'CV.pdf',
            url: aboutFiles['../assets/about/LukasBucher_CV.pdf'].default,
            icon: 'file-pdf'
        }
    ]
};


