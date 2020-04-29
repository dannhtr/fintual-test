"use strict"

import express from "express"
import cors from "cors"
import portfolio from "./routes/portfolio"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/api", portfolio)

app.listen(5000, () => console.log("Server running on port 5000!"))
