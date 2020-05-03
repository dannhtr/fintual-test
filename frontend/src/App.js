import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./components/theme"
import "./App.css"

import PortfolioService from "./services/portfolio"
import { Container, Sidebar, Main, Content, Card, DataItem, Section, PortfolioTitle, Stock } from "./components"

const App = () => {
  const [annualized, setAnnualized] = useState(0)
  const [profit, setProfit] = useState(0)
  const [stocks, setStocks] = useState(null)

  const getProfit = async () => {
    try {
      const { data } = await PortfolioService.getPortfolioProfit(2012, 2019)

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

  useEffect(() => {
    getProfit()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Sidebar />
        <Main>
          <Content>
            <PortfolioTitle title='Portafolio' name='Risky Norris A' marginBottom={60} />
            <Card borderRadius='large' p='100px'>
              <Section display='flex' marginBottom={50}>
                <DataItem name='Retorno Anualizado' value={annualized.toFixed(1)} marginRight='large' type='percent' />
                <DataItem name='Beneficio' value={profit} type='cash' />
              </Section>
              <Section display='flex' marginBottom='large' justifyContent='space-between'>
                <Stock name='Apple' value='70' />
                <Stock name='Amazon' value='-179' />
                <Stock name='Proter & Gamble' value='314' />
              </Section>
            </Card>
          </Content>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
