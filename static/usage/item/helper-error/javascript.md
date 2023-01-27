```html
<nav-item fill="solid">
  <nav-label position="floating">Email</nav-label>
  <nav-input type="email"></nav-input>
  <nav-note slot="helper">Enter a valid email</nav-note>
  <nav-note slot="error">Invalid email</nav-note>
</nav-item>

<script>
  const item = document.querySelector('nav-item');
  const input = item.querySelector('nav-input');

  input.addEventListener('navInput', (ev) => validate(ev));
  input.addEventListener('navBlur', () => markTouched());

  const validateEmail = (email) => {
    return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
  };

  const validate = (ev) => {
    const value = ev.target.value;

    item.classList.remove('nav-valid');
    item.classList.remove('nav-invalid');

    if (value === "") return;

    validateEmail(value) ? item.classList.add('nav-valid') : item.classList.add('nav-invalid');
  }

  const markTouched = () => {
    item.classList.add('nav-touched');
  }
</script>
```
