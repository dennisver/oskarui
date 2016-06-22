---
layout: default
---

# Tabs
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quod ut alias aut eos, aliquam in laboriosam voluptates iste voluptate! Similique aliquam iure sequi ullam voluptas libero esse dolorum perspiciatis.

## Default tabs
{% capture code %}
<ul class="tab">
  <li><a href="#">Link</a></li>
  <li><a href="#" class="active">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}

## Line tabs
{% capture code %}
<ul class="tab tab-line">
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#" class="active"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}

## Bottom line tabs
{% capture code %}
<ul class="tab tab-bottom-line">
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#" class="active"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}
