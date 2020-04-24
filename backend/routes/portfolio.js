"use strict"

import express from "express"
import PortfolioCtrl from "../controllers/portfolio"

const api = express.Router()

api.get("/get-profit", PortfolioCtrl.getPortfolioProfit)

export default api
