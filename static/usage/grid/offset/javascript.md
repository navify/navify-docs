```html
<b>Column 2 has <code>offset</code> set to <code>"3"</code></b>
<nav-grid>
  <nav-row>
    <nav-col>1</nav-col>
    <nav-col offset="3">2</nav-col>
    <nav-col>3</nav-col>
  </nav-row>
</nav-grid>

<b>Column 5 has <code>offset</code> set to <code>"2"</code></b>
<nav-grid>
  <nav-row>
    <nav-col>1</nav-col>
    <nav-col>2</nav-col>
    <nav-col>3</nav-col>
    <nav-col>4</nav-col>
    <nav-col offset="2">5</nav-col>
  </nav-row>
</nav-grid>

<b>Column 1 has <code>offset</code> set to <code>"4"</code></b>
<nav-grid>
  <nav-row>
    <nav-col size="2" offset="4">1</nav-col>
    <nav-col size="2">2</nav-col>
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
