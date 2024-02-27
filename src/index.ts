import express, { Request, Response } from 'express'
import notebookRoutes from './routes/routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/notes', notebookRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

