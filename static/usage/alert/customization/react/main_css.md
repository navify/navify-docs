```css
nav-alert.custom-alert {
  --backdrop-opacity: 0.7;
}

.custom-alert .alert-button-group {
  padding: 8px;
}

button.alert-button.alert-button-confirm {
  background-color: var(--nav-color-success);
  color: var(--nav-color-success-contrast);
}

.md button.alert-button.alert-button-confirm {
  border-radius: 4px;
}

.ios .custom-alert button.alert-button {
  border: 0.55px solid rgba(var(--nav-text-color-rgb, 0, 0, 0), 0.2)
}

.ios button.alert-button.alert-button-cancel {
  border-right: 0;
  border-bottom-left-radius: 13px;
  border-top-left-radius: 13px;
}

.ios button.alert-button.alert-button-confirm {
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
}
```