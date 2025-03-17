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

export const projekte = [
    // hearts across dimensions
    {
        id: 'had',
        name: 'hearts across dimensions',
        description: 'visual novel / dating sim game',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz & Emmenbrücke',
                'Modul MEN3 - Mentorat Semester 3'
            ],
            url: 'https://www.hslu.ch/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            'coding',
            'game',
            'story',
        ],
        sections: [
            {
                type: 'quoted',
                text: `Hearts across Dimensions ist ein Visual Novel-Dating-Sim, bei dem die Spieler die Geschichten von fünf einzigartigen Charakteren erkunden.
                        Es baut auf dem vorherigen Mentorat Semester 2 Projekt von Angelika Gort auf, bei dem sie die Charakterdesigns erstellt hat.
                        Die Demo wurde von Angelika Gort und mir unter der Mentorschaft von Zoe Röllin im Rahmen des Mentorate Semester 3 entwickelt.
                        Derzeit bietet das Spiel Charaktereinführungen, mit geplanten zukünftigen Erweiterungen.
                        Wir werden das Spiel im Mentorat Semester 4 weiterentwickeln, mit einem Fokus auf die Erweiterung von Story und Character Art.`
            },
            {
                type: 'heading',
                text: 'Spiele die Demo'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Im Browser spielen / Herunterladen',
                        action: 'https://jfladas.itch.io/hearts-across-dimensions',
                        icon: 'play',
                        color: 'primary'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Installations- & Spielanweisungen'
            },
            {
                type: 'paragraph',
                text: `Das Spiel wurde hauptsächlich für Mobile im Porträt-Layout entwickelt, ist aber auch auf Desktop und im Querformat spielbar.`
            },
            {
                type: 'iconed',
                text: 'Web (Mobile/Desktop)',
                icon: 'globe'
            },
            {
                type: 'bullet',
                text: 'Um direkt im Browser zu spielen auf der itch.io-Seite auf <span class="snippet">Spiel starten</span> klicken'
            },
            {
                type: 'bullet',
                text: 'Je nach Gerät oder Browserkompatibilität können Probleme auftreten'
            },
            {
                type: 'iconed',
                text: 'Android',
                icon: 'fa-brands fa-android'
            },
            {
                type: 'bullet',
                text: 'Android-Build von der itch.io-Seite herunterladen'
            },
            {
                type: 'bullet',
                text: '<span class="snippet">HaD.apk</span> ausführen, um das Spiel zu installieren und zu öffnen'
            },
            {
                type: 'bullet',
                text: 'Das Spiel wird danach als App auf dem Gerät zugänglich sein'
            },
            {
                type: 'iconed',
                text: 'Windows',
                icon: 'fa-brands fa-windows'
            },
            {
                type: 'bullet',
                text: 'Windows-Build von der itch.io-Seite herunterladen'
            },
            {
                type: 'bullet',
                text: '<span class="snippet">HaD (Demo).exe</span> ausführen, um das Spiel zu starten'
            },
            {
                type: 'subheading',
                text: 'Spieler-Feedback'
            },
            {
                type: 'paragraph',
                text: 'Wir schätzen jedes Feedback, um das Erlebnis zu verbessern. Meinungen und Rückmeldungen können über die Umfrage gegeben werden:'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Umfrage ausfüllen',
                        action: 'https://forms.gle/PsgVsrwjZVm16WpdA',
                        icon: 'arrow-right',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'heading',
                text: 'Projektbeschreibung'
            },
            {
                type: 'subheading',
                text: 'Charaktere'
            },
            {
                type: 'paragraph',
                text: `Das Spiel bietet fünf Charaktere mit einzigartigen Persönlichkeiten und Handlungssträngen. Die Spieler können wählen, mit welchem Charakter sie interagieren möchten, was zu unterschiedlichen Ergebnissen und Dialogen führt.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: hadFiles['../projects/had/Characters.jpg'].default,
                        caption: 'Charaktere'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'Geschichte'
            },
            {
                type: 'paragraph',
                text: `Eine mysteriöse Frau scheitert daran, ihre Dimension vor interdimensionalen Wesen zu schützen. Bevor sie stirbt, sendet sie einen blutbefleckten Brief über Dimensionen hinweg, um ihren Nachfolger zu warnen.
                        Der/Die Protagonist:in beginnt einen neuen Job bei einer Hochzeitsplanungsfirma. Bald ereignen sich seltsame Ereignisse, wie ein sich ständig veränderndes Gebäude, eine Zeitschleife und ein... Pferd?
                        Von einem Erdbeben in einen Bunker gezwungen trifft man auf einige bekannte Gesichter. Die Wahl, wem Vertrauen geschenkt wird, legt den Grundstein für die nächsten Kapitel.`
            },
            {
                type: 'subheading',
                text: 'Pläne für MEN4'
            },
            {
                type: 'bullet',
                text: 'Hintergründe zeichnen'
            },
            {
                type: 'bullet',
                text: 'Charaktere mit Schattierungen'
            },
            {
                type: 'bullet',
                text: 'Illustrationen'
            },
            {
                type: 'bullet',
                text: 'Geschichte von mindestens einem Charakter bis zum Ende'
            },
            {
                type: 'bullet',
                text: 'Minispiel'
            },
            {
                type: 'bullet',
                text: 'Menü mit Kapitelübersicht und Galerie'
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
                text: 'itch.io Seite',
                url: 'https://jfladas.itch.io/hearts-across-dimensions',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Spieler-Umfrage',
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
                text: 'Präsentation.ppsx',
                url: hadFiles['../projects/had/MEN3.ppsx'].default,
                icon: 'file-powerpoint'
            }
        ]
    },
    // spütify
    {
        id: 'sputify',
        name: 'spütify',
        description: 'webseite zur interaktiven musikvisualisierung',
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                'Modul STUWE1 - Studio Web & Mobile 1'
            ],
            url: 'https://www.hslu.ch/de-ch/design-film-kunst/',
            icon: 'graduation-cap',
            tooltip: 'schule'
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
                text: `Eine Webanwendung, die den Musikgeschmack eines Benutzers durch eine interaktive Zeitreise visualisiert. Entwickelt mit der Spotify API und der Google Gemini API von Laura Giaimo, Lisa Landolt, Lukas Bucher und Marin Hirschi, ermöglicht die App den Benutzern, die Veränderung ihres Musikgeschmacks über die Jahre dynamisch zu erkunden. Das Projekt integriert Echtzeit-Datenvisualisierung und interaktive Elemente, um eine personalisierte Musikreise zu schaffen.`
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
                text: 'Projektbeschreibung'
            },
            {
                type: 'subheading',
                text: 'Forschungsfrage'
            },
            {
                type: 'paragraph',
                text: 'Wie kann die Visualisierung des Musikgeschmacks in Form einer interaktiven Zeitreise das persönliche Musikerlebnis vertiefen?'
            },
            {
                type: 'subheading',
                text: 'Kernidee'
            },
            {
                type: 'paragraph',
                text: `Die "Musikreise" ist eine scrollbare Zeitleiste, die die Entwicklung des Musikgeschmacks des Benutzers aufzeichnet. Benutzer können durch verschiedene Zeiträume navigieren, einschliesslich:`
            },
            {
                type: 'bullet',
                text: 'Letzte 4 Wochen'
            },
            {
                type: 'bullet',
                text: 'Letzte 6 Monate'
            },
            {
                type: 'bullet',
                text: 'Letztes Jahr'
            },
            {
                type: 'bullet',
                text: 'Vergangene drei Jahre (2023-2021)'
            },
            {
                type: 'paragraph',
                text: 'Jeder Abschnitt visualisiert dynamisch:'
            },
            {
                type: 'bullet',
                text: 'Top Songs'
            },
            {
                type: 'bullet',
                text: 'Top Künstler'
            },
            {
                type: 'bullet',
                text: 'Top Genres'
            },
            {
                type: 'paragraph',
                text: 'Zusätzlich sammeln Benutzer Abzeichen basierend auf ihren Hörgewohnheiten. Am Ende der Reise können sie personalisierte Bilder generieren und teilen, die ihre Musikhistorie zusammenfassen.'
            },
            {
                type: 'paragraph',
                text: 'Die Zielgruppe sind Premium-Spotify-Nutzer der jüngeren Generationen, insbesondere langjährige Spotify-Nutzer, die eine ansprechende Retrospektive ihres Musikgeschmacks suchen.'
            },
            {
                type: 'subheading',
                text: 'Teamverantwortlichkeiten'
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
                text: 'Frontend-Entwicklung'
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
                text: 'Frontend-Entwicklung'
            },
            {
                type: 'bullet',
                text: 'Backend-Entwicklung'
            },
            {
                type: 'iconed',
                text: 'Marin Hirschi',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Frontend-Entwicklung'
            },
            {
                type: 'bullet',
                text: 'Backend-Entwicklung'
            },
            {
                type: 'subheading',
                text: 'Technologien'
            },
            {
                type: 'iconed',
                text: 'Frontend',
                icon: 'desktop'
            },
            {
                type: 'bullet',
                text: 'Vue.js für die Frontend-Entwicklung'
            },
            {
                type: 'bullet',
                text: 'D3.js für dynamische Datenvisualisierung'
            },
            {
                type: 'bullet',
                text: 'GSAP für Scroll-Animationen'
            },
            {
                type: 'bullet',
                text: 'Lenis für ein flüssiges Scroll-Erlebnis'
            },
            {
                type: 'iconed',
                text: 'Backend',
                icon: 'server'
            },
            {
                type: 'bullet',
                text: 'Node.js für den Backend-Server'
            },
            {
                type: 'bullet',
                text: 'Express für Backend-Routing'
            },
            {
                type: 'iconed',
                text: 'APIs',
                icon: 'cloud'
            },
            {
                type: 'bullet',
                text: 'Spotify API für die Benutzer-Datenabfrage'
            },
            {
                type: 'bullet',
                text: 'Spotify Web Playback SDK für die Musikwiedergabe'
            },
            {
                type: 'bullet',
                text: 'Google Gemini API für fehlende Track-Daten'
            },
            {
                type: 'iconed',
                text: 'Design & Prototyping',
                icon: 'palette'
            },
            {
                type: 'bullet',
                text: 'Figma für Design & Prototyping'
            },
            {
                type: 'bullet',
                text: 'PowerPoint für Design & Prototyping'
            },
            {
                type: 'iconed',
                text: 'Testing',
                icon: 'vial'
            },
            {
                type: 'bullet',
                text: 'Vitest für Unit-Tests'
            },
            {
                type: 'bullet',
                text: 'Cypress für End-to-End-Tests'
            },
            {
                type: 'images',
                images: [
                    {
                        src: sputifyFiles['../projects/sputify/ProjectArchitecture.jpg'].default,
                        caption: 'Projektarchitektur'
                    }
                ]
            },
            {
                type: 'subheading',
                text: 'UX-Testeinblicke'
            },
            {
                type: 'bullet',
                text: 'Hinweis: "Für das beste Erlebnis, stellen Sie sicher, dass der Ton eingeschaltet ist"'
            },
            {
                type: 'bullet',
                text: 'Die Blase sollte mit geringer Intensität und ohne Farbe beginnen'
            },
            {
                type: 'bullet',
                text: 'Der erste Song sollte sofort abgespielt werden und den aktuell spielenden Song anzeigen'
            },
            {
                type: 'bullet',
                text: 'Es sollte eine Überschrift vor dem Teilen-Abschnitt hinzugefügt werden'
            },
            {
                type: 'bullet',
                text: 'Der Pfeil nach unten anklickbar machen oder einen kleinen Text hinzufügen, der "bitte scrollen" sagt'
            },
            {
                type: 'bullet',
                text: 'Erweiterbare Akkordeons für Top-Künstler hinzufügen, um Abwechslung zu den Top-Songs zu bieten'
            },
            {
                type: 'subheading',
                text: 'Herausforderungen & Lösungen'
            },
            {
                type: 'iconed',
                text: 'API-Endpunkte abgeschaltet',
                icon: 'ban'
            },
            {
                type: 'paragraph',
                text: `Viele wichtige Spotify API-Endpunkte wurden ohne Vorankündigung abgeschaltet, während wir am Projekt arbeiteten, was einen neuen Ansatz zur Datenabfrage erforderte. 
                            Wir experimentierten mit der Google Gemini API, um fehlende Track-Daten zu sammeln, und implementierten eine alternative Lösung für das Abrufen der Wrapped-Daten.
                            Dies ermöglichte es uns, das Projekt erfolgreich fortzusetzen und abzuschliessen, wobei die Kernfunktionalität erhalten blieb.`
            },
            {
                type: 'iconed',
                text: 'API-Integration',
                icon: 'cogs'
            },
            {
                type: 'paragraph',
                text: `Die Integration der Spotify API und der Google Gemini API war herausfordernd, da es das erste Mal war, dass wir mit diesen Technologien arbeiteten.
                            Wir überwanden dies, indem wir die APIs gründlich recherchierten, mit verschiedenen Endpunkten experimentierten und eng zusammenarbeiteten.
                            Durch Versuch und Irrtum und die wertvolle Unterstützung unserer Dozierenden gelang es uns, die gewünschten Funktionen zu implementieren.`
            },
            {
                type: 'iconed',
                text: 'Blasenvisualisierung',
                icon: 'splotch'
            },
            {
                type: 'paragraph',
                text: `Die Erstellung der Blasenvisualisierung war aufgrund der dynamischen Daten und der Notwendigkeit für flüssige Übergänge komplex.
                            Wir lösten dies, indem wir viel in D3.js mit verschiedenen Blasenlayouts und -skalen experimentierten und die Blasengrösse und -farbe basierend auf den Daten anpassten.
                            Dies führte zu einer ansprechenden und interaktiven Visualisierung, die die Stimmung und Energie des Songs darstellt.`
            },
            {
                type: 'iconed',
                text: 'Scroll-Animation',
                icon: 'mouse-pointer'
            },
            {
                type: 'paragraph',
                text: `Die Implementierung von Scroll-Funktionalitäten war aufgrund der Verwendung verschiedener Scroll-Bibliotheken herausfordernd.
                            Wir lösten dies, indem wir GSAP und Lenis verwendeten, um ein flüssiges und interaktives Scroll-Erlebnis zu schaffen.
                            Durch Testen und Anpassen der Scroll-Geschwindigkeit und -Animationen konnten wir nach mehreren Iterationen den gewünschten Effekt erzielen.`
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
                        caption: 'Login-Seite Mobil'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Journey.jpg'].default,
                        caption: 'Musikreise'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopSongs.jpg'].default,
                        caption: 'Top-Songs-Bereich Mobil'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/TopArtists.jpg'].default,
                        caption: 'Top-Künstler-Bereich'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Focus.jpg'].default,
                        caption: 'Fokus-Modus Mobil'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Badges.jpg'].default,
                        caption: 'Abzeichensammlung'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Menu.jpg'].default,
                        caption: 'Menü Mobil'
                    },
                    {
                        src: sputifyFiles['../projects/sputify/Share.jpg'].default,
                        caption: 'Teilen-Seite'
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
                text: 'Projektsetup'
            },
            {
                type: 'iconed',
                text: 'Projekt klonen',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Das Projekt-Repository in ein lokales Verzeichnis klonen'
            },
            {
                type: 'iconed',
                text: 'Abhängigkeiten installieren',
                icon: '2'
            },
            {
                type: 'bullet',
                text: '<span class="snippet hoverable tooltip copy" tooltip="copy">npm install</span> ausführen, um alle notwendigen Abhängigkeiten zu installieren'
            },
            {
                type: 'iconed',
                text: 'Entwicklungsserver starten',
                icon: '3'
            },
            {
                type: 'bullet',
                text: '<span class="snippet hoverable tooltip copy" tooltip="copy">npm run dev</span> ausführen, um den Entwicklungsserver mit Hot-Reload zu starten'
            },
            {
                type: 'iconed',
                text: 'Anwendung aufrufen',
                icon: '4'
            },
            {
                type: 'bullet',
                text: '<span class="snippet hoverable tooltip copy" tooltip="copy">http://localhost:5173/</span> im Browser öffnen, um die Anwendung anzuzeigen'
            },
            {
                type: 'bullet',
                text: 'Mit einem registrierten Spotify-Konto anmelden, um die Musikreise zu erkunden'
            },
            {
                type: 'iconed',
                text: 'Für Tests ist eine manuelle Registrierung der Spotify-E-Mail-Adresse erforderlich.<br>Für den Zugang bitte <a href="/about#contact" class="bold hoverable">mich kontaktieren</a>.',
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
                text: 'Figma Prototyp Desktop',
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=694%3A5979&node-id=694-7596&p=f&viewport=-336%2C352%2C0.08&t=icFqiCaQGxwdGQyL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=694%3A7596',
                icon: 'fa-brands fa-figma'
            },
            {
                text: 'Figma Prototyp Mobil',
                url: 'https://www.figma.com/proto/pS7n7HHNk0weXyXnUbWt2r/Design-Library?page-id=838%3A8681&node-id=838-9683&p=f&viewport=-781%2C374%2C0.08&t=I6fzqdYEK93WZXZn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=838%3A9683',
                icon: 'fa-brands fa-figma'
            }
        ],
        downloads: [
            {
                text: 'Dokumentation.pdf',
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
        description: 'serious game über nachhaltigkeit und abfall',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'International Summer School on Designing Serious Games'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            'game'
        ],
        sections: [
            {
                type: 'quoted',
                text: `EcoHome ist ein strategisches Brettspiel, das sich auf Abfall und Nachhaltigkeit in modernen Schweizer Haushalten konzentriert. 
                            Die Spieler übernehmen verschiedene Rollen und müssen tägliche Aktionen ausbalancieren, um Müll zu reduzieren und gleichzeitig ihre Zufriedenheit beizubehalten oder zu erhöhen. 
                            Das Spiel erstreckt sich über eine Woche, wobei jeder Zug einen Tag darstellt. Die Spieler erhalten sofortiges Feedback zu ihren Entscheidungen, was ihnen ermöglicht, ihre Strategien anzupassen.
                            Als Abschlussprojekt der International Summer School on Designing Serious Games wurde dieses Spiel in einem Team von drei Personen mit Lisa Landolt und Julian Schwarz entwickelt.`
            },
            {
                type: 'heading',
                text: 'Spielübersicht'
            },
            {
                type: 'subheading',
                text: 'Ziel'
            },
            {
                type: 'iconed',
                text: 'Müll minimieren, Glücklichsein maximieren',
                icon: 'smile'
            },
            {
                type: 'paragraph',
                text: `Am Ende der Woche gewinnt der Spieler mit den wenigsten Müllsäcken.`
            },
            {
                type: 'subheading',
                text: 'Herausforderungen'
            },
            {
                type: 'bullet',
                text: 'Ressourcen effizient verwalten'
            },
            {
                type: 'bullet',
                text: 'Sich an zufällige Ereignisse anpassen, die das tägliche Leben beeinflussen'
            },
            {
                type: 'bullet',
                text: 'Kluge Kaufentscheidungen treffen, um Müll zu minimieren'
            },
            {
                type: 'subheading',
                text: 'Spieleraktionen'
            },
            {
                type: 'iconed',
                text: 'Lebensmitteleinkauf',
                icon: 'shopping-cart'
            },
            {
                type: 'paragraph',
                text: 'Kaufe Lebensmittel und wiederverwendbare Gegenstände, um Ressourcen effektiv zu verwalten und Müll zu minimieren.'
            },
            {
                type: 'iconed',
                text: 'Tagesplanung',
                icon: 'calendar-alt'
            },
            {
                type: 'paragraph',
                text: 'Plane die Zeit für tägliche Aktivitäten, um Aufgaben zu balancieren und die Effizienz zu optimieren.'
            },
            {
                type: 'iconed',
                text: 'Kochen',
                icon: 'utensils'
            },
            {
                type: 'paragraph',
                text: 'Bereite Mahlzeiten zu, ohne Zutaten zu verschwenden, um einen niedrigen Müll-Fussabdruck zu erhalten.'
            },
            {
                type: 'iconed',
                text: 'Reinigung',
                icon: 'broom'
            },
            {
                type: 'paragraph',
                text: 'Halte die Wohnräume sauber und optimiere die Müllentsorgung, um die Umgebung sauber zu halten.'
            },
            {
                type: 'iconed',
                text: 'Recycling',
                icon: 'recycle'
            },
            {
                type: 'paragraph',
                text: 'Reduziere Müll, indem du Abfall richtig sortierst und Materialien recycelst.'
            },
            {
                type: 'subheading',
                text: 'Setting'
            },
            {
                type: 'paragraph',
                text: 'Moderne Schweizer Haushalte, darunter Wohngemeinschaften, Familienhäuser und Einpersonenhaushalte.'
            },
            {
                type: 'subheading',
                text: 'Technologie'
            },
            {
                type: 'paragraph',
                text: 'Das Spiel verwendet physische Karten für Aktionen, Ereignisse und Ressourcen, mit minimalem Buchhaltungsaufwand, um Punkte und Zustände leicht im Auge zu behalten.'
            },
            {
                type: 'heading',
                text: 'Spielregeln'
            },
            {
                type: 'subheading',
                text: 'Setup'
            },
            {
                type: 'paragraph',
                text: 'Jeder Spieler übernimmt eine Rolle, die seine Bedingungen und den Wochenplan bestimmt:'
            },
            {
                type: 'iconed',
                text: 'Einpersonenhaushalt',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Hat 2 freie Zeitfenster an Wochentagen und 5 am Wochenende'
            },
            {
                type: 'bullet',
                text: 'Erzeugt 0 zusätzlichen Müll pro Tag'
            },
            {
                type: 'iconed',
                text: 'Familienhaushalt',
                icon: 'users'
            },
            {
                type: 'bullet',
                text: 'Hat 4 freie Zeitfenster an Wochentagen und 2 am Wochenende'
            },
            {
                type: 'bullet',
                text: 'Erzeugt 1 zusätzlichen Müll pro Tag'
            },
            {
                type: 'iconed',
                text: 'Wohngemeinschaft',
                icon: 'house-chimney-window'
            },
            {
                type: 'bullet',
                text: 'Hat 3 freie Zeitfenster an Wochentagen und 3 am Wochenende'
            },
            {
                type: 'bullet',
                text: 'Erzeugt 2 zusätzlichen Müll pro Tag'
            },
            {
                type: 'paragraph',
                text: 'Die Spieler starten mit:'
            },
            {
                type: 'bullet',
                text: '5 Glückspunkten'
            },
            {
                type: 'bullet',
                text: '5 Aktionskarten'
            },
            {
                type: 'bullet',
                text: '1 wiederverwendbaren Einkaufskarte'
            },
            {
                type: 'subheading',
                text: 'Tägliche Zugfolge'
            },
            {
                type: 'iconed',
                text: 'Ziehe eine Zufallskarte',
                icon: '1'
            },
            {
                type: 'paragraph',
                text: 'Dies führt neue Herausforderungen oder Vorteile ein.'
            },
            {
                type: 'iconed',
                text: 'Plane deinen Tag',
                icon: '2'
            },
            {
                type: 'paragraph',
                text: 'Die Spieler wählen Aktionen basierend auf verfügbarer Zeit und Ressourcen.'
            },
            {
                type: 'iconed',
                text: 'Führe Aktionen aus',
                icon: '3'
            },
            {
                type: 'paragraph',
                text: 'Die Spieler können einkaufen, Gegenstände verwenden oder geplante Aufgaben ausführen.'
            },
            {
                type: 'iconed',
                text: 'Fülle auf 5 Aktionskarten auf',
                icon: '4'
            },
            {
                type: 'paragraph',
                text: 'Stellt sicher, dass die Spieler jede Runde ausgewogene Wahlmöglichkeiten haben.'
            },
            {
                type: 'subheading',
                text: 'Konsquenzen & Glück'
            },
            {
                type: 'bullet',
                text: 'Wenn das Glück unter 3 fällt, kann der Spieler nicht kochen, reinigen oder recyceln'
            },
            {
                type: 'bullet',
                text: 'Wenn das Glück 0 erreicht, erzeugt der Spieler automatisch 2 Müllsäcke pro Tag'
            },
            {
                type: 'bullet',
                text: 'Das Auslassen von Mahlzeiten führt zu -3 Glück pro Tag'
            },
            {
                type: 'subheading',
                text: 'Ende der Woche'
            },
            {
                type: 'paragraph',
                text: `Unbenutzte frische Zutaten erzeugen 1 Müllsack. 
                            Am Ende der Woche gewinnt der Spieler mit dem wenigsten Müll.
                            Bei Gleichstand gewinnt der Spieler mit mehr Glück.`
            },
            {
                type: 'heading',
                text: 'Prozess Einblicke'
            },
            {
                type: 'images',
                images: [
                    {
                        src: ecohomeFiles['../projects/ecohome/Conceptualizing.jpg'].default,
                        caption: 'Konzeptualisierung des Spiels'
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Testing.jpg'].default,
                        caption: 'Testen des Spiels'
                    },
                    {
                        src: ecohomeFiles['../projects/ecohome/Playing.jpg'].default,
                        caption: 'Spielen des Spiels'
                    },
                ]
            }
        ],
        links: [],
        downloads: [
            {
                text: 'Zertifikat.pdf',
                url: ecohomeFiles['../projects/ecohome/Certificate.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    //milo
    {
        id: 'milo',
        name: "milo's forest adventure",
        description: 'web-basiertes scroll- und klick-abenteuer',
        context:
        {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Modul DEWEB - Development for Web & Mobile'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
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
                text: `Mit Milo's Forest Adventure wollte ich Webentwicklung, Pixelart und interaktive Erzählungen 
                            in einem niedlichen Scroll- und Klick-Abenteuerspiel kombinieren. Durch Scrollen und Klicken können die Spieler die Umgebung erkunden,
                            mit Milo interagieren und Geheimnisse des verzauberten Waldes entdecken. 
                            Das Spiel wurde im Rahmen des Moduls Development for Web & Mobile entwickelt, wo wir die Aufgabe hatten, ein webbasiertes interaktives Bilderbuch mit HTML, CSS und JavaScript zu erstellen.`
            },
            {
                type: 'heading',
                text: 'Spiel spielen'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Demo spielen',
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
                text: `Der Online-Demo fehlen Backend-Funktionen wie die Bestenliste am Ende. Um das Spiel lokal zu spielen, folge den untenstehenden Anweisungen.`
            },
            {
                type: 'heading',
                text: 'Installationsanweisungen'
            },
            {
                type: 'subheading',
                text: 'Voraussetzungen'
            },
            {
                type: 'bullet',
                text: 'Node.js installiert'
            },
            {
                type: 'bullet',
                text: 'Visual Studio Code installiert'
            },
            {
                type: 'bullet',
                text: 'Live Server-Erweiterung in Visual Studio Code installiert und aktiviert'
            },
            {
                type: 'subheading',
                text: 'Schritte'
            },
            {
                type: 'iconed',
                text: 'Projekt klonen oder herunterladen',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Das Projekt-Repository in ein lokales Verzeichnis klonen'
            },
            {
                type: 'bullet',
                text: 'Alternativ die Projekt-Zip-Datei herunterladen und in ein lokales Verzeichnis extrahieren'
            },
            {
                type: 'iconed',
                text: 'Backend starten',
                icon: '2'
            },
            {
                type: 'bullet',
                text: 'Zum Verzeichnis <span class="snippet">/server</span> navigieren'
            },
            {
                type: 'bullet',
                text: `Den Node.js-Server mit dem Befehl
                            <span class= "snippet hoverable tooltip copy" tooltip="copy" > node server.mjs</span>
                            im Terminal starten`
            },
            {
                type: 'iconed',
                text: 'Frontend starten',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Zum Verzeichnis <span class="snippet">/client</span> navigieren und es in Visual Studio Code öffnen'
            },
            {
                type: 'bullet',
                text: 'Unten rechts auf "Go Live" klicken, um den Live Server zu starten'
            },
            {
                type: 'bullet',
                text: `Das Projekt sollte automatisch im Browser geöffnet werden (falls nicht, die URL
                            <span class="snippet hoverable tooltip copy" tooltip = "copy" > http://127.0.0.1:5500/</span>
                            im Browser öffnen und die Live Server-Einstellungen entsprechend anpassen)`
            },
            {
                type: 'subheading',
                text: "Viel Spass bei Milo's Forest Adventure!"
            },
            {
                type: 'heading',
                text: 'Projektbeschreibung'
            },
            {
                type: 'subheading',
                text: 'Szenen'
            },
            {
                type: 'bullet',
                text: 'Intro-Dialog: Milo begrüsst den Spieler.'
            },
            {
                type: 'bullet',
                text: 'Tag-Szene: Navigiere Milo tagsüber durch den Wald.'
            },
            {
                type: 'bullet',
                text: 'Fluss-Dialog: Führe ein Gespräch mit Milo am Rami-Fluss.'
            },
            {
                type: 'bullet',
                text: 'Nacht-Szene: Führe Milo nachts durch den Wald.'
            },
            {
                type: 'bullet',
                text: 'Kliff-Dialog: Ein reflektierender Abschluss an einer Klippe.'
            },
            {
                type: 'bullet',
                text: `Endbildschirm: Zeigt die Punktzahl des Spielers und eine Bestenliste der Top 10 Spieler an.`
            },
            {
                type: 'subheading',
                text: 'Tools & Ressourcen'
            },
            {
                type: 'iconed',
                text: 'Entwicklung',
                icon: 'code'
            },
            {
                type: 'paragraph',
                text: 'HTML, CSS, JavaScript, Node.js, Express, Visual Studio Code, GitHub'
            },
            {
                type: 'iconed',
                text: 'Grafik',
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
                text: 'KI Assistenz',
                icon: 'robot'
            },
            {
                type: 'paragraph',
                text: 'ChatGPT, Gemini, Adobe Firefly, Suno'
            },
            {
                type: 'subheading',
                text: 'Reflexion'
            },
            {
                type: 'iconed',
                text: 'Motivation',
                icon: 'face-smile-beam'
            },
            {
                type: 'paragraph',
                text: `Ich hatte über das gesamte Projekt hinweg viel Motivation und Freude, was mich dazu antrieb,
                        viel Zeit und Energie in das Projekt zu investieren.`
            },
            {
                type: 'iconed',
                text: 'Herausforderungen',
                icon: 'exclamation-triangle'
            },
            {
                type: 'paragraph',
                text: `Manchmal habe ich mich in den Aufgaben verloren oder wusste nicht genau, was als nächstes
                        zu tun ist. Gegen Ende habe ich mir eine To-Do-Liste eingerichtet, was mir sehr half, den
                        Überblick zu behalten.`
            },
            {
                type: 'subheading',
                text: 'Programmiertechniken'
            },
            {
                type: 'bullet',
                text: 'Einsatz von Factory Functions, jedoch nicht voll objektorientiert'
            },
            {
                type: 'bullet',
                text: 'Dynamische Erstellung von HTML durch JavaScript'
            },
            {
                type: 'bullet',
                text: 'Verwendung von POST-Requests für den Server und Speicherung der Spielerdaten als JSON auf der Serverseite'
            },
            {
                type: 'bullet',
                text: 'Implementierung einer Cookie-Funktion, sodass die Spieler-ID im Browser gespeichert wird'
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
                        caption: 'Tag-Szene'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_river.png'].default,
                        caption: 'Fluss-Dialog'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_night.png'].default,
                        caption: 'Nacht-Szene'
                    },
                    {
                        src: miloFiles['../projects/milo/milo_endscreen.png'].default,
                        caption: 'Endbildschirm & Bestenliste'
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
                text: 'itch.io Seite',
                url: 'https://jfladas.itch.io/milos-forest-adventure',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Demo spielen',
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
                text: 'Dokumentation.pdf',
                url: miloFiles['../projects/milo/milo_documentation.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Präsentation.pdf',
                url: miloFiles['../projects/milo/milo_presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // beautiful mathematics
    {
        id: 'matbf',
        name: 'beautiful mathematics',
        description: 'sammlung mathematischer erkundungen',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Modul MATBF - Beautiful Mathematics'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'solo',
            'coding',
            'web'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Das Modul erforscht die Schönheit der Mathematik durch generative Kunst und algorithmisches Design unter Verwendung von p5.js, HTML, CSS und JavaScript. 
                            Diese Seite zeigt eine Sammlung wöchentlicher Aufgaben, die während der Wochen 1 bis 6 des Moduls und eines Prüfungsprojekts abgeschlossen wurden. 
                            Jede Aufgabe implementiert mathematische und rechnerische Prinzipien, um visuell ansprechende Muster, Simulationen und interaktive Erlebnisse zu schaffen.`
            },
            {
                type: 'heading',
                text: 'Sammlung ansehen'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Zur Seite',
                        action: 'https://matbf.jfladas.com',
                        icon: 'arrow-right',
                        color: 'primary'
                    },
                    {
                        text: 'Dokumentation',
                        action: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                        icon: 'circle-arrow-down',
                        color: 'secondary'

                    }
                ]
            },
            {
                type: 'heading',
                text: 'Wöchentliche Projekte'
            },
            {
                type: 'iconed',
                text: 'W1 | Spirale',
                icon: 'spinner'
            },
            {
                type: 'paragraph',
                text: 'Spirale von Kreisen, die durch die Implementierung des Bresenham-Mittelpunkt-Kreisalgorithmus in der Grösse zunehmen'
            },
            {
                type: 'iconed',
                text: 'W2 | 3D Mesh',
                icon: 'circle-nodes'
            },
            {
                type: 'paragraph',
                text: 'Versuch einer 3D-Schneckenform mit WebGL'
            },
            {
                type: 'iconed',
                text: 'W3 | Matrix',
                icon: 'font'
            },
            {
                type: 'paragraph',
                text: 'Markov-Kette mit japanischen Hiragana'
            },
            {
                type: 'iconed',
                text: 'W4 | Leben',
                icon: 'border-all'
            },
            {
                type: 'paragraph',
                text: "Interaktives Conway's Game of Life mit mehr Zuständen/Farben"
            },
            {
                type: 'iconed',
                text: 'W5 | Berge',
                icon: 'mountain'
            },
            {
                type: 'paragraph',
                text: 'Geschichtete Bergkette mit 2D-Fraktalrauschen und Smoothstep-Interpolation'
            },
            {
                type: 'iconed',
                text: 'W6 | Bäume',
                icon: 'tree'
            },
            {
                type: 'paragraph',
                text: 'Verschiedene Bäume mit 2D-L-Systemen'
            },
            {
                type: 'iconed',
                text: 'PRÜFUNG | Atmung',
                icon: 'genderless'
            },
            {
                type: 'paragraph',
                text: 'Pulsierende Kreise für achtsames Atmen'
            },
            {
                type: 'heading',
                text: 'Wichtige Erkenntnisse'
            },
            {
                type: 'bullet',
                text: 'Anwendung mathematischer Algorithmen auf kreatives Programmieren.'
            },
            {
                type: 'bullet',
                text: 'Erforschung generativer Kunst mit p5.js und WebGL.'
            },
            {
                type: 'bullet',
                text: 'Verbesserung der Interaktivität durch Markov-Ketten, zelluläre Automaten und L-Systeme.'
            },
            {
                type: 'bullet',
                text: 'Verwendung von Fraktalrauschen und prozeduralen Techniken für natürlich aussehende Landschaften.'
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
                        caption: 'W1 | Spirale'
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
                        caption: 'W4 | Leben'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W5.gif'].default,
                        caption: 'W5 | Berge'
                    },
                    {
                        src: matbfFiles['../projects/matbf/W6.jpg'].default,
                        caption: 'W6 | Bäume'
                    },
                    {
                        src: matbfFiles['../projects/matbf/EXAM.gif'].default,
                        caption: 'PRÜFUNG | Atmung'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'Zur Seite',
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
                text: 'Dokumentation.pdf',
                url: matbfFiles['../projects/matbf/MATBF.pdf'].default,
                icon: 'file-pdf'
            },
        ]
    },
    // connected europe
    {
        id: '4g',
        name: 'connected europe',
        description: 'datenvisualisierungsplakat zur 4g-netzwerkerweiterung',
        context: {
            lines: [
                '2024 @ HSLU, Rotkreuz',
                'Modul STUIN - Studio Information Aesthetics & Engineering'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'solo',
            'design'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Zwischen 2012 und 2016 erlebte Europa eine rasante Ausweitung der 4G-Mobilfunknetzabdeckung, was einen Wendepunkt in der digitalen Konnektivität markierte.
                            Dieses Datenvisualisierungsprojekt untersucht die Geschwindigkeit und das Ausmass der 4G-Einführung in Europa und hebt deren Auswirkungen auf die Gesellschaft hervor.`
            },
            {
                type: 'heading',
                text: 'Plakat'
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
                text: 'Datenquelle & Analyse'
            },
            {
                type: 'paragraph',
                text: `Der Datensatz des Datenportals der Vereinten Nationen für nachhaltige Entwicklungsziele (SDG) bot einen umfassenden Überblick über die 4G-Netzabdeckung in Europa.
                            Er wurde mit Microsoft Excel analysiert, wobei Filter, Pivot-Tabellen und bedingte Formatierungen angewendet wurden, um wichtige Erkenntnisse zu extrahieren. Die strukturierten Daten ermöglichten Vergleiche zwischen Ländern und Zeiträumen und zeigten Trends in der Konnektivitätserweiterung auf.`
            },
            {
                type: 'iconed',
                text: 'Datensatz',
                icon: 'database'
            },
            {
                type: 'bullet',
                text: 'UN SDG Datenportal - Indikator 9.c.1 (Mobilfunknetzabdeckung)'
            },
            {
                type: 'iconed',
                text: 'Zeitraum',
                icon: 'calendar-alt'
            },
            {
                type: 'bullet',
                text: '2012-2022'
            },
            {
                type: 'iconed',
                text: 'Länder',
                icon: 'globe-europe'
            },
            {
                type: 'bullet',
                text: '16 europäische Länder, aufgeteilt in 4 Regionen Europas'
            },
            {
                type: 'iconed',
                text: 'Fokusfrage',
                icon: 'question'
            },
            {
                type: 'bullet',
                text: 'Wie schnell wurde die 4G-Technologie in Europa eingeführt?'
            },
            {
                type: 'iconed',
                text: 'Software',
                icon: 'arrow-pointer'
            },
            {
                type: 'bullet',
                text: 'Microsoft Excel zur Datenanalyse'
            },
            {
                type: 'bullet',
                text: 'Adobe InDesign für Layout und Plakatdesign'
            },
            {
                type: 'bullet',
                text: 'Adobe Illustrator zur Datenvisualisierung'
            },
            {
                type: 'heading',
                text: 'Skizzen'
            },
            {
                type: 'paragraph',
                text: `Der Skizzierungsprozess konzentriert sich auf die drei Daten-Dimensionen:`
            },
            {
                type: 'iconed',
                text: 'Diagrammatische Dimensionen',
                icon: '1'
            },
            {
                type: 'bullet',
                text: 'Konzentriert sich auf die grundlegenden Diagrammtypen und deren Anwendung.'
            },
            {
                type: 'iconed',
                text: 'Visuelle Dimensionen',
                icon: '2'
            },
            {
                type: 'bullet',
                text: 'Unterscheidet zwischen verschiedenen Inhalten durch die Anwendung verschiedener Designprinzipien.'
            },
            {
                type: 'iconed',
                text: 'Strukturierende Dimensionen',
                icon: '3'
            },
            {
                type: 'bullet',
                text: 'Befasst sich mit der Organisation und Anordnung der Objekte im Raum.'
            },
            {
                type: 'images',
                images: [
                    {
                        src: europeFiles['../projects/4g/Sketches1.jpg'].default,
                        caption: 'Skizze 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches2.jpg'].default,
                        caption: 'Diagrammatische Dimensionen 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches3.jpg'].default,
                        caption: 'Skizze 2'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches4.jpg'].default,
                        caption: 'Diagrammatische Dimensionen 2'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches5.jpg'].default,
                        caption: 'Diagrammatische, visuelle & strukturierende Dimensionen 3'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches6.jpg'].default,
                        caption: 'Visuelle Dimensionen 1'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches7.jpg'].default,
                        caption: 'Skizze 3'
                    },
                    {
                        src: europeFiles['../projects/4g/Sketches8.jpg'].default,
                        caption: 'Skizze 4'
                    }
                ],
            },
        ],
        links: [
            {
                text: 'UN SDG Ziel 9',
                url: 'https://www.un.org/sustainabledevelopment/infrastructure-industrialization/',
                icon: 'external-link-alt'
            },
            {
                text: 'UN SDG Datenportal',
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
        description: '2D-animiertes Video inspiriert von Fruit Ninja',
        context: {
            lines: [
                '2024 @ HSLU, Emmenbrücke',
                'Modul ISA ANIM - Einführung in die Animation'
            ],
            url: 'https://www.hslu.ch/de-ch/design-film-kunst/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Salad Ninja ist ein 2D-animiertes Video, inspiriert vom beliebten Mobile Game Fruit Ninja.
                        Das Video zeigt die Zubereitung eines Salats durch das Schneiden verschiedener Zutaten.
                        Es kombiniert Stop-Motion und frame-by-frame Papieranimation und 
                        wurde in einem Zweierteam mit Remo Hösli im Rahmen des ISA Animations-Einführungsmoduls entwickelt.`
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
                text: 'Projektbeschreibung'
            },
            {
                type: 'subheading',
                text: 'Konzept & Umsetzung'
            },
            {
                type: 'paragraph',
                text: `Die Animation zeigt die spielerische Zerstörung verschiedener Zutaten und verbindet zwei Animationstechniken:
                        Stop-Motion zur Animation aller drehenden und geschnittenen Zutaten.
                        Frame-by-frame Papieranimation für Scheiben, Spritzer, visuelle Effekte wie Feuer und Text.
                        Die finale Animation wurde in After Effects bearbeitet und mit Sound angereichert, um beide Techniken nahtlos zu kombinieren.`
            },
            {
                type: 'subheading',
                text: 'Prozess & Einblicke'
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
                        caption: 'Stop-Motion-Animation'
                    },
                    {
                        src: saladFiles['../projects/salad/POC.gif'].default,
                        caption: 'Proof of Concept'
                    },
                    {
                        src: saladFiles['../projects/salad/Salad.jpg'].default,
                        caption: 'Der Salat'
                    },
                ]
            },
            {
                type: 'subheading',
                text: 'Teamrollen'
            },
            {
                type: 'iconed',
                text: 'Lukas Bucher',
                icon: 'user'
            },
            {
                type: 'bullet',
                text: 'Animationskonzept'
            },
            {
                type: 'bullet',
                text: 'Papieranimation'
            },
            {
                type: 'bullet',
                text: 'Stop-Motion-Animation'
            },
            {
                type: 'bullet',
                text: 'Sounddesign'
            },
            {
                type: 'bullet',
                text: 'Salat essen'
            },
            {
                type: 'iconed',
                text: 'Remo Hösli',
                icon: 'user-ninja'
            },
            {
                type: 'bullet',
                text: 'Animationskonzept'
            },
            {
                type: 'bullet',
                text: 'Stop-Motion-Animation'
            },
            {
                type: 'bullet',
                text: 'Editing in After Effects'
            },
            {
                type: 'bullet',
                text: 'Sounddesign'
            },
            {
                type: 'bullet',
                text: 'Salat essen'
            },
            {
                type: 'heading',
                text: 'Weitere Projekte im Modul'
            },
            {
                type: 'paragraph',
                text: `Neben Salad Ninja haben wir zusätzliche Animationsübungen durchgeführt, um verschiedene Techniken und Ansätze zu erkunden.
                        Einige Beispiele:`
            },
            {
                type: 'subheading',
                text: 'Übergangsanimation'
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Stir.mp4'].default
            },
            {
                type: 'paragraph',
                text: `Diese Übung konzentrierte sich auf die Erstellung eines nahtlosen Übergangs zwischen zwei Objekten.
                        Die einzelnen Animationssegmente aller Studierenden wurden dann zu einem einzigen Video kombiniert, um eine durchgehende Übergangskette zu erstellen.
                        Hier ist nur mein Teil der Animation zu sehen, der den Übergang von einer Tasse zu einem Bleistift darstellt.`
            },
            {
                type: 'subheading',
                text: 'Stop-Motion-Claymation'
            },
            {
                type: 'video',
                video: saladFiles['../projects/salad/Frog.mp4'].default
            },
            {
                type: 'paragraph',
                text: `In dieser Übung haben Remo und ich Claymation mit Stop-Motion-Techniken ausprobiert.
                        Wir haben ein kurzes Video mit Sound erstellt, in dem ein Frosch auftaucht und eine Fliege fängt.`
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
        description: `user experience design für eine schulische sportorganisation`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Modul IUX - Einführung in User Experience'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            'design',
            'ux',
        ],
        sections: [
            {
                type: 'quoted',
                text: `Dieses UX-Redesign-Projekt konzentrierte sich auf die Verbesserung der Benutzerfreundlichkeit der HSCL-Website.
                            Durch umfangreiche Nutzerforschung, Prototyping und Tests zielte das Projekt darauf ab, Navigation, Struktur und Personalisierung für ein besseres Benutzererlebnis zu optimieren. Erstellt von Üx-Grüp (Yanis Deplazes, Jan Schwegler, Lukas Bucher, Dominika Degtyareva, Stefan Vögeli) im Rahmen des Moduls Einführung in User Experience.`
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
                text: 'Projektübersicht'
            },
            {
                type: 'paragraph',
                text: `Das Ziel dieses Projekts war es, die HSCL-Website zu verbessern, indem wichtige Usability-Probleme angegangen wurden.
                           Durch einen strukturierten UX-Design-Prozess definierte das Team die Bedürfnisse der Nutzer, erstellte Prototypen und verfeinerte diese basierend auf umfangreichem Nutzerfeedback.`
            },
            {
                type: 'heading',
                text: 'Forschung & Problemidentifikation'
            },
            {
                type: 'subheading',
                text: 'Nutzerforschungsmethoden'
            },
            {
                type: 'bullet',
                text: 'Nutzerumfragen'
            },
            {
                type: 'bullet',
                text: 'Empathiekarten'
            },
            {
                type: 'bullet',
                text: 'Personas (primäre, sekundäre und negative Personas)'
            },
            {
                type: 'bullet',
                text: 'Direkte Nutzertests'
            },
            {
                type: 'subheading',
                text: 'Identifizierte Hauptprobleme'
            },
            {
                type: 'bullet',
                text: 'Ineffiziente Filteroptionen'
            },
            {
                type: 'bullet',
                text: 'Verwirrender Registrierungsprozess'
            },
            {
                type: 'bullet',
                text: 'Fehlende standortbasierte Trainingssuche'
            },
            {
                type: 'bullet',
                text: 'Überladung von Inhalten und schlechte Struktur'
            },
            {
                type: 'bullet',
                text: 'Fehlende Mehrsprachigkeitsunterstützung'
            },
            {
                type: 'bullet',
                text: 'Navigationsineffizienzen'
            },
            {
                type: 'heading',
                text: 'Lösungsimplementierung'
            },
            {
                type: 'subheading',
                text: 'Prototyping-Prozess'
            },
            {
                type: 'bullet',
                text: 'Erstellung erster Papierprototypen und Tests durch Hallway-Usability-Tests'
            },
            {
                type: 'bullet',
                text: 'Entwicklung digitaler Prototypen in Figma, Iteration basierend auf Feedback'
            },
            {
                type: 'subheading',
                text: 'Getestete Lösungen & Verbesserungen'
            },
            {
                type: 'bullet',
                text: 'Neue Suchfunktion mit integrierter Kartenansicht'
            },
            {
                type: 'bullet',
                text: 'Vereinfachtes Filtersystem, einschliesslich standortbasierter Filterung'
            },
            {
                type: 'bullet',
                text: 'Chronologische Ereignisauflistung'
            },
            {
                type: 'bullet',
                text: 'Verbesserte Startseite mit direktem Zugang zu wichtigen Bereichen'
            },
            {
                type: 'bullet',
                text: 'Klarere Benennungskonventionen für bessere Navigation'
            },
            {
                type: 'bullet',
                text: 'Optimiertes Inhaltslayout für Klarheit'
            },
            {
                type: 'bullet',
                text: 'Implementierung eines Sprachumschalters'
            },
            {
                type: 'bullet',
                text: 'Verbesserte Strukturierung der Trainingsinformationen'
            },
            {
                type: 'bullet',
                text: 'Personalisierte Funktionen wie kontobasierte Favoriten'
            },
            {
                type: 'heading',
                text: 'Nutzertests & Erkenntnisse'
            },
            {
                type: 'paragraph',
                text: `Durchführung von zwei Runden UX-Tests in realen Umgebungen (HSLU-Campusflure und höhere Semesterstudenten).`
            },
            {
                type: 'subheading',
                text: 'Wichtige Erkenntnisse führten zu'
            },
            {
                type: 'bullet',
                text: 'Betonung der tab-basierten Navigation'
            },
            {
                type: 'bullet',
                text: 'Neugestaltung des Login-Prozesses für bessere Benutzerfreundlichkeit'
            },
            {
                type: 'bullet',
                text: 'Verlagerung des Favoriten-Icons zur Verbesserung der Sichtbarkeit'
            },
            {
                type: 'bullet',
                text: 'Hinzufügen eines Dunkelmodus für ein besseres Benutzererlebnis'
            },
            {
                type: 'bullet',
                text: 'Verfeinerung des Datumauswahlprozesses'
            },
            {
                type: 'heading',
                text: 'Endergebnisse'
            },
            {
                type: 'paragraph',
                text: `Der überarbeitete Website-Prototyp verbesserte die Benutzerbindung und Navigationseffizienz erheblich.
                           Das Projekt lieferte wertvolle Einblicke in die reale UX-Forschung und das iterative Design.
                           Während eine mobile App von den Nutzern vorgeschlagen wurde, wurde sie innerhalb des gegebenen Zeitrahmens als unpraktisch erachtet.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screens.png'].default,
                        caption: 'Endgültige Website-Bildschirme'
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Screenshots.png'].default,
                        caption: 'Endgültige Prototyp-Bildschirme'
                    },
                    {
                        src: hsclFiles['../projects/hscl/IUX_Figma_Design.png'].default,
                        caption: 'Figma-Design'
                    }
                ],
            }
        ],
        links: [
            {
                text: 'Behance Projekt',
                url: 'https://www.behance.net/gallery/194721225/HSCL-UX',
                icon: 'fa-brands fa-behance'
            },
            {
                text: 'Figma Prototyp',
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
                'Modul IGAME - Game Design & Engineering'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            'coding',
            'game',
        ],
        sections: [
            {
                type: 'quoted',
                text: `Sweet Teeth war das Produkt unseres ersten Spielmoduls. Die Spieler steuern ein schelmisches Karies-Bakterium,
                            das sich automatisch in Intervallen teleportiert. Das Ziel ist es, so viele Zähne wie möglich zu verrotten und dabei den bösen Mundhygieneprodukten auszuweichen.
                            Es wurde während des IGAME-Moduls von Team HDL (Chiara Tremml, Michelle Studtmann, Dario Stocker, Lukas Bucher) erstellt.`
            },
            {
                type: 'heading',
                text: 'Spiel spielen'
            },
            {
                type: 'buttons',
                buttons: [
                    {
                        text: 'Im Browser spielen',
                        action: 'https://itch.io/embed-upload/9224978?color=FA98E0',
                        icon: 'play',
                        color: 'primary'
                    },
                    {
                        text: 'Herunterladen',
                        action: '',
                        icon: 'circle-arrow-down',
                        color: 'secondary'
                    }
                ]
            },
            {
                type: 'paragraph',
                text: `Das Spiel kann im Browser gespielt oder für Windows heruntergeladen werden. Um das Spiel lokal zu spielen,
                            die Zip-Datei herunterladen, sie entpacken und anschliessend <span class="snippet">IGAME_HDL.exe</span> ausführen.`
            },
            {
                type: 'heading',
                text: 'Projektbeschreibung'
            },
            {
                type: 'paragraph',
                text: `In Sweet Teeth übernehmen die Spieler die Rolle eines abenteuerlustigen Bakteriums mit einer Teleportationskraft,
                            das versucht, so viele Zähne wie möglich zu verrotten. Das Spiel spielt sich in einem Mund ab,
                            und die Spieler müssen Hindernissen ausweichen und vor einer wütenden Zahnbürste fliehen.`
            },
            {
                type: 'subheading',
                text: 'Spielmechaniken'
            },
            {
                type: 'iconed',
                text: 'Teleportation',
                icon: 'ghost'
            },
            {
                type: 'paragraph',
                text: `Dies ist die Hauptmechanik, die unser Team implementieren sollte.
                            Das Bakterium teleportiert sich automatisch alle 1,5 Sekunden innerhalb eines Radius,
                            der durch die Mausbewegung des Spielers gesteuert wird. Das Beherrschen dieser Mechanik ist der Schlüssel zum Überleben und Erfolg.`
            },
            {
                type: 'iconed',
                text: 'Hindernisse',
                icon: 'tooth'
            },
            {
                type: 'paragraph',
                text: `Die Spieler müssen tödlichen Zahnbürsten, Mundwasser und Zahnpasta ausweichen, während sie die Zahnreihen navigieren.`
            },
            {
                type: 'iconed',
                text: 'Power-Up',
                icon: 'star'
            },
            {
                type: 'paragraph',
                text: `Werden genügend Süssigkeiten gesammelt, kann die "Super Rot"-Fähigkeit zu aktiviert werden,
                            die alle Zähne innerhalb des Teleportationsradius für eine begrenzte Zeit sofort verrottet.`
            },
            {
                type: 'iconed',
                text: 'Punktesystem',
                icon: 'trophy'
            },
            {
                type: 'paragraph',
                text: `Die Spieler verdienen Punkte, indem sie Zähne verrotten, und können ihre Punktzahl mit dem In-Game-Zähler verfolgen.
                            Versuchen Sie, eine neue Höchstpunktzahl zu erreichen!`
            },
            {
                type: 'iconed',
                text: 'Win Condition',
                icon: 'flag-checkered'
            },
            {
                type: 'paragraph',
                text: `Das Spiel endet an der Ziellinie, wo die Spieler ihre Punktzahl sehen und das Spiel neu starten können.`
            },
            {
                type: 'subheading',
                text: 'Kunststil'
            },
            {
                type: 'paragraph',
                text: `Das Spiel zeichnet sich durch eine farbenfrohe Comic-Ästhetik aus. Der Hauptcharakter ist ein grünes Bakterium,
                            und die Umgebung umfasst rosa und blaue Adertexturen sowie Zahnreihen, die schwarz werden, wenn sie verrottet sind.`
            },
            {
                type: 'paragraph',
                text: `Feinde wie Zahnpasta und Mundwasser haben blaue Töne, die im Kontrast zu den bunten sammelbaren Süssigkeiten stehen.`
            },
            {
                type: 'paragraph',
                text: `Alle Sprites wurden von Hand in Adobe Illustrator gezeichnet, wobei die Betonung auf kräftigen Umrissen und Highlights lag.`
            },
            {
                type: 'subheading',
                text: 'Entwicklungsprozess'
            },
            {
                type: 'paragraph',
                text: `Bei der Entwicklung des ersten Konzepts brainstormte das Team und prototypisierte die Teleportationsmechanik,
                            wobei der Fokus auf Einfachheit und Spass lag.`
            },
            {
                type: 'paragraph',
                text: `Regelmässige Tests und Feedback verfeinerten die Gameplay-Schleife, um die Schwierigkeit und das Tempo des Spiels auszugleichen.
                            Iterative Entwicklung ermöglichte kontinuierliche Verbesserung und Politur.`
            },
            {
                type: 'paragraph',
                text: `Benutzerdefinierte Sounds wurden für Teleportation, Süssigkeitensammlung und Gewinn-/Verlustbedingungen hinzugefügt.`
            },
            {
                type: 'subheading',
                text: 'Teamrollen'
            },
            {
                type: 'iconed',
                text: 'Team HDL (alle Teammitglieder)',
                icon: 'users'
            },
            {
                type: 'bullet',
                text: 'Konzeptualisierung der Spielidee und Mechaniken'
            },
            {
                type: 'bullet',
                text: 'Diskussion und Iteration des Spieldesigns und Kunststils'
            },
            {
                type: 'bullet',
                text: 'Schreiben von DevDiary-Einträgen zur Dokumentation des Entwicklungsprozesses'
            },
            {
                type: 'iconed',
                text: 'Designer (Chiara & Michelle)',
                icon: 'pen-nib'
            },
            {
                type: 'bullet',
                text: 'Festlegung des Kunststils und des Designs der Benutzeroberfläche'
            },
            {
                type: 'bullet',
                text: 'Handzeichnung aller Sprites und Hintergründe'
            },
            {
                type: 'bullet',
                text: 'Design der visuellen Identität des Spiels'
            },
            {
                type: 'iconed',
                text: 'Programmierer (Lukas & Dario)',
                icon: 'code'
            },
            {
                type: 'bullet',
                text: 'Erstellung eines ansprechenden Leveldesigns'
            },
            {
                type: 'bullet',
                text: 'Entwicklung der Spielmechaniken und Interaktionen'
            },
            {
                type: 'bullet',
                text: 'Implementierung der Asset-Integration und Soundeffekte'
            },
            {
                type: 'subheading',
                text: 'Herausforderungen'
            },
            {
                type: 'bullet',
                text: 'Ausbalancieren der Teleportationsmechanik, um ein intuitives und reaktionsschnelles Gameplay zu gewährleisten.'
            },
            {
                type: 'bullet',
                text: 'Entwurf einer visuell kohärenten Welt innerhalb strenger Sprite-Beschränkungen (10 Sprites, 3 Animationen pro Sprite)'
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
                        caption: 'Startbildschirm'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_Super.png'].default,
                        caption: 'Super Rot Power-Up'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_Oops.png'].default,
                        caption: 'Game Over Bildschirm'
                    },
                    {
                        src: sweetFiles['../projects/sweet/SweetTeeth_WellDone.png'].default,
                        caption: 'Gewonnen Bildschirm'
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
                text: 'itch.io Seite',
                url: 'https://jfladas.itch.io/sweet-teeth',
                icon: 'fa-brands fa-itch-io'
            },
            {
                text: 'Gameplay Video',
                url: 'https://youtu.be/04TWBzgvl34',
                icon: 'fa-brands fa-youtube'
            },
            {
                text: 'Dev Blog Einträge',
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
                text: 'Beschreibung.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_Description.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Steuerungsschema.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_ControlScheme.pdf'].default,
                icon: 'file-pdf'
            },
            {
                text: 'Präsentation.pdf',
                url: sweetFiles['../projects/sweet/SweetTeeth_Presentation.pdf'].default,
                icon: 'file-pdf'
            }
        ]
    },
    // the rodina
    {
        id: 'rodina',
        name: 'the rodina',
        description: `3d gerendertes video visuell inspiriert von the rodina`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Modul KIVIS - Kickstart Visual Design'
            ],
            url: 'https://www.hslu.ch/de-ch/design-film-kunst/',
            icon: 'graduation-cap',
            tooltip: 'schule'
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
                text: `Im Modul Kickstart Visual Design wurden uns die Grundlagen und Prinzipien des Designs beigebracht.
                            Wir lernten viele einflussreiche Designer:innen und Designstudios kennen, von denen wir uns eines für eine Präsentation und ein Abschlussprojekt aussuchen mussten.
                            Das Abschlussprojekt, das ich entwickelt habe, ist inspiriert vom unverwechselbaren visuellen Stil des niederländischen Designstudios 'The Rodina'.
                            Für die Animation und Bearbeitung eines gescannten 3D-Modells meines Kopfes habe ich Cinema 4D verwendet, die Videobearbeitung, das Sounddesign und die Farbkorrektur wurden in Adobe Premiere Pro durchgeführt.
                            Das Projekt integriert Feedback und Experimente, um ein poliertes visuelles Ergebnis zu erzielen.`
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
                text: 'Prozess'
            },
            {
                type: 'iconed',
                text: 'Konzeptualisierung',
                icon: '1'
            },
            {
                type: 'paragraph',
                text: `Das Projekt wurde hauptsächlich von zwei Werken von The Rodina inspiriert.
                            Die Idee war, meinen Kopf zu scannen und ein Stück zu entwerfen, das ihren ästhetischen Stil widerspiegelt,
                            indem lebendige Visuals und Bewegung integriert werden.`
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
                text: 'Erster 3D-Scan',
                icon: '2'
            },
            {
                type: 'paragraph',
                text: `Ein 3D-Scan meines Kopfes wurde als Basis mit der mobilen App Polycam erstellt.
                            Dieser Rohscan wurde in Cinema4D verfeinert, einschliesslich Modifikationen wie
                            der Verzerrung des Augenbereichs für einen abstrakten Effekt.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/scans.gif'].default,
                        caption: 'Rohscan & Bearbeitung'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/scan_c4d.jpg'].default,
                        caption: 'Scan in Cinema4D'
                    }
                ]
            },
            {
                type: 'iconed',
                text: 'Visuelle Variationen',
                icon: '3'
            },
            {
                type: 'paragraph',
                text: `Ich experimentierte mit statischen Posterdesigns und animierten Videokonzepten.
                            Am Ende entschied ich mich für Letzteres für eine dynamischere Präsentation.`
            },
            {
                type: 'images',
                images: [
                    {
                        src: rodinaFiles['../projects/rodina/variant1.jpg'].default,
                        caption: 'Poster Variante 1'
                    },
                    {
                        src: rodinaFiles['../projects/rodina/variant2.jpg'].default,
                        caption: 'Poster Variante 2'
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
                text: `Einige Rückmeldungen, die ich in der ersten Runde erhielt, waren, dass die Farben zu hell und die Kopfrotation zu schnell waren.`
            },
            {
                type: 'subheading',
                text: 'Erste Version'
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
                text: 'Farben für bessere Balance angepasst & Animation verfeinert, um die Rotation zu verlangsamen'
            },
            {
                type: 'bullet',
                text: 'Mit Objektplatzierung, Schatten und Textdesign gespielt'
            },
            {
                type: 'bullet',
                text: 'Audio integriert, um das endgültige Video zu verbessern'
            },
            {
                type: 'bullet',
                text: 'Insgesamt 8 Iterationen führten zum endgültigen Video.'
            },
            {
                type: 'iconed',
                text: 'Endergebnis',
                icon: '6'
            },
            {
                type: 'paragraph',
                text: `Die endgültige Animation kombiniert die besten Elemente der vorherigen Iterationen,
                            indem ausgewogene Farben, flüssige Animationen und durchdachte Objektplatzierung miteinander verschmelzen.
                            Es reflektiert das Wesen von The Rodina und integriert gleichzeitig einzigartige persönliche Elemente.`
            },
            {
                type: 'heading',
                text: 'Präsentation'
            },
            {
                type: 'paragraph',
                text: `Vor dem Abschlussprojekt wurde eine kurze Präsentation gehalten, um The Rodina und ihre Arbeit vorzustellen.
                            Sie kann im Download-Bereich gefunden werden.`
            },
            {
                type: 'heading',
                text: 'Weitere Arbeiten'
            },
            {
                type: 'paragraph',
                text: `Im Laufe des Kickstart Visual Design Moduls haben wir verschiedene andere Übungen und Projekte durchgeführt.
                            Mit diesen haben wir Typografie, Farbtheorie und visuelle Hierarchie unter anderem erkundet.
                            Eine Dokumentation des Moduls mit meinen Arbeiten kann im Download-Bereich gefunden werden.`
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
        description: `3d gerendertes video eines asteroiden`,
        context: {
            lines: [
                '2023 @ HSLU, Rotkreuz',
                'Modul 4DAUT - Cinema 4D Authoring'
            ],
            url: 'https://www.hslu.ch/de-ch/informatik/',
            icon: 'graduation-cap',
            tooltip: 'schule'
        },
        categories: [
            'team',
            '3d',
            'video'
        ],
        sections: [
            {
                type: 'quoted',
                text: `Dies war meine erste Begegnung mit 3D-Design und Rendering.
                            Als Abschlussprojekt wurden wir beauftragt, ein Video zu erstellen, in dem wir alles anwenden, was wir im Kurs gelernt haben.
                            Wir entschieden uns, einen Asteroiden zu animieren, der an den Planeten unseres Sonnensystems vorbeifliegt
                            und in einer dramatischen Kollision mit der Erde endet. Es wurde mit Cinema 4D und Chaos Corona erstellt.
                            Das Projekt wurde als Teamarbeit zwischen mir und Silvan Parodi ausgeführt.`
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
                text: 'Weitere Renderings'
            },
            {
                type: 'paragraph',
                text: 'Im Rahmen des C4D Authoring Moduls wurden einige Renderings als Teil des Lernprozesses erstellt. Hier sind einige Beispiele:'
            },
            {
                type: 'subheading',
                text: 'Hausaufgabe 1: Chaos'
            },
            {
                type: 'bullet',
                text: 'Eine chaotische, aber ästhetische Anordnung von Formen und Objekten'
            },
            {
                type: 'bullet',
                text: 'Das Rendering betont Zufälligkeit und Textur-Experimente'
            },
            {
                type: 'subheading',
                text: 'Hausaufgabe 2: Wodkaflasche'
            },
            {
                type: 'bullet',
                text: 'Drei Varianten von Wodkaflaschen mit einzigartigen, selbst gestalteten Etiketten'
            },
            {
                type: 'bullet',
                text: 'Flaschen- und Glas-3D-Assets aus der Cinema 4D-Bibliothek importiert'
            },
            {
                type: 'bullet',
                text: 'Komposition & Eiswürfel und Limette von Grund auf neu erstellt'
            },
            {
                type: 'heading',
                text: 'Bilder'
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
                        caption: 'Etikett: Klassisch'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_classic.jpg'].default,
                        caption: 'Wodkaflasche: Klassisch'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_limemint.jpg'].default,
                        caption: 'Etikett: Limette Minze'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_limemint.jpg'].default,
                        caption: 'Wodkaflasche: Limette Minze'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_label_strawberry.jpg'].default,
                        caption: 'Etikett: Erdbeere'
                    },
                    {
                        src: solarsystemFiles['../projects/solarsystem/2_vodka_strawberry.jpg'].default,
                        caption: 'Wodkaflasche: Erdbeere'
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
        description: 'internes tool zur darstellung von teamstrukturen & mitarbeiterinformationen der suva',
        context: {
            lines: [
                '2022 @ Suva, Luzern',
                'QV PA - Abschlussprojekt der Informatiker-Lehre'
            ],
            url: 'https://www.suva.ch/',
            icon: 'briefcase',
            tooltip: 'arbeit'
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
                text: `Dieses Projekt zielte darauf ab, das Potenzial von browserbasierten Lösungen für interne Organisationstools zu erkunden,
                            indem eine funktionale Chrome-Erweiterung erstellt wurde. Sie repräsentiert die SAFe-Teamstrukturen von Suva und bietet einfachen Zugang
                            zu hierarchischen Daten, die sowohl administrative als auch operative Bedürfnisse abdecken.`
            },
            {
                type: 'heading',
                text: 'Bilder'
            },
            {
                type: 'images',
                images: [
                    {
                        src: paFiles['../projects/pa/pa_big_picture.png'].default,
                        caption: 'Projektstruktur (Big Picture)'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_home.png'].default,
                        caption: 'Hauptseite mit zusätzlichen Info-Apps'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe.png'].default,
                        caption: 'Hierarchische & Detailansicht'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_options.png'].default,
                        caption: 'Optionsseite'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_dark.png'].default,
                        caption: 'Dunkelmodus'
                    },
                    {
                        src: paFiles['../projects/pa/pa_gui_safe_dark.png'].default,
                        caption: 'Hierarchische & Detailansicht im Dunkelmodus'
                    }
                ],
            },
            {
                type: 'heading',
                text: 'Projektbeschreibung'
            },
            {
                type: 'subheading',
                text: 'Ziele'
            },
            {
                type: 'bullet',
                text: 'Entwicklung eines modularen Frameworks für die Chrome-Erweiterung'
            },
            {
                type: 'bullet',
                text: 'Erstellung einer Hauptseite, die verfügbare Module ("Info-Apps") auflistet'
            },
            {
                type: 'bullet',
                text: 'Implementierung der "Suva SAFe"-App als erstes Modul'
            },
            {
                type: 'bullet',
                text: 'Bereitstellung einer hierarchischen Navigation innerhalb der "Suva SAFe"-App'
            },
            {
                type: 'bullet',
                text: 'Hinzufügen von Benutzeranpassungsoptionen wie Dunkel-/Hellmodus'
            },
            {
                type: 'subheading',
                text: 'Funktionen'
            },
            {
                type: 'iconed',
                text: 'Hauptseite',
                icon: 'home'
            },
            {
                type: 'bullet',
                text: 'Listet verfügbare Module auf, beginnend mit der "Suva SAFe"-Info-App'
            },
            {
                type: 'iconed',
                text: 'Hierarchische Ansicht',
                icon: 'sitemap'
            },
            {
                type: 'bullet',
                text: 'Zeigt SAFe ARTs (Agile Release Trains), Produkte, Teams und einzelne Teammitglieder in einem aufklappbaren Baumformat an'
            },
            {
                type: 'iconed',
                text: 'Detailansicht',
                icon: 'magnifying-glass'
            },
            {
                type: 'bullet',
                text: 'Bietet rollenbezogene Informationen wie E-Mails, Telefonnummern und Beschreibungen mit interaktiven Links für umsetzbare Einblicke'
            },
            {
                type: 'iconed',
                text: 'Anpassung',
                icon: 'paint-brush'
            },
            {
                type: 'bullet',
                text: 'Ermöglicht Benutzern das Umschalten zwischen Dunkel- und Hellmodus'
            },
            {
                type: 'subheading',
                text: 'Methodik'
            },
            {
                type: 'paragraph',
                text: 'Das Projekt folgte der IPERKA-Methode (Informieren, Planen, Entscheiden, Realisieren, Kontrollieren, Auswerten):'
            },
            {
                type: 'iconed',
                text: 'Informieren',
                icon: 'i'
            },
            {
                type: 'bullet',
                text: 'Recherche zur Chrome Extension API und RESTful-Datenintegration'
            },
            {
                type: 'iconed',
                text: 'Planen',
                icon: 'p'
            },
            {
                type: 'bullet',
                text: 'Definition von Meilensteinen und Nutzung von User Stories zur Priorisierung von Funktionen'
            },
            {
                type: 'iconed',
                text: 'Entscheiden',
                icon: 'e'
            },
            {
                type: 'bullet',
                text: 'Bewertung und Finalisierung der Anforderungen an die Anwendung zur Erreichung der Projektziele'
            },
            {
                type: 'iconed',
                text: 'Realisieren',
                icon: 'r'
            },
            {
                type: 'bullet',
                text: 'Iterative Implementierung von Funktionen mit Fokus auf Modularität und Benutzerfreundlichkeit'
            },
            {
                type: 'iconed',
                text: 'Kontrollieren',
                icon: 'k'
            },
            {
                type: 'bullet',
                text: 'Testen gegen die Akzeptanzkriterien der User Stories'
            },
            {
                type: 'iconed',
                text: 'Auswerten',
                icon: 'a'
            },
            {
                type: 'bullet',
                text: 'Dokumentation der Ergebnisse und Erkenntnisse'
            },
            {
                type: 'subheading',
                text: 'Wichtige Erfolge'
            },
            {
                type: 'bullet',
                text: 'Erfolgreiche Integration von REST-APIs zur Abrufung von Organisationsdaten'
            },
            {
                type: 'bullet',
                text: 'Kombination von zwei verschiedenen REST-APIs zur Sicherstellung vollständiger Mitarbeiterdaten'
            },
            {
                type: 'bullet',
                text: 'Erstellung einer dynamischen, hierarchischen Struktur, die eine mühelose Navigation unterstützt'
            },
            {
                type: 'bullet',
                text: 'Implementierung einer benutzerfreundlichen Oberfläche mit Fokus auf Einfachheit und Anpassungsfähigkeit'
            },
            {
                type: 'bullet',
                text: 'Bereitstellung einer umfassenden Dokumentation, die Installation, Tests und technische Details abdeckt'
            },
            {
                type: 'subheading',
                text: 'Fazit'
            },
            {
                type: 'paragraph',
                text: 'Dieses Projekt zeigt die Machbarkeit von Browser-Erweiterungen als internes Organisationstool und bietet eine skalierbare und zugängliche Plattform für Team- und Mitarbeiterinformationen. Es dient auch als Grundlage für zukünftige Module und Funktionen.'
            }
        ]
    }
]

export const ueberContent = {
    title: "Lukas Bucher",
    sections: [
        {
            type: 'heading',
            text: 'Hey!'
        },
        {
            type: 'quoted',
            text: `Ich studiere derzeit <a href="https://www.hslu.ch/en/lucerne-school-of-information-technology/degree-programs/bachelor/digital-ideation/" class="bold hoverable" target="_blank">Digital Ideation</a> an der Hochschule Luzern, ein interdisziplinäres Programm, das Design und Informatik kombiniert, um digitale Lösungen zu schaffen. Ich liebe es, alle Möglichkeiten zu erkunden, wie Technologie und Kreativität kombiniert werden können. Mein Fokus liegt hauptsächlich auf der Webentwicklung, aber andere Aspekte, die ich mit meinem Studium erkunden kann, faszinieren mich ebenfalls, von Game Design & Entwicklung bis hin zu digitaler Kunst. Nachdem ich meinen Bachelor of Science erworben habe, möchte ich im Bereich Frontend-Webentwicklung arbeiten und einzigartige und interaktive Benutzererlebnisse schaffen. Aber wer weiss, was die Zukunft bringt?`
        },
        {
            type: 'heading',
            text: 'Entdecke meine Arbeit! Kontaktiere mich!'
        },
        {
            type: 'buttons',
            buttons: [
                {
                    text: 'Meine Projekte',
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
            text: 'Mehr über mich...'
        },
        {
            type: 'subheading',
            text: 'Musik'
        },
        {
            type: 'paragraph',
            text: `Neben meiner Leidenschaft für Technologie und Design spielt Musik eine grosse Rolle in meinem Leben. Ich spiele Saxophon im lokalen '<a href="https://www.musikvereinbuochs.ch/" class="bold hoverable" target="_blank">Musikverein Buochs</a>', was eine tolle Möglichkeit ist, mit anderen in Kontakt zu treten und die Freude am Musizieren zu erleben. Meine Liebe zur Musik hört hier nicht auf. Ich bin auch ein Fan von K-Pop und besuche gerne Konzerte, wann immer ich kann.`
        },
        {
            type: 'paragraph',
            text: 'Lieblings-K-Pop-Konzerte, die ich besucht habe:'
        },
        {
            type: 'iconed',
            text: 'Billlie @ München 2024',
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
            text: `Japanisch zu lernen ist eine weitere Beschäftigung, die mein Interesse an der ostasiatischen Kultur vertieft hat. Durch Selbststudium, Schulkurse und Besuche in verschiedenen Teilen Japans habe ich eine grosse Wertschätzung für seine vielen Facetten entwickelt, und es ist zu meinem Lieblingsreiseziel geworden.`
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