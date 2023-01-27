```css
nav-accordion {
  margin: 0 auto;
}

nav-accordion.accordion-expanding,
nav-accordion.accordion-expanded {
  width: calc(100% - 32px);

  margin: 16px auto;
}

nav-accordion.accordion-collapsing nav-item[slot="header"],
nav-accordion.accordion-collapsed nav-item[slot="header"] {
  --background: var(--nav-color-light);
  --color: var(--nav-color-light-contrast);
}

nav-accordion.accordion-expanding nav-item[slot="header"],
nav-accordion.accordion-expanded nav-item[slot="header"] {
  --background: var(--nav-color-primary);
  --color: var(--nav-color-primary-contrast);
}
```