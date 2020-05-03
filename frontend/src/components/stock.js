import React from "react"
import Trend from "react-trend"
import styled from "styled-components"
import { space, layout } from "styled-system"
import theme from "./theme"

import Label from "./label"
import Heading from "./heading"

const Stock = styled.div`
  ${space};
  ${layout};
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
        gradient={[theme.colors.primary, theme.colors.info]}
        radius={20}
        strokeWidth={8}
        strokeLinecap={"round"}
        height={60}
      />
    </Stock>
  )
}

export default StockComp
