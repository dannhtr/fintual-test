import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.space.large}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  transition: all ease 0.5s;
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Main
