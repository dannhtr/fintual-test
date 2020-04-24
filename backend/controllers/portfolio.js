"use strict"

import Portfolio from "../model/portfolio"

const getPortfolioProfit = async (req, res) => {
  const portfolio = new Portfolio()
  try {
    const response = portfolio.getProfit(req.body.year1, req.body.year2)
    return res.status(200).send({
      response
    })
  } catch (error) {
    return res.status(500).send({
      data: error
    })
  }
}

export default {
  getPortfolioProfit
}
