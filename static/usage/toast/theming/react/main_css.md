```css
nav-toast.custom-toast {
  --background: #F4F4FA;
  --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  --color: #4b4a50;
}
    
nav-toast.custom-toast::part(message) {
  font-style: italic;
}

nav-toast.custom-toast::part(button) {
  border-left: 1px solid #d2d2d2;
  color: #030207;
  font-size: 15px;
}
```