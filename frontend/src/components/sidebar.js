import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 0 1 230px;
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Sidebar
