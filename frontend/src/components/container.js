import styled from "styled-components"
import { space, layout, color, border, flexbox } from "styled-system"

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: all ease 0.5s;
  ${space};
  ${layout};
  ${color};
  ${border};
  ${flexbox}
`

export default Container
