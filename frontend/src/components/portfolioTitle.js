import React from "react"
import styled from "styled-components"
import { space } from "styled-system"

import Label from "./label"
import Heading from "./heading"

const PortfolioTitle = styled.div`
  ${space};
`

const PortfolioTitleComp = ({ title, name, ...rest }) => {
  return (
    <PortfolioTitle {...rest}>
      <Label fontSize='mini'>{title}</Label>
      <Heading level={2} fontSize='big'>
        {name}
      </Heading>
    </PortfolioTitle>
  )
}

export default PortfolioTitleComp
