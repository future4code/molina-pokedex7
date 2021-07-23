import React from 'react';

import { Container } from './styles'

export const Button = (props) => {
  return (
    <Container {...props}>{props.children}</Container>
  )
}