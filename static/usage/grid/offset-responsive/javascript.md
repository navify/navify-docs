```html
<b>No offset for xs breakpoint, offset 1st column for sm and up</b>
<nav-grid>
  <nav-row>
    <nav-col offset-sm="2">1</nav-col>
    <nav-col>2</nav-col>
    <nav-col>3</nav-col>
    <nav-col>4</nav-col>
    <nav-col>5</nav-col>
  </nav-row>
</nav-grid>

<b>No offset for xs breakpoint, offset last 3 columns for md and up</b>
<nav-grid>
  <nav-row>
    <nav-col>1</nav-col>
    <nav-col offset-md="2">2</nav-col>
    <nav-col offset-md="2">3</nav-col>
    <nav-col offset-md="2">4</nav-col>
  </nav-row>
</nav-grid>

<b>Offset all columns by 6 for xs breakpoint, offset by 4 for md, offset by 2 for lg and up</b>
<nav-grid>
  <nav-row>
    <nav-col offset="6" offset-md="4" offset-lg="2">1</nav-col>
    <nav-col offset="6" offset-md="4" offset-lg="2">2</nav-col>
  </nav-row>
</nav-grid>

<style>
  nav-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
