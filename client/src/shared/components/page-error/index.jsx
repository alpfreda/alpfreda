import React from 'react'
import { ErrorPage, ErrorPageInner, ErrorBox, StyledIcon, Title } from './styles'

const PageError = () => (
  <ErrorPage>
    <ErrorPageInner>
      <ErrorBox>
        <StyledIcon type="bug" />
        <Title>There’s been a glitch…</Title>
        <p>
          {'We’re not quite sure what went wrong. Please contact us or try looking on our '}
          <a href="#">Help Center</a>
          {' if you need a hand.'}
        </p>
      </ErrorBox>
    </ErrorPageInner>
  </ErrorPage>
)

export default PageError