"use strict"

import express from "express"
import portfolio from "./routes/portfolio"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", portfolio)

app.listen(5000, () => console.log("Server running on port 5000!"))
