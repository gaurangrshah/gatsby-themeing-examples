import merge from 'lodash.merge'
import { theme } from "gatsby-theme-styleguide"

export default merge({}, theme, {
  colors: {
    primary: 'blue'
  }
});
