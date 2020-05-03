import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.basic};
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Text
