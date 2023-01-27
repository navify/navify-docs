```html
<b>Column 1 has <code>push</code> set to <code>"4"</code> and column 2 has <code>pull</code> set to <code>"4"</code></b>
<nav-grid>
  <nav-row>
    <nav-col push="4">1</nav-col>
    <nav-col pull="4">2</nav-col>
    <nav-col>3</nav-col>
  </nav-row>
</nav-grid>

<b>Column 2 has <code>push</code> set to <code>"4"</code> and column 3 & 4 have <code>pull</code> set to <code>"2"</code></b>
<nav-grid>
  <nav-row>
    <nav-col>1</nav-col>
    <nav-col push="4">2</nav-col>
    <nav-col pull="2">3</nav-col>
    <nav-col pull="2">4</nav-col>
    <nav-col>5</nav-col>
    <nav-col>6</nav-col>
  </nav-row>
</nav-grid>

<b>Column 1 has <code>push</code> set to <code>"3"</code> and column 2 has <code>pull</code> set to <code>"9"</code></b>
<nav-grid>
  <nav-row>
    <nav-col size="9" push="3">1</nav-col>
    <nav-col size="3" pull="9">2</nav-col>
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
