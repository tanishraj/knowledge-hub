# CSS Selector Objective Type Questions

---

### 1. Which selector targets all `<p>` elements?

**A)** `p`  
**B)** `.p`  
**C)** `#p`  
**D)** `*p`

<details>
<summary>View Answer</summary>
A)

`p`

</details>

---

### 2. What does the `*` selector do?

**A)** Selects all elements  
**B)** Selects only `<div>` elements  
**C)** Selects only classes  
**D)** Selects only IDs

<details>
<summary>View Answer</summary>
A) Selects all elements
</details>

---

### 3. Which selector targets an element with class "highlight"?

**A)** `highlight`  
**B)** `.highlight`  
**C)** `#highlight`  
**D)** `*highlight`

<details>
<summary>View Answer</summary>
B)

`.highlight`

</details>

---

### 4. Which selector targets an element with ID "main"?

**A)** `main`  
**B)** `.main`  
**C)** `#main`  
**D)** `*main`

<details>
<summary>View Answer</summary>
C)

`#main`

</details>

---

### 5. What does the `div, p` selector do?

**A)** Selects all `<div>` and `<p>` elements  
**B)** Selects only `<div>` elements  
**C)** Selects only `<p>` elements  
**D)** Selects only `<div>` inside `<p>`

<details>
<summary>View Answer</summary>
A) Selects all `<div>` and `<p>` elements
</details>

---

### 6. Which selector selects a `<div>` inside a `<nav>`?

**A)** `div nav`  
**B)** `nav > div`  
**C)** `nav + div`  
**D)** `nav div`

<details>
<summary>View Answer</summary>
D)

`nav div`

</details>

---

### 7. What does `nav > div` select?

**A)** All `<div>` descendants of `<nav>`  
**B)** Only direct `<div>` children of `<nav>`  
**C)** All `<nav>` inside `<div>`  
**D)** All `<div>` siblings of `<nav>`

<details>
<summary>View Answer</summary>
B) Only direct `<div>` children of `<nav>`
</details>

---

### 8. What does the `+` combinator select?

**A)** All siblings  
**B)** The next sibling immediately after  
**C)** All children  
**D)** All parents

<details>
<summary>View Answer</summary>
B) The next sibling immediately after
</details>

---

### 9. What does the `~` combinator select?

**A)** All siblings after  
**B)** Only the next sibling  
**C)** All children  
**D)** All parents

<details>
<summary>View Answer</summary>
A) All siblings after
</details>

---

### 10. Which selector targets the first `<li>` inside a `<ul>`?

**A)** `ul li:first-child`  
**B)** `ul > li:first-child`  
**C)** `ul li:first`  
**D)** `ul:first-child`

<details>
<summary>View Answer</summary>
B)

`ul > li:first-child` (or A, but B is more direct)

</details>

> **Clarification:**  
> Both `ul li:first-child` and `ul > li:first-child` can work depending on nesting.  
> For direct children, `ul > li:first-child` is more precise.

---

### 11. Which selector targets the last `<li>` inside a `<ul>`?

**A)** `ul li:last`  
**B)** `ul li:last-child`  
**C)** `ul:last-child li`  
**D)** `ul li:last-of-type`

<details>
<summary>View Answer</summary>
B)

`ul li:last-child`

</details>

---

### 12. What does `input[type="text"]` select?

**A)** All `<input>` elements  
**B)** All `<input>` elements with `type="text"`  
**C)** All `<input>` elements with `type="button"`  
**D)** Only `<text>` elements

<details>
<summary>View Answer</summary>
B)

All `<input>` elements with `type="text"`

</details>

---

### 13. What does `a:hover` select?

**A)** All links  
**B)** Links being hovered over  
**C)** All elements  
**D)** Only visited links

<details>
<summary>View Answer</summary>
B) Links being hovered over
</details>

---

### 14. Which selector selects all `<a>` elements with a `title` attribute?

**A)** `a[title]`  
**B)** `a.title`  
**C)** `a > title`  
**D)** `a:title`

<details>
<summary>View Answer</summary>
A)

`a[title]`

</details>

---

### 15. What does `:focus` select?

**A)** Only `<input>` elements  
**B)** Any element with focus  
**C)** Only `<button>` elements  
**D)** Only `<div>` elements

<details>
<summary>View Answer</summary>
B) Any element with focus
</details>

---

### 16. Which selector selects every even `<li>`?

**A)** `li:odd`  
**B)** `li:even`  
**C)** `li:nth-child(even)`  
**D)** `li:2n`

<details>
<summary>View Answer</summary>
C)

`li:nth-child(even)`

</details>

---

### 17. What does `li:nth-child(3)` select?

**A)** Every third `<li>`  
**B)** The third `<li>` in every parent  
**C)** `li` elements with class "nth"  
**D)** `li` elements with child index 3

<details>
<summary>View Answer</summary>
B)

The third `<li>` in every parent

</details>

---

