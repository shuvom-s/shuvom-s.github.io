---
layout: post
title: Measuring Entropy
date: 2025-02-11 21:01:00
description: How would we measure the entropy of natural language?
tags: statistics language-models entropy genomics
categories: sample-posts
thumbnail: assets/img/9.jpg
---

Is the entropy of generations from a large language model an overestimate or underestimate of the true entropy of human language? How would one even measure the entropy of human language? The question itself is poorly defined, but in this post I’ll try to tackle what it might mean to measure the entropy of a language.

## A Basic Primer on Entropy and Previous Works
To start, let’s recall the definition of entropy (for discrete variables):

$$H(X) = -\sum_{x \in A} p(x) \log_2 p(x)$$

Intuitively, entropy measures the amount of uncertainty present in a random variable $X$. The highest entropy distribution over $X$ would be the uniform distribution, and the lowest entropy would be a point mass (with 0 entropy, since $\log(1) = 0$).

So if we want to measure the entropy of language, we’ll need to define two things: $A$, an alphabet we’ll measure over, and $p(x)$, a distribution over that alphabet. $A$ is fairly easy to define: the two natural approaches would be to let $A$ be characters (a, b, c, etc.) or words/tokens (the, ball, at, etc.). Let’s take $A$ to be words/tokens (like LLMs) for this post. The hard part is in estimating $p(x)$. We’ll call our estimate $q(x)$.

Most naive approaches for measuring entropy of a language will likely overestimate the true entropy. For instance, one approach to estimate $p(x)$ would be to just use the empirical frequency of all words, but this would certainly overestimate entropy, because sentences are not constructed as sequences of random samples from the universe of words (e.g., “I is ball you” is not a valid sentence). 

A natural extension might be to consider 2-grams instead of 1-grams. Let’s measure the entropy of $p(x_1,x_0)$, for instance. This, too, will be an overestimate, because there are times when conditioning on the previous word is insufficient. For instance, every 2-gram in the sentence “I am red meat for you are here or there” is valid, but the sentence is nonsensical.

In fact, the cross-entropy between any approximated model $q(x)$ like above and the true $p(x)$ will be an upper bound on the true entropy of $p(x)$. This is true mathematically because:

$$H(p,q) = H(p) + D_KL(p||q)$$

and KL divergence is non-negative. Cross entropy between $q(x)$ and $p(x)$ can be estimated empirically with text samples from a corpus (i.e., you get empirical samples from $p(x)$ and compare to your estimates $q(x)$).

I’ve been slightly abusing notation here; technically the entropy we want to measure here is over a sequence, i.e. we want to measure 

$$H(X) = -E_p \log P(x_0|x_{-1}, x_{-2}, …)$$

In other words, how much entropy is there in the distribution of the next word if I know all preceding words? These ideas and arguments have been thoroughly explored before, starting all the way from Claude Shannon himself in 1950 (shortly after he defined entropy in an earlier paper). I’d encourage you to read [his paper](https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf) — it’s not very long and full of interesting insights. 

The key insight is that if we let $F_n = H_n - H_{n-1}$, i.e. the conditional entropy of the n-gram model given the (n-1)-gram model, then we get that $H(X) = \lim_{n \rightarrow \infty} F_n$. In practice, of course, there are no $\inf$-grams, so Shannon calculates $F_n$ for small $n$ and tries to extrapolate the curve to predict the limit. Nowadays, we can probably easily compute 7-, 8-, and 9-grams on a standard laptop using a large corpus of text, which could give us a better sense of this limit. This also relates to a more general theorem known as the Shannon-McMillan-Breiman theorem, which states that for discrete-time finite-valued (both true here) stochastic processes:

$$H(X) \overset{p}{=} \lim_{n \rightarrow \infty} -\frac{1}{n} p(x_1, …, x_n)$$

There’s a catch to the theorem above that is worth noting. The theorem only holds for stationary ergodic processes (i.e., there exists a stationary distribution), but it’s clear that English (or more generally any language) is constantly evolving, as new words are added, old words become obsolete, and writing styles evolve.

## A Thorny Qualm
The above approximation is neat but something still feels wrong to me. In some sense, the entropy of English is lower bounded by the number of plausible ideas there are in the world. That is, there are two layers in language, each of which has its own entropy:

