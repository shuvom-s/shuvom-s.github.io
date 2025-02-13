// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-measuring-entropy",
      
        title: "Measuring Entropy",
      
      description: "How would you measure the entropy of natural language?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/measuring-entropy/";
        
      },
    },{id: "post-overcoming-the-false-trade-off-in-genomics",
      
        title: "Overcoming the False Trade-off in Genomics",
      
      description: "Does privacy have to be at odds with collaboration in biomedical research?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/overcoming-the-false-tradeoff-in-genomics/";
        
      },
    },{id: "post-on-voting-paradoxes",
      
        title: "On Voting Paradoxes",
      
      description: "Are our voting systems paradoxical?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/on-voting-paradoxes/";
        
      },
    },{id: "post-democracy-and-the-central-limit-theorem",
      
        title: "Democracy and the Central Limit Theorem",
      
      description: "Is democracy just an average of preferences?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/democracy-and-the-central-limit-theorem/";
        
      },
    },{id: "post-a-statistical-analogy-for-ethics",
      
        title: "A Statistical Analogy for Ethics",
      
      description: "Reasoning about ethics via an analogy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/a-statistical-analogy-for-ethics/";
        
      },
    },{id: "post-ramblings-on-inference-and-doubt",
      
        title: "Ramblings on Inference and Doubt",
      
      description: "Is empiricism infallible?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/ramblings-on-inference-and-doubt/";
        
      },
    },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("shuvoms.bsky.social", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oFS9iRAAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/shuvom_s", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
