---
layout: default
---

# Buttons
Buttons are generated based on color variables, defined in button.styl. Custom buttons can be made by modifying the button-custom placeholder.

## Colors
{% capture code %}
<a href="#" class="btn btn-primary">Button</a>
<a href="#" class="btn btn-green">Button</a>
<a href="#" class="btn btn-font">Button</a>
<a href="#" class="btn btn-line">Button</a>
{% endcapture %}
{% include code.html %}
Button colors are specified at the top of the button.styl file. These are references to the $COLORS variable. If you want to add a new color, first add it to the global $COLORS variable so it's accessible throughout the rest of the code.

### Custom buttons
Custom buttons can be created within the `button-custom-colors()` mixin. If possible, you should use the `button-generate-color()` mixin to define the colors.

Use of borders on buttons is not recommended as they change the element's width/height. Instead use box-shadow.
{: .dim }

## States
{% capture code %}
<a href="#" class="btn btn-primary btn-loading">Button</a>
<a href="#" class="btn btn-primary btn-disabled ">Button</a> <!-- disabled -->
<a href="#" class="btn btn-green btn-loading">Button</a>
<a href="#" class="btn btn-font btn-loading">Button</a>
<a href="#" class="btn btn-line btn-loading">Button</a>
{% endcapture %}
{% include code.html %}
Buttons can have a `btn-loading` or `btn-disabled` state. You should add/remove these state-classes by using JS.
Loading buttons also have a slighty lower opacity. Disabled buttons have only half of their opacity.

## Sizes
{% capture code %}
<a href="#" class="btn btn-small">Button</a>
<a href="#" class="btn btn-medium">Button</a>
<a href="#" class="btn btn-large">Button</a>
{% endcapture %}
{% include code.html %}