### 18. Which selector selects all `<p>` elements that are direct children of `<div>`?

**A)** `div p`  
**B)** `div > p`  
**C)** `div + p`  
**D)** `div ~ p`

<details>
<summary>View Answer</summary>
B)

`div > p`

</details>

---

### 19. What does `div + p` select?

**A)** `<p>` immediately after `<div>`  
**B)** `<p>` inside `<div>`  
**C)** `<div>` inside `<p>`  
**D)** `<div>` and `<p>`

<details>
<summary>View Answer</summary>
A)

`<p>` immediately after `<div>`

</details>

---

### 20. What does `div ~ p` select?

**A)** `<p>` inside `<div>`  
**B)** `<p>` immediately after `<div>`  
**C)** `<p>` siblings after `<div>`  
**D)** `<div>` and `<p>`

<details>
<summary>View Answer</summary>
C)

`<p>` siblings after `<div>`

</details>

---

### 21. Which selector selects all `<a>` elements with `href` starting with "https"?

**A)** `a[href^="https"]`  
**B)** `a[href*="https"]`  
**C)** `a[href$="https"]`  
**D)** `a[href="https"]`

<details>
<summary>View Answer</summary>
A)

`a[href^="https"]`

</details>

---

### 22. Which selector selects all `<a>` elements with `href` ending with ".pdf"?

**A)** `a[href^=".pdf"]`  
**B)** `a[href*=".pdf"]`  
**C)** `a[href$=".pdf"]`  
**D)** `a[href=".pdf"]`

<details>
<summary>View Answer</summary>
C)

`a[href$=".pdf"]`

</details>

---

### 23. Which selector selects all `<a>` elements with `href` containing "google"?

**A)** `a[href^="google"]`  
**B)** `a[href*="google"]`  
**C)** `a[href$="google"]`  
**D)** `a[href="google"]`

<details>
<summary>View Answer</summary>
B)

`a[href*="google"]`

</details>

---

### 24. What does `:not(.hidden)` select?

**A)** `<div>` with class "hidden"  
**B)** All elements except those with class "hidden"  
**C)** Only `<div>` elements  
**D)** Only `<span>` elements

<details>
<summary>View Answer</summary>
B) All elements except those with class "hidden"
</details>

---

### 25. Which selector selects all `<li>` elements except the first one?

**A)** `li:first-child`  
**B)** `li:not(:first-child)`  
**C)** `li:first-of-type`  
**D)** `li:last-child`

<details>
<summary>View Answer</summary>
B)

`li:not(:first-child)`

</details>

---

### 26. What does `:empty` select?

**A)** Elements with no children or text  
**B)** Elements with no class  
**C)** Elements with no ID  
**D)** Elements with no attributes

<details>
<summary>View Answer</summary>
A) Elements with no children or text
</details>

---

### 27. Which selector selects all `<p>` elements that are the first of their type among siblings?

**A)** `p:first-child`  
**B)** `p:first-of-type`  
**C)** `p:first`  
**D)** `p:first-sibling`

<details>
<summary>View Answer</summary>
B)

`p:first-of-type`

</details>

---

### 28. Which selector selects all `<li>` elements that are the last of their type among siblings?

**A)** `li:last-child`  
**B)** `li:last-of-type`  
**C)** `li:last`  
**D)** `li:last-sibling`

<details>
<summary>View Answer</summary>
B)

`li:last-of-type`

</details>

---

### 29. What does `:checked` select?

**A)** All checkboxes  
**B)** All radio buttons  
**C)** All checked checkboxes or radio buttons  
**D)** All selected options

<details>
<summary>View Answer</summary>
C) All checked checkboxes or radio buttons
</details>

---

### 30. Which selector selects all elements that are disabled?

**A)** `disabled`  
**B)** `[disabled]`  
**C)** `is-disabled`  
**D)** `inactive`

<details>
<summary>View Answer</summary>
B)

`[disabled]`

</details>

---

### 31. Which selector selects all `<a>` elements that have been visited?

**A)** `a:visited`  
**B)** `a:link`  
**C)** `a:active`  
**D)** `a:hover`

<details>
<summary>View Answer</summary>
A)

`a:visited`

</details>

---

### 32. Which selector selects all `<a>` elements that are currently being clicked?

**A)** `a:active`  
**B)** `a:click`  
**C)** `a:hover`  
**D)** `a:focus`

<details>
<summary>View Answer</summary>
A)

`a:active`

</details>

---

### 33. What does `:root` refer to in CSS?

**A)** The `<body>` element  
**B)** The `<html>` element  
**C)** The `<head>` element  
**D)** The `<div>` element

<details>
<summary>View Answer</summary>
B) The `<html>` element
</details>

---

### 34. What does `::before` do?

**A)** Adds content before an element  
**B)** Adds content after an element  
**C)** Adds a class before an element  
**D)** Adds an ID before an element

<details>
<summary>View Answer</summary>
A) Adds content before an element
</details>

