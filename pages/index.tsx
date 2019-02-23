/// <reference types="styled-components/cssprop" />

import * as React from 'react'
import {css} from 'styled-components'

export default () => {
  return (
    <div css={css`
      color: red;
    `}>Hello world!!</div>
  )
}