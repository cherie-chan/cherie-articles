export const data = [
  {
    title: "Re-imaginging student portal experience",
    entity: "Monash University",
    year: "2023",
    type: "Case studies",
    thumbnail: "/images/student-portal/portal_new.png",
    largeThumbnail: true,
    content: [
      {
        type: "quote",
        quote:
          "This case study highlights my work transforming the student digital experience, bridging design, engineering, and real user needs.",
        highlightWords: ["transforming"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Outcome",
        title: "A sneak peek at the results",
        content: "A seamless, modern, and user-centric student experience.",
        video: {
          source: "https://www.youtube.com/embed/uys5iwZ5PE8",
          description: "Promotional video introducing the student portal app suite.",
        },
      },
      {
        type: "contentBlock",
        label: "Context",
        title: "Australia's largest university",
        content:
          "Monash University has 86K+ students, 17K staff, and over 490K alumni across 158 countries. The <strong>student portal re-imagination</strong> was part of a university-wide digital transformation to deliver a next-generation student experience.",
      },
      {
        type: "contentBlock",
        label: "Problem",
        title: "Fragmented student experience",
        content:
          "Multiple apps and websites were being built in silos, creating a disjointed and confusing experience for students.",
        image: {
          src: "/images/student-portal/monash_old_portal.jpg",
          description: "The old portal was difficult to navigate and not mobile-friendly.",
        },
      },
      {
        type: "quote",
        quote: "The student digital experience should feel effortless, empowering, and inspiring.",
        highlightWords: ["inspiring"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Vision",
        title: "World class UX",
        content:
          "We didn’t want to benchmark against other universities, we aimed to match world-class leaders like Netflix, Google, and Atlassian. The goal: a truly <strong>world-class</strong> digital experience for students.",
        customComponent: "pages/article/CustomComponents/AnimatedBarChart/AnimatedBarChart",
      },

      {
        type: "contentBlock",
        label: "Challenges",
        title: "Complex stakeholder alignment",
        content:
          "Aligning different departments was a key challenge. It wasn’t just about technology, we also had to bring together people from IT, academics, student services, and leadership to build trust and a <strong>shared vision.</strong>",
      },
      {
        type: "contentBlock",
        label: "Challenges",
        title: "Catering to diverse needs",
        content:
          "Designing for 86K students meant addressing different goals, skill levels, and accessibility requirements. We had to ensure the experience was inclusive and adaptable for all.",
        image: {
          src: "/images/student-portal/differences.jpeg",
          description: "Students with a wide range of needs and abilities.",
        },
      },
      {
        type: "contentBlock",
        label: "Strategy",
        title: "MSuite Strategy",
        content:
          "We transformed the portal into a suite of focused apps. Each app addressed a specific need while remaining integrated, enabling rapid iteration, user-centric design, and continuous feedback.",
        image: {
          src: "/images/student-portal/m_2.jpg",
          description: "MSuite: focused microservices working together like a solar system.",
        },
      },
      {
        type: "contentBlock",
        label: "Team & roles",
        title: "My role",
        content: "As Senior UX Engineer, I worked across strategy, design, and development.",
        columns: { l: 3, md: 2, s: 2 },
        items: [
          {
            icon: "Map",
            title: "Product strategy",
            text: "Planned roadmaps that balanced student needs with technical possibilities.",
          },
          {
            icon: "SquaresUnite",
            title: "Bridge design & engineering",
            text: "Led weekly design-dev syncs and dev catch-ups to reduce friction.",
          },
          {
            icon: "Code",
            title: "Front-end development",
            text: "Built components and features that meet accessibility standards (WCAG AA).",
          },
          {
            icon: "MonitorSmartphone",
            title: "Prototyping",
            text: "Created interactive web prototypes to validate concepts with students and stakeholders.",
          },

          {
            icon: "Component",
            title: "Design system architecture",
            text: "Developed a design system foundation with 50+ React components.",
          },

          {
            icon: "Baby",
            title: "Mentorship",
            text: "Mentored junior designers and developers to grow design-engineering capability.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Research",
        title: "Research methods",
        content:
          "We used qualitative and quantitative research, for example personas, card sorting, IA workshops, storyboarding, user flows, prototyping, analytics, and surveys to inform and validate design decisions.",
        display: "carousel",
        items: [
          {
            image: {
              src: "/images/student-portal/lo-fi.jpg",
              description: "Low-fi prototyping",
            },
          },
          {
            image: {
              src: "/images/student-portal/p2.png",
              description: "Personas building",
            },
          },
          {
            image: {
              src: "/images/student-portal/card.jpg",
              description: "Card sorting",
            },
          },
          {
            image: {
              src: "/images/student-portal/storyboarding.png",
              description: "Storyboarding",
            },
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Design system",
        title: "Figma component library",
        content:
          "We built a comprehensive Figma library with reusable components, styles, and guidelines to ensure consistency across products.",
        columns: { l: 2, md: 2, s: 2 },
        items: [
          {
            image: {
              src: "/images/student-portal/ds_figma_thumbnail.jpg",
              description: "Design system",
            },
          },
          {
            image: {
              src: "/images/student-portal/ds_figma.jpg",
              description: "Design system components",
            },
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Design system",
        title: "React component library",
        content:
          "Alongside Figma, we developed a React component library. Both stayed mostly in sync via tokens and documentation to maintain design consistency.",
        columns: { l: 2, md: 2, s: 1 },
        items: [
          {
            image: {
              src: "/images/student-portal/react_library_2.jpeg",
              description: "React components",
            },
          },
          {
            image: {
              src: "/images/student-portal/react_library_3.jpeg",
              description: "React components",
            },
          },
        ],
      },
      {
        type: "quote",
        quote:
          "The design system powers eight apps with over fifty components, ensuring consistent and accessible experiences at scale.",
        highlightWords: ["eight", "fifty"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Design & development",
        title: "Prototyping",
        content:
          "I led development of a high-fidelity interactive React prototype that communicated our vision and excited stakeholders.",
        video: {
          source: "https://www.youtube.com/embed/Fv1W34jMEpM",
          description: "Video showcasing the end prototype.",
        },
      },
      {
        type: "quote",
        quote: "The app suite launched with five apps: Home, Links, Profile, User Guide, and Admin.",
        highlightWords: ["five"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Home",
        content:
          "I led design and front-end development of customisable pages, including a playful Clock widget prototyped in a “coding for humans” session.",

        video: {
          source: "https://www.youtube.com/embed/sO8wqWR_Wvo",
          description: "Video showcasing Home app features.",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Home - unit pages",
        content:
          "Customisable pages let students create their own unit pages. Future plans included adding more widgets integrated with core systems.",
        image: {
          src: "/images/student-portal/unit_page.jpeg",
          description: "Example of a custom unit page.",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Home - scheduling",
        content: "Scheduling features help students view events and assessments in a clean, customisable layout.",
        video: {
          source: "https://www.youtube.com/embed/LpWeTitWtnE",
          description: "Video showcasing scheduling features.",
        },
      },
      {
        type: "contentBlock",
        label: "Design tech highlights",
        title: "Dashboard Blueprints",
        content:
          "I built dynamic dashboard blueprints with drag-and-drop interactions. The design extends beyond Figma, creating an interactive experience in code.",
        video: {
          source: "https://www.youtube.com/embed/hkaY_RAQfbY",
          description: "Video showcasing blueprints",
        },
      },
      {
        type: "contentBlock",
        label: "Design tech highlights",
        title: "Rapid prototyping",
        content:
          "Rapid prototyping accelerated design and delivery. Full-width widgets, for example, were explored in code to validate constraints and impact.",
        video: {
          source: "https://www.youtube.com/embed/_TIzT7EmT-8",
          description: "Experimenting with widget layouts in code.",
        },
      },
      {
        type: "contentBlock",
        label: "Design tech highlights",
        title: "Empowering teams to innovate",
        content:
          "I launched a design competition to reimagine the portal loading indicator, a fun way to spark creativity and promote design–engineering capability. The winning concept evolved into a reusable design system component, demonstrating how shared learning can drive innovation.",
        video: {
          source: "https://www.youtube.com/embed/ch_E-4cR1x0",
          description: "Video demonstrating the loading indicator competition",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Links",
        content: "Links aggregates essential student resources and integrates with Home for quick access.",
        video: {
          source: "https://www.youtube.com/embed/kAr9ah2GN7w",
          description: "Video showcasing Links features.",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Profile",
        content: "Profile lets students update personal details and access academic records in one place.",
        video: {
          source: "https://www.youtube.com/embed/YUSdbMRSMnc",
          description: "Video showcasing Profile features.",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "User Guide",
        content: "User Guide helps students learn to use the portal while reducing support demands.",
        video: {
          source: "https://www.youtube.com/embed/j9--pLKDbyM",
          description: "Video showcasing User Guide features.",
        },
      },
      {
        type: "contentBlock",
        label: "Solution",
        title: "Admin",
        content:
          "Admin helps staff manage portal apps and also supports content management, including links and themes, acting as a CMS for the portal.",
        video: {
          source: "https://www.youtube.com/embed/7xLA_Z-KSmM",
          description: "Video showcasing Admin theme building features.",
        },
      },

      {
        type: "quote",
        quote: "By prioritising accessibility, we create an inclusive environment where every student can thrive.",
        highlightWords: ["inclusive"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Design & development",
        title: "Digital inclusion",
        content: "With 86K students of diverse abilities, accessibility was a core commitment, not just a requirement.",
        image: {
          src: "/images/student-portal/inclusion.jpg",
          description: "The difference between experiences for students with and without visual impairment.",
        },
      },
      {
        type: "quote",
        quote:
          "Within 12 months of launch, the portal reached 65,000 active users, with over 76 percent satisfied. Students especially valued the customisable experience.",
        highlightWords: ["65,000", "76 percent"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Learnings",
        title: "Key learnings",
        content: "Key insights from the project:",
        columns: { l: 3, md: 2, s: 1 },
        items: [
          {
            icon: "RefreshCw",
            title: "UX engineering drives full lifecycle impact",
            text: "Wearing multiple hats as researcher, designer, prototyper, and developer enabled faster iteration and seamless handoffs.",
          },
          {
            icon: "Zap",
            title: "Power of coded prototypes",
            text: "Coded prototypes communicated vision better than any mockup. Live code excited stakeholders and validated concepts with real user interactions.",
          },
          {
            icon: "Heart",
            title: "Digital inclusion is non-negotiable",
            text: "Designing for 86K students reinforced that accessibility is fundamental, not optional.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Future",
        title: "Future directions",
        content:
          "The portal is just the beginning. There is more to explore in enriching multi-channel learning experiences.",
        columns: { l: 2, md: 1, s: 1 },
        items: [
          {
            image: {
              src: "/images/student-portal/we_are.jpg",
              description: "Current portal status.",
            },
          },
          {
            image: {
              src: "/images/student-portal/we_could_be.jpg",
              description: "Future possibilities.",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Supercharging teams with design tech",
    entity: "Kmart group",
    year: "2024",
    type: "Case studies",
    thumbnail: "/images/va/m_new.png",
    largeThumbnail: true,
    content: [
      {
        type: "quote",
        quote:
          "This case study highlights how I empowered product teams through design technology and experimentation, moving from hands-on delivery to enabling impact at scale.",
        highlightWords: ["empowered"],
        highlightColor: "#DD182B",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Context",
        title: "Leading retailer with big ambitions",
        content:
          "Kmart Group operates 449 stores across Australia and New Zealand, generating over $10B in FY25 and aiming for $20B in the next chapter. <strong>Winning online offer</strong> is a key strategic pillar as we strengthen our digital capability.",
        items: [
          { image: { src: "/images/va/kmart.png", noBorder: true, noBorderRadius: true } },
          { image: { src: "/images/va/target.png", noBorder: true, noBorderRadius: true } },
          {
            image: {
              src: "/images/va/anko.png",
              noBorder: true,
            },
          },
        ],
      },

      {
        type: "contentBlock",
        label: "Problem",
        title: "Empowering teams to innovate more efficiently",
        content:
          "Digital product teams wanted to move fast but faced slow, fragmented workflows and limited ways to validate ideas. Leadership recognised the need for <strong>stronger systems, frameworks, and data-driven validation</strong> to build a more mature digital capability.",
      },
      {
        type: "quote",
        quote:
          "Design technology and experimentation are key enablers, helping teams move faster, validate ideas, and deliver value with confidence.",
        highlightWords: ["Design technology", "experimentation"],
        highlightColor: "#1868B0",
        isTextInverted: true,
      },

      {
        type: "contentBlock",
        label: "Journey",
        title: "From squad lead to practice lead",
        content:
          "I started by leading experimentation in a product squad, launching 20+ tests in five months and generating over <strong>$15M</strong> in annualised revenue. This success led to my promotion to <strong>Experimentation Practice Lead</strong>, expanding my impact across Kmart and Target.",
      },

      {
        type: "contentBlock",
        label: "Team & Roles",
        title: "My responsibilities",
        content:
          "I combined technical enablement with program leadership, building systems, frameworks, and tools that empowered cross-functional teams to learn and deliver faster.",
        columns: { l: 3, md: 2, s: 2 },
        items: [
          {
            icon: "LandPlot",
            title: "Program leadership",
            text: "Scaled experimentation across Kmart & Target, in partnership with Optimizely.",
          },
          {
            icon: "Landmark",
            title: "Governance & strategy",
            text: "Built decentralised model and value recognition framework.",
          },
          {
            icon: "FlaskConical",
            title: "Experimentation execution",
            text: "Designed, built, and reported experiments.",
          },
          {
            icon: "SquaresUnite",
            title: "Cross-functional bridge",
            text: "Partnered with Data, Trade, Tech, Design and Product teams.",
          },
          {
            icon: "SquaresUnite",
            title: "Tooling & enablement",
            text: "Advanced Playroom, Storybook, and the design system.",
          },
          {
            icon: "Bot",
            title: "AI integration",
            text: "Explored AI-assisted workflows and rapid prototyping.",
          },
        ],
      },

      {
        type: "quote",
        quote: "Unlocking value through experimentation, powered by design tech.",
        highlightWords: ["experimentation"],
        highlightColor: "#1868B0",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Practice",
        title: "Turning learning into value",
        content:
          "Our vision: to deliver immediate and strategic business value by <strong>learning, validating, and building the right thing</strong>. We are moving towards <strong>data over opinion</strong>",
        image: {
          src: "/images/va/unlocking.png",
          noBorder: true,
          noBorderRadius: true,
        },
      },

      {
        type: "contentBlock",
        label: "Impact",
        title: "Optimising existing experiences",
        content:
          "Experimentation on product tile density revealed that reducing white space improved product visibility and engagement, driving measurable uplifts in product views, add-to-carts, and overall revenue.",
        image: {
          src: "/images/va/white_space.png",
          description: "Experiment: Reduce white space on PLPs and SLPs.",
          noBorder: true,
          noBorderRadius: true,
        },
      },
      {
        type: "contentBlock",
        label: "Impact",
        title: "Validating and optimising new features",
        content:
          "We optimised the new product recommender on PDPs, a small change that made a big difference, driving stronger discovery, engagement, and order value.",
        image: {
          src: "/images/va/recommenders.png",
          description: "Experiment: Enable scrollable product recommender on PDPs.",
          noBorder: true,
          noBorderRadius: true,
        },
      },
      {
        type: "contentBlock",
        label: "Impact",
        title: "Risk mitigation through experimentation",
        content:
          "A test introducing trending search terms in the search box placeholder unexpectedly reduced AOV, preventing a potential <strong>$5M annualised revenue loss</strong>. This experiment highlighted the importance of validating assumptions before scaling.",
        image: {
          src: "/images/va/neg.png",
          description: "Experiment: Search box placeholder optimisation.",
          noBorder: true,
          noBorderRadius: true,
        },
      },

      {
        type: "contentBlock",
        label: "Impact",
        title: "FY25 Impact",
        content:
          "I led a <strong>full program reset</strong> in partnership with Optimizely, significantly uplifting our maturity in velocity, quality, reporting, and documentation.",
        columns: { l: 3, md: 2, s: 2 },
        items: [
          { icon: "HandCoins", title: "$51.1M recognised", text: "Annualised incremental revenue." },
          { icon: "ArrowBigUpDash", title: "90+ experiments", text: "Across Kmart and Target brands." },
          {
            icon: "Hand",
            title: "$15M+ delivered",
            text: "Personally delivered through hands-on experimentation.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Recognition",
        title: "Executive Impact",
        content:
          "The <strong>Chief Customer Officer</strong> personally congratulated me, and outcomes were shared with the <strong>Managing Director</strong>, reinforcing the value and visibility of the work.",
      },
      {
        type: "quote",
        quote: "Fueling product teams with powerful design tech systems and tools that eliminate friction.",
        highlightWords: ["Fueling"],
        highlightColor: "#DD182B",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Delivery",
        title: "The Value Accelerator Framework",
        content:
          "I co-developed the VA framework, to help teams deliver customer and business value faster. The VA provided methods, tools, and structured facilitation so squads could prototype, test, and validate ideas within days, not weeks. The VA drives early stakeholder alignment and reducing delivery risk. ",
        display: "carousel",
        items: [
          {
            image: {
              src: "/images/va/fit.jpg",
              description: "Diagram of the Value Accelerator Framework",
            },
          },
          {
            image: {
              src: "/images/va/framework.jpg",
              description: "Diagram of the Value Accelerator Framework",
            },
          },
        ],
      },

      {
        type: "contentBlock",
        label: "Delivery",
        title: "Advancing design technology",
        content:
          "We enhanced our design tech ecosystem, upgrading the design system, introducing Playroom for rapid prototyping, and integrating AI in design workflows. This enabled teams to turn concepts into coded experiments at record speed.",
        columns: { l: 2, md: 1, s: 1 },
        items: [
          {
            image: {
              src: "/images/va/prototype.jpeg",
              description: "AI-generated prototype stored in Storybook playground",
            },
          },
          {
            image: {
              src: "/images/va/quiz.jpeg",
              description: "Experiment stored in Storybook playground",
            },
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Tooling",
        title: "Playroom",
        content:
          "Playroom is a custom prototyping tool integrated with our design system, enabling rapid layout creation during VA sessions.",
        video: {
          source: "https://www.youtube.com/embed/cs5SV1YRIqw",
          description: "Video showcasing the Playroom tool.",
        },
      },
      {
        type: "contentBlock",
        label: "Prototype Example",
        title: "Playroom prototype",
        content: "A “My Account” prototype built from scratch in under two hours during a VA session.",
        video: {
          source: "https://www.youtube.com/embed/O3VxBTDV6zA",
          description: "Video showcasing the prototype.",
        },
      },
      {
        type: "contentBlock",
        label: "Impact",
        title: "Homepage Reimagination",
        content:
          "Reimagining the homepage through Value Accelerators and experiments drove an estimated <strong>$2M</strong> in annualised revenue and improved the <strong>customer experience</strong>.",
        display: "carousel",
        items: [
          { image: { src: "/images/va/concept.jpeg", description: "Initial mosaic design concept" } },
          { image: { src: "/images/va/lovable.jpeg", description: "Lovable.ai prototype built by designer" } },
          {
            image: {
              src: "/images/va/coded.jpeg",
              description: "Coded prototype built by design technologists & engineers",
            },
          },
          {
            image: {
              src: "/images/va/latest.jpeg",
              description: "Latest feature tested in production, rollout in progress",
            },
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Impact",
        title: "Virtual Try-On",
        content:
          "Partnering with Google, we tested an <strong>AI-powered virtual try-on experience</strong> for apparel, designed, built and validated collaboratively with Google engineers in just two days. The initiative validated new possibilities for digital confidence both online and in-store.",

        columns: { l: 2, md: 1, s: 1 },
        items: [
          { image: { src: "/images/va/mobile.jpg", description: "Virtual try-on prototype" } },
          { image: { src: "/images/va/person.jpg", description: "Image generated by the feature (me pictured)" } },
        ],
      },

      {
        type: "quote",
        quote:
          "We moved from weeks of discovery to days of delivery, turning ideas into measurable impact faster than ever.",
        highlightWords: ["weeks", "days"],
        highlightColor: "#DD182B",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Challenge",
        title: "Scaling change",
        content:
          "<strong>Adoption of new frameworks in large organisations is slow.</strong> We tackled this by documenting principles, sharing knowledge, piloting with early teams, and scaling proven approaches. Progress is steady and ongoing.",
      },
      {
        type: "contentBlock",
        label: "Learnings",
        title: "Key learnings",
        content:
          "Pairing design technology with experimentation is <strong>powerful</strong>. It drives speed, confidence, and scalable impact across teams.",
        columns: { l: 2, md: 2, s: 1 },
        items: [
          {
            icon: "FlaskConical",
            title: "Two way enablement",
            text: "Experimentation identifies opportunities and provides real world insights, while design tech enables teams to prototype, validate, and deliver with speed and consistency.",
          },
          {
            icon: "Clock",
            title: "Organisational change takes patience",
            text: "Meaningful transformation happens step by step. Momentum builds when you celebrate early wins, share stories, and provide consistent enablement.",
          },
        ],
      },
      {
        type: "quote",
        quote:
          "Design technology and experimentation together create a culture of learning, speed, and measurable impact.",
        highlightWords: ["culture"],
        highlightColor: "#1868B0",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Future",
        title: "What’s next",
        content:
          "My focus is to further embed experimentation and design tech into the <strong>organisation’s DNA</strong>, creating connected systems where teams can ideate, validate, and scale ideas faster than ever. I aim to expand AI-assisted tooling, strengthen automation, and deepen our measurement frameworks to drive even greater impact.",
      },
    ],
  },
  {
    title: "Experimentation Evolution",
    entity: "Kmart Group",
    year: "2026",
    type: "Draft",
    thumbnail: "",
    content: [
      {
        type: "quote",
        quote:
          "In FY27, experimentation will evolve into a continuous system that enables teams to validate ideas early, prove impact in-market, and scale outcomes into production.",
        highlightWords: ["validate", "prove", "scale"],
        highlightColor: "#7a49ba",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Executive Summary",
        title: "Overview",
        content:
          "In FY26, we delivered <strong>100+ A/B tests across 6 product squads</strong>, recognising <strong>$8.1M in CRO lift</strong> ($13.6M annualised) and <strong>$7M in strategic uplift</strong> ($11.4M annualised) in H1.<br><br>In FY27, experimentation will evolve from in-market testing to <strong>a full lifecycle system spanning early validation, in-market experimentation, and production scaling</strong>, enabling teams to make better decisions earlier, run higher-quality experiments, and convert validated insights into long-term value.",
      },
      {
        type: "contentBlock",
        label: "FY26 Wins",
        title: "What we achieved",
        celebrate: true,
        content: "As of early May 2026, FY26 delivered meaningful results across scale, value, and capability.",
        columns: { l: 3, md: 2, s: 1 },
        itemBgColor: "#F4F2EF",
        items: [
          {
            icon: "FlaskConical",
            title: "100+ A/B tests across 6+ squads",
            text: "Product squads independently owned and ran tests, marking a meaningful shift in adoption and capability.",
          },
          {
            icon: "ShieldCheck",
            title: "De-risked features, prevented losses",
            text: "Caught negative impacts before full rollout, including Target Single Page Checkout and Kmart PDP recommender changes, protecting revenue.",
          },
          {
            icon: "TrendingUp",
            title: "Revenue lift recognised",
            text: "$8.1M CRO lift ($13.6M annualised) and $7M strategic uplift ($11.4M annualised) in H1 FY26. Attribution beyond this point pending new framework.",
          },
        ],
      },

      {
        type: "contentBlock",
        label: "FY26 Challenges",
        title: "Where we struggled",
        itemBgColor: "#F4F2EF",
        content: "Key challenges informed the FY27 direction.",
        columns: { l: 2, md: 2, s: 1 },
        items: [
          {
            icon: "Timer",
            title: "Velocity vs quality",
            text: "Delivery pressure reduced rigour and experiment quality, leading to performance impacts and unexpected side effects.",
          },
          {
            icon: "AlertTriangle",
            title: "Platform stability & change",
            text: "Instability and major platform changes reduced confidence in earlier results, including availability issues, caching bugs, and the marketplace introduction.",
          },
          {
            icon: "BarChart2",
            title: "Value recognition",
            text: "Difficulty attributing long-term value and relative, forecasted value can easily be impacted by unpredictable prodcution changes.",
          },

          {
            icon: "Cpu",
            title: "Architecture limits & tech debt",
            text: "Visitor ID inconsistencies and availability issues constrain experimentation. Legacy experiments, events, and audiences add maintenance overhead.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Vision",
        title: "The evolution vision",
        content:
          "<strong>Experimentation shouldn't be a one-off practice.</strong> It should be <strong>a continuous system</strong> spanning the full product lifecycle,  where each stage connects and compounds, turning learnings into decisions and decisions into lasting value.",
        customComponent: "pages/article/CustomComponents/ExperimentationLifecycle/ExperimentationLifecycle",
      },
      {
        type: "contentBlock",
        label: "FY27 Evolution",
        title: "Three shifts for FY27",
        content: "The practice evolves across three core shifts.",
        itemBgColor: "#F4F2EF",
        columns: { l: 3, md: 1, s: 1 },
        items: [
          {
            icon: "Target",
            title: "Velocity → Quality",
            text: "Increase the rate of conclusive outcomes, minimize unintended side effects and production risks, and ensure more tests are supported by  data or research.",
          },
          {
            icon: "Network",
            title: "From siloed stream to core capability",
            text: "Experimentation is embedded in product and engineering, not a separate stream. Teams experiment where it adds real value, not for its own sake.",
          },
          {
            icon: "RefreshCcw",
            title: "Fragmented testing → Continuous system",
            text: "Connect early validation, in-market testing, and production outcomes into one system, where learnings are shared across squads.",
          },
        ],
      },
      {
        type: "quote",
        quote: "Three stages. One system. Validate early, prove in-market, scale to production.",
        highlightWords: ["Validate", "prove", "scale"],
        highlightColor: "#7a49ba",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Stage 1",
        title: "Early-stage experimentation",
        content:
          "<strong>Validate ideas with stakeholders and customers</strong> before committing to engineering investment. We’ve already explored this framework in practice. In FY27, the opportunity is to scale this further with <strong>stronger AI leverage</strong>, enabling faster, higher-fidelity validation at much lower cost, and using AI to <strong>bridge the gap between prototype and production ready code.</strong>",
        display: "carousel",
        items: [
          { image: { src: "/images/va/concept.jpeg", description: "Initial mosaic design concept" } },
          {
            image: {
              src: "/images/va/coded.jpeg",
              description: "Coded prototype built by design technologists & engineers",
            },
          },
          {
            image: {
              src: "/images/va/latest.jpeg",
              description: "Feature tested in production",
            },
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Stage 2",
        title: "In-market experimentation",
        content:
          "<strong>Validate impact at scale and inform confident decisions.</strong> We use in-market A/B testing to measure behavioural and commercial outcomes, optimise conversion rates, de-risk releases, and establish statistical confidence before committing to full rollout.",
        display: "slideCarousel",
        slides: [
          {
            image: "/images/experimentation/Slide1.png",
            title: "Experiment concluded in FY26",
          },
          {
            image: "/images/experimentation/Slide2.png",
            title: "Experiment concluded in FY26",
          },
          {
            image: "/images/experimentation/Slide3.png",
            title: "Experiment concluded in FY26",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Stage 3",
        title: "Experiment → production",
        content: "Translate validated experiments into production efficiently. Three key components enable this:",
        itemBgColor: "#F4F2EF",
        columns: { l: 3, md: 1, s: 1 },
        items: [
          {
            icon: "Bot",
            title: "AI leverage",
            text: "Use AI to close the gap between experiment and production, generating high quality code and delivery artefacts.",
          },
          {
            icon: "Component",
            title: "Design system",
            text: "Reusable components and shared styles keep experiment code closer to production from day one, reducing rework at handoff.",
          },
          {
            icon: "SquaresUnite",
            title: "Tech alignment",
            text: "Shared patterns and guardrails ensure experiments meet production standards before handoff, not after.",
          },
        ],
      },
      {
        type: "quote",
        quote: "Product squads own execution. A CoE ensures quality, consistency, and impact.",
        highlightWords: ["quality", "consistency", "impact"],
        highlightColor: "#7a49ba",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Operating Model",
        title: "Centre of Excellence",
        content:
          "<strong>The CoE is the operating model for scalable experimentation</strong>, ensuring consistency, quality, and measurable impact across squads. Squads own delivery, while the CoE <strong>owns</strong> frameworks, standards, measurement integrity, tooling, governance, and shared documentation, and <strong>guides</strong> prioritisation, decision-making, and experimentation approach. ",
        customComponent: "pages/article/CustomComponents/CoEOrbitSystem/CoEOrbitSystem",
        customComponentProps: {
          centerLabel: "CoE",
          ownsTitle: "CoE Owns",
          guidesTitle: "CoE Guides",
          owns: ["Frameworks", "Standards", "Measurement", "Tooling", "Governance", "Knowledge"],
          guides: ["Prioritisation", "Decisioning", "Approach"],
        },
      },
      {
        type: "contentBlock",
        label: "AI Leverage",
        title: "AI-powered experimentation",
        content:
          "These are the <strong>major blocks for how AI can strengthen experimentation across the lifecycle</strong>. The detailed plan is still being shaped, but the direction is clear: use AI to help us learn faster, build better, and scale validated outcomes more effectively.",
        itemBgColor: "#F4F2EF",
        columns: { l: 2, md: 2, s: 1 },
        items: [
          {
            icon: "Zap",
            title: "Quality & efficiency",
            text: "Use AI to accelerate and enhance the entire experimentation lifecycle. Leveraging partnerships with Optimizely, Google, OpenAI, and Microsoft.",
          },
          {
            icon: "BookOpen",
            title: "Knowledge building",
            text: "Connect AI agents with experiment outcomes and team insights in a shared repository, enabling context-aware decision-making across squads.",
          },
          {
            icon: "Users",
            title: "Customer-facing optimisation",
            text: "Explore GenAI-enabled features and how we test and optimise them in production, in collaboration with the data team.",
          },
          {
            icon: "Cpu",
            title: "Future of experimentation",
            text: "Move beyond CX-layer testing toward system-level optimisation, including how we test AI models at scale in production.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "AI Leverage",
        title: "Agentic A/B Testing Lifecycle",
        content:
          "<strong>The A/B testing lifecycle is inherently cross-functional</strong>, spanning design, engineering, and data teams at every stage. As AI adoption continues to grow across the organisation, there is a significant opportunity to embed agentic tooling throughout the process. Several of these capabilities are already underway.",
        customComponent: "pages/article/CustomComponents/AgenticABTestingLifecycle/AgenticABTestingLifecycle",
        customComponentProps: {
          curve: {
            xPadding: 10,
            baseY: 50,
            amplitude: 10,
          },
          stages: [
            {
              title: "Ideate",
              points: ["Test ideation", "Hypothesis builder"],
            },
            {
              title: "Craft & Plan",
              points: ["Test plans", "Variant generation", "Metric blueprint"],
            },
            {
              title: "Design",
              points: ["Rapid prototyping", "Design generation"],
            },
            {
              title: "Execute",
              points: ["Experiment set up QA", "Agentic SDLC"],
            },
            {
              title: "Monitor",
              points: ["Summarise trends", "Program overview"],
            },
            {
              title: "Analyse",
              points: ["Summarise results", "Recommend iteration"],
            },
            {
              title: "Finalise",
              points: ["Results pack generation", "Comms & sharing"],
            },
            {
              title: "Post test",
              points: ["Agentic SDLC"],
            },
          ],
        },
      },

      {
        type: "contentBlock",
        label: "Success Measures",
        title: "FY27 CoE success measures",
        itemBgColor: "#F4F2EF",
        content: "Focus on quality, impact, and continuity. Not just velocity and revenue.",
        columns: { l: 3, md: 1, s: 1 },
        items: [
          {
            icon: "Users",
            title: "Continuity",
            text: "<strong>%</strong> of experiment learnings documented and shared across teams<br><strong>%</strong> of winning experiments scaled to production within a defined timeframe",
          },
          {
            icon: "CheckCircle",
            title: "Quality",
            text: "<strong>%</strong> of tests reaching conclusive outcomes<br><strong>%</strong> of tests with no unintended side effects",
          },
          {
            icon: "TrendingUp",
            title: "Impact",
            text: "<strong>#</strong> of squads delivering measurable improvements through early-stage or in-market experimentation<br><strong>$</strong> revenue recognised through experimentation by squads",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "The Ask",
        title: "What we need from leadership",
        content: "To enable this shift:",
        itemBgColor: "#F4F2EF",
        columns: { l: 3, md: 1, s: 1 },
        items: [
          {
            icon: "BadgeCheck",
            title: "Endorse direction",
            text: "Support the shift to a quality-led, enablement model.",
          },
          {
            icon: "Target",
            title: "Align measures",
            text: "Inform priority against quality, impact, and continuity as success metrics.",
          },
          {
            icon: "Users",
            title: "Commit capacity",
            text: "Allocate product and engineering contributors for ongoing enablement—frameworks, tooling, support, and workflow testing.",
          },
        ],
      },
      {
        type: "quote",
        quote: "Exciting AI use cases and updates to come. Watch this space.",
        highlightWords: ["AI"],
        highlightColor: "#7a49ba",
        isTextInverted: true,
      },
    ],
  },

  {
    title: "Design Technology Vision",
    entity: "Kmart Group",
    year: "2026",
    type: "Draft",
    thumbnail: "",
    content: [
      {
        type: "quote",
        quote:
          "Experimentation gave us evidence and confidence. Design technology turns that momentum into sustained competitive advantage.",
        highlightWords: ["competitive"],
        highlightColor: "#E44444",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Context",
        title: "The catalyst for change",
        content:
          "When I joined Kmart Group in late 2024, our digital teams were ambitious and customer-focused, but constrained. Teams wanted to move fast and learn from customers, yet were slowed by fragmented workflows, limited tooling, and over-reliance on opinion over evidence. Leadership recognised we needed stronger systems and a practical way to validate decisions with data. That became the catalyst for establishing <strong>experimentation and design technology</strong> as core capabilities.",
      },
      {
        type: "contentBlock",
        label: "Foundation",
        title: "Establishing experimentation",
        content:
          "Over the past year, experimentation shifted from uncertain and lightly trusted to a foundational capability. We proved customer experience and business value through data, not opinion. We unlocked value through learning, even with uncertain outcomes. Most importantly, we normalised curiosity, testing, and evidence-based decision-making.",
        columns: { l: 2, md: 2, s: 2 },
        items: [
          {
            icon: "ChartBar",
            title: "Data over opinion",
            text: "Decisions backed by evidence, not assumptions.",
          },
          {
            icon: "BookOpen",
            title: "Learning culture",
            text: "Value created through validated learning.",
          },
          {
            icon: "Users",
            title: "Cross-functional",
            text: "Built foundations across teams.",
          },
          {
            icon: "BadgeQuestionMark",
            title: "Curious mindset",
            text: "Normalised experimentation and curiosity.",
          },
        ],
      },
      {
        type: "quote",
        quote: "Experimentation created the mindset, trust, and muscle required for what comes next.",
        highlightWords: ["mindset", "trust"],
        highlightColor: "#448CE4",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Evolution",
        title: "The next level",
        content: `As we enter 2026, the experimental mindset we've built becomes the launchpad for design technology as a first-class capability. Design technology is a specialist practice within Product Design, acting as a <strong>force multiplier</strong> across design, product, and engineering.`,
      },
      {
        type: "contentBlock",
        label: "Principles",
        title: "Design technology principles",
        content:
          "Design technology at Kmart Group is grounded in four core principles that guide how we work and what we build.",
        columns: { l: 2, md: 2, s: 2 },
        items: [
          {
            icon: "ChartSpline",
            title: "Eliminate friction",
            text: "Robust systems and tools to streamline design workflows.",
          },
          {
            icon: "SquaresUnite",
            title: "Bridge gaps",
            text: "Shorten feedback loops between design, engineering and other functions.",
          },
          {
            icon: "Rocket",
            title: "Accelerate growth",
            text: "Enable rapid optimisation, discovery, and innovation.",
          },
          {
            icon: "Cpu",
            title: "Leverage AI responsibly",
            text: "Pragmatic adoption of emerging technologies.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Strategy",
        title: "Key pillars & players",
        content:
          "Our design technology vision is built on six interconnected pillars, each with dedicated teams and clear outcomes.",
        columns: { l: 3, md: 2, s: 1 },
        items: [
          {
            icon: "Users",
            title: "In-house capability",
            text: "Grow design tech skills across the portfolio. Oskar & Cherie leading the uplift.",
          },
          {
            icon: "Component",
            title: "Multi-brand design systems",
            text: "Core Web team building strong foundations across brands and platforms.",
          },
          {
            icon: "FlaskConical",
            title: "Design Tech Lab",
            text: "Purpose-built tooling for rapid prototyping, validation, and scaling ideas.",
          },
          {
            icon: "Cpu",
            title: "AI-enabled workflows",
            text: "Rigel & Core Web teams driving practical, human-centered AI adoption.",
          },
          {
            icon: "TrendingUp",
            title: "Experimentation continuity",
            text: "Link rapid prototyping to A/B testing for faster validation.",
          },
          {
            icon: "Flame",
            title: "Rebranded VA",
            text: "Turn ideas into validated outcomes quickly, leveraging AI.",
          },
        ],
      },
      {
        type: "quote",
        quote: "This is not easy work. But this is why design technology matters.",
        highlightWords: ["matters"],
        highlightColor: "#E44444",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Reality",
        title: "Acknowledging the challenge",
        content: `We operate within significant technical debt, varying digital maturity, a complex multi-brand ecosystem, and rapidly evolving AI landscapes. There is ongoing ambiguity. But our goal is not perfection, it's <strong>progress</strong>. We aim to help Kmart Group win by building capabilities that scale learning, creativity, and impact.`,
      },
      {
        type: "contentBlock",
        label: "Closing",
        title: "From momentum to advantage",
        content:
          "Experimentation gave us evidence, confidence, and momentum. Design technology is how we turn that momentum into a sustained competitive advantage for Kmart Group and our product and design functions.",
      },
    ],
  },
  {
    title: "Coding for humans",
    entity: "Monash University",
    year: "2023",
    type: "Projects",
    thumbnail: "/images/others/player.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Empowering everyone to bring their ideas to life through creativity and code.",
        highlightWords: ["Empowering"],
        highlightColor: "#fff827ff",
        // isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Context",
        title: "Creative enablement",
        content:
          "As part of the Monash UX Engineering team, we ran regular <strong>coding for humans</strong> sessions, a fun, hands-on space where designers learned to code, engineers explored design, and everyone collaborated to push creative boundaries.",
      },
      {
        type: "contentBlock",
        label: "Example",
        title: "Snake game",
        content:
          "I built this game with Canvas, JavaScript, and CSS, a playful twist where the goal is to eat eggs and avoid peas (because they’re my least favourite food).",
        video: {
          source: "https://www.youtube.com/embed/cADeBMKor0Q",
          description: "Video showing a snake game built in code",
        },
      },
      {
        type: "contentBlock",
        label: "Example",
        title: "Clock",
        content:
          "I built a realistic React + CSS clock with customisable backgrounds and GIFs, originally a playful side project that later evolved into a real feature in the student portal.",
        video: {
          source: "https://www.youtube.com/embed/GaCXBHyvu8A",
          description: "Video showing a clock built in code",
        },
      },
      {
        type: "contentBlock",
        label: "Example",
        title: "Music player",
        content: "I built a nostalgic React + CSS rebuild of the classic iPod.",
        video: {
          source: "https://www.youtube.com/embed/a5LXiZEKyJs",
          description: "Video showing a music player built in code",
        },
      },
      {
        type: "contentBlock",
        label: "Example",
        title: "Calculator",
        content: "I built a fully functional, retro-styled calculator built in React + CSS.",
        video: {
          source: "https://www.youtube.com/embed/778ETo1ceJs",
          description: "Video showing a calculator built in code",
        },
      },
    ],
  },
  {
    title: "Time travel game",
    entity: "Monash University",
    year: "2022",
    type: "Projects",
    thumbnail: "/images/others/ship.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Blending creativity and technology to create memorable, interactive moments.",
        highlightWords: ["memorable"],
        highlightColor: "#002079ff",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Context",
        title: "Time travel game",
        content:
          "For a Monash Digital All Hands, our team designed and built a custom time travel game to showcase our creative and technical capabilities, and, of course, to have some <strong>fun</strong> along the way.",
      },
      {
        type: "contentBlock",
        label: "Outcome",
        title: "All hands session",
        content:
          "I developed the entire game from scratch using React and Firebase for <strong>real-time multiplayer, scoring, and stage control</strong>. Motion sensing on mobile added an extra layer of immersion. Balancing performance, edge cases, and player inactivity was challenging, but the final event ran smoothly and successfully engaged over 80 participants.",
        video: {
          source: "https://www.youtube.com/embed/8zFGUVIT94Q",
          description: "Video showing the all hands session",
        },
      },
    ],
  },
  {
    title: "Monash policy bank",
    entity: "Monash University",
    year: "2020",
    type: "Prototypes",
    thumbnail: "/images/others/policy.png",
    largeThumbnail: true,
    content: [
      {
        type: "quote",
        quote: "Those pieces of the pyramid are floating! A stakeholder reacted with delight.",
        highlightWords: ["floating"],
        highlightColor: "#191919ff",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Outcome",
        title: "Redesigning the Policy Bank",
        content:
          "This was the first prototype I ever built, a redesign concept for Monash’s Policy Bank. I had just started learning to code. Stakeholders loved it, one even called to say I absolutely nailed it. Although priorities shifted and the project didn’t move forward, it was a defining early moment that sparked <strong>my love for design technology</strong> and interactive storytelling.",
        video: {
          source: "https://www.youtube.com/embed/RSxQ7X_mFh0",
          description: "Video showing the prototype",
        },
      },
    ],
  },
  {
    title: "A/B Testing Value Attribution",
    entity: "Kmart Group",
    year: "2026",
    type: "Case studies",
    thumbnail: "/images/experimentation/vision.jpeg",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Rethinking value attribution and the role of A/B testing within it.",
        highlightWords: ["value attribution"],
        highlightColor: "#009758ff",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Executive Summary",
        title: "From FY26 pressure to FY27 enablement",
        content:
          "In FY26, product squads faced significant pressure to drive and recognise revenue through experimentation & optimisation. The primary focus was meeting velocity and revenue squad goals rather than discovery and learning.<br/><br/>In FY27, we are adjusting those goals. There is also no longer a need to recognise value for CRO as a standalone program of work. The focus shifts to how experimentation supports product squads in both validating and measuring the impact of their work through high-quality experimentation and continuity.<br/><br/><a href='https://cherie-articles.vercel.app/article/Experimentation%20Evolution' target='_blank' rel='noopener noreferrer'>Learn more about the practice FY27 evolution →</a><br/><br/>",
      },
      {
        type: "contentBlock",
        label: "The Question",
        title: "Starting with why",
        content:
          "What is the role of A/B testing in value measurement and attribution? Before developing a new framework to recognise incremental revenue from experimentation, we must start with the <strong>why</strong>.",
      },
      {
        type: "quote",
        quote: "Not all value can be measured in incremental revenue, and that's perfectly acceptable.",
        highlightWords: ["Not all value"],
        highlightColor: "#009758ff",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Value Beyond Revenue",
        title: "Things we value and continue to drive",
        content:
          "We need to distinguish between <strong>incremental revenue</strong> and other valuable outcomes, which require different measurement approaches but are equally important for strategic decision-making and long-term business health:",
        itemBgColor: "#F4F2EF",
        columns: { l: 3, md: 2, s: 1 },
        items: [
          {
            icon: "Heart",
            title: "Better customer experience",
            text: "Improving usability and satisfaction for our customers.",
          },
          {
            icon: "Users",
            title: "Customer engagement",
            text: "Higher activity, repeat visits, and product adoption.",
          },
          {
            icon: "Lightbulb",
            title: "Discovery & learnings",
            text: "Validating assumptions and building organisational knowledge.",
          },
          {
            icon: "ShieldCheck",
            title: "Risk & loss prevention",
            text: "Catching issues before they impact the business at scale.",
          },
          {
            icon: "Infinity",
            title: "Lifetime value & loyalty",
            text: "Driving subscriptions, reviews, and long-term customer relationships.",
          },
          {
            icon: "Target",
            title: "Strategic indicators",
            text: "Measurable progress on team-owned success metrics.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Value Beyond Revenue",
        title: "Experiments driving non-revenue value",
        content:
          "You can't put a dollar value on more confident decisions and learnings. These experiments demonstrate the broader impact of A/B testing:",
        display: "slideCarousel",
        slides: [
          {
            image: "/images/experimentation/Slide3.png",
            title: "Substitue recommender experiment",
          },
          {
            image: "/images/experimentation/Slide2.png",
            title: "Header login nudge experiment",
          },
          {
            image: "/images/experimentation/Slide4.png",
            title: "Kmail & Reviews opt-in optimisation",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Value Beyond Revenue",
        title: "Driving measurable growth",
        content:
          "<strong>Demonstrating growth matters more than absolute numbers.</strong> When squads own and consistently track the same metrics over time, patterns become meaningful even without revenue attribution. This is where metric ownership drives value.",
        image: {
          src: "/images/experimentation/Login.png",
          description: "Login session trend after scaling the optimisation in April",
        },
      },

      {
        type: "contentBlock",
        label: "Incremental Revenue",
        title: "When revenue attribution matters",
        content:
          "<strong>Not all experiments are revenue-driving</strong>, and that's expected. However, there will still be cases where we need to articulate clear value, particularly for strategic initiatives or major product changes. In these situations, we should develop a clearer framework to recognise incremental revenue from A/B testing with integrity and precision. <br/><br/>What are the criteria for determining if a feature or optimisation drives incremental revenue? And what is the role of A/B testing in that determination?",
      },
      {
        type: "quote",
        quote: "There is no perfect way to work out the actual numbers.",
        highlightWords: ["no perfect way"],
        highlightColor: "#009758ff",
        isTextInverted: true,
      },
      {
        type: "contentBlock",
        label: "Practice Perspective",
        title: "Our goals for value recognition",
        content:
          "Attribution is inherently uncertain, especially when funnel changes and market conditions influence outcomes. Our goal is not perfect numbers, but a consistent framework that equips squads to run high-quality experiments and build credible measurement over time.",
        columns: { l: 2, md: 2, s: 1 },
        items: [
          {
            icon: "CheckCircle",
            title: "Enable confident validation",
            text: "Empower squads to confidently validate commercial outcomes and make data-driven decisions.",
          },
          {
            icon: "ShieldCheck",
            title: "Protect attribution integrity",
            text: "Ensure attribution and practice integrity where revenue claims are being made from A/B test results.",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Open Question 1",
        title: "Supporting evidence vs. requirement",
        content:
          "<strong>Should A/B testing be required to define incremental revenue?</strong> Or should it serve as supporting evidence for stronger value claims? This distinction affects how product squads approach experimentation and how leadership evaluates success.",
      },
      {
        type: "contentBlock",
        label: "Open Question 2",
        title: "Should we look past FY26 H2 and just move on?",
        content:
          "Several FY26 experiments meet the previous value attribution criteria. The question is: should we recognise these, or start fresh from FY27 with a new framework?",
        columns: { l: 2, md: 1, s: 1 },
        items: [
          {
            title: "Wider page size + 5 products per row (rolled out)",
            text: "Driving CVR (88% statistical significance) and AOV (99%+ SS)",
          },
          {
            title: "PDP Recommender redesign with RTR (rolled out)",
            text: "Driving AOV (98% SS)",
          },
          {
            title: "Reduce White Space - UI components",
            text: "Filter engagement (99%+ SS) and AOV (99%+ SS)",
          },
          {
            title: "Condensed product cards in PLP & SLP",
            text: "Click through (99%+ SS) and AOV (91% SS)",
          },
        ],
      },
      {
        type: "contentBlock",
        label: "Open Question 3",
        title: "Double counting dilemma and cannibalisation between squads",
        content:
          "A critical challenge emerges when multiple teams can contribute to the same uplift, and one team's work can negatively impact another thing. <br/><br/><strong>Example 1: Multiple contributors to the same uplift</strong><br/>The PDP recommender experiment is a case in point. The experiment itself (optimisation and redesign) was driven by the Explore squad, but the underlying recommender model was built by the Perso squad. How should each squad articulate their value contribution?<br/><br/><strong>Example 2: One initiative cannibalising another</strong><br/>If we introduce a free delivery threshold in cart to drive AOV, it may hurt loyalty program sign-up rates. How do we balance and measure these trade-offs?",
      },

      {
        type: "contentBlock",
        label: "Open Question 4",
        title: "How should we balance statistical rigour with the need to move at pace?",
        content:
          "A critical tension exists between reaching statistical significance with adequate sample size and the business need to move quickly. <strong>In the previous framework, value was sometimes recognised in the grey zone</strong> without enough data or time to reach conclusive results, as a business decision. While pragmatic in the moment, this practice has hurt the experimentation practice's integrity and undermines confidence in our recommendations. How do we strike the right balance between speed and rigour without compromising trust?",
      },
      {
        type: "contentBlock",
        label: "Open Question 5",
        title: "Kmart sales vs 3P sales consideration",
        content:
          "How do we account for <strong>first-party vs. third-party seller dynamics</strong> in value attribution? Revenue lift may manifest differently across seller types, and our framework needs to address this nuance for fair and accurate measurement.",
      },
      {
        type: "contentBlock",
        label: "Open Question 6",
        title: "Do we have any other questions?",
        content:
          "As we reshape our value recognition framework, what additional considerations or challenges should we address? This is an opportunity to surface any outstanding concerns or edge cases that need clarity.",
      },
      {
        type: "quote",
        quote: "Moving forward requires alignment on principles, not just processes.",
        highlightWords: ["principles"],
        highlightColor: "#009758ff",
        isTextInverted: true,
      },
    ],
  },
  {
    title: "Coffee & latte art",
    entity: "Personal",
    type: "Science & art",
    thumbnail: "/images/others/coffee.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Upcoming soon",
        highlightWords: ["soon"],
        highlightColor: "#a86955ff",
        isTextInverted: true,
      },
    ],
  },

  {
    title: "Music & singing",
    entity: "Personal",
    type: "Science & art",
    thumbnail: "/images/others/sing.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Upcoming soon",
        highlightWords: ["soon"],
        highlightColor: "#874396ff",
        isTextInverted: true,
      },
    ],
  },
  {
    title: "Bouldering",
    entity: "Personal",
    type: "Science & art",
    thumbnail: "/images/others/climb.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Upcoming soon",
        highlightWords: ["soon"],
        highlightColor: "#009758ff",
        isTextInverted: true,
      },
    ],
  },
  {
    title: "Art & craft",
    entity: "Personal",
    type: "Science & art",
    thumbnail: "/images/others/rose.png",
    largeThumbnail: false,
    content: [
      {
        type: "quote",
        quote: "Upcoming soon",
        highlightWords: ["soon"],
        highlightColor: "#0aa2b6ff",
        isTextInverted: true,
      },
    ],
  },
];
export const aboutData = {
  title: "About",
  content: [
    {
      type: "contentBlock",
      title: "Hi, I'm Cherie. I'm a design technologist. ",
      content:
        "I wear a lot of hats. I’m the glue between design and technology, translating ideas between product managers, designers, engineers, and anyone else on the team. As projects shift, I shift too. Sometimes a designer, sometimes an engineer, sometimes a rapid prototyper, always a problem solver. I love digging into real customer and business challenges and turning ideas into living, testable experiences that bring a vision to life.",
      video: {
        source: "https://www.youtube.com/embed/tRplf5xGHIo",
        description: "Cherie & UX engineering at Monash.",
      },
    },
  ],
};
