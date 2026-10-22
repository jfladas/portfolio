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
                    en: `Digital technologies often accompany our daily lives as tools for productivity, optimization, or entertainment. With Amorphous Blob, I explore how a digital presence can instead support emotional reflection and foster a more personal relationship. I am interested in how projection and interaction can enable people to gain new access to their own thoughts and feelings through the Blob. The medium of an interactive digital desktop presence allows for a long-term, personal relationship rather than a one-time experience.`,
                    de: `Digitale Technologien begleiten unseren Alltag oft als Werkzeuge zur Produktivität, Optimierung oder Unterhaltung. Mit Amorphous Blob untersuche ich, wie eine digitale Präsenz stattdessen emotionale Reflexion und eine persönlichere Beziehung unterstützen kann. Mich interessiert, wie Projektion und Interaktion dazu führen können, dass Menschen durch den Blob einen neuen Zugang zu ihren eigenen Gedanken und Gefühlen entwickeln. Das Medium einer interaktiven digitalen Desktop-Präsenz ermöglicht dabei eine langfristige, persönliche Beziehung statt einer einmaligen Erfahrung.`
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
                    en: 'The macOS app is officially signed and notarized by Apple (<a href="https://www.virustotal.com/gui/file/5c9e51ed96d06b687490a847378e8201b5f06a285446fbec87a08ad5447d8d28" class="bold hoverable" target="_blank">View Safety Scan</a>). Windows version available directly via the Microsoft Store.',
                    de: 'Die macOS-App ist offiziell von Apple signiert und notariell beglaubigt (<a href="https://www.virustotal.com/gui/file/5c9e51ed96d06b687490a847378e8201b5f06a285446fbec87a08ad5447d8d28" class="bold hoverable" target="_blank">Sicherheits-Scan ansehen</a>). Windows-Version direkt über den Microsoft Store verfügbar.'
                },
                icon: 'certificate'
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
                text: { en: 'Play the Alpha Version', de: 'Spiele die Alpha Version' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Play in Browser / Download', de: 'Im Browser spielen / Herunterladen' },
                        action: 'https://jfladas.itch.io/hearts-across-dimensions',
                        icon: 'play',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'subheading',
                text: { en: 'Installation & Play Instructions', de: 'Installations- & Spielanweisungen' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Note that the game is designed primarily for mobile/portrait layout but is also playable on desktop and landscape mode.`,
                    de: `Das Spiel wurde hauptsächlich für Mobile im Porträt-Layout entwickelt, ist aber auch auf Desktop und im Querformat spielbar.`
                }
            },
            {
                type: 'iconed',
                text: 'Web (Mobile/Desktop)',
                icon: 'globe'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Play directly in the browser by clicking the <span class="snippet">Run game</span> button on the itch.io page',
                    de: 'Um direkt im Browser zu spielen auf der itch.io-Seite auf <span class="snippet">Spiel starten</span> klicken'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Some issues may occur depending on device or browser compatibility',
                    de: 'Je nach Gerät oder Browserkompatibilität können Probleme auftreten'
                }
            },
            {
                type: 'iconed',
                text: 'Android',
                icon: 'fa-brands fa-android'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Download the Android build from the itch.io page',
                    de: 'Android-Build von der itch.io-Seite herunterladen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Execute <span class="snippet">had.apk</span> to install and open the game',
                    de: '<span class="snippet">HaD.apk</span> ausführen, um das Spiel zu installieren und zu öffnen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The game will be accessible as an app on your device',
                    de: 'Das Spiel wird danach als App auf dem Gerät zugänglich sein'
                }
            },
            {
                type: 'iconed',
                text: 'Windows',
                icon: 'fa-brands fa-windows'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Download the Windows build from the itch.io page',
                    de: 'Windows-Build von der itch.io-Seite herunterladen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Execute <span class="snippet">HaD (Alpha).exe</span> to launch the game',
                    de: '<span class="snippet">HaD (Alpha).exe</span> ausführen, um das Spiel zu starten'
                }
            },
            {
                type: 'heading',
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Characters', de: 'Charaktere' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The game features five characters with unique personalities and storylines. Players can choose which character to interact with, leading to different outcomes and dialogues.`,
                    de: `Das Spiel bietet fünf Charaktere mit einzigartigen Persönlichkeiten und Handlungssträngen. Die Spieler:innen können wählen, mit welchem Charakter sie interagieren möchten, was zu unterschiedlichen Ergebnissen und Dialogen führt.`
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
                text: { en: 'Story', de: 'Geschichte' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `A mysterious woman fails to protect her dimension from interdimensional beings. Before dying, she sends a blood-stained letter across dimensions.
                        You start a new job at a wedding planning company. Soon, strange events unfold, like an ever-changing building, a time loop, and a... horse?
                        An earthquake forces you into a bunker, where you meet some familiar faces. Your choice of whom to trust determines how your story unfolds.`,
                    de: `Eine mysteriöse Frau scheitert daran, ihre Dimension vor interdimensionalen Wesen zu schützen. Bevor sie stirbt, schickt sie einen blutbefleckten Brief durch die Dimensionen.
                        Du beginnst einen neuen Job bei einer Hochzeitsplanungsfirma. Bald geschehen seltsame Dinge: ein sich ständig veränderndes Gebäude, eine Zeitschleife und ein ... Pferd?
                        Ein Erdbeben zwingt dich in einen Bunker, wo du auf bekannte Gesichter triffst. Deine Entscheidung, wem du vertraust, bestimmt den Verlauf des nächsten Kapitels.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Plans for the future', de: 'Pläne für die Zukunft' }
            },
            {
                type: 'bullet',
                text: { en: 'Finish the Mr. Horse route', de: 'Mr. Horse Route fertigstellen' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Polish the illustrations, backgrounds and character sprites',
                    de: 'Illustrationen, Hintergründe und Charakter-Sprites finalisieren'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Add the remaining routes (Ash & Ethan)', de: 'Die restlichen Routen hinzufügen (Ash & Ethan)' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Update the UI and add fitting music and sound effects',
                    de: 'UI aktualisieren sowie passende Musik und Soundeffekte hinzufügen'
                }
            },
            {
                type: 'heading',
                text: 'Screenshots MEN3'
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
            },
            {
                type: 'heading',
                text: 'Screenshots MEN4'
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
                type: 'heading',
                text: 'Screenshots MEN5'
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
                    },
                ]
            },
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
                type: 'subheading',
                text: { en: 'How to Play', de: 'Spielanleitung' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Place the printed markers on a flat surface.',
                    de: 'Platziere die ausgedruckten Marker auf einer flachen Oberfläche.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Enemies will spawn and move towards the base. Towers will automatically attack enemies within range.',
                    de: 'Gegner spawnen und bewegen sich auf die Basis zu. Türme greifen automatisch Gegner in Reichweite an.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Defend your base by moving tower markers on your table and purchasing upgrades using energy earned from defeating enemies.',
                    de: 'Verteidige deine Basis, indem du Tower-Marker auf dem Tisch verschiebst und Upgrades mit Energie kaufst, die du durch das Besiegen von Gegnern erhältst.'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Can you survive all 10 waves?', de: 'Schaffst du alle 10 Wellen?' }
            },
            {
                type: 'subheading',
                text: { en: 'Save Data', de: 'Speicherstand' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Your energy and upgrades are automatically saved. If any issues occur, simply reload the page and your progress will be restored.`,
                    de: `Deine Energie und Upgrades werden automatisch gespeichert. Falls es Probleme gibt, lade die Seite neu – dein Fortschritt wird wiederhergestellt.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Markers', de: 'Marker' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The game requires AR image markers to play. Download the PDF from the downloads section, then print and cut them out to get started!`,
                    de: `Zum Spielen werden AR-Bildmarker benötigt. Lade das PDF im Download-Bereich herunter, drucke es aus und schneide die Marker aus – dann kann es losgehen!`
                }
            },
            {
                type: 'images',
                images: [
                    {
                        src: artdFiles['../projects/artd/markers.jpg'].default,
                        caption: { en: 'AR Markers', de: 'AR-Marker' }
                    }
                ]
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
                ]
            },
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
            },
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
                    en: `You can relive the Apollo 11 mission in this web-based command module interface experience.
                        Key sections are replayed with real audio and data from NASA, enhanced with additional effects and interaction possibilities.`,
                    de: `In dieser webbasierten Experience im Stil eines Kommandomodul-Interfaces kannst du die Apollo-11-Mission nacherleben.
                        Zentrale Abschnitte werden mit originalen Audios und Daten der NASA rekonstruiert und durch zusätzliche Effekte sowie Interaktionsmöglichkeiten erweitert.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Explore the project', de: 'Projekt ansehen' }
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
                type: 'heading',
                text: 'Screencast'
            },
            {
                type: 'video',
                video: apo11oFiles['../projects/apo11o/Screencast.mp4'].default
            },
            {
                type: 'heading',
                text: { en: 'Iterative Process', de: 'Iterativer Prozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The project was developed iteratively across five sprints, moving from open-ended research into prototyping, implementation, and finalization.
                        Full documentation of the process can be found in the downloadable sprint documentation PDF.`,
                    de: `Das Projekt wurde iterativ über fünf Sprints entwickelt – von offener Recherche über Prototyping und Implementation bis zur Finalisierung.
                        Die vollständige Prozess-Dokumentation findet sich im herunterladbaren Sprint-Dokumentations-PDF.`
                }
            },
            {
                type: 'subheading',
                text: 'Sprint 1'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Explored inspiration + data sources (Flight Journals, NASA APIs)',
                    de: 'Inspiration und Datenquellen recherchiert (Flight Journals, NASA APIs)'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Defined the core question for the experience', de: 'Kernfrage für die Experience definiert' }
            },
            {
                type: 'subheading',
                text: 'Sprint 2'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Continued research and gathered UI/interaction ideas',
                    de: 'Recherche fortgesetzt und UI-/Interaktionsideen gesammelt'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Formed a tandem for reviews and retros.', de: 'Tandem für Reviews und Retros gebildet.' }
            },
            {
                type: 'subheading',
                text: 'Sprint 3'
            },
            {
                type: 'bullet',
                text: { en: 'Presentation of progress', de: 'Fortschritt präsentiert' }
            },
            {
                type: 'bullet',
                text: { en: 'Decided on a vanilla HTML/CSS/JS setup', de: 'Für ein Vanilla-HTML/CSS/JS-Setup entschieden' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Built the first layout prototype (control panel, window, timeline structure)',
                    de: 'Erstes Layout-Prototyping gebaut (Control Panel, Window, Timeline-Struktur)'
                }
            },
            {
                type: 'subheading',
                text: 'Sprint 4'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Integrated real mission events/audio with synchronization, controls, visuals, and skip functionality',
                    de: 'Reale Missions-Events/Audios mit Synchronisation, Controls, Visuals und Skip-Funktionalität integriert'
                }
            },
            {
                type: 'subheading',
                text: 'Sprint 5'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Finalized the experience (timeline + mission days)',
                    de: 'Experience finalisiert (Timeline + Mission Days)'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Published via GitHub Pages', de: 'Über GitHub Pages veröffentlicht' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Prepared presentation and documentation materials',
                    de: 'Präsentation und Dokumentationsmaterial vorbereitet'
                }
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
                    en: `Quick Response is a playful mobile installation made up of 16 small interactive experiments, each accessible via a QR code.
                   The project explores how minimal visuals and personal interaction can create unique micro-experiences using smartphone sensors like mic, camera, and motion.`,
                    de: `Quick Response ist eine spielerische mobile Installation, bestehend aus 16 kleinen interaktiven Experimenten, 
                   die jeweils über einen QR-Code aufrufbar sind. Das Projekt erforscht, wie minimale visuelle Mittel und persönliche 
                   Interaktionen mit Smartphone-Sensoren wie Mikrofon, Kamera und Bewegungssensoren zu einzigartigen Mikro-Erlebnissen werden können.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Try it yourself', de: 'Jetzt ausprobieren' }
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
                type: 'subheading',
                text: { en: 'Exhibition Setup', de: 'Ausstellung' }
            },
            {
                type: 'bullet',
                text: {
                    en: '16 experiments are linked to individual QR codes arranged into a single larger animated image',
                    de: '16 Experimente sind über einzelne QR-Codes zugänglich, die zu einem animierten Gesamtbild angeordnet wurden'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Scan any part of the mosaic to begin the journey',
                    de: 'Man kann jeden Bereich des Mosaiks scannen, um die Reise zu beginnen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Overview page tracks progress across all interactions',
                    de: 'Eine Übersichtsseite dokumentiert den Fortschritt über alle Interaktionen hinweg'
                }
            },
            {
                type: 'bullet',
                text: { en: "A secret 16th page can be unlocked", de: 'Eine geheime 16. Seite lässt sich freischalten' }
            },
            {
                type: 'heading',
                text: { en: 'Project Context', de: 'Projektkontext' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Quick Response builds upon techniques from earlier sprints in the +Colabor Module.',
                    de: 'Quick Response baut auf Techniken aus den vorherigen Sprints des +Colabor Moduls auf.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Best Of Video', de: 'Best-Of-Video' }
            },
            {
                type: 'video',
                video: qrFiles['../projects/qr/bestof.mp4'].default
            },
            {
                type: 'subheading',
                text: { en: 'More about +Colabor', de: 'Mehr zu +Colabor' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Details about the projects and extension downloads can be found on my documentation website of the module:',
                    de: 'Details zu den Projekten und Extension-Downloads finden sich auf meiner Dokumentationsseite zum Modul:'
                }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Documentation Website', de: 'Dokumentations-Website' },
                        action: 'https://colabor.jfladas.com/',
                        icon: 'arrow-right',
                        color: 'primary'
                    }
                ]
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
                    en: `This web application is designed to bring together Digital Ideation students across Emmenbrücke and Rotkreuz. The platform provides a space to coordinate, share, and discover upcoming events.`,
                    de: `Diese Webanwendung bringt Digital Ideation Studierende aus Emmenbrücke und Rotkreuz zusammen. Die Plattform bietet Raum zur Koordination, zum Teilen und Entdecken von anstehenden Events.`
                }
            },
            {
                type: 'heading',
                text: { en: 'View the product', de: 'Produkt ansehen' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: '',
                        action: 'https://jfladas.github.io/uxweb2/',
                        icon: 'arrow-right',
                        color: 'primary'
                    },
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
                    en: 'The original website is currently offline due to hosting limitations, but the Figma prototype provides a comprehensive overview of the design and functionality.',
                    de: 'Die originale Website ist derzeit wegen Hosting-Limitationen offline, aber der Figma-Prototyp bietet einen umfassenden Überblick über Design und Funktionalität.'
                },
                icon: 'exclamation-triangle'
            },
            {
                type: 'heading',
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Problem Statement', de: 'Problemstellung' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Two campus locations create coordination challenges',
                    de: 'Zwei Campus-Standorte erschweren die Koordination'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'New students struggle with local transit info',
                    de: 'Neue Studierende haben Mühe mit lokalen ÖV-Infos'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Transportation times vary significantly between users',
                    de: 'Die Reisezeiten unterscheiden sich stark zwischen den Nutzenden'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Eco-friendly options like biking are underused',
                    de: 'Umweltfreundliche Optionen wie Velofahren werden wenig genutzt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Staff often drive alone when transporting equipment',
                    de: 'Dozierende transportieren Ausrüstung oft allein mit dem Auto'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Missed chances for social connections due to lack of visibility on who is traveling where',
                    de: 'Verpasste soziale Chancen, da nicht sichtbar ist, wer wann wohin reist'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Team Roles', de: 'Teamrollen' }
            },
            {
                type: 'iconed',
                text: 'UX Research',
                icon: 'magnifying-glass'
            },
            {
                type: 'bullet',
                text: 'Dario Stocker'
            },
            {
                type: 'iconed',
                text: 'UI Design',
                icon: 'palette'
            },
            {
                type: 'bullet',
                text: 'Michelle Studtmann'
            },
            {
                type: 'bullet',
                text: 'Laura Giaimo'
            },
            {
                type: 'iconed',
                text: 'Branding',
                icon: 'tag'
            },
            {
                type: 'bullet',
                text: 'Dominika Degtyareva'
            },
            {
                type: 'iconed',
                text: { en: 'Frontend Development', de: 'Frontend Entwicklung' },
                icon: 'desktop'
            },
            {
                type: 'bullet',
                text: 'Lisa Landolt'
            },
            {
                type: 'bullet',
                text: 'Lukas Bucher'
            },
            {
                type: 'iconed',
                text: { en: 'Backend Development', de: 'Backend Entwicklung' },
                icon: 'server'
            },
            {
                type: 'bullet',
                text: 'Arwen Bättig'
            },
            {
                type: 'bullet',
                text: 'Jennifer Beeler'
            },
            {
                type: 'subheading',
                text: { en: 'Methodology', de: 'Methodik' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The project followed the Scrum framework, ensuring an organized and iterative development process.',
                    de: 'Das Projekt folgte dem Scrum-Framework und ermöglichte eine organisierte und iterative Entwicklung.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Scrum Framework', de: 'Scrum-Framework' },
                icon: 'cogs'
            },
            {
                type: 'bullet',
                text: 'Product Owner: Dario Stocker'
            },
            {
                type: 'bullet',
                text: 'Scrum Master: Arwen Bättig'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Team organized into Frontend, Backend, UX, UI, and Branding roles',
                    de: 'Team war in Frontend, Backend, UX, UI und Branding aufgeteilt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Weekly sprints with daily stand-ups and bi-weekly retrospectives',
                    de: 'Wöchentliche Sprints mit täglichen Stand-ups und zweiwöchentlichen Retrospektiven'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The project was divided into four sprints, each focusing on different aspects of development.',
                    de: 'Das Projekt wurde in vier Sprints aufgeteilt, wobei jeder Sprint einen anderen Entwicklungsschwerpunkt hatte.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Sprint Breakdown', de: 'Sprint-Übersicht' }
            },
            {
                type: 'iconed',
                text: 'Setup & Ideation',
                icon: '1'
            },
            {
                type: 'bullet',
                text: { en: 'Repo & tooling setup', de: 'Repo- und Tooling-Setup' }
            },
            {
                type: 'bullet',
                text: { en: 'Ideation & concept development', de: 'Ideenfindung und Konzeptentwicklung' }
            },
            {
                type: 'iconed',
                text: { en: 'Development', de: 'Entwicklung' },
                icon: '2'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend & backend development', de: 'Frontend- und Backend-Entwicklung' }
            },
            {
                type: 'bullet',
                text: { en: 'UI & UX design', de: 'UI- und UX-Design' }
            },
            {
                type: 'iconed',
                text: 'Testing & Prototyping',
                icon: '3'
            },
            {
                type: 'bullet',
                text: { en: 'Paper prototyping', de: 'Papier-Prototyping' }
            },
            {
                type: 'bullet',
                text: { en: 'User testing', de: 'User-Tests' }
            },
            {
                type: 'iconed',
                text: 'Evaluation',
                icon: '4'
            },
            {
                type: 'bullet',
                text: { en: 'Final feedback & adjustments', de: 'Letztes Feedback & Anpassungen' }
            },
            {
                type: 'bullet',
                text: { en: 'Project documentation', de: 'Projektdokumentation' }
            },
            {
                type: 'bullet',
                text: { en: 'Presentation preparation', de: 'Vorbereitung der Präsentation' }
            },
            {
                type: 'subheading',
                text: { en: 'Technologies', de: 'Technologien' }
            },
            {
                type: 'iconed',
                text: 'Frontend',
                icon: 'desktop'
            },
            {
                type: 'bullet',
                text: 'Angular'
            },
            {
                type: 'bullet',
                text: { en: 'Github Pages', de: 'GitHub Pages' }
            },
            {
                type: 'bullet',
                text: { en: 'Nx for monorepo management', de: 'Nx für Monorepo-Verwaltung' }
            },
            {
                type: 'iconed',
                text: 'Backend',
                icon: 'server'
            },
            {
                type: 'bullet',
                text: 'Node.js'
            },
            {
                type: 'bullet',
                text: 'NestJS'
            },
            {
                type: 'bullet',
                text: 'PostgreSQL'
            },
            {
                type: 'bullet',
                text: 'Heroku'
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'presentation',
                src: 'https://1drv.ms/p/c/8266699022344100/IQQhPb-Xvmx9QaRTJpKsN-7nAZkmUKc73-ibQVGZn47GRyg?em=2&wdAr=1.7777777777777777&wdEaaCheck=1'
            },
        ],
        links: [
            {
                text: 'Website',
                url: 'https://jfladas.github.io/uxweb2/',
                icon: 'arrow-up-right-from-square',
            },
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
            },
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
                    en: `A web application that visualizes a user's Spotify music taste through an interactive time-travel experience. Developed using Spotify API and Google Gemini API by Laura Giaimo, Lisa Landolt, Lukas Bucher, and Marin Hirschi, the app allows users to explore their listening history dynamically. The project integrates real-time data visualization and interactive elements to create a personalized music journey.`,
                    de: `Eine Webanwendung, die den Musikgeschmack eines Benutzers durch eine interaktive Zeitreise visualisiert. Entwickelt mit der Spotify API und der Google Gemini API von Laura Giaimo, Lisa Landolt, Lukas Bucher und Marin Hirschi, ermöglicht die App den Benutzern, die Veränderung ihres Musikgeschmacks über die Jahre dynamisch zu erkunden. Das Projekt integriert Echtzeit-Datenvisualisierung und interaktive Elemente, um eine personalisierte Musikreise zu schaffen.`
                }
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
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Research Question', de: 'Forschungsfrage' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'How can visualizing music taste as an interactive timeline enhance the personal music experience?',
                    de: 'Wie kann die Visualisierung des Musikgeschmacks in Form einer interaktiven Zeitreise das persönliche Musikerlebnis vertiefen?'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Core Idea', de: 'Kernidee' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The "Music Journey" is a scrollable timeline that records the user's music taste evolution. Users can navigate through different time periods, including:`,
                    de: `Die "Musikreise" ist eine scrollbare Zeitleiste, die die Entwicklung des Musikgeschmacks des Benutzers aufzeichnet. Benutzer können durch verschiedene Zeiträume navigieren, einschliesslich:`
                }
            },
            {
                type: 'bullet',
                text: { en: 'Last 4 weeks', de: 'Letzte 4 Wochen' }
            },
            {
                type: 'bullet',
                text: { en: 'Last 6 months', de: 'Letzte 6 Monate' }
            },
            {
                type: 'bullet',
                text: { en: 'Last year', de: 'Letztes Jahr' }
            },
            {
                type: 'bullet',
                text: { en: 'Past three years (2023-2021)', de: 'Vergangene drei Jahre (2023-2021)' }
            },
            {
                type: 'paragraph',
                text: { en: 'Each section dynamically visualizes:', de: 'Jeder Abschnitt visualisiert dynamisch:' }
            },
            {
                type: 'bullet',
                text: 'Top Songs'
            },
            {
                type: 'bullet',
                text: { en: 'Top Artists', de: 'Top Künstler' }
            },
            {
                type: 'bullet',
                text: 'Top Genres'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Additionally, users collect badges based on listening habits. At the end of the journey, they can generate and share personalized images summarizing their music history.',
                    de: 'Zusätzlich sammeln Benutzer Abzeichen basierend auf ihren Hörgewohnheiten. Am Ende der Reise können sie personalisierte Bilder generieren und teilen, die ihre Musikhistorie zusammenfassen.'
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The target audience is premium Spotify users of the younger generations, especially long-term Spotify users seeking an engaging retrospective of their music taste.',
                    de: 'Die Zielgruppe sind Premium-Spotify-Nutzer der jüngeren Generationen, insbesondere langjährige Spotify-Nutzer, die eine ansprechende Retrospektive ihres Musikgeschmacks suchen.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Team Responsibilities', de: 'Teamverantwortlichkeiten' }
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
                text: { en: 'Frontend Development', de: 'Frontend-Entwicklung' }
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
                text: { en: 'Frontend Development', de: 'Frontend-Entwicklung' }
            },
            {
                type: 'bullet',
                text: { en: 'Backend Development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'iconed',
                text: 'Marin Hirschi',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: { en: 'Frontend Development', de: 'Frontend-Entwicklung' }
            },
            {
                type: 'bullet',
                text: { en: 'Backend Development', de: 'Backend-Entwicklung' }
            },
            {
                type: 'subheading',
                text: { en: 'Technologies', de: 'Technologien' }
            },
            {
                type: 'iconed',
                text: 'Frontend',
                icon: 'desktop'
            },
            {
                type: 'bullet',
                text: { en: 'Vue.js for frontend development', de: 'Vue.js für die Frontend-Entwicklung' }
            },
            {
                type: 'bullet',
                text: { en: 'D3.js for dynamic data visualization', de: 'D3.js für dynamische Datenvisualisierung' }
            },
            {
                type: 'bullet',
                text: { en: 'GSAP for scroll animations', de: 'GSAP für Scroll-Animationen' }
            },
            {
                type: 'bullet',
                text: { en: 'Lenis for smooth scroll experience', de: 'Lenis für ein flüssiges Scroll-Erlebnis' }
            },
            {
                type: 'iconed',
                text: 'Backend',
                icon: 'server'
            },
            {
                type: 'bullet',
                text: { en: 'Node.js for backend server', de: 'Node.js für den Backend-Server' }
            },
            {
                type: 'bullet',
                text: { en: 'Express for backend routing', de: 'Express für Backend-Routing' }
            },
            {
                type: 'iconed',
                text: 'APIs',
                icon: 'cloud'
            },
            {
                type: 'bullet',
                text: { en: 'Spotify API for user data retrieval', de: 'Spotify API für die Benutzer-Datenabfrage' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Spotify Web Playback SDK for music playback',
                    de: 'Spotify Web Playback SDK für die Musikwiedergabe'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Google Gemini API for missing track data', de: 'Google Gemini API für fehlende Track-Daten' }
            },
            {
                type: 'iconed',
                text: 'Design & Prototyping',
                icon: 'palette'
            },
            {
                type: 'bullet',
                text: { en: 'Figma for design & prototyping', de: 'Figma für Design & Prototyping' }
            },
            {
                type: 'bullet',
                text: { en: 'PowerPoint for design & prototyping', de: 'PowerPoint für Design & Prototyping' }
            },
            {
                type: 'iconed',
                text: 'Testing',
                icon: 'vial'
            },
            {
                type: 'bullet',
                text: { en: 'Vitest for unit testing', de: 'Vitest für Unit-Tests' }
            },
            {
                type: 'bullet',
                text: { en: 'Cypress for end-to-end testing', de: 'Cypress für End-to-End-Tests' }
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
                text: { en: 'UX Testing Insights', de: 'UX-Testeinblicke' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Disclaimer: "For the best experience, ensure sound is turned on"',
                    de: 'Hinweis: "Für das beste Erlebnis, stellen Sie sicher, dass der Ton eingeschaltet ist"'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The bubble should start with low intensity and no color',
                    de: 'Die Blase sollte mit geringer Intensität und ohne Farbe beginnen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'The first song should play immediately and show the currently playing song',
                    de: 'Der erste Song sollte sofort abgespielt werden und den aktuell spielenden Song anzeigen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Add a heading before the share section',
                    de: 'Es sollte eine Überschrift vor dem Teilen-Abschnitt hinzugefügt werden'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Make the arrow down clickable or add a small text saying "please scroll"',
                    de: 'Der Pfeil nach unten anklickbar machen oder einen kleinen Text hinzufügen, der "bitte scrollen" sagt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Include expandable accordions for Top Artists to add variety to Top Songs',
                    de: 'Erweiterbare Akkordeons für Top-Künstler hinzufügen, um Abwechslung zu den Top-Songs zu bieten'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Challenges & Solutions', de: 'Herausforderungen & Lösungen' }
            },
            {
                type: 'iconed',
                text: { en: 'API Endpoints Shutdown', de: 'API-Endpunkte abgeschaltet' },
                icon: 'ban'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Many crucial Spotify API endpoints were shut down without notice while we were working on the project, requiring a new approach to data retrieval. 
                        We experimented with the Google Gemini API to gather missing track data and implemented an alternative solution for the wrapped data fetching.
                        This allowed us to continue and complete the project successfully, retaining the core functionality.`,
                    de: `Viele wichtige Spotify API-Endpunkte wurden ohne Vorankündigung abgeschaltet, während wir am Projekt arbeiteten, was einen neuen Ansatz zur Datenabfrage erforderte. 
                            Wir experimentierten mit der Google Gemini API, um fehlende Track-Daten zu sammeln, und implementierten eine alternative Lösung für das Abrufen der Wrapped-Daten.
                            Dies ermöglichte es uns, das Projekt erfolgreich fortzusetzen und abzuschliessen, wobei die Kernfunktionalität erhalten blieb.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'API Integration', de: 'API-Integration' },
                icon: 'cogs'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Integrating the Spotify API and Google Gemini API was challenging since it was the first time we worked with these technologies.
                        We overcame this by researching the APIs thoroughly, experimenting with different endpoints, and collaborating closely.
                        Through trial and error and the valuable support of our lecturers, we managed to implement the desired features.`,
                    de: `Die Integration der Spotify API und der Google Gemini API war herausfordernd, da es das erste Mal war, dass wir mit diesen Technologien arbeiteten.
                            Wir überwanden dies, indem wir die APIs gründlich recherchierten, mit verschiedenen Endpunkten experimentierten und eng zusammenarbeiteten.
                            Durch Versuch und Irrtum und die wertvolle Unterstützung unserer Dozierenden gelang es uns, die gewünschten Funktionen zu implementieren.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Bubble Visualization', de: 'Blasenvisualisierung' },
                icon: 'splotch'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Creating the bubble visualization was complex due to the dynamic data and the need for smooth transitions.
                        We solved this by experimenting a lot in D3.js with different bubble layouts and scales, adjusting the bubble size and color based on the data.
                        This resulted in an engaging and interactive visualization that represents the song's mood and energy.`,
                    de: `Die Erstellung der Blasenvisualisierung war aufgrund der dynamischen Daten und der Notwendigkeit für flüssige Übergänge komplex.
                            Wir lösten dies, indem wir viel in D3.js mit verschiedenen Blasenlayouts und -skalen experimentierten und die Blasengrösse und -farbe basierend auf den Daten anpassten.
                            Dies führte zu einer ansprechenden und interaktiven Visualisierung, die die Stimmung und Energie des Songs darstellt.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Scroll Animation', de: 'Scroll-Animation' },
                icon: 'mouse-pointer'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Implementing scroll functionalities was challenging due to the usage of different scroll libraries.
                        We solved this by using GSAP and Lenis to create a smooth and interactive scroll experience.
                        Testing and adjusting the scroll speed and animations helped us achieve the desired effect after several iterations.`,
                    de: `Die Implementierung von Scroll-Funktionalitäten war aufgrund der Verwendung verschiedener Scroll-Bibliotheken herausfordernd.
                            Wir lösten dies, indem wir GSAP und Lenis verwendeten, um ein flüssiges und interaktives Scroll-Erlebnis zu schaffen.
                            Durch Testen und Anpassen der Scroll-Geschwindigkeit und -Animationen konnten wir nach mehreren Iterationen den gewünschten Effekt erzielen.`
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
                        caption: { en: 'Focus  Mode Mobile', de: 'Fokus-Modus Mobil' }
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
                text: 'Screencast Mobile'
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
                    en: `EcoHome is a strategic tabletop game centered around waste management and sustainability in modern Swiss households. 
                        Players take on different personas and must balance daily actions to reduce trash while maintaining or increasing their happiness score. 
                        The game spans one week, with each turn representing a day.Players receive immediate feedback on their choices, allowing them to adjust strategies.
                        As the final project of the International Summer School on Designing Serious Games this game was developed in a team of three with Lisa Landolt and Julian Schwarz.`,
                    de: `EcoHome ist ein strategisches Brettspiel, das sich auf Abfall und Nachhaltigkeit in modernen Schweizer Haushalten konzentriert. 
                            Die Spieler übernehmen verschiedene Rollen und müssen tägliche Aktionen ausbalancieren, um Müll zu reduzieren und gleichzeitig ihre Zufriedenheit beizubehalten oder zu erhöhen. 
                            Das Spiel erstreckt sich über eine Woche, wobei jeder Zug einen Tag darstellt. Die Spieler erhalten sofortiges Feedback zu ihren Entscheidungen, was ihnen ermöglicht, ihre Strategien anzupassen.
                            Als Abschlussprojekt der International Summer School on Designing Serious Games wurde dieses Spiel in einem Team von drei Personen mit Lisa Landolt und Julian Schwarz entwickelt.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Gameplay Overview', de: 'Spielübersicht' }
            },
            {
                type: 'subheading',
                text: { en: 'Objective', de: 'Ziel' }
            },
            {
                type: 'iconed',
                text: { en: 'Minimize Waste, Maximize Happiness', de: 'Müll minimieren, Glücklichsein maximieren' },
                icon: 'smile'
            },
            {
                type: 'paragraph',
                text: {
                    en: `At the end of the week, the player with the least amount of trash bags wins.`,
                    de: `Am Ende der Woche gewinnt der Spieler mit den wenigsten Müllsäcken.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Challenges', de: 'Herausforderungen' }
            },
            {
                type: 'bullet',
                text: { en: 'Managing resources efficiently', de: 'Ressourcen effizient verwalten' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Adapting to random events that affect daily life',
                    de: 'Sich an zufällige Ereignisse anpassen, die das tägliche Leben beeinflussen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Making smart buying choices to minimize waste',
                    de: 'Kluge Kaufentscheidungen treffen, um Müll zu minimieren'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Player Actions', de: 'Spieleraktionen' }
            },
            {
                type: 'iconed',
                text: { en: 'Grocery Shopping', de: 'Lebensmitteleinkauf' },
                icon: 'shopping-cart'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Buy food and reusable items to manage resources effectively and minimize waste.',
                    de: 'Kaufe Lebensmittel und wiederverwendbare Gegenstände, um Ressourcen effektiv zu verwalten und Müll zu minimieren.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Day Planning', de: 'Tagesplanung' },
                icon: 'calendar-alt'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Allocate time for daily activities to balance tasks and optimize efficiency.',
                    de: 'Plane die Zeit für tägliche Aktivitäten, um Aufgaben zu balancieren und die Effizienz zu optimieren.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Cooking', de: 'Kochen' },
                icon: 'utensils'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Prepare meals without wasting ingredients to maintain a low waste footprint.',
                    de: 'Bereite Mahlzeiten zu, ohne Zutaten zu verschwenden, um einen niedrigen Müll-Fussabdruck zu erhalten.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Cleaning', de: 'Reinigung' },
                icon: 'broom'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Maintain living spaces and optimize waste disposal to keep the environment clean.',
                    de: 'Halte die Wohnräume sauber und optimiere die Müllentsorgung, um die Umgebung sauber zu halten.'
                }
            },
            {
                type: 'iconed',
                text: 'Recycling',
                icon: 'recycle'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Reduce waste by properly sorting trash and recycling materials.',
                    de: 'Reduziere Müll, indem du Abfall richtig sortierst und Materialien recycelst.'
                }
            },
            {
                type: 'subheading',
                text: 'Setting'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Modern Swiss households, featuring shared apartments, family homes, and single-person residences.',
                    de: 'Moderne Schweizer Haushalte, darunter Wohngemeinschaften, Familienhäuser und Einpersonenhaushalte.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Technology', de: 'Technologie' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The game relies on physical cards for actions, events, and resources, with minimal bookkeeping to easily keep track of scores and states.',
                    de: 'Das Spiel verwendet physische Karten für Aktionen, Ereignisse und Ressourcen, mit minimalem Buchhaltungsaufwand, um Punkte und Zustände leicht im Auge zu behalten.'
                }
            },
            {
                type: 'heading',
                text: { en: 'Game Rules', de: 'Spielregeln' }
            },
            {
                type: 'subheading',
                text: 'Setup'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Each player adopts a persona that determines their conditions and weekly schedule:',
                    de: 'Jeder Spieler übernimmt eine Rolle, die seine Bedingungen und den Wochenplan bestimmt:'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Single-person household', de: 'Einpersonenhaushalt' },
                icon: 'user'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Has 2 free time slots on weekdays and 5 on weekends',
                    de: 'Hat 2 freie Zeitfenster an Wochentagen und 5 am Wochenende'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Generates 0 extra trash per day', de: 'Erzeugt 0 zusätzlichen Müll pro Tag' }
            },
            {
                type: 'iconed',
                text: { en: 'Family household', de: 'Familienhaushalt' },
                icon: 'users'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Has 4 free time slots on weekdays and 2 on weekends',
                    de: 'Hat 4 freie Zeitfenster an Wochentagen und 2 am Wochenende'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Generates 1 extra trash per day', de: 'Erzeugt 1 zusätzlichen Müll pro Tag' }
            },
            {
                type: 'iconed',
                text: { en: 'Shared flat', de: 'Wohngemeinschaft' },
                icon: 'house-chimney-window'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Has 3 free time slots on weekdays and 3 on weekends',
                    de: 'Hat 3 freie Zeitfenster an Wochentagen und 3 am Wochenende'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Generates 2 extra trash per day', de: 'Erzeugt 2 zusätzlichen Müll pro Tag' }
            },
            {
                type: 'paragraph',
                text: { en: 'Players start with:', de: 'Die Spieler starten mit:' }
            },
            {
                type: 'bullet',
                text: { en: '5 Happiness', de: '5 Glückspunkten' }
            },
            {
                type: 'bullet',
                text: { en: '5 Action Cards', de: '5 Aktionskarten' }
            },
            {
                type: 'bullet',
                text: { en: '1 Reusable Shop Card', de: '1 wiederverwendbaren Einkaufskarte' }
            },
            {
                type: 'subheading',
                text: { en: 'Daily Turn Sequence', de: 'Tägliche Zugfolge' }
            },
            {
                type: 'iconed',
                text: { en: 'Draw a Random Event Card', de: 'Ziehe eine Zufallskarte' },
                icon: '1'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'This introduces new challenges or benefits.',
                    de: 'Dies führt neue Herausforderungen oder Vorteile ein.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Plan Your Day', de: 'Plane deinen Tag' },
                icon: '2'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Players choose actions based on available time and resources.',
                    de: 'Die Spieler wählen Aktionen basierend auf verfügbarer Zeit und Ressourcen.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Execute Actions', de: 'Führe Aktionen aus' },
                icon: '3'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Players may shop, use items, or carry out planned tasks.',
                    de: 'Die Spieler können einkaufen, Gegenstände verwenden oder geplante Aufgaben ausführen.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Refill to 5 Action Cards', de: 'Fülle auf 5 Aktionskarten auf' },
                icon: '4'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Ensure players have balanced choices each turn.',
                    de: 'Stellt sicher, dass die Spieler jede Runde ausgewogene Wahlmöglichkeiten haben.'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Happiness Consequences', de: 'Konsquenzen & Glück' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'If Happiness falls below 3, the player cannot cook, clean, or recycle',
                    de: 'Wenn das Glück unter 3 fällt, kann der Spieler nicht kochen, reinigen oder recyceln'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'If Happiness reaches 0, the player automatically generates 2 trash bags per day',
                    de: 'Wenn das Glück 0 erreicht, erzeugt der Spieler automatisch 2 Müllsäcke pro Tag'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Skipping meals results in -3 Happiness per day',
                    de: 'Das Auslassen von Mahlzeiten führt zu -3 Glück pro Tag'
                }
            },
            {
                type: 'subheading',
                text: { en: 'End of the Week', de: 'Ende der Woche' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Unused fresh ingredients generate 1 trash bag. 
                        At the end of the week, the player with the least trash wins.
                        If there is a tie, the player with more Happiness wins.`,
                    de: `Unbenutzte frische Zutaten erzeugen 1 Müllsack. 
                            Am Ende der Woche gewinnt der Spieler mit dem wenigsten Müll.
                            Bei Gleichstand gewinnt der Spieler mit mehr Glück.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Process Insights', de: 'Prozess Einblicke' }
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
                    },
                ]
            }
        ],
        links: [],
        downloads: [
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
                    en: `With Milo\'s Forest Adventure I aimed to combine web development, pixel art, and interactive storytelling 
                        in a cute scroll-and-click adventure game. By scrolling and clicking, players can explore the environment,
                        interact with Milo, and uncover secrets of the enchanting forest. The game was developed as part of the
                        Development for Web & Mobile module, where we were tasked with creating a web-based interactive picture book
                        using HTML, CSS, and JavaScript.`,
                    de: `Mit Milo's Forest Adventure wollte ich Webentwicklung, Pixelart und interaktive Erzählungen 
                            in einem niedlichen Scroll- und Klick-Abenteuerspiel kombinieren. Durch Scrollen und Klicken können die Spieler die Umgebung erkunden,
                            mit Milo interagieren und Geheimnisse des verzauberten Waldes entdecken. 
                            Das Spiel wurde im Rahmen des Moduls Development for Web & Mobile entwickelt, wo wir die Aufgabe hatten, ein webbasiertes interaktives Bilderbuch mit HTML, CSS und JavaScript zu erstellen.`
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
                        text: { en: 'Play Demo', de: 'Demo spielen' },
                        action: 'https://milo.jfladas.com',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'Download',
                        action: releaseFile('milo.zip'),
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: {
                    en: `Online demo lacks backend features like the leaderboard at the end. To play the game locally, follow the instructions below.`,
                    de: `Der Online-Demo fehlen Backend-Funktionen wie die Bestenliste am Ende. Um das Spiel lokal zu spielen, folge den untenstehenden Anweisungen.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Installation Instructions', de: 'Installationsanweisungen' }
            },
            {
                type: 'subheading',
                text: { en: 'Prerequisites', de: 'Voraussetzungen' }
            },
            {
                type: 'bullet',
                text: { en: 'Node.js installed', de: 'Node.js installiert' }
            },
            {
                type: 'bullet',
                text: { en: 'Visual Studio Code installed', de: 'Visual Studio Code installiert' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Live Server extension installed & activated in Visual Studio Code',
                    de: 'Live Server-Erweiterung in Visual Studio Code installiert und aktiviert'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Steps', de: 'Schritte' }
            },
            {
                type: 'iconed',
                text: { en: 'Clone or download the project', de: 'Projekt klonen oder herunterladen' },
                icon: '1'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Clone the project repository into a local directory',
                    de: 'Das Projekt-Repository in ein lokales Verzeichnis klonen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Alternatively, download the project zip file and extract it into a local directory',
                    de: 'Alternativ die Projekt-Zip-Datei herunterladen und in ein lokales Verzeichnis extrahieren'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Start the backend', de: 'Backend starten' },
                icon: '2'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Navigate to the <span class="snippet">/server</span> directory',
                    de: 'Zum Verzeichnis <span class="snippet">/server</span> navigieren'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: `Start the Node.js server with the command
                        <span class= "snippet hoverable tooltip copy" tooltip="copy" > node server.mjs</span>
                        in the terminal`,
                    de: `Den Node.js-Server mit dem Befehl
                            <span class= "snippet hoverable tooltip copy" tooltip="copy" > node server.mjs</span>
                            im Terminal starten`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Start the frontend', de: 'Frontend starten' },
                icon: '3'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Navigate to the <span class="snippet">/client</span> directory and open it in Visual Studio Code',
                    de: 'Zum Verzeichnis <span class="snippet">/client</span> navigieren und es in Visual Studio Code öffnen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Click on Go Live at the bottom right to start the Live Server',
                    de: 'Unten rechts auf "Go Live" klicken, um den Live Server zu starten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: `The project should automatically open in the browser (if not, open
                        <span class="snippet hoverable tooltip copy" tooltip = "copy" > http://127.0.0.1:5500/</span>
                        in the browser and adjust Live Server settings accordingly)`,
                    de: `Das Projekt sollte automatisch im Browser geöffnet werden (falls nicht, die URL
                            <span class="snippet hoverable tooltip copy" tooltip = "copy" > http://127.0.0.1:5500/</span>
                            im Browser öffnen und die Live Server-Einstellungen entsprechend anpassen)`
                }
            },
            {
                type: 'subheading',
                text: { en: "Enjoy milo's forest adventure!", de: "Viel Spass bei Milo's Forest Adventure!" }
            },
            {
                type: 'heading',
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Scenes', de: 'Szenen' }
            },
            {
                type: 'bullet',
                text: { en: 'Intro Dialogue: Milo welcomes the player', de: 'Intro-Dialog: Milo begrüsst den Spieler.' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Day Scene: Navigate Milo through the forest during the day',
                    de: 'Tag-Szene: Navigiere Milo tagsüber durch den Wald.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'River Dialogue: Engage in a conversation with Milo by the Rami River',
                    de: 'Fluss-Dialog: Führe ein Gespräch mit Milo am Rami-Fluss.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Night Scene: Guide Milo through the forest at night',
                    de: 'Nacht-Szene: Führe Milo nachts durch den Wald.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Cliff Dialogue: A reflective conclusion at a cliff edge',
                    de: 'Kliff-Dialog: Ein reflektierender Abschluss an einer Klippe.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: `End Screen: Displays the player's score and a leaderboard of the top 10 players`,
                    de: `Endbildschirm: Zeigt die Punktzahl des Spielers und eine Bestenliste der Top 10 Spieler an.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tools & Resources', de: 'Tools & Ressourcen' }
            },
            {
                type: 'iconed',
                text: { en: 'Development', de: 'Entwicklung' },
                icon: 'code'
            },
            {
                type: 'paragraph',
                text: 'HTML, CSS, JavaScript, Node.js, Express, Visual Studio Code, GitHub'
            },
            {
                type: 'iconed',
                text: { en: 'Graphics', de: 'Grafik' },
                icon: 'palette'
            },
            {
                type: 'paragraph',
                text: 'Piskel, Adobe Firefly, PowerPoint, Photoshop, FontStruct'
            },
            {
                type: 'iconed',
                text: 'Audio',
                icon: 'music'
            },
            {
                type: 'paragraph',
                text: 'Suno, Freesound, Adobe Audition'
            },
            {
                type: 'iconed',
                text: { en: 'AI Assistance', de: 'KI Assistenz' },
                icon: 'robot'
            },
            {
                type: 'paragraph',
                text: 'ChatGPT, Gemini, Adobe Firefly, Suno'
            },
            {
                type: 'subheading',
                text: { en: 'Reflection', de: 'Reflexion' }
            },
            {
                type: 'iconed',
                text: 'Motivation',
                icon: 'face-smile-beam'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Throughout the project, I had a lot of motivation and joy, which drove me to invest a lot of time and energy into the project.`,
                    de: `Ich hatte über das gesamte Projekt hinweg viel Motivation und Freude, was mich dazu antrieb,
                        viel Zeit und Energie in das Projekt zu investieren.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Challenges', de: 'Herausforderungen' },
                icon: 'exclamation-triangle'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Sometimes I got lost in the tasks or didn't know exactly what to do next. Towards the end, I created a to-do list, which helped me a lot to keep track.`,
                    de: `Manchmal habe ich mich in den Aufgaben verloren oder wusste nicht genau, was als nächstes
                        zu tun ist. Gegen Ende habe ich mir eine To-Do-Liste eingerichtet, was mir sehr half, den
                        Überblick zu behalten.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Programming Techniques', de: 'Programmiertechniken' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Use of Factory Functions, but not fully object-oriented',
                    de: 'Einsatz von Factory Functions, jedoch nicht voll objektorientiert'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Dynamic creation of HTML through JavaScript',
                    de: 'Dynamische Erstellung von HTML durch JavaScript'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Use of POST requests for the server and storage of player data as JSON on the server side',
                    de: 'Verwendung von POST-Requests für den Server und Speicherung der Spielerdaten als JSON auf der Serverseite'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Implementation of a cookie function so that the player ID is stored in the browser',
                    de: 'Implementierung einer Cookie-Funktion, sodass die Spieler-ID im Browser gespeichert wird'
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
                ],
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
                text: 'Playthrough Video',
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
                    en: `The Module explores the beauty of mathematics through generative art and algorithmic design, using p5.js, HTML, CSS, and JavaScript. 
                        This page showcases a collection of weekly tasks completed during weeks 1 to 6 of the module and an exam project. 
                        Each task implements mathematical and computational principles to create visually engaging patterns, simulations, and interactive experiences.`,
                    de: `Das Modul erforscht die Schönheit der Mathematik durch generative Kunst und algorithmisches Design unter Verwendung von p5.js, HTML, CSS und JavaScript. 
                            Diese Seite zeigt eine Sammlung wöchentlicher Aufgaben, die während der Wochen 1 bis 6 des Moduls und eines Prüfungsprojekts abgeschlossen wurden. 
                            Jede Aufgabe implementiert mathematische und rechnerische Prinzipien, um visuell ansprechende Muster, Simulationen und interaktive Erlebnisse zu schaffen.`
                }
            },
            {
                type: 'heading',
                text: { en: 'View Collection', de: 'Sammlung ansehen' }
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: { en: 'Go to Page', de: 'Zur Seite' },
                        action: 'https://matbf.jfladas.com',
                        icon: 'arrow-right',
                        color: 'primary'
                    },
                    {
                        text: { en: 'Documentation', de: 'Dokumentation' },
                        action: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'

                    }
                ]
            },
            {
                type: 'heading',
                text: { en: 'Weekly Projects', de: 'Wöchentliche Projekte' }
            },
            {
                type: 'iconed',
                text: { en: 'W1 | Spiral', de: 'W1 | Spirale' },
                icon: 'spiral'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Spiral of circles increasing in size made by implementing Bresenham Midpoint Circle Algorithm',
                    de: 'Spirale von Kreisen, die durch die Implementierung des Bresenham-Mittelpunkt-Kreisalgorithmus in der Grösse zunehmen'
                }
            },
            {
                type: 'iconed',
                text: 'W2 | 3D Mesh',
                icon: 'circle-nodes'
            },
            {
                type: 'paragraph',
                text: { en: 'Attempt at a 3D snail shape using WebGL', de: 'Versuch einer 3D-Schneckenform mit WebGL' }
            },
            {
                type: 'iconed',
                text: 'W3 | Matrix',
                icon: 'font'
            },
            {
                type: 'paragraph',
                text: { en: 'Markov Chain with Japanese Hiragana', de: 'Markov-Kette mit japanischen Hiragana' }
            },
            {
                type: 'iconed',
                text: { en: 'W4 | Life', de: 'W4 | Leben' },
                icon: 'border-all'
            },
            {
                type: 'paragraph',
                text: {
                    en: "Interactive Conway's Game of Life with more States/Colors",
                    de: "Interaktives Conway's Game of Life mit mehr Zuständen/Farben"
                }
            },
            {
                type: 'iconed',
                text: { en: 'W5 | Mountains', de: 'W5 | Berge' },
                icon: 'mountain'
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Layered mountain range made with 2D Fractal Noise and Smoothstep-Interpolation',
                    de: 'Geschichtete Bergkette mit 2D-Fraktalrauschen und Smoothstep-Interpolation'
                }
            },
            {
                type: 'iconed',
                text: { en: 'W6 | Trees', de: 'W6 | Bäume' },
                icon: 'tree'
            },
            {
                type: 'paragraph',
                text: { en: 'Different Trees using 2D L-Systems', de: 'Verschiedene Bäume mit 2D-L-Systemen' }
            },
            {
                type: 'iconed',
                text: { en: 'EXAM | Breathing', de: 'PRÜFUNG | Atmung' },
                icon: 'genderless'
            },
            {
                type: 'paragraph',
                text: { en: 'Pulsating Circles for Mindful Breathing', de: 'Pulsierende Kreise für achtsames Atmen' }
            },
            {
                type: 'heading',
                text: { en: 'Key Learnings', de: 'Wichtige Erkenntnisse' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Applying mathematical algorithms to creative coding',
                    de: 'Anwendung mathematischer Algorithmen auf kreatives Programmieren.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Exploring generative art with p5.js and WebGL',
                    de: 'Erforschung generativer Kunst mit p5.js und WebGL.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Enhancing interactivity through Markov Chains, Cellular Automata, and L-Systems',
                    de: 'Verbesserung der Interaktivität durch Markov-Ketten, zelluläre Automaten und L-Systeme.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Using fractal noise and procedural techniques for natural-looking landscapes',
                    de: 'Verwendung von Fraktalrauschen und prozeduralen Techniken für natürlich aussehende Landschaften.'
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
                ],
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
            },
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
                    en: `Between 2012 and 2016, Europe experienced a rapid expansion of 4G mobile network coverage, marking a turning point in digital connectivity.
                        This data visualization project explores the speed and scale of 4G deployment across Europe, highlighting its impact on society.`,
                    de: `Zwischen 2012 und 2016 erlebte Europa eine rasante Ausweitung der 4G-Mobilfunknetzabdeckung, was einen Wendepunkt in der digitalen Konnektivität markierte.
                            Dieses Datenvisualisierungsprojekt untersucht die Geschwindigkeit und das Ausmass der 4G-Einführung in Europa und hebt deren Auswirkungen auf die Gesellschaft hervor.`
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
                ],
            },
            {
                type: 'heading',
                text: { en: 'Data Source & Analysis', de: 'Datenquelle & Analyse' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The dataset from the United Nations Sustainable Development Goals (SDG) Data Portal provided a comprehensive overview of 4G network coverage across Europe.
                        It was analyzed using Microsoft Excel, applying filtering, pivot tables, and conditional formatting to extract key insights. The structured data allowed for comparisons across countries and time periods, revealing trends in connectivity expansion.`,
                    de: `Der Datensatz des Datenportals der Vereinten Nationen für nachhaltige Entwicklungsziele (SDG) bot einen umfassenden Überblick über die 4G-Netzabdeckung in Europa.
                            Er wurde mit Microsoft Excel analysiert, wobei Filter, Pivot-Tabellen und bedingte Formatierungen angewendet wurden, um wichtige Erkenntnisse zu extrahieren. Die strukturierten Daten ermöglichten Vergleiche zwischen Ländern und Zeiträumen und zeigten Trends in der Konnektivitätserweiterung auf.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Dataset', de: 'Datensatz' },
                icon: 'database'
            },
            {
                type: 'bullet',
                text: {
                    en: 'UN SDG Data Portal - Indicator 9.c.1 (Mobile Network Coverage)',
                    de: 'UN SDG Datenportal - Indikator 9.c.1 (Mobilfunknetzabdeckung)'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Timeframe', de: 'Zeitraum' },
                icon: 'calendar-alt'
            },
            {
                type: 'bullet',
                text: '2012-2022'
            },
            {
                type: 'iconed',
                text: { en: 'Countries', de: 'Länder' },
                icon: 'globe-europe'
            },
            {
                type: 'bullet',
                text: {
                    en: '16 European countries divided into 4 regions of Europe',
                    de: '16 europäische Länder, aufgeteilt in 4 Regionen Europas'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Focus Question', de: 'Fokusfrage' },
                icon: 'question'
            },
            {
                type: 'bullet',
                text: {
                    en: 'How quickly was 4G technology adopted across Europe?',
                    de: 'Wie schnell wurde die 4G-Technologie in Europa eingeführt?'
                }
            },
            {
                type: 'iconed',
                text: 'Software',
                icon: 'arrow-pointer'
            },
            {
                type: 'bullet',
                text: { en: 'Microsoft Excel for data analysis', de: 'Microsoft Excel zur Datenanalyse' }
            },
            {
                type: 'bullet',
                text: { en: 'Adobe InDesign for layout and poster design', de: 'Adobe InDesign für Layout und Plakatdesign' }
            },
            {
                type: 'bullet',
                text: { en: 'Adobe Illustrator for data visualization', de: 'Adobe Illustrator zur Datenvisualisierung' }
            },
            {
                type: 'heading',
                text: { en: 'Sketches', de: 'Skizzen' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The sketching process focuses on the three data dimensions:`,
                    de: `Der Skizzierungsprozess konzentriert sich auf die drei Daten-Dimensionen:`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Diagrammatical Dimensions', de: 'Diagrammatische Dimensionen' },
                icon: '1'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Focuses on the basic diagram types and their application',
                    de: 'Konzentriert sich auf die grundlegenden Diagrammtypen und deren Anwendung.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Visual Dimensions', de: 'Visuelle Dimensionen' },
                icon: '2'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Destinguishes between different content by using various design principles',
                    de: 'Unterscheidet zwischen verschiedenen Inhalten durch die Anwendung verschiedener Designprinzipien.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Structuring Dimensions', de: 'Strukturierende Dimensionen' },
                icon: '3'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Deals with the organization and arrangement of the objects in the space',
                    de: 'Befasst sich mit der Organisation und Anordnung der Objekte im Raum.'
                }
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
                ],
            },
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
                    en: `Salad Ninja is a 2D animated video inspired by the popular mobile game Fruit Ninja.
                        The video shows the preparation of a salad by slicing various ingredients.
                        It uses a combination of stop motion and frame-by-frame paper animation and 
                        was developed in a team of two with Remo Hösli as part of the ISA Animation Introduction module.`,
                    de: `Salad Ninja ist ein 2D-animiertes Video, inspiriert vom beliebten Mobile Game Fruit Ninja.
                        Das Video zeigt die Zubereitung eines Salats durch das Schneiden verschiedener Zutaten.
                        Es kombiniert Stop-Motion und frame-by-frame Papieranimation und 
                        wurde in einem Zweierteam mit Remo Hösli im Rahmen des ISA Animations-Einführungsmoduls entwickelt.`
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
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Concept & Execution', de: 'Konzept & Umsetzung' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The animation follows the playful destruction of various ingredients, blending two animation techniques:
                        Stop motion for animating all of the ingredients spinning and being sliced.
                        Frame-by-frame paper animation for slices, splashes, visual effects like fire, and text.
                        The final animation was edited and enriched by sound in After Effects, combining both techniques seamlessly.`,
                    de: `Die Animation zeigt die spielerische Zerstörung verschiedener Zutaten und verbindet zwei Animationstechniken:
                        Stop-Motion zur Animation aller drehenden und geschnittenen Zutaten.
                        Frame-by-frame Papieranimation für Scheiben, Spritzer, visuelle Effekte wie Feuer und Text.
                        Die finale Animation wurde in After Effects bearbeitet und mit Sound angereichert, um beide Techniken nahtlos zu kombinieren.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Process Insights', de: 'Prozess & Einblicke' }
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
                type: 'subheading',
                text: { en: 'Team Roles', de: 'Teamrollen' }
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
                text: 'Editing in After Effects'
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
                text: { en: 'Other Projects in the Module', de: 'Weitere Projekte im Modul' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Alongside Salad Ninja, we worked on additional animation exercises exploring different techniques and approaches.
                        Some examples:`,
                    de: `Neben Salad Ninja haben wir zusätzliche Animationsübungen durchgeführt, um verschiedene Techniken und Ansätze zu erkunden.
                        Einige Beispiele:`
                }
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
                    en: `This exercise focused on creating a smooth transition between two objects.
                        The individual animation segments of all students were then combined into a single video, creating a seamless transition chain.
                        Here, only my part of the animation is shown, depicting the transition from a cup to a pencil.`,
                    de: `Diese Übung konzentrierte sich auf die Erstellung eines nahtlosen Übergangs zwischen zwei Objekten.
                        Die einzelnen Animationssegmente aller Studierenden wurden dann zu einem einzigen Video kombiniert, um eine durchgehende Übergangskette zu erstellen.
                        Hier ist nur mein Teil der Animation zu sehen, der den Übergang von einer Tasse zu einem Bleistift darstellt.`
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
                    en: `In this exercise, I tried out claymation using stop motion techniques together with Remo.
                        We created a short video with sound of a frog emerging and catching a fly.`,
                    de: `In dieser Übung haben Remo und ich Claymation mit Stop-Motion-Techniken ausprobiert.
                        Wir haben ein kurzes Video mit Sound erstellt, in dem ein Frosch auftaucht und eine Fliege fängt.`
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
                    en: `This UX redesign project focused on improving the usability of the HSCL website. 
                        Conducted through extensive user research, prototyping, and testing, the project aimed to optimize navigation, 
                        structure, and personalization for a better user experience. Created by Üx-Grüp (Yanis Deplazes, Jan Schwegler, 
                        Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) as part of the Introduction to UX module.`,
                    de: `Dieses UX-Redesign-Projekt konzentrierte sich auf die Verbesserung der Benutzerfreundlichkeit der HSCL-Website.
                            Durch umfangreiche Nutzerforschung, Prototyping und Tests zielte das Projekt darauf ab, Navigation, Struktur und Personalisierung für ein besseres Benutzererlebnis zu optimieren. Erstellt von Üx-Grüp (Yanis Deplazes, Jan Schwegler, Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) im Rahmen des Moduls Einführung in User Experience.`
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
                text: { en: 'Project Overview', de: 'Projektübersicht' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The goal of this project was to enhance the HSCL website by addressing key usability pain points. 
                       Through a structured UX design process, the team defined user needs, created prototypes, 
                       and refined them based on extensive user feedback.`,
                    de: `Das Ziel dieses Projekts war es, die HSCL-Website zu verbessern, indem wichtige Usability-Probleme angegangen wurden.
                           Durch einen strukturierten UX-Design-Prozess definierte das Team die Bedürfnisse der Nutzer, erstellte Prototypen und verfeinerte diese basierend auf umfangreichem Nutzerfeedback.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Research & Problem Identification', de: 'Forschung & Problemidentifikation' }
            },
            {
                type: 'subheading',
                text: { en: 'User Research Methods', de: 'Nutzerforschungsmethoden' }
            },
            {
                type: 'bullet',
                text: { en: 'User surveys', de: 'Nutzerumfragen' }
            },
            {
                type: 'bullet',
                text: { en: 'Empathy maps', de: 'Empathiekarten' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Personas (primary, secondary, and negative personas)',
                    de: 'Personas (primäre, sekundäre und negative Personas)'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Direct user testing', de: 'Direkte Nutzertests' }
            },
            {
                type: 'subheading',
                text: { en: 'Key Issues Identified', de: 'Identifizierte Hauptprobleme' }
            },
            {
                type: 'bullet',
                text: { en: 'Inefficient filtering options', de: 'Ineffiziente Filteroptionen' }
            },
            {
                type: 'bullet',
                text: { en: 'Confusing registration process', de: 'Verwirrender Registrierungsprozess' }
            },
            {
                type: 'bullet',
                text: { en: 'Lack of a location-based training search', de: 'Fehlende standortbasierte Trainingssuche' }
            },
            {
                type: 'bullet',
                text: { en: 'Content overload and poor structure', de: 'Überladung von Inhalten und schlechte Struktur' }
            },
            {
                type: 'bullet',
                text: { en: 'Absence of multilingual support', de: 'Fehlende Mehrsprachigkeitsunterstützung' }
            },
            {
                type: 'bullet',
                text: { en: 'Navigation inefficiencies', de: 'Navigationsineffizienzen' }
            },
            {
                type: 'heading',
                text: { en: 'Solution Implementation', de: 'Lösungsimplementierung' }
            },
            {
                type: 'subheading',
                text: { en: 'Prototyping Process', de: 'Prototyping-Prozess' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Created initial paper prototypes and tested them through hallway usability tests',
                    de: 'Erstellung erster Papierprototypen und Tests durch Hallway-Usability-Tests'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Developed digital prototypes in Figma, iterating based on feedback',
                    de: 'Entwicklung digitaler Prototypen in Figma, Iteration basierend auf Feedback'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Tested Solutions & Enhancements', de: 'Getestete Lösungen & Verbesserungen' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'New search function with an integrated map view',
                    de: 'Neue Suchfunktion mit integrierter Kartenansicht'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Streamlined filtering system, including location-based filtering',
                    de: 'Vereinfachtes Filtersystem, einschliesslich standortbasierter Filterung'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Chronological event listing', de: 'Chronologische Ereignisauflistung' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Improved homepage with direct access to key sections',
                    de: 'Verbesserte Startseite mit direktem Zugang zu wichtigen Bereichen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Clearer naming conventions for better navigation',
                    de: 'Klarere Benennungskonventionen für bessere Navigation'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Optimized content layout for clarity', de: 'Optimiertes Inhaltslayout für Klarheit' }
            },
            {
                type: 'bullet',
                text: { en: 'Implementation of a language switcher', de: 'Implementierung eines Sprachumschalters' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Enhanced training information structure',
                    de: 'Verbesserte Strukturierung der Trainingsinformationen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Personalized features such as account-based favorites',
                    de: 'Personalisierte Funktionen wie kontobasierte Favoriten'
                }
            },
            {
                type: 'heading',
                text: { en: 'User Testing & Insights', de: 'Nutzertests & Erkenntnisse' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Conducted two rounds of UX testing in real environments (HSLU campus hallways and higher semester students).`,
                    de: `Durchführung von zwei Runden UX-Tests in realen Umgebungen (HSLU-Campusflure und höhere Semesterstudenten).`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Key findings led to', de: 'Wichtige Erkenntnisse führten zu' }
            },
            {
                type: 'bullet',
                text: { en: 'Emphasizing tab-based navigation', de: 'Betonung der tab-basierten Navigation' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Redesigning the login process for better usability',
                    de: 'Neugestaltung des Login-Prozesses für bessere Benutzerfreundlichkeit'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Relocating the favorites icon to improve visibility',
                    de: 'Verlagerung des Favoriten-Icons zur Verbesserung der Sichtbarkeit'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Adding a dark mode for a better user experience',
                    de: 'Hinzufügen eines Dunkelmodus für ein besseres Benutzererlebnis'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Refining the date selection process', de: 'Verfeinerung des Datumauswahlprozesses' }
            },
            {
                type: 'heading',
                text: { en: 'Final Outcomes', de: 'Endergebnisse' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The revised website prototype significantly improved user engagement and navigation efficiency. 
                       The project provided valuable insights into real-world UX research and iterative design. 
                       While a mobile app was suggested by users, it was deemed impractical within the given timeframe.`,
                    de: `Der überarbeitete Website-Prototyp verbesserte die Benutzerbindung und Navigationseffizienz erheblich.
                           Das Projekt lieferte wertvolle Einblicke in die reale UX-Forschung und das iterative Design.
                           Während eine mobile App von den Nutzern vorgeschlagen wurde, wurde sie innerhalb des gegebenen Zeitrahmens als unpraktisch erachtet.`
                }
            },
            {
                type: 'images',
                images: [
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screens.png'].default,
                        caption: { en: 'Final Website Screens', de: 'Endgültige Website-Bildschirme' }
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screenshots.png'].default,
                        caption: { en: 'Final Prototype Screenshots', de: 'Endgültige Prototyp-Bildschirme' }
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Figma_Design.png'].default,
                        caption: { en: 'Figma Design', de: 'Figma-Design' }
                    }
                ],
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
                    en: `Sweet Teeth was the product of our first game module. Players control a mischievous bacterium,
                        that teleports automatically in intervals. The Goal is to rot as many teeth as possible while avoiding the evil oral hygiene products.
                        It was created during the IGAME module by Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher).`,
                    de: `Sweet Teeth war das Produkt unseres ersten Spielmoduls. Die Spieler steuern ein schelmisches Karies-Bakterium,
                            das sich automatisch in Intervallen teleportiert. Das Ziel ist es, so viele Zähne wie möglich zu verrotten und dabei den bösen Mundhygieneprodukten auszuweichen.
                            Es wurde während des IGAME-Moduls von Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher) erstellt.`
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
                        text: { en: 'Play in Browser', de: 'Im Browser spielen' },
                        action: 'https://itch.io/embed-upload/9224978?color=FA98E0',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: { en: 'Download', de: 'Herunterladen' },
                        action: releaseFile('SweetTeeth.zip'),
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: {
                    en: `The game can be played in the browser or downloaded for Windows. To play the game locally, 
                        download the zip file, extract it, and run <span class="snippet">IGAME_HDL.exe</span>.`,
                    de: `Das Spiel kann im Browser gespielt oder für Windows heruntergeladen werden. Um das Spiel lokal zu spielen,
                            die Zip-Datei herunterladen, sie entpacken und anschliessend <span class="snippet">IGAME_HDL.exe</span> ausführen.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `In Sweet Teeth players take on the role of an adventurous bacterium with a teleportation power, 
                        trying to rot as many teeth as possible. Set inside a mouth, 
                        the game challenges players to avoid obstacles and survive from a furious toothbrush chasing them.`,
                    de: `In Sweet Teeth übernehmen die Spieler die Rolle eines abenteuerlustigen Bakteriums mit einer Teleportationskraft,
                            das versucht, so viele Zähne wie möglich zu verrotten. Das Spiel spielt sich in einem Mund ab,
                            und die Spieler müssen Hindernissen ausweichen und vor einer wütenden Zahnbürste fliehen.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Gameplay Mechanics', de: 'Spielmechaniken' }
            },
            {
                type: 'iconed',
                text: 'Teleportation',
                icon: 'ghost'
            },
            {
                type: 'paragraph',
                text: {
                    en: `This is the main mechanic our team was assigned to implement.
                        The bacterium automatically teleports every 1.5 seconds within a radius 
                        controlled by the player's mouse movement. Mastering this mechanic is key to survival and success.`,
                    de: `Dies ist die Hauptmechanik, die unser Team implementieren sollte.
                            Das Bakterium teleportiert sich automatisch alle 1,5 Sekunden innerhalb eines Radius,
                            der durch die Mausbewegung des Spielers gesteuert wird. Das Beherrschen dieser Mechanik ist der Schlüssel zum Überleben und Erfolg.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Obstacles', de: 'Hindernisse' },
                icon: 'tooth'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Players must avoid deadly toothbrush, mouthwash, and toothpaste while navigating the rows of teeth.`,
                    de: `Die Spieler müssen tödlichen Zahnbürsten, Mundwasser und Zahnpasta ausweichen, während sie die Zahnreihen navigieren.`
                }
            },
            {
                type: 'iconed',
                text: 'Power-Up',
                icon: 'star'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Collect enough candies to activate the "Super Rot" ability, 
                        instantly rotting all teeth within the teleportation radius for a limited time.`,
                    de: `Werden genügend Süssigkeiten gesammelt, kann die "Super Rot"-Fähigkeit zu aktiviert werden,
                            die alle Zähne innerhalb des Teleportationsradius für eine begrenzte Zeit sofort verrottet.`
                }
            },
            {
                type: 'iconed',
                text: { en: 'Score System', de: 'Punktesystem' },
                icon: 'trophy'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Players earn points by rotting teeth and can track their score with the in-game counter.
                        Try setting a new high score!`,
                    de: `Die Spieler verdienen Punkte, indem sie Zähne verrotten, und können ihre Punktzahl mit dem In-Game-Zähler verfolgen.
                            Versuchen Sie, eine neue Höchstpunktzahl zu erreichen!`
                }
            },
            {
                type: 'iconed',
                text: 'Win Condition',
                icon: 'flag-checkered'
            },
            {
                type: 'paragraph',
                text: {
                    en: `The game concludes at the finish line, where players see their score and can restart the game.`,
                    de: `Das Spiel endet an der Ziellinie, wo die Spieler ihre Punktzahl sehen und das Spiel neu starten können.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Art Style', de: 'Kunststil' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `The game features a colorful comic-style aesthetic. The main character is a green bacterium, 
                        and the environment includes pink and blue vein textures as well as rows of teeth that turn black when decayed.`,
                    de: `Das Spiel zeichnet sich durch eine farbenfrohe Comic-Ästhetik aus. Der Hauptcharakter ist ein grünes Bakterium,
                            und die Umgebung umfasst rosa und blaue Adertexturen sowie Zahnreihen, die schwarz werden, wenn sie verrottet sind.`
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Enemies like toothpaste and mouthwash feature blue tones, contrasting against the colorful collectable candies.`,
                    de: `Feinde wie Zahnpasta und Mundwasser haben blaue Töne, die im Kontrast zu den bunten sammelbaren Süssigkeiten stehen.`
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: `All sprites were hand-drawn in Adobe Illustrator, emphasizing bold outlines and highlights.`,
                    de: `Alle Sprites wurden von Hand in Adobe Illustrator gezeichnet, wobei die Betonung auf kräftigen Umrissen und Highlights lag.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Development Process', de: 'Entwicklungsprozess' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `When developing the initial concept, the team brainstormed and prototyped the teleportation mechanic, 
                        focusing on simplicity and fun.`,
                    de: `Bei der Entwicklung des ersten Konzepts brainstormte das Team und prototypisierte die Teleportationsmechanik,
                            wobei der Fokus auf Einfachheit und Spass lag.`
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Regular testing and feedback refined the gameplay loop, balancing the difficulty and pacing of the game.
                        Iterative development allowed for continuous improvement and polish.`,
                    de: `Regelmässige Tests und Feedback verfeinerten die Gameplay-Schleife, um die Schwierigkeit und das Tempo des Spiels auszugleichen.
                            Iterative Entwicklung ermöglichte kontinuierliche Verbesserung und Politur.`
                }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Custom sounds were added for teleportation, candy collection, and win/lose conditions.`,
                    de: `Benutzerdefinierte Sounds wurden für Teleportation, Süssigkeitensammlung und Gewinn-/Verlustbedingungen hinzugefügt.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'Team Roles', de: 'Teamrollen' }
            },
            {
                type: 'iconed',
                text: { en: 'Team HDL (all team members)', de: 'Team HDL (alle Teammitglieder)' },
                icon: 'users'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Conceptualized the game idea and mechanics',
                    de: 'Konzeptualisierung der Spielidee und Mechaniken'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Discussed and iterated on the game design and art style',
                    de: 'Diskussion und Iteration des Spieldesigns und Kunststils'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Wrote DevDiary entries to document the development process',
                    de: 'Schreiben von DevDiary-Einträgen zur Dokumentation des Entwicklungsprozesses'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Designers (Chiara & Michelle)', de: 'Designer (Chiara & Michelle)' },
                icon: 'pen-nib'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Established the art style and user interface design',
                    de: 'Festlegung des Kunststils und des Designs der Benutzeroberfläche'
                }
            },
            {
                type: 'bullet',
                text: { en: 'Hand-drew all sprites and backgrounds', de: 'Handzeichnung aller Sprites und Hintergründe' }
            },
            {
                type: 'bullet',
                text: { en: 'Designed the game\'s visual identity', de: 'Design der visuellen Identität des Spiels' }
            },
            {
                type: 'iconed',
                text: { en: 'Programmers (Lukas & Dario)', de: 'Programmierer (Lukas & Dario)' },
                icon: 'code'
            },
            {
                type: 'bullet',
                text: { en: 'Created an engaging level design', de: 'Erstellung eines ansprechenden Leveldesigns' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Developed the game mechanics and interactions',
                    de: 'Entwicklung der Spielmechaniken und Interaktionen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Implemented asset integration and sound effects',
                    de: 'Implementierung der Asset-Integration und Soundeffekte'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Challenges', de: 'Herausforderungen' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Balancing teleportation mechanics to ensure intuitive and responsive gameplay',
                    de: 'Ausbalancieren der Teleportationsmechanik, um ein intuitives und reaktionsschnelles Gameplay zu gewährleisten.'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Designing a visually cohesive world within strict sprite limitations (10 sprites, 3 animations per sprite)',
                    de: 'Entwurf einer visuell kohärenten Welt innerhalb strenger Sprite-Beschränkungen (10 Sprites, 3 Animationen pro Sprite)'
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
                        caption: { en: 'Game Over Screen', de: 'Game Over Bildschirm' }
                    },
                    {
                        src: sweetteethFiles['../projects/sweetteeth/SweetTeeth_WellDone.png'].default,
                        caption: { en: 'Win Screen', de: 'Gewonnen Bildschirm' }
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
                text: 'SweetTeeth.zip (Windows)',
                url: releaseFile('SweetTeeth.zip'),
                icon: 'file-archive'
            },
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
                    en: `In the Kickstart Visual Design course, we were taught design fundamentals and principles.
                        We learned about many influential designers and design studios, one of which we were tasked to focus on for a presentation and final project.
                        The final project I developed is inpired by the distinct visual style of the dutch design studio 'The Rodina'.

                        For animating and editing a scanned 3D modeling of my head I used Cinema 4D, video editing, sound design and color correction was done in Adobe Premiere Pro.
                        The project integrates feedback and experimentation to achieve a polished visual result.`,
                    de: `Im Modul Kickstart Visual Design wurden uns die Grundlagen und Prinzipien des Designs beigebracht.
                            Wir lernten viele einflussreiche Designer:innen und Designstudios kennen, von denen wir uns eines für eine Präsentation und ein Abschlussprojekt aussuchen mussten.
                            Das Abschlussprojekt, das ich entwickelt habe, ist inspiriert vom unverwechselbaren visuellen Stil des niederländischen Designstudios 'The Rodina'.
                            Für die Animation und Bearbeitung eines gescannten 3D-Modells meines Kopfes habe ich Cinema 4D verwendet, die Videobearbeitung, das Sounddesign und die Farbkorrektur wurden in Adobe Premiere Pro durchgeführt.
                            Das Projekt integriert Feedback und Experimente, um ein poliertes visuelles Ergebnis zu erzielen.`
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
                text: { en: 'Process', de: 'Prozess' }
            },
            {
                type: 'iconed',
                text: { en: 'Conceptualization', de: 'Konzeptualisierung' },
                icon: '1'
            },
            {
                type: 'paragraph',
                text: {
                    en: `The project was inspired primarily by two works of The Rodina. 
                        The idea was to scan my head and design a piece that reflects their aesthetic style, 
                        incorporating vibrant visuals and motion.`,
                    de: `Das Projekt wurde hauptsächlich von zwei Werken von The Rodina inspiriert.
                            Die Idee war, meinen Kopf zu scannen und ein Stück zu entwerfen, das ihren ästhetischen Stil widerspiegelt,
                            indem lebendige Visuals und Bewegung integriert werden.`
                }
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
                text: { en: 'Initial 3D Scan', de: 'Erster 3D-Scan' },
                icon: '2'
            },
            {
                type: 'paragraph',
                text: {
                    en: `A 3D scan of my head was taken as the base, using the mobile app Polycam. 
                        This raw scan was refined in Cinema4D, including modifications such as 
                        distorting the eye area for an abstract effect.`,
                    de: `Ein 3D-Scan meines Kopfes wurde als Basis mit der mobilen App Polycam erstellt.
                            Dieser Rohscan wurde in Cinema4D verfeinert, einschliesslich Modifikationen wie
                            der Verzerrung des Augenbereichs für einen abstrakten Effekt.`
                }
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/scans.webp'].default,
                        caption: { en: 'Raw Scan & Edit', de: 'Rohscan & Bearbeitung' }
                    },
                    {
                        src: rodinaFiles['../projects/rodina/scan_c4d.jpg'].default,
                        caption: 'Scan in Cinema4D'
                    }
                ]
            },
            {
                type: 'iconed',
                text: { en: 'Visual Variations', de: 'Visuelle Variationen' },
                icon: '3'
            },
            {
                type: 'paragraph',
                text: {
                    en: `I experimented with static poster designs and animated video concepts. 
                        In the end, I settled on the latter for a more dynamic presentation.`,
                    de: `Ich experimentierte mit statischen Posterdesigns und animierten Videokonzepten.
                            Am Ende entschied ich mich für Letzteres für eine dynamischere Präsentation.`
                }
            },
            {
                type: 'images',
                images: [
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
                type: 'iconed',
                text: 'Feedback',
                icon: '4'
            },
            {
                type: 'paragraph',
                text: {
                    en: `Some feedback I got in the first round was, that the colors were too bright, and the head rotation too fast.`,
                    de: `Einige Rückmeldungen, die ich in der ersten Runde erhielt, waren, dass die Farben zu hell und die Kopfrotation zu schnell waren.`
                }
            },
            {
                type: 'subheading',
                text: { en: 'First Version', de: 'Erste Version' }
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
                text: {
                    en: 'Adjusted colors for better balance & refined animation to slow down the rotation',
                    de: 'Farben für bessere Balance angepasst & Animation verfeinert, um die Rotation zu verlangsamen'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Played with object placement, shadows and text design',
                    de: 'Mit Objektplatzierung, Schatten und Textdesign gespielt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Integrated audio to enhance the final video',
                    de: 'Audio integriert, um das endgültige Video zu verbessern'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A total of 8 iterations resulted in the final video.',
                    de: 'Insgesamt 8 Iterationen führten zum endgültigen Video.'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Final Result', de: 'Endergebnis' },
                icon: '6'
            },
            {
                type: 'paragraph',
                text: {
                    en: `The final animation combines the best elements of previous iterations, 
                        blending balanced colors, smooth animations, and thoughtful object placement. 
                        It reflects The Rodina's essence while incorporating unique personal elements.`,
                    de: `Die endgültige Animation kombiniert die besten Elemente der vorherigen Iterationen,
                            indem ausgewogene Farben, flüssige Animationen und durchdachte Objektplatzierung miteinander verschmelzen.
                            Es reflektiert das Wesen von The Rodina und integriert gleichzeitig einzigartige persönliche Elemente.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Presentation', de: 'Präsentation' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Prior to the final project, a short presentation was held to introduce The Rodina and their work. 
                        It can be found under the downloads section.`,
                    de: `Vor dem Abschlussprojekt wurde eine kurze Präsentation gehalten, um The Rodina und ihre Arbeit vorzustellen.
                            Sie kann im Download-Bereich gefunden werden.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Further Work', de: 'Weitere Arbeiten' }
            },
            {
                type: 'paragraph',
                text: {
                    en: `Throughout the Kickstart Visual Design module, we did various other exercises and projects.
                        With these, we explored typography, color theory, and visual hierarchy, among other topics.
                        An interactive documentation of the module with my work can be found under the downloads section.`,
                    de: `Im Laufe des Kickstart Visual Design Moduls haben wir verschiedene andere Übungen und Projekte durchgeführt.
                            Mit diesen haben wir Typografie, Farbtheorie und visuelle Hierarchie unter anderem erkundet.
                            Eine interaktive Dokumentation des Moduls mit meinen Arbeiten kann im Download-Bereich gefunden werden.`
                }
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
                text: { en: 'TheRodina_Presentation.ppsx', de: 'TheRodina_Präsentation.ppsx' },
                url: releaseFile('The_Rodina_Presentation.ppsx'),
                icon: 'file-powerpoint'
            },
            {
                text: { en: 'KIVIS_Documentation.ppsx', de: 'KIVIS_Dokumentation.ppsx' },
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
                    en: `This was my first encounter with 3D design and rendering. 
                        As a final project we were tasked to create a video, applying everything we learned within the course.
                        We decided to animate an asteroid soaring past the planets of our solar system, 
                        ending in a dramatic collision with Earth. It was created using Cinema 4D with Chaos Corona.
                        The project was executed as a team effort between myself and Silvan Parodi.`,
                    de: `Dies war meine erste Begegnung mit 3D-Design und Rendering.
                            Als Abschlussprojekt wurden wir beauftragt, ein Video zu erstellen, in dem wir alles anwenden, was wir im Kurs gelernt haben.
                            Wir entschieden uns, einen Asteroiden zu animieren, der an den Planeten unseres Sonnensystems vorbeifliegt
                            und in einer dramatischen Kollision mit der Erde endet. Es wurde mit Cinema 4D und Chaos Corona erstellt.
                            Das Projekt wurde als Teamarbeit zwischen mir und Silvan Parodi ausgeführt.`
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
                text: { en: 'Other Renders', de: 'Weitere Renderings' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'Through the C4D Authoring module, some renders were created as part of the learning process. Here are a few examples:',
                    de: 'Im Rahmen des C4D Authoring Moduls wurden einige Renderings als Teil des Lernprozesses erstellt. Hier sind einige Beispiele:'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Homework 1: Chaos', de: 'Hausaufgabe 1: Chaos' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'A chaotic yet aesthetic assembly of shapes and objects',
                    de: 'Eine chaotische, aber ästhetische Anordnung von Formen und Objekten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'render emphasizes randomness and texture experimentation',
                    de: 'Das Rendering betont Zufälligkeit und Textur-Experimente'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Homework 2: Vodka Bottle', de: 'Hausaufgabe 2: Wodkaflasche' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Three variants of vodka bottles with unique, self-designed labels',
                    de: 'Drei Varianten von Wodkaflaschen mit einzigartigen, selbst gestalteten Etiketten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Bottle and glass 3D assets imported from Cinema 4D library',
                    de: 'Flaschen- und Glas-3D-Assets aus der Cinema 4D-Bibliothek importiert'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Composition & ice cubes and lime created from scratch',
                    de: 'Komposition & Eiswürfel und Limette von Grund auf neu erstellt'
                }
            },
            {
                type: 'heading',
                text: { en: 'Pictures', de: 'Bilder' }
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
            },
        ],
        sections: [
            {
                type: 'quoted',
                text: {
                    en: `This project aimed to explore the potential of browser-based solutions for internal organizational tools 
                        by creating a functional Chrome extension. It represents Suva's SAFe team structures and offers easy access 
                        to hierarchical data, catering to both administrative and operational needs.`,
                    de: `Dieses Projekt zielte darauf ab, das Potenzial von browserbasierten Lösungen für interne Organisationstools zu erkunden,
                            indem eine funktionale Chrome-Erweiterung erstellt wurde. Sie repräsentiert die SAFe-Teamstrukturen von Suva und bietet einfachen Zugang
                            zu hierarchischen Daten, die sowohl administrative als auch operative Bedürfnisse abdecken.`
                }
            },
            {
                type: 'heading',
                text: { en: 'Pictures', de: 'Bilder' }
            },
            {
                type: 'images',
                images: [
                    {
                        src: paFiles['../projects/pa/pa_big_picture.png'].default,
                        caption: { en: 'Project Structure (Big Picture)', de: 'Projektstruktur (Big Picture)' }
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_home.png'].default,
                        caption: { en: 'Main Page with additional Info-Apps', de: 'Hauptseite mit zusätzlichen Info-Apps' }
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
                        caption: { en: 'Hierarchical & Detail View in Dark Mode', de: 'Hierarchische & Detailansicht im Dunkelmodus' }
                    }
                ],
            },
            {
                type: 'heading',
                text: { en: 'Project Description', de: 'Projektbeschreibung' }
            },
            {
                type: 'subheading',
                text: { en: 'Objectives', de: 'Ziele' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Develop a modular framework for the Chrome extension',
                    de: 'Entwicklung eines modularen Frameworks für die Chrome-Erweiterung'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Create a main page listing available modules ("Info-Apps")',
                    de: 'Erstellung einer Hauptseite, die verfügbare Module ("Info-Apps") auflistet'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Implement the "Suva SAFe" app as the first module',
                    de: 'Implementierung der "Suva SAFe"-App als erstes Modul'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Provide hierarchical navigation within the "Suva SAFe" app',
                    de: 'Bereitstellung einer hierarchischen Navigation innerhalb der "Suva SAFe"-App'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Add user personalization options such as dark/light themes',
                    de: 'Hinzufügen von Benutzeranpassungsoptionen wie Dunkel-/Hellmodus'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Features', de: 'Funktionen' }
            },
            {
                type: 'iconed',
                text: { en: 'Main Page', de: 'Hauptseite' },
                icon: 'home'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Lists available modules, starting with the "Suva SAFe" Info-App',
                    de: 'Listet verfügbare Module auf, beginnend mit der "Suva SAFe"-Info-App'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Hierarchical View', de: 'Hierarchische Ansicht' },
                icon: 'sitemap'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Displays SAFe ARTs (Agile Release Trains), Products, Teams, and individual team members in a collapsible tree format',
                    de: 'Zeigt SAFe ARTs (Agile Release Trains), Produkte, Teams und einzelne Teammitglieder in einem aufklappbaren Baumformat an'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Detail View', de: 'Detailansicht' },
                icon: 'magnifying-glass'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Provides role-specific information, such as emails, phone numbers, and descriptions, with interactive links for actionable insights',
                    de: 'Bietet rollenbezogene Informationen wie E-Mails, Telefonnummern und Beschreibungen mit interaktiven Links für umsetzbare Einblicke'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Customization', de: 'Anpassung' },
                icon: 'paint-brush'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Allows users to toggle between dark and light modes',
                    de: 'Ermöglicht Benutzern das Umschalten zwischen Dunkel- und Hellmodus'
                }
            },
            {
                type: 'subheading',
                text: { en: 'Methodology', de: 'Methodik' }
            },
            {
                type: 'paragraph',
                text: {
                    en: 'The project followed the IPERKA method (Inform, Plan, Decide, Execute, Control, Evaluate):',
                    de: 'Das Projekt folgte der IPERKA-Methode (Informieren, Planen, Entscheiden, Realisieren, Kontrollieren, Auswerten):'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Inform', de: 'Informieren' },
                icon: 'i'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Research on Chrome Extension API and RESTful data integration',
                    de: 'Recherche zur Chrome Extension API und RESTful-Datenintegration'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Plan', de: 'Planen' },
                icon: 'p'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Define milestones and use user stories to prioritize functionalities',
                    de: 'Definition von Meilensteinen und Nutzung von User Stories zur Priorisierung von Funktionen'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Decide', de: 'Entscheiden' },
                icon: 'e'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Evaluate and finalize the requirements for the application to meet project goals',
                    de: 'Bewertung und Finalisierung der Anforderungen an die Anwendung zur Erreichung der Projektziele'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Execute', de: 'Realisieren' },
                icon: 'r'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Implement features iteratively, focusing on modularity and user experience',
                    de: 'Iterative Implementierung von Funktionen mit Fokus auf Modularität und Benutzerfreundlichkeit'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Control', de: 'Kontrollieren' },
                icon: 'k'
            },
            {
                type: 'bullet',
                text: {
                    en: 'Test against user story acceptance criteria',
                    de: 'Testen gegen die Akzeptanzkriterien der User Stories'
                }
            },
            {
                type: 'iconed',
                text: { en: 'Evaluate', de: 'Auswerten' },
                icon: 'a'
            },
            {
                type: 'bullet',
                text: { en: 'Document outcomes and lessons learned', de: 'Dokumentation der Ergebnisse und Erkenntnisse' }
            },
            {
                type: 'subheading',
                text: { en: 'Key Achievements', de: 'Wichtige Erfolge' }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Successfully integrated REST APIs to fetch organizational data',
                    de: 'Erfolgreiche Integration von REST-APIs zur Abrufung von Organisationsdaten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Combined two different REST APIs to ensure complete employee data coverage',
                    de: 'Kombination von zwei verschiedenen REST-APIs zur Sicherstellung vollständiger Mitarbeiterdaten'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Built a dynamic, hierarchical structure that supports effortless navigation',
                    de: 'Erstellung einer dynamischen, hierarchischen Struktur, die eine mühelose Navigation unterstützt'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Implemented a user-friendly interface with a focus on simplicity and adaptability',
                    de: 'Implementierung einer benutzerfreundlichen Oberfläche mit Fokus auf Einfachheit und Anpassungsfähigkeit'
                }
            },
            {
                type: 'bullet',
                text: {
                    en: 'Delivered thorough documentation covering installation, testing, and technical details',
                    de: 'Bereitstellung einer umfassenden Dokumentation, die Installation, Tests und technische Details abdeckt'
                }
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


