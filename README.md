RESORA — Smart Campus Resource Network



Discover more. Share intelligently. Use responsibly.

RESORA is a campus resource-discovery and booking platform designed to make institutional spaces, laboratories, equipment and shared facilities easier to discover, coordinate and manage.

Live Demo · Source Repository



1. The problem

Educational institutions invest in laboratories, classrooms, specialised equipment, computers, cameras, fabrication tools and other valuable resources. Yet those resources are often difficult to discover or coordinate across departments. Availability information can be fragmented, reservations can conflict, and manual approval processes create administrative overhead. At the same time, users may face delays or unnecessary expense trying to access facilities that already exist elsewhere within the institution.

The underlying problem is not always a lack of resources. It is the inefficient discovery, allocation and coordination of resources that are already available.

2. Our solution

RESORA brings campus resources into one discoverable network. It gives users a guided way to describe what they need, find suitable resources, check availability and submit structured booking requests. It gives faculty and authorised staff a place to review requests, manage resource usage and monitor institutional activity.

Rather than treating resource sharing as a simple calendar, RESORA combines:





Natural-language resource discovery and explainable matching.



Booking workflows that consider availability and resource constraints.



Faculty review and institutional oversight.



Booking-linked QR access passes.



Administrative visibility into resource usage, maintenance and activity.

The goal is to help institutions make better use of existing assets while making the process of requesting and managing access clearer.

3. Product at a glance







Area



What RESORA provides





Resource discovery



A searchable resource catalogue and Smart Resource Finder.





Intelligent matching



Requirement parsing and weighted relevance scoring to rank suitable resources.





Reservation workflow



A guided, multi-stage booking journey.





Booking validation



Checks for availability, capacity, schedule conflicts, maintenance windows and relevant resource dependencies.





Faculty governance



Review actions to approve, reject or request changes to a booking.





Digital access



Booking-linked QR passes for access verification/check-in workflows.





Institutional monitoring



A Command Center for utilisation, bookings, maintenance and operational activity.





Wider campus ecosystem



Supporting student-facing areas for projects, opportunities, placements and academic development.



Scope note: The resource-sharing workflow is the primary focus of this project. Supporting student-development modules are included as part of the broader campus experience, but they are not substitutes for the core resource-sharing lifecycle.



4. Key features



4.1 Smart Resource Finder

Users can describe a requirement in everyday language instead of knowing the exact name of a room, laboratory or equipment item.

For example:



“Find an electronics lab for five students for three hours with Arduino kits and a projector.”

The Smart Resource Finder processes the query, identifies relevant criteria and compares those criteria with resource information. It ranks candidate resources using a custom weighted-matching approach and presents relevance information to help users understand the recommendations.

Technical clarification: The current finder uses custom deterministic natural-language parsing and weighted scoring. It is not a trained machine-learning model, LLM, RAG pipeline or autonomous agent.

4.2 Constraint-aware booking

The reservation experience guides a user through the information needed to request a resource. The current flow is organised into stages:





Select the resource.



Choose the date and time.



Select additional equipment or related items, where applicable.



Explain the purpose of the request.



Review and submit the booking.

The booking logic is designed to consider relevant constraints such as capacity, availability, overlapping time slots, maintenance periods and resource dependencies. When a requested option is unsuitable, the experience can guide the user towards alternatives where available.

4.3 Faculty review and governance

Faculty-facing workflows provide a review point between a booking request and access. Reviewers can approve, reject or request changes, with the intent that decisions are understandable and visible in the booking activity.

Institutional staff remain responsible for decisions that require human judgement. The product does not position automated matching as a replacement for faculty or owner oversight.

4.4 QR-linked access passes

The student experience includes booking-linked QR access passes. These connect a reservation to a digital pass that can be presented during the access/check-in process. The QR pass is intended to make it easier to verify which booking a user is presenting.

4.5 Institutional Command Center

The administrative experience brings operational information into one place, including resource utilisation, booking activity, pending approvals, maintenance visibility and issue/audit activity. This gives administrators a consolidated view rather than requiring them to navigate disconnected records.

4.6 Wider campus capabilities

The broader RESORA experience also includes student-facing areas related to projects, opportunities, placements, examination preparation and mentorship. These supporting modules extend the campus experience, while the resource-sharing features remain the central solution to the stated challenge.





