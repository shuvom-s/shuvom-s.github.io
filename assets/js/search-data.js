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
        },{id: "post-reading-list",
      
        title: "Reading List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/reading-list/";
        
      },
    },{id: "post-measuring-entropy",
      
        title: "Measuring Entropy",
      
      description: "How would you measure the entropy of natural language?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/measuring-entropy/";
        
      },
    },{id: "post-fellowship-applications",
      
        title: "Fellowship Applications",
      
      description: "Advice on applying to fellowships",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advice-on-applying-to-fellowships/";
        
      },
    },{id: "post-a-running-list-of-writing-ideas",
      
        title: "A running list of writing ideas",
      
      description: "Things I want to write (and read) about",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/my-thoughts/";
        
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
    },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/shuvoms.bsky.social", "_blank");
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
