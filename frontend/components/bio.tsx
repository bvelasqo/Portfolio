import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  text-align: justify;
  padding-right: 1em;
  padding-bottom: 0.6em;
  padding-top: 0.6em;
  hyphens: auto;
  border-left: 2px solid ${props => { return props._hover?.bgColor }};

  &:first-of-type {
    margin-top: 8px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  transition: background-color 1s;

  &:hover {
    background-color: ${props => { return props._hover?.bgColor }};
    // background-color: rgba(57,57,0,0.8);
  }

`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  margin-left: 4px;
`