5. End-to-end user journey

The intended resource-sharing journey is:

flowchart TD
    A[User opens RESORA] --> B[Describe a resource need]
    B --> C[Parse requirements]
    C --> D[Rank matching resources]
    D --> E[Review resource details and availability]
    E --> F[Complete booking request]
    F --> G[Validate booking constraints]
    G --> H{Request suitable?}
    H -- No --> I[Show issue or alternative]
    I --> E
    H -- Yes --> J[Submit for faculty review]
    J --> K{Faculty decision}
    K -- Rejected / changes requested --> L[Return decision and reason]
    K -- Approved --> M[Generate booking-linked QR pass]
    M --> N[Access / check-in workflow]
    N --> O[Administrative activity and utilisation views]



Suggested judge walkthrough

For a short live demonstration, use one resource and one student request:





Open the resource catalogue and select a laboratory or equipment item.



Use the Smart Resource Finder with a realistic natural-language query.



Show why a resource is recommended and inspect its details.



Complete the multi-stage reservation request.



Open the faculty view and review the request.



Demonstrate the resulting booking status and its QR access pass.



Open the Command Center and show where booking and resource activity is monitored.

Use the current deployed demo data and accounts only as intended by the application. Do not enter real student records or confidential institutional information into a public demonstration.





6. How the matching workflow works

The Smart Resource Finder follows a deterministic pipeline:

flowchart LR
    A[Free-text query] --> B[Text normalisation]
    B --> C[Requirement extraction]
    C --> D[Structured criteria]
    D --> E[Compare with resource attributes]
    E --> F[Weighted relevance score]
    F --> G[Ranked recommendations]
    G --> H[Explain match]

At a high level:





Input: A natural-language description of the resource need.



Parsing: The finder identifies criteria represented in the query, such as resource type, group size, duration and requested facilities.



Matching: Extracted criteria are compared with resource attributes.



Scoring: A weighted relevance score is calculated to rank candidate resources.



Output: Ranked resource recommendations are displayed for the user to inspect.

The booking workflow then applies operational constraints. Matching helps identify a suitable resource; it does not itself grant access or override booking rules or human approval.

7. System architecture

RESORA is implemented as a Next.js application with a React and TypeScript user interface. The product is organised around role-specific experiences for students, faculty and administrators, with shared resource and booking concepts.

flowchart TB
    U[Student / Faculty / Administrator] --> UI[Next.js + React + TypeScript UI]
    UI --> FINDER[Smart Resource Finder]
    FINDER --> PARSER[Deterministic query parser]
    PARSER --> SCORER[Weighted resource matcher]
    UI --> BOOK[Reservation workflow]
    BOOK --> RULES[Availability and constraint checks]
    UI --> FAC[Faculty review screens]
    UI --> QR[Booking-linked QR pass]
    UI --> ADMIN[Institutional Command Center]
    UI <--> STATE[Browser-persisted prototype state]
    SCHEMA[Prisma relational schema] -. data-model foundation .-> DOMAIN[Users, resources, bookings, approvals, operations]



Implementation and persistence note

The currently deployed prototype uses browser-side state and localStorage for operational demo state. The repository also contains a Prisma schema that describes relational entities for the application. The presence of a Prisma schema should not be interpreted as proof that every live interaction is currently persisted to a production PostgreSQL database. The implementation should be assessed according to the behaviour available in the deployed demo and the code in this repository.

This distinction is important for reviewers: the product demonstrates the user experience and workflow concepts, while production deployment would require the operational flows to be backed by a configured database, server-side validation and institution-grade access controls.

8. Technology stack







Layer



Technologies / approach





Application framework



Next.js 14





UI



React 18, TypeScript





Styling



Tailwind CSS





Animation



Framer Motion





Charts



Recharts





Icons



Lucide React





QR presentation



qrcode.react





Data modelling



Prisma ORM schema





Relational data model



PostgreSQL-oriented Prisma schema





Prototype state



Browser state and localStorage in the deployed demo





Deployment



Vercel



AI and automation disclosure





Custom deterministic natural-language parsing is used in the Smart Resource Finder.



Resource recommendations use custom weighted relevance scoring.



Booking suitability is handled through application-level rules and constraint checks.



