## CSS Specificity Objective Type Questions

---

### 1. What is CSS Specificity?

**A)** A way to count the number of CSS rules  
**B)** An algorithm to determine which CSS rule is most relevant to an element  
**C)** A method to reduce CSS file size  
**D)** A tool to debug CSS

<details>
<summary>View Answer</summary>
B) An algorithm to determine which CSS rule is most relevant to an element.
</details>

---

### 2. Which of the following selectors has the highest specificity?

**A)** `.class`  
**B)** `#id`  
**C)** `div`  
**D)** `*`

<details>
<summary>View Answer</summary>
B) `#id`.
</details>

---

### 3. What is the specificity of the selector `*`?

**A)** 0,0,0,0  
**B)** 0,0,0,1  
**C)** 0,0,1,0  
**D)** 1,0,0,0

<details>
<summary>View Answer</summary>
A) 0,0,0,0.
</details>

---

### 4. What is the specificity of the selector `li`?

**A)** 0,0,0,1  
**B)** 0,0,1,0  
**C)** 0,1,0,0  
**D)** 1,0,0,0

<details>
<summary>View Answer</summary>
A) 0,0,0,1.
</details>

---

### 5. What is the specificity of an inline style?

**A)** 0,0,0,0  
**B)** 0,0,0,1  
**C)** 0,0,1,0  
**D)** 1,0,0,0

<details>
<summary>View Answer</summary>
D) 1,0,0,0.
</details>

---

### 6. How is specificity calculated for the selector `div#content p`?

**A)** 1,0,1  
**B)** 1,0,2  
**C)** 1,1,1  
**D)** 0,1,2

<details>
<summary>View Answer</summary>
B) 1,0,2 (assuming modern notation: ID, class/attribute, type).
</details>

---

### 7. Which selector has higher specificity: `.menu li` or `ul li`?

**A)** `.menu li`  
**B)** `ul li`  
**C)** Both have the same  
**D)** Cannot be determined

<details>
<summary>View Answer</summary>
A) `.menu li` (class + type is higher than two types).
</details>

---

### 8. What happens if two selectors have the same specificity?

**A)** The first one wins  
**B)** The last one wins  
**C)** Both are applied  
**D)** Neither is applied

<details>
<summary>View Answer</summary>
B) The last one wins.
</details>

---

### 9. What is the specificity of the selector `p.abc`?

**A)** 0,1,1  
**B)** 0,1,0  
**C)** 0,0,1  
**D)** 1,0,0

<details>
<summary>View Answer</summary>
A) 0,1,1 (class + type).
</details>

---

### 10. What is the specificity of `div#main .content`?

**A)** 0,1,1  
**B)** 1,1,1  
**C)** 1,0,1  
**D)** 0,2,1

<details>
<summary>View Answer</summary>
B) 1,1,1 (ID + class + type).
</details>

---

### 11. Which of the following is least specific?

**A)** `#id`  
**B)** `.class`  
**C)** `tag`  
\*_D)`_`

<details>
<summary>View Answer</summary>
D) `*`.
</details>

---

### 12. What is the specificity of `[type="text"]`?

**A)** 0,1,0  
**B)** 0,0,1  
**C)** 1,0,0  
**D)** 0,0,0

<details>
<summary>View Answer</summary>
A) 0,1,0 (attribute selector counts as class/attribute).
</details>

---

### 13. What is the specificity of `li:first-child`?

**A)** 0,1,1  
**B)** 0,0,2  
**C)** 1,0,1  
**D)** 0,2,0

<details>
<summary>View Answer</summary>
A) 0,1,1 (type + pseudo-class).
</details>

---

### 14. What is the specificity of `:root #myApp input:required`?

**A)** 1,2,1  
**B)** 1,1,1  
**C)** 0,2,1  
**D)** 1,1,2

<details>
<summary>View Answer</summary>
A) 1,2,1 (ID + two pseudo-classes + type).
</details>

---

### 15. What is the specificity of `div[id="main"]`?

**A)** 0,1,1  
**B)** 1,0,1  
**C)** 0,1,0  
**D)** 1,0,0

<details>
<summary>View Answer</summary>
A) 0,1,1 (type + attribute).
</details>

---

### 16. What is the specificity of `ul > li`?

**A)** 0,0,2  
**B)** 0,0,1  
**C)** 0,1,1  
**D)** 1,0,0

<details>
<summary>View Answer</summary>
A) 0,0,2 (two type selectors).
</details>

---

### 17. What is the specificity of `a:hover`?

**A)** 0,1,1  
**B)** 0,0,2  
**C)** 1,0,1  
**D)** 0,2,0

<details>
<summary>View Answer</summary>
A) 0,1,1 (type + pseudo-class).
</details>

---

### 18. What is the specificity of `.nav .item`?

**A)** 0,2,0  
**B)** 0,1,0  
**C)** 0,0,2  
**D)** 1,0,0

<details>
<summary>View Answer</summary>
A) 0,2,0 (two class selectors).
</details>

---

### 19. What is the specificity of `#header .nav li.active`?

**A)** 1,2,1  
**B)** 1,1,2  
**C)** 0,2,1  
**D)** 1,0,2

<details>
<summary>View Answer</summary>
A) 1,2,1 (ID + two classes + type).
</details>

---

### 20. What is the specificity of `body #content .data p::first-line`?

**A)** 1,1,2,0  
**B)** 1,1,2,1  
**C)** 1,1,1,1  
**D)** 1,2,2,0

<details>
<summary>View Answer</summary>
B) 1,1,2,1 (ID + class + type + pseudo-element; if using four-part notation: 1,1,2,1).
</details>
