/// <reference types="wite/client" />

declare module '*.kdu' {
  import type { DefineComponent } from 'kdu'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
