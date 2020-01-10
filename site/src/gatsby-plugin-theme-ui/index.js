import merge from 'lodash.merge'
import { theme } from "gatsby-theme-styleguide/src/theme"

export default merge({}, theme, {
  colors: {
    primary: 'blue'
  }
});
