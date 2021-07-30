---
layout: archive
title: "Bits & Pieces"
permalink: /bits-and-pieces/
author_profile: false
---

{% include base_path %}

Here I will compile bits and pieces of thoughts, readings, sounds and noises. Currently, I am following two projects.

1. what is a project (17th century projectors to the 21st century construction apparatus)

2. contemporary assemblages of environmental noise

{% for post in site.posts %}
  {% include archive-bit.html %}
{% endfor %}