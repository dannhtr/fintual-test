import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Card
