import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Container
