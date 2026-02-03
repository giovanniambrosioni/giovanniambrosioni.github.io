---
layout: page
title: Blog
permalink: /blog/
---

Welcome to my blog.

<div class="blog-list">
{% for post in site.posts %}
  <article class="blog-card">
    <h2 class="blog-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    <p class="blog-meta">
      {{ post.date | date: "%d %B %Y" }}
    </p>

    <p class="blog-excerpt">
      {{ post.excerpt }}
    </p>

    <a class="blog-readmore" href="{{ post.url | relative_url }}">
      Read more →
    </a>
  </article>
{% endfor %}
</div>
