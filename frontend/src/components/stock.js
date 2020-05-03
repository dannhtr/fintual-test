import React from "react"
import Trend from "react-trend"
import styled from "styled-components"
import { space } from "styled-system"
import theme from "./theme"

import Label from "./label"
import Heading from "./heading"

const Stock = styled.div`
  ${space};
`

const StockComp = ({ name, value, ...rest }) => {
  return (
    <Stock {...rest}>
      <Label fontSize='small'>{name}</Label>
      <Heading level={4} fontSize='medium'>
        $ {value}
      </Heading>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={500}
        autoDrawEasing='ease-out'
        data={[0, 8, 1, 9]}
        gradient={[theme.colors.primary, theme.colors.success]}
        radius={20}
        strokeWidth={8}
        strokeLinecap={"round"}
        width={180}
        height={60}
      />
    </Stock>
  )
}

export default StockComp
