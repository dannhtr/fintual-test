"use stric"

import Stocks from "./stocks"

class Portfolio {
  getProfit(year1, year2) {
    if (year1 > year2) {
      return "El año 1 debe ser menor al año 2"
    } else {
      const stocks = new Stocks()

      const selectedStocks = this.getStockPrices(year1, year2, stocks)
      const totalYears = this.calculateYears(year1, year2)
      const groupedStocks = this.groupByProperty(selectedStocks, "name")
      const groupedbByYear = this.groupByProperty(selectedStocks, "year")

      //return profit of portfolio between dates
      const stocksProfit = this.calculateProfit(groupedStocks)
      // return annualized return of portfolio between dates
      const annualizedReturns = this.calculateAnnualized(groupedbByYear, totalYears)

      return { stocksProfit, annualizedReturns }
    }
  }

  getStockPrices(year1, year2, stocks) {
    let selected = []

    for (let i = Number(year1); i <= Number(year2); i++) {
      let stockPrices = stocks.getPrice(i)
      selected.push(stockPrices)
    }

    return selected
  }

  calculateYears(year1, year2) {
    let years = 0
    for (let i = Number(year1); i <= Number(year2); i++) {
      years = years + 1
    }
    return years
  }

  groupByProperty(objectArray, property) {
    const flattened = objectArray.reduce((acc, val) => acc.concat(val), [])

    return flattened.reduce(function(total, obj) {
      let key = obj[property]
      if (!total[key]) {
        total[key] = []
      }

      let yearStockPrice = obj.price
      total[key].push(yearStockPrice)
      return total
    }, {})
  }

  calculateProfit(stocks) {
    const stocksProfit = []
    console.log(stocks)

    for (let stockName in stocks) {
      let totalProfit = stocks[stockName][`${stocks[stockName].length - 1}`] - stocks[stockName][0]
      let stockProfit = {
        name: stockName,
        profit: totalProfit,
        values: stocks[stockName]
      }

      stocksProfit.push(stockProfit)
    }

    return stocksProfit
  }

  calculatePortfolioMarketValue(portfolio) {
    let marketValue = 0
    for (let value of portfolio) {
      marketValue = marketValue + value
    }
    return marketValue
  }

  calculateAnnualized(yearsObj, totalYears) {
    let beginningPortfolioArr = yearsObj[Object.keys(yearsObj)[0]]
    let endingPortfolioArr = yearsObj[Object.keys(yearsObj)[Object.keys(yearsObj).length - 1]]

    //Beginning value
    let beginningValue = this.calculatePortfolioMarketValue(beginningPortfolioArr)
    //Ending value
    let endingValue = this.calculatePortfolioMarketValue(endingPortfolioArr)
    // OverallReturn
    let overallReturn = (endingValue - beginningValue) / beginningValue

    let calculatedAnnualReturn = (Math.pow(1 + overallReturn, 1 / totalYears) - 1) * 100

    return calculatedAnnualReturn
  }
}

export default Portfolio
