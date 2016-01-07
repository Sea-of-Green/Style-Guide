---
title: Product Description Formatting
slug: product-descriptions
---

Here are a few rules for formatting product descriptions. There is a little HTML, but don't worry! It's all very basic, and requires no programming knowledge whatsoever. It may be useful to use a special text editor (especially on Mac) like [Notepad++](https://notepad-plus-plus.org/) or [Atom](http://atom.io), but the default Notepad should be fine.

## General Rules

### Styling

All styling is done by the site. Your markup should include no style definitions, as it overrides current and future site-wide styling. Unfortunately, styles will occasionally be included when you copy and paste from other websites. You should remove these styles. An easy way to do this automatically is to paste the item from the other site into a plain-text input like [Pastebin](http://pastebin.com), and then re-copy the text to use in your description.

#### Before:

```
<p style="line-spacing:1.5">...</p>
```

#### After:

```
<p>...</p>
```

### Special Characters

Special characters are fine in your descriptions, however you might find that CS-Cart escapes them when you save the product. This just ensures that the symbol is viewable everywhere.

#### Before:

```
<p>Pure Blend® ...</p>
```

#### After:

```
<p>Pure Blend&reg; ...</p>
```

## Product Elements

### Product Line Description

If the product is part of a larger line of products, it should be formatted like this:

```
<blockquote class="blockquote--no-quote">
    <p>Product Line Description</p>
</blockquote>
```

The ```class``` attribute tells the browser to apply styles specific to product line descriptions to that element. Note that the ```<p>``` tag is optionial.


### Product Name

If the product in question has a longer name than the page presents (for example, 'Nutrient Name' vs. 'Nutrient Name 1-2-3'), has a subtitle, or is part of a product line, it's helpful to include that information in the description.

```
<h3>Product Title</h3>
<h4>Product Subtitle</h4>
<hr />
```

### Product Description

This one is very easy! Each paragraph of the description should be wrapped in a ```<p>``` tag.

```
<p>Description</p>
```

### Lists

Lists are slightly more complicated, if only because they contain more HTML elements by necessity. Here's how to format them:

```
<h4>List Label</h4>
<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
</ul>
```

### Sub-lists

Ocassionally, you may find yourself needing to nest a list, creating a sub-list. For example, for a the Nitrogen breakdown in a guaranteed analysis. The HTML is a little more verbose, but no more complicated than normal lists.

```
<h4>List Label</h4>
<ul>
    <li>List Item 1</li>
    <li>List Item 2
        <ul>
            <li>Sublist Item 1</li>
            <li>Sublist Item 1</li>
        </ul>
    </li>
    <li>List Item 3</li>
</ul>
```

### Testimonials

You may want to include testimonials from fellow employees or users of the product. The ```<blockquote>``` element is perfect for that. Pay special attention to the ```<cite>``` element.

```
<blockquote>
    <p>"Testimonial."</p>
    <cite>User, Qualification</cite>
</blockquote>
```

## Example Product

Here is the real description for Botanicare Pure Blend Pro Grow:

```
<blockquote class="blockquote--no-quote">
    The Pure Blend&reg; Pro Series includes all natural and organic-based, one part base nutrient formulas optimally blended for desired nutrition in each phase of growth.
</blockquote>
<h3>Pure Blend&reg; Pro Grow 3-2-4</h3>
<h4>Premium, Vegetative, Base Nutrient</h4>
<hr />
<p>
    Pure Blend&reg; Pro Grow is a powerful one part base nutrient. Containing natural sources of major, secondary, and trace minerals from land and sea essential to lush gardens in all stages of growth. This 100% soluble really shines in both hydroponic and soil applications. Use as a stand alone nutrient or use to supplement your super soil. Pure Blend&reg; Pro Grow is always environmentally friendly and the right choice for an alternative to traditional chemical fertilizers.
</p>
<h4>Features:</h4>
<ul>
    <li>Formulated for all hydroponics and soil applications</li>
    <li>Suitable for use with all substrates including coco fiber</li>
    <li>100% plant soluble organics for fast absorption</li>
    <li>Essential elements are not derived from harmful chemicals such as urea and ammonia nitrate</li>
    <li>Eliminates the plants exposure (and ultimately the consumer) to toxic heavy metals which can occur as contaminates in chemical fertilizers</li>
    <li>The organic components of Pure Blend&reg; Pro enhance uptake and utilization of plant nutrients</li>
    <li>Amplified Metabolic rate and capacity enables plants to produce fruits and vegetables with more minerals and vitamins</li>
</ul>
<h4>Guaranteed Analysis:</h4>
<ul>
    <li>Total Nitrogen (N): 3.0%
        <ul>
            <li>3.0% Water Soluble Nitrogen</li>
        </ul>
    </li>
    <li>Available Phosphate (P2O5): 2.0%</li>
    <li>Soluble Potash (K2O): 4.0%</li>
    <li>Calcium (Ca): 1.0%</li>
    <li>Magnesium (Mg): 0.5%
        <ul>
            <li>0.5% Water Soluble Magnesium (Mg)</li>
        </ul>
    </li>
</ul>
<h4>Also Contains Non-Plant Food Ingredient:</h4>
<ul>
  <li>0.20% Humic acid derived from leonardite</li>
</ul>
<h4>Derived From:</h4>
<ul>
    <li>Fish Meal</li>
    <li>Composted Seabird Guano</li>
    <li>Kelp</li>
    <li>Rock Phosphate</li>
    <li>Potassium Carbonate</li>
    <li>Magnesium Carbonate</li>
    <li>Calcium Carbonate</li>
</ul>
```
