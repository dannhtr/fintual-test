import styled from "styled-components"
import { space, layout, flexbox } from "styled-system"

const Sidebar = styled.aside`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 0 1 230px;
  transition: all ease 0.5s;
  padding: ${({ theme }) => theme.space.medium}px;
  ${space};
  ${layout};
  ${flexbox};
`

export default Sidebar
