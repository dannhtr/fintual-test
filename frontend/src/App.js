import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"

import PortfolioService from "./services/portfolio"

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
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
