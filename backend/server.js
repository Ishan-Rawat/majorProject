import chalk from "chalk"
import cookieParser from "cookie-parser"
import "dotenv/config"
import express from "express"
import morgan from "morgan"

const app = express();

if(process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}
//next we will add middleware to allow express to parse incoming requests with JSON payload
app.use(express.json())
//middleware to parse incoming requests with URL encoded payloads
app.use(express.urlencoded({extended: false})) //extended false means that you cannot post a nested object

app.use(cookieParser())

//test route
app.get("/api/v1/test", (req, res) => {
    res.json({Hi: "Welocome to the Invoice App"})
})

const PORT = process.env.PORT || 1997

app.listen(PORT, () => {
    console.log(
        `${chalk.green.bold("✔")} 👍 Server running in ${chalk.yellow.bold(process.env.NODE_ENV)} mode on port ${chalk.blue.bold(PORT)}`
    );
})