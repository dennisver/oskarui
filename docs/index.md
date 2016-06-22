---
layout: default
---

# Oskar UI 

Oskar UI is a front-end CSS framework built with Stylus. We follow a 6px baseline grid for achieving a vertical rhythm on all block-level elements in the app.

## Buttons
Buttons are generated based on color variables, defined in button.styl. Custom buttons can be made by modifying the button-custom placeholder.

{% capture code %}
<a href="#" class="btn">Button</a>
<a href="#" class="btn btn-green">Button</a>
<a href="#" class="btn btn-line">Button</a>
<a href="#" class="btn btn-loading">Button</a>
{% endcapture %}
{% include code.html %}

{% capture code %}
<a href="#" class="btn btn-medium">Button</a>
<a href="#" class="btn btn-large btn-green">Button</a>
{% endcapture %}
{% include code.html %}

## Tabs
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellendus harum suscipit provident fuga quibusdam, omnis qui, sed iusto consectetur, earum a quas unde expedita quo totam placeat voluptatibus beatae.

{% capture code %}
<ul class="tab">
  <li><a href="#">Link</a></li>
  <li><a href="#" class="active">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}

{% capture code %}
<ul class="tab tab-line">
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#" class="active"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}

{% capture code %}
<ul class="tab tab-bottom-line">
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#" class="active"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
  <li><a href="#"><span>Link</span></a></li>
</ul>
{% endcapture %}
{% include code.html class-preview="pad-0" %}