No external LLM, generative-AI API, RAG pipeline, trained ML model, autonomous agent or LLM chain is claimed as part of the current implementation.





9. Data model

The Prisma schema defines the domain entities needed to represent a campus resource network. The principal model areas include:







Domain



Representative entities



Purpose





Identity and organisation



User, Department



Represent users, roles and institutional organisation.





Resource catalogue



Resource, ResourceBundle



Describe shared resources and grouped offerings.





Reservations



Booking, Approval, CheckIn, Waitlist



Represent booking requests, review decisions, access/check-in records and queueing.





Operations



MaintenanceWindow, Issue, Notification, AuditLog



Represent maintenance periods, reported issues, notifications and recorded activity.





Student ecosystem



Project, Opportunity



Support wider project and opportunity-related modules.

The schema is a structural foundation. The production version should connect each operational action to server-side persistence and validate user permissions at the API/database boundary.

10. Run locally



Prerequisites





Node.js compatible with Next.js 14 (Node.js 18.17 or newer is a suitable baseline).



npm.



Git.



Setup

git clone https://github.com/mansoorpattan2-wq/campora100.git
cd campora100
npm install
npm run dev

Open http://localhost:3000 in your browser.

Production build check

npm run build



Environment note: The demo's browser-persisted workflow can be explored without treating the Prisma schema as an already-connected production database. If you are extending the Prisma data layer, configure the appropriate database environment variables and follow the repository's Prisma setup before running schema or migration commands. Never commit secrets or real database credentials.





11. Live demo and source code





Live application: https://campora100.vercel.app/



GitHub repository: https://github.com/mansoorpattan2-wq/campora100

For evaluation, please use the live application for the product walkthrough and the repository for implementation details. If judge-specific demo credentials are required, add them in the event submission or a separate private instruction rather than publishing passwords in this README.

12. Current scope and next steps

The current prototype establishes the core discovery, reservation, faculty review, QR-pass and administrative-monitoring experience. Further work required for a production institutional rollout includes:





Server-backed persistence for all booking and operational events.



Institution-grade authentication, role enforcement and department-level access policies.



Explicit resource-owner assignment and configurable eligibility/training verification.



A complete handover and return workflow with before-and-after condition reports and controlled evidence storage.



Fair-allocation rules, transparent waiting-list priority and enforceable usage limits.



Stronger audit integrity, notification delivery, incident resolution and dispute workflows.



Automated tests for booking conflicts, role permissions and lifecycle transitions.

These are presented as hardening and extension areas, not as claims that every item is already complete in the deployed prototype.

13. Privacy, safety and responsible use





Use fictional or anonymised data in demonstrations.



Do not upload confidential institutional records or personal information without permission.



Do not use the prototype to bypass access restrictions or training requirements.



Restricted resources should remain subject to authorised institutional review.



Access, safety and penalty decisions should be explainable and reviewable by responsible personnel.



Production deployment should enforce permissions on the server and database, not only by hiding interface controls.



14. Team and contribution record

Add the actual team members and their verified contributions before submission. Keep this section specific and evidence-based.







Team member



Role



Verified contribution





[Name]



[Role]



[Specific screens, modules, models, algorithms or tests personally implemented]





[Name]



[Role]



[Specific screens, modules, models, algorithms or tests personally implemented]





[Name]



[Role]



[Specific screens, modules, models, algorithms or tests personally implemented]



Development and reuse disclosure

Complete this section accurately to comply with the event's originality and build-window requirements:





Pre-existing code, templates or assets reused: [List each item and its origin, or state “None” if true.]



Work newly developed during the hackathon: [List the exact modules, features and changes completed during the official build window.]



Libraries, frameworks and external services: Listed in the technology section above; add any additional services actually used.



AI-assisted development tools: [List tools used and how they were used.]

Do not claim pre-existing work as newly developed during the event. Keep the repository history and contribution records available for review if requested by the organisers.





15. Project summary

RESORA is a smart campus resource network that helps institutions make existing facilities easier to discover, request and coordinate. By combining natural-language discovery, explainable resource matching, constraint-aware reservations, faculty review, QR-linked access and institutional monitoring, RESORA aims to reduce the friction between available resources and unmet campus demand.



The principle behind RESORA: Make existing resources easier to find, easier to share and more accountable to use.



Built to make campus resources work better for the people who need them.
