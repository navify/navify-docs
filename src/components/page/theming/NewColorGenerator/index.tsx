import React from 'react';
import CodeColor from '@components/page/theming/CodeColor';
import { useState } from 'react';
import { generateColor } from '../_utils/index';
import { useEffect } from 'react';

import styles from './index.module.scss';
import InputWrapper from '../InputWrapper';
import ColorInput from '../ColorInput';
import ColorDot from '../ColorDot';

export default function ColorGenerator() {
  const [name, setName] = useState('New');
  const [value, setValue] = useState('#69bb7b');
  const [color, setColor] = useState(generateColor(value));

  useEffect(() => {
    setColor(generateColor(value));
  }, [value]);

  const nameLower = name.trim().toLowerCase();
  const { value: colorValue, valueRgb, contrast, contrastRgb, tint, shade } = color;

  return (
    <div className={styles.newColorGenerator}>
      <div className={styles.top}>
        <div className={styles.top__start}>
          <ColorDot color={value} />
          <InputWrapper>
            <input onChange={({ target }) => setName(target.value)} value={name} />
          </InputWrapper>
        </div>
        <ColorInput color={value} setColor={setValue} className={styles.top__end} />
      </div>
      <pre className={styles.codePre}>
        <code>
          :root {'{'}
          {'\n'}
          {'\t'}--nav-color-{nameLower}: <CodeColor color={colorValue}>{colorValue}</CodeColor>;{'\n'}
          {'\t'}--nav-color-{nameLower}-rgb: <CodeColor color={colorValue}>{valueRgb}</CodeColor>;{'\n'}
          {'\t'}--nav-color-{nameLower}-contrast: <CodeColor color={contrast}>{contrast}</CodeColor>;{'\n'}
          {'\t'}--nav-color-{nameLower}-contrast-rgb: <CodeColor color={contrast}>{contrastRgb}</CodeColor>;{'\n'}
          {'\t'}--nav-color-{nameLower}-shade: <CodeColor color={shade}>{shade}</CodeColor>;{'\n'}
          {'\t'}--nav-color-{nameLower}-tint: <CodeColor color={tint}>{tint}</CodeColor>;{'\n'}
          {'}'}
          {'\n'}
          {'\n'}
          .nav-color-{nameLower} {'{'}
          {'\n'}
          {'\t'}--nav-color-base: var(--nav-color-{nameLower});{'\n'}
          {'\t'}--nav-color-base-rgb: var(--nav-color-{nameLower}-rgb);{'\n'}
          {'\t'}--nav-color-contrast: var(--nav-color-{nameLower}-contrast);{'\n'}
          {'\t'}--nav-color-contrast-rgb: var(--nav-color-{nameLower}-contrast-rgb);{'\n'}
          {'\t'}--nav-color-shade: var(--nav-color-{nameLower}-shade);{'\n'}
          {'\t'}--nav-color-tint: var(--nav-color-{nameLower}-tint);{'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  );
}
