import API from "./api"

let api = new API()

const getPortfolioProfit = async (year1, year2) => {
  try {
    const response = await api.get(`get-profit?year1=${year1}&year2=${year2}`)
    console.log(response)
    let { data } = response
    return data
  } catch (error) {
    return error
  }
}

export default {
  getPortfolioProfit
}
