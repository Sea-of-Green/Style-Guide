***

# Elements

Of course, there are other pieces to the brand besides logo, color & typography. Some of those things are, simply enough, referred to as design elements.

## Block Quotes

Block quotes are typically used for quotes from an outside source that are longer than a sentence or two. They can also be used for testimonials, product line descriptions, and anything else not authored by Sea of Green.

#### Standard Block Quote

```
<blockquote>
  <p>...</p>
</blockquote>
```

> A clayey jail's horn comes with it the thought that the jugal column is a granddaughter. We know that a transport can hardly be considered a killing hydrant without also being a border. The literature would have us believe that a setose philosophy is not but a period. A moneyed health without juices is truly a carp of fiercest romanians.

#### Block Quote with Citation

```
<blockquote>
  <p>...</p>
  <cite><a href="">...</a></cite>
</blockquote>
```

<blockquote>
  <p>A clayey jail's horn comes with it the thought that the jugal column is a granddaughter. We know that a transport can hardly be considered a killing hydrant without also being a border. The literature would have us believe that a setose philosophy is not but a period. A moneyed health without juices is truly a carp of fiercest romanians.</p>
  <cite><a href="http://metaphorpsum.com/">Metaphorpsum</a></cite>
</blockquote>

#### Question Block Quote

```
<blockquote class="blockquote--question">
  <p>...</p>
</blockquote>
```

<blockquote class="blockquote--question">
  <p>A clayey jail's horn comes with it the thought that the jugal column is a granddaughter. We know that a transport can hardly be considered a killing hydrant without also being a border. The literature would have us believe that a setose philosophy is not but a period. A moneyed health without juices is truly a carp of fiercest romanians.</p>
</blockquote>

#### Answer Block Quote

```
<blockquote class="blockquote--answer">
  <p>...</p>
</blockquote>
```

<blockquote class="blockquote--answer">
  <p>A clayey jail's horn comes with it the thought that the jugal column is a granddaughter. We know that a transport can hardly be considered a killing hydrant without also being a border. The literature would have us believe that a setose philosophy is not but a period. A moneyed health without juices is truly a carp of fiercest romanians.</p>
</blockquote>

#### Block Quote without Symbol

```
<blockquote class="blockquote--no-quote">
  <p>...</p>
</blockquote>
```

<blockquote class="blockquote--no-quote">
  <p>A clayey jail's horn comes with it the thought that the jugal column is a granddaughter. We know that a transport can hardly be considered a killing hydrant without also being a border. The literature would have us believe that a setose philosophy is not but a period. A moneyed health without juices is truly a carp of fiercest romanians.</p>
</blockquote>

## Buttons

Buttons are clickable elements *that perform an action*. For example, if you have a clickable element that spawns an alert dialog, you should use a button. If you have a clickable element that takes you to another page (i.e., a hyperlink), use an anchor (```<a>```) element. A notable exception is when a link is *also* a call-to-action, e.g. links for checkout or pagination.

#### Standard Button

```
<button class="btn">...</button>
```

<button class="btn">Button</button>

#### Reverse Button

```
<button class="btn btn--reverse">...</button>
```

<button class="btn--reverse">Button</button>

#### White Button

```
<button class="btn btn--white">...</button>
```

<button class="btn--white">Button</button>

#### Success Button

```
<button class="btn btn--success">...</button>
```

<button class="btn--success">Success</button>

#### Warning Button

```
<button class="btn btn--warning">...</button>
```

<button class="btn--warning">Warning</button>

#### Failure Button

```
<button class="btn btn--fail">...</button>
```

<button class="btn--fail">Failure</button>

#### Link as Button

```
<a class="btn" href="...">...</a>
```

<a class="btn" href="#">Link</a>

## Input Bar

The input bar should be used for any actionable user input, e.g. newsletter signup and search bars.

#### Standard Input Bar

```
<form class="input-bar">
  <input type="text" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar">
  <input type="text" placeholder="An Input Bar" />
  <button></button>
</form>

#### Search Bar

```
<form class="input-bar input-bar--search">
  <input type="search" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--search">
  <input type="search" placeholder="Type to Find a Product" />
  <button></button>
</form>

#### Email Bar

```
<form class="input-bar input-bar--email">
  <input type="email" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--email">
  <input type="email" placeholder="Sign Up For Our Newsletter" />
  <button></button>
</form>

#### Blue Input Bar

```
<form class="input-bar input-bar--blue">
  <input type="text" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--blue">
  <input type="text" placeholder="An Input Bar" />
  <button></button>
</form>

#### Success Input Bar

```
<form class="input-bar input-bar--success">
  <input type="text" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--success">
  <input type="text" placeholder="Success!" />
  <button></button>
</form>

#### Warning Input Bar

```
<form class="input-bar input-bar--warning">
  <input type="text" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--warning">
  <input type="text" placeholder="Warning" />
  <button></button>
</form>

#### Failure Input Bar

```
<form class="input-bar input-bar--fail">
  <input type="text" placeholder="..." />
  <button></button>
</form>
```

<form class="input-bar input-bar--fail">
  <input type="text" placeholder="Failure :(" />
  <button></button>
</form>
