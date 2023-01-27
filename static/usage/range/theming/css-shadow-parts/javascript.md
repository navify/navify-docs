```html
<nav-range min="0" max="10" value="5" pin="true" ticks="true" snaps="true"></nav-range>

<style>
  nav-range::part(tick) {
    background: #a2d2ff;
  }

  nav-range::part(tick-active) {
    background: #bde0fe;
  }

  nav-range::part(pin) {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: #ffafcc;
    color: #fff;

    border-radius: 50%;
    transform: scale(1.01);

    top: -20px;

    min-width: 28px;
    height: 28px;
    transition: transform 120ms ease, background 120ms ease;
  }

  nav-range::part(pin)::before {
    content: none;
  }

  nav-range::part(knob) {
    background: #ffc8dd;
  }

  nav-range::part(bar) {
    background: #a2d2ff;
  }

  nav-range::part(bar-active) {
    background: #bde0fe;
  }
</style>
```
