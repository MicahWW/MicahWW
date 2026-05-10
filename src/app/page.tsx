import Certification from "@/components/resume/Certification";
import certificationModel from "@/models/resume/certificationModel";
import Degree from "@/components/resume/Degree";
import degreeModel from "@/models/resume/degreeModel";
import workExperienceModel from "@/models/resume/workExperienceModel";
import WorkExperience from "@/components/resume/WorkExperience";
import skillModel from "@/models/resume/skillModel";
import projectModel from "@/models/resume/projectModel";
import Project from "@/components/resume/Project";
import "@/styles/resume.css";
import LinkableHeader from "@/components/LinkableHeader";

export default function Home() {
    const certifications: certificationModel[] = [
        new certificationModel(
            "Azure Fundamentals",
            new Date(2023, 1, 21),
            null,
            "https://learn.microsoft.com/api/credentials/share/en-us/micah-w-warren/AED80AAB1F055DF2"
        ),
        new certificationModel(
            "Azure Data Fundamentals",
            new Date(2023, 3, 28),
            null,
            "https://learn.microsoft.com/api/credentials/share/en-us/micah-w-warren/A28CB1C7718C9B8A"
        ),
        new certificationModel(
            "Microsoft Security, Compliance, and Identity Fundamentals",
            new Date(2024, 6, 25),
            null,
            "https://learn.microsoft.com/api/credentials/share/en-us/micah-w-warren/FB6710CA830CCF70"
        ),
        new certificationModel(
            "GitHub Foundations",
            new Date(2024, 7, 8),
            new Date(2027, 7, 8),
            "https://www.credly.com/badges/2639ef75-ff9e-44ef-9572-89c5389ec1c0"
        ),
        new certificationModel(
            "GitHub Actions",
            new Date(2026, 2, 16),
            new Date(2028, 2, 16),
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/b1ce9c35ea3b4f69"
        )
    ];

    const msAppliedSkills: certificationModel[] = [
        new certificationModel(
            "Deploy cloud-native apps using Azure Container Apps",
            new Date(2025, 10, 20),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/b2ffe89d61533770"
        ),
        new certificationModel(
            "Create and manage automated process by using Power Automate",
            new Date(2024, 11, 16),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/40906ee5e7b3e366"
        ),
        new certificationModel(
            "Develop an ASP.NET Core web app that consumes an API",
            new Date(2025, 4, 19),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/6d59ebe08d08b00"
        ),
        new certificationModel(
            "Get started with identities and access using Microsoft Entra",
            new Date(2025, 5, 22),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/b76cc1616b256dfd"
        ),
        new certificationModel(
            "Get started with Azure management tasks",
            new Date(2025, 11, 12),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/e6efa0a83137e634"
        ),
        new certificationModel(
            "Get started with classes, properties, and methods in C#",
            new Date(2026, 0, 18),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/2394c229944addda"
        ),
        new certificationModel(
            "Automate Azure Load Testing by using GitHub Actions",
            new Date(2026, 2, 3),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/d793f7d48aa88fb4"
        ),
        new certificationModel(
            "Get started with cloud security and monitoring tasks",
            new Date(2026, 3, 13),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/a244b2fa84735f6a"
        ),
        new certificationModel(
            "Configure secure access to your workloads using Azure networking",
            new Date(2026, 4, 3),
            null,
            "https://learn.microsoft.com/en-us/users/micah-w-warren/credentials/43f7bab6b0a5ebc"
        )
    ];

    const degree = new degreeModel(
        new Date(2021, 4, 1),
        "University of North Texas",
        "Denton, TX",
        "Bachelor of Science in Computer Engineering",
        {
            "Senior Design project": "Private Cloud with IoT, a TSGS project sponsored by NASA."
        }
    );

    const workExperiences: workExperienceModel[] = [
        new workExperienceModel(
            "Dallas Stars",
            "Cloud Engineer",
            new Date(2025, 0, 1),
            null,
            [
                "Maintain and overhaul existing cloud infrastructure.",
                "Develop cloud infrastructure solutions in Azure for IT, BI, etc.",
                "Automate repetitive business processes.",
                "Plus portions of my role before as IT Support Coordinator"
            ],
            null,
            "Frisco, TX"
        ),
        new workExperienceModel(
            "Dallas Stars",
            "IT Support Coordinator",
            new Date(2022, 6, 1),
            new Date(2024, 11, 31),
            [
                "Develop solutions that fit department needs and maintainability/longevity.",
                "Coordinate and assist other departments with tech needs.",
                "Primary point of contact for helpdesk related issues.",
                "Plus everything from my role as IT Technician."
            ],
            `In such a small department things are ever changing but 2 main responsibilities arose:
Develop solutions to issues presented by other departments, focusing on issues that could use a coding/dev solution using whatever language fit best; Python, C#, PowerShell, JS/HTML/CSS. As the goal of these projects generally were aimed at helping speed processes up or make something easier I strived to make the usability and maintainability as simple as possible. Keeping it simple helped the project outlive me as the users could use and maintain it.
Be the go-to person for in-person troubleshooting on various helpdesk issues. With my experience helping Teachers, Dentists, coaches, and more I learned how to work with all sorts of people and in all kinds of situations. All of that led to the skills of being effective in helping troubleshoot issues with people, even if I did not know the answer right away.`,
            "Frisco, TX"
        ),
        new workExperienceModel(
            "Dallas Stars",
            "IT Technician",
            new Date(2022, 3, 25),
            new Date(2023, 5, 30),
            [
                "Troubleshoot general software & hardware issues.",
                "Teach basic software & hardware for new tech.",
                "Live event support (Stars hockey games).",
                "Manage networks for events (tenant events)."
            ],
            `Day to day responsibilities include providing support & training for both on-site and remote employees on both sides of the company, normal business operations & hockey operations. This ranged from providing live event support during the team's games, managing network requests/management for events at our public centers when tenants rented the space out, and troubleshooting employee's hardware and software issues.`,
            "Frisco, TX"
        ),
        new workExperienceModel(
            "DECA Dental",
            "IT Technician",
            new Date(2021, 5, 7),
            new Date(2022, 3, 22),
            [
                "Troubleshoot general software & hardware issue remotely and in person.",
                "Teach basic software & hardware troubleshooting to office staff."
            ],
            `Provided both remote in person support for the corporate office and ~100 dental offices across the country. This included troubleshooting hardware and software issues on products ranging from a standard office setup to dental hardware; such as oral cameras, x-ray machines, and more. I also worked with staff in the remote dental offices to help them learn basic troubleshooting skills so they could either resolve issues themselves in the future or at least be able to provide me with the information I needed to help them.`,
            "Dallas, TX"
        ),
        // TODO: Figure out how to add a job with a broken date range like my work at Hudson. AKA Summer work
        // new workExperienceModel(
        //     "Hudson ISD",
        //     "IT Technician",
        // )
    ];

    const projects: projectModel[] = [
        new projectModel(
            "NHL Regular Season & Playoffs standings display",
            "I built a web graphic that would periodically update showing where the team stood in the standings of the regular season and then the playoffs so the players and coaches could see at a glance how they were doing in comparison to other teams. To do this my custom API would fetch data from an open NHL API and reformat it in a way that was better suited for the frontend, this was needed as both the NHL would change up the data source on occasion and CORS restrictions.",
            "Dallas Stars",
            {
                "Technologies Used": [
                    "C# - for the backend logic.",
                    "Azure Functions - to run the C# code in the cloud.",
                    "NHL API - to fetch the standings data.",
                    "HTML/CSS/JS - for the frontend display.",
                    "Azure Static Web Apps - to host the web app."
                ],
                "Key Features": [
                    "Real-time updates of NHL standings.",
                    "Dynamic display for both regular season and playoffs.",
                    "Eliminated manual updates and errors."
                ]
            }
        ),
        new projectModel(
            "Pressbox seating display",
            "I replaced a manual process of updating a TV graphic for seating and game info in the pressbox. The original method required swapping a USB stick from the back of the TV to just needing to update a web SharePoint list & waiting on a scheduled refresh with as much of displayed data dynamically fetched.",
            "Dallas Stars",
            {
                "Technologies Used": [
                    "Sharepoint - the \"database\" for the display.",
                    "This was part of \"NHL Regular Season & Playoffs standings display\" project so it used the same technologies."
                ],
                "Key Features": [
                    "Automated display updates for pressbox seating.",
                    "Eliminated the need for manual USB updates.",
                    "Eliminated the need to be on-site to update the display."
                ]
            }
        ),
        new projectModel(
            "Network Access for Scheduled Events",
            "I developed an automated solution that assisted in the network management of events that the IT was responsible for managing. Before automation, it required someone from IT to manually toggle different settings required for events at the precise time we wanted them to go live, which could be at any time of day. By having a Monday.com form board people could submit requests with their details and after IT approval via the Monday.com board the entire network management was automated.",
            "Dallas Stars",
            {
                "Technologies Used": [
                    "C# - for the backend logic.",
                    "Azure Functions - to run the C# code in the cloud.",
                    "Monday.com API - to function as a \"frontend\" and \"database\".",
                    "Meraki API - to manage the network devices.",
                ],
                "Key Features": [
                    "Automated network management for events.",
                    "Reduced manual intervention and errors."
                ]
            }
        ),
        new projectModel(
            "GitHub Action for version tagging & releasing",
            "I created and published, a GitHub Action that automates the process of generating a new version tag based on the date and uses it to 1) push a new git tag 2) and publish a GitHub release. This is helpful for projects that have, or want, versioning but have a rolling release cycle and and do not want to think about version numbers.",
            "Personal & Open Source",
            {
                "Technologies Used": [
                    "GitHub Actions",
                    "Python"
                ],
                "Key Features": [
                    "Automates version tagging and release creation.",
                    "Streamlines deployment workflow.",
                    "Supports rolling release cycles."
                ]
            }
        )
    ];

    const skills: skillModel[] = [
        new skillModel("C#", "programming"),
        new skillModel("SQL", "programming"),
        new skillModel("PowerShell", "programming"),
        new skillModel("Python", "programming"),
        new skillModel("C/C++", "programming"),
        new skillModel("Bash", "programming"),
        new skillModel("JavaScript", "programming"),
        new skillModel("HTML", "programming"),
        new skillModel("CSS", "programming"),
        new skillModel("Adobe Creative Cloud Suite", "other"),
        new skillModel("Azure", "other"),
        new skillModel("Microsoft AD (on-prem)", "other"),
        new skillModel("Microsoft Entra ID (cloud)", "other"),
        new skillModel("Office 365 Administration", "other"),
        new skillModel("Microsoft Power Platform", "other")
    ];

    return (
        <>
            <div id="overview">
                <LinkableHeader id="welcome" title="Welcome to my page!" />
                <p>Below you will find my previous <a href="#workExperience">Work Experience</a>, <a href="#projects">Projects</a>, <a href="#education">Education</a>, and <a href="#skills">Skills</a>. Above to will find links to some of my external profiles and the source code to this page.</p>
            </div>
            <div id="workExperience">
                <LinkableHeader id="workExperience" title="Work Experience" />
                {workExperiences.map((workExperience) => (
                        <WorkExperience key={`${workExperience.companyName}-${workExperience.jobTitle}`} workExperience={workExperience} />
                ))}
            </div>
            <hr />
            <div id="projects">
                <LinkableHeader id="projects" title="Projects" />
                {projects.map((project) => (
                    <div key={`project-${project.title}`}>
                        <Project project={project} />
                    </div>
                ))}
            </div>
            <hr />
            <div id="education">
                <LinkableHeader id="education" title="Education" />
                <div className="item-header">Certifications</div>
                <ul>
                    {certifications.map((cert) => (
                        <li key={`bullet-${cert.name}`}><Certification key={cert.name} cert={cert} /></li>
                    ))}
                </ul>
                <div className="item-header">Microsoft Applied Skills</div>
                <ul>
                    {msAppliedSkills.map((cert) => (
                        <li key={`bullet-${cert.name}`}><Certification key={cert.name} cert={cert} /></li>
                    ))}
                </ul>
                <Degree degree={degree} />
            </div>
            <hr />
            <div id="skills">
                <LinkableHeader id="skills" title="Skills" />
                <div className="item-header">Programming Related</div>
                <ul>
                    {skills.filter(skill => skill.type === "programming").map((skill) => (
                        <li key={`bullet-${skill.name}`}>{skill.name}</li>
                    ))}
                </ul>
                <div className="item-header">Other</div>
                <ul>
                    {skills.filter(skill => skill.type === "other").map((skill) => (
                        <li key={`bullet-${skill.name}`}>{skill.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}