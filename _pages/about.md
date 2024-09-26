---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a third-year PhD student in [Computer Science](https://www.eecs.mit.edu/) at MIT CSAIL. I am advised by [Bonnie Berger](https://people.csail.mit.edu/bab/). I also collaborate closely with [Emma Pierson](https://www.cs.cornell.edu/~emmapierson/). I am broadly interested in machine learning and decision-making, especially in biomedical and healthcare problems. I am particularly interested in how we can make decisions in high-stakes healthcare settings in the real world, where datasets are noisy, sparsely labeled, and replete with biases. Particular problem areas of interest include:

* Sequential decision-making: how can we build models for chained sequences of human decisions when some outcomes are censored as a result of those decisions? For instance, one cannot observe a cancer diagnosis unless the individual passes through several rounds of screening.
* Uncertainty quantification and calibration: how can we quantify uncertainty over predictions in an efficient and correct way? Are there tradeoffs between calibration and optimal (downstream) decision-making in the clinic?
* Evaluations: how can we evaluate the best model for a task given constraints on resources (e.g. few labels)?

Prior to MIT, I was an undergraduate at Harvard, where I received an AB in Computer Science and Statistics. Towards the beginning of my PhD and end of undergrad, I worked on biomedical data privacy. Prior to that, I worked on statistical genetics and computational physics. I am fortunate to be supported by the [Hertz Foundation Fellowship](https://www.hertzfoundation.org/person/shuvom-sadhuka/) and [NSF Fellowship](https://www.nsfgrfp.org/). 

Outside of work, I enjoy hiking, biking, and rooting for New England sports teams. Hit me up if you're in Boston and want to join on weekend bike rides. I am always happy to chat, feel free to reach out via email at ssadhuka (at) mit (dot) edu.

## Publications (\* denotes equal contribution)
* **Privacy-Enhancing Technologies in Biomedical Data Science** \
H. Cho, D. Froelicher\*, N. Dokmai\*, A. Nandi\*, S. Sadhuka\*, M. Hong\*, B. Berger\
Annual Reviews of Biomedical Data Science 2024 [[Link]](https://www.annualreviews.org/content/journals/10.1146/annurev-biodatasci-120423-120107)

* **Accurate Evaluation of Transcriptomic Re-identification Risks Using Discriminative Sequence Models** \
Shuvom Sadhuka, Daniel Fridman, Bonnie Berger, Hyunghoon Cho\
Genome Research 2023 and oral presentation at Research in Computational Molecular Biology Conference (RECOMB) 2023 [[Link]](https://genome.cshlp.org/content/33/7/1101.full.pdf)


* **Topological Phononic Logic** [[Link]](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.128.015501)\
Harry Pirie, Shuvom Sadhuka, Jennifer Wang, Radu Andrei, Jennifer Hoffman\
Physical Review Letters 2022


* **Leveraging Supervised Learning for Functionally Informed Fine-Mapping of cis-eQTLs Identifies and Additional 20,913 Putative Causal eQTLs** [[Link]](https://www.nature.com/articles/s41467-021-23134-8)\
Qingbo Wang, David Kelley, Jacob Ulrisch, Masahiro Kanai, Shuvom Sadhuka, Ran Cui, Carlos Albors, Nathan Cheng, Yukinori Okada, Biobank Japan Project, François Aguet, Kristin Ardlie, Daniel MacArthur, Hilary Finucane\
Nature Communications 2021

## Other (Random) Writing
* **Fellowship advice** [[Link]](https://docs.google.com/document/d/1GDaX-GTaj1D1Bv1K1iRrilH5H8KSryyZIlSJPFcC5x0/edit?usp=sharing)
S. Sadhuka
Some advice on applying for graduate fellowships!

* **Overcoming the False Tradeoff in Genomics: Privacy and Collaboration** [[Link]](https://computing.mit.edu/wp-content/uploads/2023/06/Overcoming.pdf)
S. Sadhuka
Honorable Mention at MIT Envisioning the Future of Computing Essay Prize 2023

* **Does the new NBA Draft Lottery Systems Really Discourage Tanking?** [[Link]](https://harvardsportsanalysis.org/2019/06/does-the-new-nba-draft-lottery-system-really-discourage-tanking/)
S. Sadhuka
Harvard Sports Analysis Collective 2019



<!-- ## Teaching
* Teaching Assistant for [CS 124](https://toc.seas.harvard.edu/links/cs-124-data-structures-and-algorithms): Data Structures and Algorithms, taught by Prof. Michael Mitzenmacher and Dr. Adam Hesterberg, Harvard, Spring 2021 and Spring 2022
* Teaching Asssistant for MCB 112: Biological Data Analysis, taught by Prof. Sean Eddy, Harvard, Fall 2020
* Teaching Assistant for Stat 111: Introduction to Statistical Inference, taught by Prof. Joe Blitzstein and Prof. Neil Shepard, Harvard, Spring 2020
* Teaching Assistant for Stat 110: Introduction to Probability, taught by Prof. Joe Blitzstein, Harvard, Fall 2019

## Leadership and Outreach
I am committed to both seeing my work directly impact others and helping others enter and accelerate in computer science and biology.
* [Non-resident Tutor](https://mather.harvard.edu/people/shuvom-sadhuka), Mather House (Harvard University)\
I am a fellowships tutor for Mather House. In this role, I assist students applying to fellowships
and graduate programs. I help strategize essays and personal statements for a variety of
fellowships (Rhodes, Marshall, Hertz, Soros, etc.). I also hold office hours and study breaks.
* Mentor, [MIT EECS GAAP](https://eecs-gaap.mit.edu/)\
I mentor students applying to the MIT EECS PhD program. I assist with crafting and strategizing personal essays, interviews, etc.
* Organizer and Founder, [CS Reading Group](https://csreadinggroup.github.io/)\
Over COVID, I organized a remote weekly reading groups for undergraduates from multiple universities. We read papers across many CS disciplines: ML, systems, data structures, etc. We also invited and organized speakers from Stanford, the Broad Institute, Google, etc.
* Co-captain, Harvard College Bhangra\
I was a co-captain of Harvard’s only competitive South Asian dance team for two years. I designed choreo, led collaborations, coordinated practice and performance logistics, managed funding, etc. -->


<!---
A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
-->

