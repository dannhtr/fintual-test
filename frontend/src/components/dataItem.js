import React from "react"
import styled from "styled-components"
import { space } from "styled-system"
import PropTypes from "prop-types"

import Label from "./label"
import Heading from "./heading"

const DataItem = styled.div`
  ${space};
`
const Value = ({ type, value }) => {
  if (type === "cash") {
    return <span>$ {value}</span>
  } else if (type === "percent") {
    return <span>{value}%</span>
  } else {
    return <span>0</span>
  }
}

const DataItemComp = ({ name, value, type, ...rest }) => {
  return (
    <DataItem {...rest}>
      <Label fontSize='small'>{name}</Label>
      <Heading level={1} fontSize='gigant'>
        <Value type={type} value={value} />
      </Heading>
    </DataItem>
  )
}

DataItemComp.propTypes = {
  type: PropTypes.oneOf(["percent", "cash"])
}

export default DataItemComp
