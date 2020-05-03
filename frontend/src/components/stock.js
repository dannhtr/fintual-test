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

const StockComp = ({ name, profit, data, ...rest }) => {
  return (
    <Stock {...rest}>
      <Label fontSize='small'>{name}</Label>
      <Heading level={4} fontSize='medium' marginBottom='small'>
        $ {profit}
      </Heading>
      <Trend
        smooth
        autoDraw
        autoDrawDuration={500}
        autoDrawEasing='ease-out'
        data={data}
        gradient={[theme.colors.primary, theme.colors.success]}
        radius={20}
        strokeWidth={6}
        strokeLinecap={"round"}
        width={180}
        height={60}
      />
    </Stock>
  )
}

export default StockComp
