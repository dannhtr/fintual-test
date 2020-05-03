import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { space, layout } from "styled-system"

import Select from "./select"

const Filter = styled.div`
  display: flex;
  ${space};
  ${layout};
`
const Button = styled.button`
  border: 0;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.medium}px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 46px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.info};
  }

  ${space};
`

const FilterComp = ({ getProfit }) => {
  const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  const [firstYear, setFirstYear] = useState(2010)
  const [secondYear, setSecondYear] = useState(years[years.length - 1])

  const handleGetProfit = () => {
    getProfit(firstYear, secondYear)
  }

  useEffect(() => {
    getProfit(firstYear, secondYear)
  }, [])

  return (
    <Filter width={{ _: "100%", md: "auto" }}>
      <Select
        onChange={e => setFirstYear(e.target.value)}
        value={firstYear}
        marginRight={10}
        flex={{ _: "1 1 auto", md: "initial" }}
      >
        {years.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </Select>
      <Select
        onChange={e => setSecondYear(e.target.value)}
        value={secondYear}
        marginRight={10}
        flex={{ _: "1 1 auto", md: "initial" }}
      >
        {years.map((item, index) => {
          return (
            <option key={index} value={item} disabled={item <= firstYear ? true : null}>
              {item}
            </option>
          )
        })}
      </Select>
      <Button onClick={handleGetProfit} marginLeft={{ _: "auto", md: "initial" }}>
        <img src='/search.png' alt='image' />
      </Button>
    </Filter>
  )
}

export default FilterComp
