import styled from "styled-components"
import { space, color, typography } from "styled-system"

const Label = styled.div`
  ${typography};
  ${space};
  ${color};
`

Label.defaultProps = {
  fontSize: "mini",
  color: "gray"
}

export default Label
