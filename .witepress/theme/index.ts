import './styles/index.css'
import { h } from 'kdu'
import { WPTheme } from '@kdujs/theme'

export default Object.assign({}, WPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(WPTheme.Layout, null, {
      //
    })
  }
})
