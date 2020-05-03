import styled from "styled-components"
import { space, layout, flexbox } from "styled-system"

const Select = styled.select`
  border-radius: ${({ theme }) => theme.radii.medium}px;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.gray};
  background-color: #fff;
  border: 0;
  height: 40px;
  width: 160px;
  padding: 5px 10px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;

  option:disabled {
    color: ${({ theme }) => theme.colors.disabled};
  }

  ${space};
  ${layout}
  ${flexbox};
`

export default Select
