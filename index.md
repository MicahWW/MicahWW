---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
# Resume
## Experience
### Dallas Stars - IT Support Coordinator
- Time frame:
  - July 2023 - present
- Location:
  - Frisco, TX
- Quick description
  - Develop solutions that fit department needs and maintainability/longevity
  - Coordinate and assist other departments with tech needs.
  - Primary point of contact for helpdesk related issues
  - Plus everything [before title change](#dallas-stars---it-technician)
- <details open><summary>{% octicon arrow-down-right height:16 %}Longer description</summary>

    &emsp;In such a small department things are ever changing but 2 main responsibilities arose: 
    <ol>
      <li>Develop solutions to issues presented by other departments, focusing on issues that could use a coding/dev solution using whatever language fit best; Python, C#, PowerShell, JS/HTML/CSS. As the goal of these projects generally were aimed at helping speed processes up or make something easier I strived to make the usability and maintainability as simple as possible. Keeping it simple helped the project outlive me as the users could use and maintain the project.</li>
      <li>Be the go-to person for in-person troubleshooting on various helpdesk issues. With my experience helping <a href="#hudson-isd---it-technician">Teachers</a>, <a href="#deca-dental---it-technician">Dentists</a>, coaches, and more I learned how to work with all sorts of people and in all kinds of situations. All of that led to the skills of being effective in helping troubleshoot issues with people, even if I didn't know the answer right away.</li>
    </ol>
  </details>

### Dallas Stars - IT Technician
- Time frame:
  - April 2022 - July 2023
- Location:
  - Frisco, TX
- Quick description
  - Troubleshoot general software & hardware issues
  - Teach basic software & hardware for new tech
  - Live event support (Stars hockey games)
  - Manage networks for events (tenant events)
- <details><summary>{% octicon arrow-down-right height:16 %}Longer description</summary>

    Day to day responsibilities include providing support & training for both on-site and remote employees on both sides of the company, normal business operations & hockey operations. This ranged from providing live event support during the team's games, managing network requests/management for events at our public centers when tenants rented the space out, and troubleshooting employee's hardware and software issues.
  </details>

### DECA Dental - IT Technician
- Time frame:
  - June 2021 - April 2022
- Location:
  - Dallas, TX
- <details><summary>{% octicon arrow-down-right height:16 %}Longer description</summary>

  Provide remote technical support for offices across the country.
  </details>

### Hudson ISD - IT Technician
- Time frame:
  - Summer college break 2019 & 2020
  - Winter college break 2019
- Location:
  - Hudson, TX
- <details><summary>{% octicon arrow-down-right height:16 %}Longer description</summary>

  While teachers and students were present the primary responsibility was to assist teachers with any issues while allowing them to still teach but once they left for the summer the project became replacing an entire campus worth of desktops and laptops (each campus had around 300 desktops & 300 laptops) with brand new equipment and then moving the old equipment to a different campus, giving them a slight upgrade. To do this all machines needed to be wiped before moving, setup cleanly in the new location, and software refreshed (each room could have different software suites).
  </details>

---
## Projects
The below projects are all with the Dallas Stars
- I designed and implemented a CI/CD pipeline with GitHub Actions for an Azure hosted SpringBoot application. Utilizing a Blue Green deployment strategy allowed the dev team to test their code in the cloud before it ever hit production as the Azure cloud hosting had a different behavior than locally running the application.
- I built a web graphic that would periodically update showing where the team stood in the standings of the regular season and then the playoffs so the players and coaches could see at a glance how they were doing in comparison to other teams. To do this my custom API would fetch data from an open NHL API and reformat it in a way that was better suited for the frontend, this was needed as both the NHL would change up the data source on occasion and CORS restrictions.
  - Backend/API:
    - Hosted in Azure via [Azure Functions](https://azure.microsoft.com/en-us/products/functions)
    - Written in C#
  - Frontend:
    - Hosted in Azure via [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
    - Written in HTML/JS/CSS
- I replaced a manual process of updating a TV graphic for seating and game info in the pressbox. The original method required swapping a USB stick from the back of the TV to just needing to update a web SharePoint list & waiting on a scheduled refresh with as much of displayed data dynamically fetched.
  - Backend/API & Frontend:
    - The backend and frontend were deployed as part of the above mentioned project
- I developed an automated solution that assisted in the network management of events that the IT was responsible for managing. Before automation, it required someone from IT to manually toggle different settings required for events at the precise time we wanted them to go live, which could be at any time of day. By having a Monday.com form board people could submit requests with their details and after IT approval via the Monday.com board the entire network management was automated.
  - Backend:
    - Hosted in Azure via [Azure Functions](https://azure.microsoft.com/en-us/products/functions)
    - Written in C#
  - Frontend:
    - Monday.com form and board

---
## Education
### Certifications
- Azure Fundamentals
- Azure Data Fundamentals Certified
- Microsoft Security, Compliance, and Identity Fundamentals

### Degree
- BS in Computer Engineering
- University of North Texas, Denton TX
- Senior Design project
  - Private Cloud with IoT, a TSGS project sponsored by NASA.

---
## Skills
### Programming Specific:
- C#
- SQL
- C/C++
- Python
- PowerShell
- Bash
- JavaScript
- HTML
- CSS

### Other
- Adobe Create Cloud software suite
- Azure
- Microsoft AD
- Office 365 Administration