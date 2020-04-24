"use strict"

import Portfolio from "../model/portfolio"

const getPortfolioProfit = async (req, res) => {
  console.log(req)
  const portfolio = new Portfolio()
  try {
    const response = portfolio.getProfit(req.query.year1, req.query.year2)
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
