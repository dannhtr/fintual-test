import React, { useEffect } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import theme from "./components/theme"
import "./App.css"

import PortfolioService from "./services/portfolio"
import { Container, Sidebar, Main, Card } from "./components"

const App = () => {
  const getProfit = async () => {
    try {
      const response = await PortfolioService.getPortfolioProfit(2012, 2019)
      console.log(response.data)
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
          <Card borderRadius='large' p='100px'>
            <p>Retorno Anualizado</p>
            <h2>3.8%</h2>
          </Card>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
