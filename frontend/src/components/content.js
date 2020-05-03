import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  box-sizing: border-box;

  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Content
