```tsx
import React, { useEffect, useState } from 'react';
import { NavProgressBar } from '@navify/react';

function Example() {
  const [buffer, setBuffer] = useState(0.06);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuffer((prevBuffer) => prevBuffer + 0.06);
      setProgress((prevProgress) => prevProgress + 0.06);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (progress > 1) {
    setTimeout(() => {
      setBuffer(0.06);
      setProgress(0);
    }, 1000);
  }

  return (
    <NavProgressBar buffer={buffer} value={progress}></NavProgressBar>
  );
}
export default Example;
```
