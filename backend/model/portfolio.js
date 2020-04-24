"use stric"

import Stocks from "./stocks"

class Portfolio {
  getProfit(year1, year2) {
    const stocks = new Stocks()
    const selectedStocks = []

    if (year1 > year2) {
      return console.log("El año 1 debe ser menor al año 2")
    } else {
      for (let i = year1; i <= year2; i++) {
        let stockPrices = stocks.getPrice(i)
        selectedStocks.push(stockPrices)
      }
    }
    const groupedStocks = this.groupByStockName(selectedStocks, "name")

    //return profit of portfolio between dates
    const stocksProfit = this.calculateProfit(groupedStocks)

    // return annualized return of portfolio between dates
    const annualizedReturns = this.calculateAnnualized(groupedStocks)

    return { stocksProfit, annualizedReturns }
  }

  groupByStockName(objectArray, property) {
    const flattened = objectArray.reduce((acc, val) => acc.concat(val), [])

    return flattened.reduce(function(total, obj) {
      let key = obj[property]
      if (!total[key]) {
        total[key] = []
      }

      let yearStockPrice = { price: obj.price }
      total[key].push(yearStockPrice)
      return total
    }, {})
  }

  calculateProfit(stocks) {
    const stocksProfit = []

    for (let stockName in stocks) {
      let totalProfit = stocks[stockName][`${stocks[stockName].length - 1}`].price - stocks[stockName][0].price
      let stockProfit = {
        name: stockName,
        profit: totalProfit
      }

      stocksProfit.push(stockProfit)
    }

    return stocksProfit
  }

  calculateAnnualized(stocks) {
    const annualizedReturns = []

    for (let stockName in stocks) {
      let finalTotal = 0
      let initialPrice = stocks[stockName][0].price

      for (let stock of stocks[stockName]) {
        finalTotal = finalTotal + stock.price
      }

      let calculatedTotal = (finalTotal / initialPrice - 1) / stocks[stockName].length
      let stockAnnualized = {
        name: stockName,
        return: calculatedTotal
      }

      annualizedReturns.push(stockAnnualized)
    }

    return annualizedReturns
  }
}

export default Portfolio