1. The generation of ideas in our heads, which we can denote $p(\text{idea})$. Different people think about different ideas, so there’s significant heterogeneity across our population in $p(\text{idea})$.

2. Expressing in words the abstract idea we’ve generated, which we can denote $p(x\|\\text{idea})$.

This might seem like a triviality, but I’d argue it’s important to break this down. The entropy of ideas is (probably) invariant across languages.  Thus, the real quantity of interest (to me) is (2) — how much entropy is there in the valid ways to express an idea. Combining (1) and (2) into one step and just measuring entropy of expressed sentences (as Shannon did) risks two issues:

1. Certain languages have become the _lingua franca_ of specific professions. For instance, one may accidentally observe more entropy in English than in Swahili, Italian, or Hindi, simply because English is the international language of scientific research, which is in the business of generating new ideas and hypotheses (hence likely higher entropy).

2. The translation between ideas and expressions in (2) is imperfect. Anyone who is a bilingual speaker is likely to be familiar with this. For instance, I often find it more difficult to express complex thoughts in Bengali (the language I speak with some family) than English (my native language).

Measuring $p(x\|\\text{idea})$ is hard, though, because there’s no clean notion of what an “idea” is. We can also argue about the correct resolution of an idea. For instance, are the sentences _I am eating the sandwich_, _I am devouring the sandwich_, and _I am nibbling on the sandwich_ all expressing the same idea? It depends on what resolution you’re looking at. All these sentences express some form of consuming a sandwich, but they differ in how vigorously that consumption is happening.

The space of ideas is (probably) continuous, but to make progress we need some way of mapping out that space. I had this conversation with a couple friends last year — how can we create an embedding space for ideas? I’m not sure, but I think people are approaching aspects of this question in the LLM world.

Let’s imagine we have a perfect idea embedding model. To measure entropy of $p(x\|\\text{idea})$, we could cluster (i.e., discretize) the space of ideas at some resolution and then measure $p(x\|\\text{idea})$, perhaps using some of the techniques above. There’s still a question of how to measure $p(x\|\\text{idea})$. One way might be to use a generative language model, by using some kind of decoder on the idea embeddings. This is not that far off; we can already measure the entropy of $p(x\|\\text{prompt})$ in most language models, many of which are decoder-only.

But $p(x\|\\text{idea})$ as measured by the outputs of some decoder is probably going to be an underestimate of the true entropy. There are a couple reasons for this:

1. Most language models are designed to be safe (i.e., outputs are not toxic, false, etc.), which necessarily constrains the output space of the approximation $q(x\|\\text{idea})$ to be more concentrated than the true $p(x\|\\text{idea})$. However, people often do express themselves in unsavory ways like swearing or being impolite that are still valid expressions of their ideas. To be clear, I am not advocating for unsafe language models, I’m just noting that LLM safety likely lowers the output entropy.

2. Language models probably interpolate and average the training data in some way, so wildly outlier $p(x\|\\text{idea})$ are unlikely to appear. I’m not sure increasing the sampling temperature would help significantly, though I’d be happy to see what results people have in this direction.


## Final Remarks and Connections to Other Domains

I’ve thought of variants of the above questions in human genetics as well. If we wanted to estimate the entropy of the human genome, a naive lower bound would be something like $\log_2(\text{total humans who have ever lived})$ and a naive upper bound would be $\log_2(4^{3 \text{billion}})$ since there are 3 billion base pairs in the human genome.

Both of these numbers are wildly off, though. The lower bound is clearly off because it changes every time someone is born (and it’ll be a long, long time before we observe two people with identical genomes).  The upper bound is off because most genes are under heavy evolutionary pressure, and a small string of mutations would kill the person.

Genomes come with the additional twist that unlike English, the N-gram model would need to have an enormously long context to begin to understand the scaling of entropy as a function of $N$. Still, though, I think it could be useful to look at the entropy of 1- to 10-grams in DNA sequences (or similar) and see what the trend looks like. Perhaps a future post.

Lastly, I want to note that I think the ideas point might have more salience. For instance, language models are often measured by their perplexities, with low perplexity indicating better performance. However, it’s unclear to me if higher perplexity is bad if the high perplexity comes from different generations that are semantically equivalent, even if the words are different (e.g., _The President of the United States is Donald Trump_ and _Trump is the American president_).