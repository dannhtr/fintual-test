import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./components/theme"
import "./App.css"

import PortfolioService from "./services/portfolio"
import { Container, Sidebar, Main, Content, Card, DataItem, Section, PortfolioTitle, Stock, Filter } from "./components"

const App = () => {
  const [annualized, setAnnualized] = useState(0)
  const [profit, setProfit] = useState(0)
  const [stocks, setStocks] = useState(null)

  const getProfit = async (year1, year2) => {
    try {
      const { data } = await PortfolioService.getPortfolioProfit(year1, year2)

      let profit = 0
      for (let stock of data.stocksProfit) {
        profit = profit + stock.profit
      }
      setProfit(profit)
      setAnnualized(data.annualizedReturns)
      setStocks(data.stocksProfit)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container flexDirection={{ _: "column", md: "row" }} display={{ _: "initial", md: "flex" }}>
        <Sidebar
          height={{ _: "60px", md: "initial" }}
          alignItems={{ _: "center", md: "start" }}
          justifyContent={{ _: "initial", md: "center" }}
          paddingTop={{ _: "20px", md: "60px" }}
        >
          <img src='./fintual-logo-white.png' alt='fintual' width={114} />
        </Sidebar>
        <Main>
          <Content>
            <Section
              display='flex'
              flexDirection={{ _: "column", md: "row" }}
              justifyContent='space-between'
              alignItems={{ _: "flex-start", md: "flex-end" }}
              marginBottom={40}
            >
              <PortfolioTitle title='Portafolio' name='Risky Norris A' />
              <Filter getProfit={getProfit} />
            </Section>

            <Card borderRadius='large' p={{ _: "25px", md: "50px", lg: "100px" }}>
              <Section display='flex' marginBottom={50} flexDirection={{ _: "column", md: "row" }}>
                <DataItem
                  name='Retorno Anualizado'
                  value={annualized.toFixed(1)}
                  marginRight={50}
                  marginBottom={25}
                  type='percent'
                />
                <DataItem name='Beneficio' value={profit} type='cash' />
              </Section>
              <Section
                display='flex'
                flexDirection={{ _: "column", md: "row" }}
                marginBottom='large'
                justifyContent='space-between'
              >
                {stocks
                  ? stocks.map((item, index) => {
                      return (
                        <Stock
                          key={index}
                          name={item.name}
                          profit={item.profit}
                          data={item.values}
                          marginBottom={25}
                          width={{ _: "100%", md: "30%" }}
                        />
                      )
                    })
                  : null}
              </Section>
            </Card>
          </Content>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
