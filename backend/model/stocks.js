"use stric"

import { stocks } from "../data/data.json"

class Stocks {
  constructor() {
    this.stocks = stocks
  }

  getPrice(year) {
    const yearlyStocks = []

    for (let stock of this.stocks) {
      for (let value of stock.values) {
        if (year === value.year) {
          let stockPrice = {
            name: stock.name,
            price: value.price,
            year: value.year
          }

          yearlyStocks.push(stockPrice)
        }
      }
    }

    return yearlyStocks
  }
}

export default Stocks