---

### 35. What does `::after` do?

**A)** Adds content before an element  
**B)** Adds content after an element  
**C)** Adds a class after an element  
**D)** Adds an ID after an element

<details>
<summary>View Answer</summary>
B) Adds content after an element
</details>

---

### 36. Which selector selects all `<input>` elements except those with `type="submit"`?

**A)** `input:not([type="submit"])`  
**B)** `input[type!="submit"]`  
**C)** `input:not(:submit)`  
**D)** `input:not(.submit)`

<details>
<summary>View Answer</summary>
A)

`input:not([type="submit"])`

</details>

---

### 37. Which selector selects all `<p>` elements with a class starting with "text-"?

**A)** `p[class^="text-"]`  
**B)** `p[class*="text-"]`  
**C)** `p[class$="text-"]`  
**D)** `p[class="text-"]`

<details>
<summary>View Answer</summary>
A)

`p[class^="text-"]`

</details>

---

### 38. Which selector selects all elements with a class containing "error"?

**A)** `[class^="error"]`  
**B)** `[class*="error"]`  
**C)** `[class$="error"]`  
**D)** `[class="error"]`

<details>
<summary>View Answer</summary>
B)

`[class*="error"]`

</details>

---

### 39. What does `:target` select?

**A)** The element with the ID matching the current URL fragment  
**B)** The element with the class matching the current URL  
**C)** The element with the ID matching the current query  
**D)** The element with the class matching the current query

<details>
<summary>View Answer</summary>
A) The element with the ID matching the current URL fragment
</details>

---

### 40. Which selector selects all `<input>` elements with `type="checkbox"`?

**A)** `input[type="checkbox"]`  
**B)** `input:checkbox`  
**C)** `input.checkbox`  
**D)** `input[checkbox]`

<details>
<summary>View Answer</summary>
A)

`input[type="checkbox"]`

</details>

---

### 41. Which selector selects all `<img>` elements with an `alt` attribute?

**A)** `img[alt]`  
**B)** `img.alt`  
**C)** `img:alt`  
**D)** `img > alt`

<details>
<summary>View Answer</summary>
A)

`img[alt]`

</details>

---

### 42. What does `:required` select?

**A)** All `<input>` elements  
**B)** All `<input>` elements marked as required  
**C)** All `<select>` elements  
**D)** All `<textarea>` elements

<details>
<summary>View Answer</summary>
B) All `<input>` elements marked as required
</details>

---

### 43. Which selector selects all `<p>` elements that are the only child of their parent?

**A)** `p:only-child`  
**B)** `p:only-of-type`  
**C)** `p:single-child`  
**D)** `p:one-child`

<details>
<summary>View Answer</summary>
A)

`p:only-child`

</details>

---

### 44. Which selector selects all `<p>` elements that are the only `<p>` among their siblings?

**A)** `p:only-child`  
**B)** `p:only-of-type`  
**C)** `p:solo`  
**D)** `p:single`

<details>
<summary>View Answer</summary>
B)

`p:only-of-type`

</details>

---

### 45. What does `:enabled` select?

**A)** All enabled form elements  
**B)** All disabled form elements  
**C)** All `<div>` elements  
**D)** All `<span>` elements

<details>
<summary>View Answer</summary>
A) All enabled form elements
</details>

---

### 46. Which selector selects all `<li>` elements that are at least the third child?

**A)** `li:nth-child(3)`  
**B)** `li:nth-child(n+3)`  
**C)** `li:nth-child(3n)`  
**D)** `li:nth-child(-n+3)`

<details>
<summary>View Answer</summary>
B)

`li:nth-child(n+3)`

</details>

---

### 47. Which selector selects every third `<li>` element?

**A)** `li:nth-child(3)`  
**B)** `li:nth-child(n+3)`  
**C)** `li:nth-child(3n)`  
**D)** `li:nth-child(-n+3)`

<details>
<summary>View Answer</summary>
C)

`li:nth-child(3n)`

</details>

---

### 48. Which selector selects all `<input>` elements with `type="radio"`?

**A)** `input[type="radio"]`  
**B)** `input:radio`  
**C)** `input.radio`  
**D)** `input[radio]`

<details>
<summary>View Answer</summary>
A)

`input[type="radio"]`

</details>

---

### 49. Which selector selects all `<input>` elements that are not required?

**A)** `input:not(:required)`  
**B)** `input:not([required])`  
**C)** `input:not(.required)`  
**D)** `input:not(required)`

<details>
<summary>View Answer</summary>
A)

`input:not(:required)`

</details>

---

### 50. Which selector selects all `<p>` elements with a class ending with "-warning"?

**A)** `p[class^="-warning"]`  
**B)** `p[class*="-warning"]`  
**C)** `p[class$="-warning"]`  
**D)** `p[class="-warning"]`

<details>
<summary>View Answer</summary>
C)

`p[class$="-warning"]`

</details>
