import React from 'react'

import NormalizeStyles from './normalize-styles'
import BaseStyles from './base-styles'
import Routes from './Routes'

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
// import './fontStyles.css'

const App = () => (
  <>
    <NormalizeStyles />
    <BaseStyles />
    {/* <Toast /> */}
    <Routes />
  </>
)

export default App