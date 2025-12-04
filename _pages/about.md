---
layout: about
title: about
permalink: /
# subtitle: MIT CSAIL.

profile:
  align: right
  image: newme.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>📍 SF</p>


selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a PhD student at MIT CSAIL, advised by [Bonnie Berger](https://people.csail.mit.edu/bab/). I also collaborate with [Emma Pierson](https://people.eecs.berkeley.edu/~emmapierson/). Broadly, I am interested in evaluation, uncertainty estimation, and decision-making, often in the context of biomedical problems. To me, evaluation is a two-way street:

1. Develop and use new tools to evaluate human decision-makers and data. Some past and ongoing work includes evaluating privacy risks in "anonymous" genomic datasets [(link)](https://genome.cshlp.org/content/33/7/1101.full) and building Bayesian models of clinical decision-making [(link)](https://arxiv.org/abs/2511.11684).

2. Develop new metrics and methods to analyze ML systems themselves. Given thorny issues in our data — noisy labels, sparse labels, and so on — it is unsurprising that evaluations of performance are often unreliable. On this front, I've investigated how to use _unlabeled_ data to estimate performance of models [(link)](https://arxiv.org/html/2501.11866v1) and repurposed sequential hypothesis testing ideas to verify agent trajectories [(link)](https://arxiv.org/abs/2512.03109).

I previously interned at [Genentech](https://www.gene.com/), where I am built statistical methods for sequentially monitoring AI agents.

I am grateful for the support of the [Hertz Fellowship](https://www.hertzfellowship.org/) and the [NSF GRFP](https://www.nsfgrfp.org/). You can find my CV [here](/assets/pdf/cv_dec25.pdf). I enjoy writing, and you can find my blog posts [here](/blog). You can contact me at ssadhuka [at] mit [dot] edu.

## Recent Work

E-valuator: Reliable Agent Verifiers with Sequential Hypothesis Testing.
_Shuvom Sadhuka_, Drew Prinster, Clara Fannjiang, Gabriele Scalia, Aviv Regev, Hanchen Wang
[(Preprint)](https://arxiv.org/abs/2512.03109)

A Bayesian Model for Multi-stage Censoring
_Shuvom Sadhuka_, Sophia Lin, Bonnie Berger*, Emma Pierson*
[(ML4H 2025)](https://arxiv.org/abs/2511.11684)

Evaluating multiple models using labeled and unlabeled data
Divya Shanmugam*, _Shuvom_Sadhuka*_, Manish Raghavan, John Guttag, Bonnie Berger, Emma Pierson
[(NeurIPS 2025)](https://arxiv.org/abs/2501.11866)

## Non-research, non-writing projects
A small [website](https://songembeddings.netlify.app/) to visualize embeddings of song lyrics for my own Spotify. Also includes a sparse autoencoder to interpret the embeddings.

<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->
