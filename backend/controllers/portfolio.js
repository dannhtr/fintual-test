"use strict"

import Portfolio from "../model/portfolio"

const getPortfolioProfit = async (req, res) => {
  const portfolio = new Portfolio()
  try {
    const response = portfolio.getProfit(req.query.year1, req.query.year2)
    return res.status(200).send({
      data: response
    })
  } catch (error) {
    console.log(error)
  }
}

export default {
  getPortfolioProfit
}
