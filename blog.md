---
layout: page
title: Blog
permalink: /blog/
---

Welcome to my blog.

<!-- Optional: list posts automatically -->
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
